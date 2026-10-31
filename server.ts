import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);
const STUDIO_NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'rehan62088@gmail.com';
const STUDIO_WHATSAPP_NUMBER = '916206242488';

// Body Parser Middleware with size limiter
app.use(express.json({ limit: '256kb' }));
app.use(express.urlencoded({ extended: true, limit: '256kb' }));

// Security Headers Middleware
app.use((_req: Request, res: Response, next: NextFunction) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

// Rate Limiting (In-Memory Sliding Window: max 3 submissions per IP per 10 minutes)
interface RateLimitEntry {
  count: number;
  firstRequestTime: number;
}
const rateLimitMap = new Map<string, RateLimitEntry>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 3;

// Periodic cleanup of stale rate-limit records
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap.entries()) {
    if (now - entry.firstRequestTime > RATE_LIMIT_WINDOW_MS) {
      rateLimitMap.delete(ip);
    }
  }
}, 5 * 60 * 1000);

// Input Sanitization helper to neutralize XSS
function sanitizeInput(str: unknown): string {
  if (typeof str !== 'string') return '';
  return str
    .trim()
    .replace(/[<>]/g, '') // strip < and >
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .slice(0, 5000);
}

// Regex validators
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// Accepts standard 10-digit Indian numbers (+91 XXXXXXXXXX, 0XXXXXXXXXX, or raw 10 digits) as well as international formats
const PHONE_REGEX = /^(\+?[1-9]\d{0,3}[ -]?)?(\(?\d{2,5}\)?[ -]?)?[\d -]{7,15}$/;

// Persistence Store (Local JSON file fallback)
const DATA_DIR = path.resolve(__dirname, 'data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(LEADS_FILE)) {
    fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2), 'utf-8');
  }
}

function saveLeadLocally(leadData: Record<string, unknown>) {
  try {
    ensureDataDir();
    const existing = JSON.parse(fs.readFileSync(LEADS_FILE, 'utf-8'));
    existing.unshift(leadData);
    fs.writeFileSync(LEADS_FILE, JSON.stringify(existing.slice(0, 200), null, 2), 'utf-8');
  } catch (err) {
    console.error('[Storage Error] Could not write lead to local store:', err);
  }
}

// Health check endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    studio: 'AUVYQ Digital',
    service: 'Lead Capture & Transmission Engine',
    timestamp: new Date().toISOString()
  });
});

// Lead Submission API
app.post('/api/inquire', async (req: Request, res: Response) => {
  const clientIp = (req.headers['x-forwarded-for'] as string)?.split(',')[0].trim() || req.socket.remoteAddress || 'unknown';

  // 1. Honeypot Verification: Trap automated spam bots
  const honeypot = req.body.company_website_trap || req.body._honey || req.body.hp_check;
  if (honeypot && String(honeypot).trim().length > 0) {
    // Silently succeed for bots so they don't retry or adapt
    console.warn(`[Security Alert] Bot trapped by honeypot from IP ${clientIp}`);
    return res.status(200).json({
      success: true,
      message: 'Your inquiry has been received. The studio will reach out via WhatsApp/email shortly.',
      leadId: `AUV-${Date.now().toString(36).toUpperCase()}`
    });
  }

  // 2. Rate Limiting Check
  const now = Date.now();
  const clientLimit = rateLimitMap.get(clientIp);

  if (clientLimit) {
    if (now - clientLimit.firstRequestTime < RATE_LIMIT_WINDOW_MS) {
      if (clientLimit.count >= MAX_REQUESTS_PER_WINDOW) {
        console.warn(`[Rate Limit Exceeded] IP ${clientIp} exceeded ${MAX_REQUESTS_PER_WINDOW} submissions`);
        return res.status(429).json({
          error: 'Rate limit exceeded',
          message: 'Too many submissions from this connection. Please wait 10 minutes or reach out directly on WhatsApp (+91 6206242488).'
        });
      }
      clientLimit.count += 1;
    } else {
      rateLimitMap.set(clientIp, { count: 1, firstRequestTime: now });
    }
  } else {
    rateLimitMap.set(clientIp, { count: 1, firstRequestTime: now });
  }

  // 3. Extract & Sanitize Inputs
  const name = sanitizeInput(req.body.name);
  const email = sanitizeInput(req.body.email).toLowerCase();
  const phone = sanitizeInput(req.body.phone);
  const businessName = sanitizeInput(req.body.businessName);
  const businessType = sanitizeInput(req.body.businessType) || 'Commercial Business';
  const serviceNeeded = sanitizeInput(req.body.serviceNeeded) || 'Website Development';
  const selectedPackage = sanitizeInput(req.body.selectedPackage) || 'Professional Package (₹20,000)';
  const budget = sanitizeInput(req.body.budget) || 'Standard Scope';
  const timeline = sanitizeInput(req.body.timeline) || '1–2 Weeks';
  const details = sanitizeInput(req.body.details);
  const referenceUrl = sanitizeInput(req.body.referenceUrl);

  // 4. Strict Server-Side Validation
  const errors: Record<string, string> = {};

  if (!name || name.length < 2) {
    errors.name = 'Full name must contain at least 2 characters';
  }

  if (!email || !EMAIL_REGEX.test(email)) {
    errors.email = 'Please provide a valid business or personal email address';
  }

  if (phone) {
    const rawDigits = phone.replace(/\D/g, '');
    if (rawDigits.length < 10 || !PHONE_REGEX.test(phone)) {
      errors.phone = 'Please provide a valid 10-digit WhatsApp or phone number';
    }
  } else {
    errors.phone = 'WhatsApp phone number is required for dispatch';
  }

  if (!businessName || businessName.length < 2) {
    errors.businessName = 'Please provide your business, hotel, or entity name';
  }

  if (!details || details.length < 10) {
    errors.details = 'Please describe your project requirements in at least 10 characters';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      error: 'Validation failed',
      validationErrors: errors
    });
  }

  // 5. Generate Lead Dossier Record
  const leadId = `AUV-${Date.now().toString(36).toUpperCase()}`;
  const timestamp = new Date().toISOString();

  const formattedBrief = `AUVYQ DIGITAL · NEW COMMISSION INQUIRY
========================================
Lead ID: ${leadId}
Timestamp: ${timestamp}
Client: ${name}
Email: ${email}
WhatsApp/Phone: ${phone}
Business Entity: ${businessName}
Sector: ${businessType}
Discipline: ${serviceNeeded}
Tier / Package: ${selectedPackage}
Budget Allocation: ${budget}
Timeline: ${timeline}
Reference URL: ${referenceUrl || 'None provided'}

PROJECT REQUIREMENTS:
${details}
========================================
Studio Direct Desk: ${STUDIO_NOTIFICATION_EMAIL} | +${STUDIO_WHATSAPP_NUMBER}`;

  const prefilledWhatsAppUrl = `https://wa.me/${STUDIO_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi AUVYQ Digital, I've submitted a project brief [${leadId}]:\n\nClient: ${name}\nBusiness: ${businessName}\nService: ${serviceNeeded}\nPackage: ${selectedPackage}\nPhone: ${phone}\n\nBrief: ${details.slice(0, 160)}${details.length > 160 ? '...' : ''}`
  )}`;

  const leadRecord = {
    leadId,
    timestamp,
    clientIp,
    name,
    email,
    phone,
    businessName,
    businessType,
    serviceNeeded,
    selectedPackage,
    budget,
    timeline,
    details,
    referenceUrl,
    whatsappUrl: prefilledWhatsAppUrl,
    status: 'new'
  };

  // 6. Save locally
  saveLeadLocally(leadRecord);

  // 7. Dispatch to Webhooks (Google Sheets / Make / Zapier) if configured
  const webhookUrl = process.env.LEAD_WEBHOOK_URL || process.env.GOOGLE_SHEETS_WEBHOOK;
  let webhookDispatched = false;

  if (webhookUrl && webhookUrl.startsWith('http')) {
    try {
      const webhookResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadRecord),
        signal: AbortSignal.timeout(6000)
      });
      webhookDispatched = webhookResponse.ok;
      console.log(`[Webhook Dispatch] Status: ${webhookResponse.status}`);
    } catch (whErr) {
      console.error('[Webhook Dispatch Error] Could not forward to external webhook:', whErr);
    }
  }

  // 8. Log internal transmission summary
  console.log(`\n----------------------------------------\n[NEW LEAD RECORDED] [${leadId}]\n${formattedBrief}\n----------------------------------------\n`);

  return res.status(200).json({
    success: true,
    message: 'Your inquiry has been received. The studio will reach out via WhatsApp/email shortly.',
    leadId,
    whatsappUrl: prefilledWhatsAppUrl,
    webhookDispatched,
    submittedData: {
      name,
      businessName,
      serviceNeeded,
      email,
      phone
    }
  });
});

// Setup Vite Dev Server or Production Static Serving
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[AUVYQ DIGITAL SERVER] Running on port ${PORT} (http://0.0.0.0:${PORT})`);
  });
}

startServer().catch((err) => {
  console.error('[Fatal Error] Failed to start server:', err);
  process.exit(1);
});
