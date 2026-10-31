import React, { useState, useEffect } from 'react';
import { ProjectEnquiryData } from '../types';
import { Check, Copy, Mail, MessageCircle, X, ShieldCheck, AlertCircle, Loader2, ArrowUpRight } from 'lucide-react';

interface ProjectEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialPackage?: string;
}

const BUSINESS_TYPES = [
  'Local Business / Clinic / Store',
  'Hotel / Resort / Hospitality',
  'Restaurant / Cafe / Food',
  'Fitness / Wellness Club',
  'Education / Coaching Academy',
  'Real Estate & Architecture',
  'Creator / Personal Brand',
  'E-commerce & Retail Store',
  'Corporate / Professional Firm',
  'Other'
];

const SERVICES_NEEDED = [
  'Website Development',
  'Social Media Management',
  'Graphic Design & Branding',
  'Video Editing & Content Creation',
  'Digital Advertising (Meta & Google)',
  'WhatsApp Business Solutions',
  'Local Business Digital Setup',
  'E-commerce & Store Architecture',
  'Custom Merchandise Design',
  'Signboard & 3D Architectural Design',
  'AI & Business Automation',
  'Digital Content & Copywriting',
  'Enterprise Transformation Suite'
];

const PACKAGES_OPTIONS = [
  'Basic Package (₹10,000 one-time)',
  'Professional Package (₹20,000 one-time)',
  'Enterprise Transformation Suite (₹50,000 one-time)',
  'Premium Package (₹30,000 one-time)',
  'Custom Scoped Agreement'
];

const BUDGET_RANGES = [
  '₹10,000 (Basic Package)',
  '₹20,000 (Professional Package)',
  '₹30,000 (Premium Package)',
  '₹50,000 (Enterprise Transformation)',
  '₹50,000+ (Custom Scope)',
  'Flexible / Discussion'
];

const TIMELINES = [
  'ASAP (Immediate Start)',
  '1–2 Weeks',
  '2–4 Weeks',
  'Flexible'
];

// Strict Regex Validators
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^(\+?[1-9]\d{0,3}[ -]?)?(\(?\d{2,5}\)?[ -]?)?[\d -]{7,15}$/;

export const ProjectEnquiryModal: React.FC<ProjectEnquiryModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialPackage
}) => {
  const [formData, setFormData] = useState<ProjectEnquiryData>({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: 'Local Business / Clinic / Store',
    serviceNeeded: initialService || 'Website Development',
    selectedPackage: initialPackage || 'Professional Package (₹20,000 one-time)',
    budget: initialPackage 
      ? (initialPackage.includes('10,000') ? '₹10,000 (Basic Package)' : initialPackage.includes('50,000') ? '₹50,000 (Enterprise Transformation)' : initialPackage.includes('30,000') ? '₹30,000 (Premium Package)' : '₹20,000 (Professional Package)') 
      : '₹20,000 (Professional Package)',
    timeline: '1–2 Weeks',
    details: '',
    referenceUrl: ''
  });

  // Security honeypot field (hidden from legitimate users, completed by automated bots)
  const [honeypotValue, setHoneypotValue] = useState('');

  // Submission & visual feedback states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedLeadId, setSubmittedLeadId] = useState<string | null>(null);
  const [serverWhatsAppUrl, setServerWhatsAppUrl] = useState<string | null>(null);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, serviceNeeded: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialPackage) {
      setFormData(prev => ({
        ...prev,
        selectedPackage: initialPackage.includes('₹') ? initialPackage : `${initialPackage} Package`,
        budget: initialPackage.includes('Basic') 
          ? '₹10,000 (Basic Package)' 
          : initialPackage.includes('Enterprise') 
          ? '₹50,000 (Enterprise Transformation)'
          : initialPackage.includes('Premium') 
          ? '₹30,000 (Premium Package)' 
          : '₹20,000 (Professional Package)'
      }));
    }
  }, [initialPackage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Strict Client-Side Form Validation
  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Full name is required (minimum 2 characters)';
    }

    if (!formData.email.trim() || !EMAIL_REGEX.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g. name@company.com)';
    }

    const cleanPhone = formData.phone.trim();
    const rawDigits = cleanPhone.replace(/\D/g, '');
    if (!cleanPhone) {
      newErrors.phone = 'WhatsApp phone number is required';
    } else if (rawDigits.length < 10 || !PHONE_REGEX.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit WhatsApp phone number';
    }

    if (!formData.businessName.trim() || formData.businessName.trim().length < 2) {
      newErrors.businessName = 'Business or entity name is required';
    }

    if (!formData.details.trim() || formData.details.trim().length < 10) {
      newErrors.details = 'Please describe your project requirements in at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Client-Side Rate Limit Check (max 3 submissions in 10 minutes)
  const checkClientRateLimit = (): boolean => {
    try {
      const stored = localStorage.getItem('auvyq_lead_submissions');
      const now = Date.now();
      const tenMinutes = 10 * 60 * 1000;
      let timestamps: number[] = stored ? JSON.parse(stored) : [];
      timestamps = timestamps.filter(t => now - t < tenMinutes);

      if (timestamps.length >= 3) {
        return false;
      }

      timestamps.push(now);
      localStorage.setItem('auvyq_lead_submissions', JSON.stringify(timestamps));
      return true;
    } catch {
      return true;
    }
  };

  const getBriefSummaryText = (leadId?: string) => {
    return `AUVYQ DIGITAL · PROJECT INQUIRY BRIEF ${leadId ? `[${leadId}]` : ''}
========================================
Client: ${formData.name}
Email: ${formData.email}
Phone / WhatsApp: ${formData.phone}
Business Entity: ${formData.businessName}
Sector: ${formData.businessType}
Discipline: ${formData.serviceNeeded}
Investment Tier: ${formData.selectedPackage || 'Custom Scoped'}
Budget Allocation: ${formData.budget}
Production Timeline: ${formData.timeline}
Reference URL: ${formData.referenceUrl || 'None'}

PROJECT SPECIFICATIONS:
${formData.details}
========================================
Studio Direct Desk: rehan62088@gmail.com | WhatsApp: +91 6206242488`;
  };

  // Form Submission Handler
  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionError(null);

    if (!validate()) {
      return;
    }

    if (!checkClientRateLimit()) {
      setSubmissionError('You have reached the submission limit (3 per 10 minutes). Please contact our lead engineer directly on WhatsApp (+91 6206242488).');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/inquire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          company_website_trap: honeypotValue // Honeypot trap payload
        })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || result.error || 'Server rejected submission');
      }

      // Success state
      setSubmittedLeadId(result.leadId || `AUV-${Date.now().toString(36).toUpperCase()}`);
      setServerWhatsAppUrl(result.whatsappUrl || null);
    } catch (err: unknown) {
      console.error('[Submission Error]:', err);
      const errMsg = err instanceof Error ? err.message : 'Network error';
      setSubmissionError(`Submission error: ${errMsg}. You can transmit your brief directly via WhatsApp or Email below.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(getBriefSummaryText(submittedLeadId || undefined));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDirectWhatsAppFallback = () => {
    const text = encodeURIComponent(getBriefSummaryText(submittedLeadId || undefined));
    window.open(`https://wa.me/916206242488?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleOpenMailto = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.businessName} - ${formData.serviceNeeded} [${submittedLeadId || 'DIRECT'}]`);
    const body = encodeURIComponent(getBriefSummaryText(submittedLeadId || undefined));
    window.location.href = `mailto:rehan62088@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex justify-center p-2 sm:p-4 md:p-8 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#11120D] border border-[#D8CFBC]/14 shadow-[0_30px_100px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col my-auto max-h-[94vh]">
        
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 bg-[#11120D]/95 backdrop-blur-md border-b border-[#D8CFBC]/14">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <span className="w-2 h-2 rounded-full bg-[#FFFBF4] shrink-0" />
            <div className="min-w-0">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#D8CFBC]/60 block truncate font-medium">
                Commission Dossier · AUVYQ Digital
              </span>
              <h2 className="text-sm sm:text-lg font-semibold text-[#FFFBF4] font-display truncate">
                {submittedLeadId ? 'Inquiry Successfully Transmitted' : 'Initiate Project Specification'}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 border border-[#D8CFBC]/20 flex items-center justify-center text-[#D8CFBC]/70 hover:text-[#FFFBF4] hover:border-[#D8CFBC]/50 transition-colors cursor-pointer shrink-0 ml-2"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-6">
          {!submittedLeadId ? (
            /* Active Inquiry Form */
            <div className="space-y-5 sm:space-y-6">
              <div className="space-y-1 border-b border-[#D8CFBC]/14 pb-4">
                <p className="text-xs sm:text-sm text-[#D8CFBC]/75 font-normal leading-relaxed">
                  Complete the project brief below. Transmitted inquiries are securely routed to our direct desk, backed up to Google Sheets, and dispatched to <span className="text-[#FFFBF4] font-medium">rehan62088@gmail.com</span> & WhatsApp (<span className="text-[#FFFBF4] font-medium">+91 6206242488</span>).
                </p>
              </div>

              {/* Error Notice */}
              {submissionError && (
                <div className="p-4 bg-red-950/40 border border-red-500/30 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-red-200">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{submissionError}</span>
                  </div>
                  <div className="pt-2 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={handleDirectWhatsAppFallback}
                      className="px-4 py-2 bg-[#FFFBF4] text-[#11120D] text-xs font-semibold rounded-lg flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Contact directly via WhatsApp</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleOpenMailto}
                      className="px-4 py-2 border border-[#D8CFBC]/20 text-[#FFFBF4] text-xs font-medium rounded-lg flex items-center gap-1.5 hover:bg-[#565449]/30"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send via Email</span>
                    </button>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmitForm} className="space-y-6">
                {/* Honeypot Spam Trap (Hidden from genuine visitors) */}
                <div style={{ display: 'none', position: 'absolute', left: '-9999px' }} aria-hidden="true">
                  <label htmlFor="company_website_trap">Leave this field blank</label>
                  <input
                    type="text"
                    id="company_website_trap"
                    name="company_website_trap"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypotValue}
                    onChange={(e) => setHoneypotValue(e.target.value)}
                  />
                </div>

                {/* Contact Basics: Name, Email, Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-wider text-[#D8CFBC]/80 font-medium">
                      Your Full Name <span className="text-[#FFFBF4]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Julian Vance"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
                      }}
                      className={`w-full bg-[#565449]/25 border px-4 py-3 text-sm text-[#FFFBF4] placeholder-[#D8CFBC]/40 focus:outline-none transition-colors ${
                        errors.name ? 'border-red-400 focus:border-red-400' : 'border-[#D8CFBC]/20 focus:border-[#D8CFBC]/60'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-300 font-medium">{errors.name}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-wider text-[#D8CFBC]/80 font-medium">
                      Email Address <span className="text-[#FFFBF4]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="julian@example.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                      }}
                      className={`w-full bg-[#565449]/25 border px-4 py-3 text-sm text-[#FFFBF4] placeholder-[#D8CFBC]/40 focus:outline-none transition-colors ${
                        errors.email ? 'border-red-400 focus:border-red-400' : 'border-[#D8CFBC]/20 focus:border-[#D8CFBC]/60'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-300 font-medium">{errors.email}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-wider text-[#D8CFBC]/80 font-medium">
                      WhatsApp Phone <span className="text-[#FFFBF4]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors(prev => ({ ...prev, phone: '' }));
                      }}
                      className={`w-full bg-[#565449]/25 border px-4 py-3 text-sm text-[#FFFBF4] placeholder-[#D8CFBC]/40 focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-400 focus:border-red-400' : 'border-[#D8CFBC]/20 focus:border-[#D8CFBC]/60'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-300 font-medium">{errors.phone}</p>}
                  </div>
                </div>

                {/* Business Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-wider text-[#D8CFBC]/80 font-medium">
                    Business / Hotel / Brand Entity <span className="text-[#FFFBF4]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Grand Vista Resort or Horizon Medical Clinic"
                    value={formData.businessName}
                    onChange={(e) => {
                      setFormData({ ...formData, businessName: e.target.value });
                      if (errors.businessName) setErrors(prev => ({ ...prev, businessName: '' }));
                    }}
                    className={`w-full bg-[#565449]/25 border px-4 py-3 text-sm text-[#FFFBF4] placeholder-[#D8CFBC]/40 focus:outline-none transition-colors ${
                      errors.businessName ? 'border-red-400 focus:border-red-400' : 'border-[#D8CFBC]/20 focus:border-[#D8CFBC]/60'
                    }`}
                  />
                  {errors.businessName && <p className="text-[11px] text-red-300 font-medium">{errors.businessName}</p>}
                </div>

                {/* Sector Classification */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider text-[#D8CFBC]/80 font-medium">
                    Sector Classification
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {BUSINESS_TYPES.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, businessType: type })}
                        className={`px-3 py-1.5 text-xs border transition-colors whitespace-nowrap cursor-pointer ${
                          formData.businessType === type
                            ? 'bg-[#FFFBF4] text-[#11120D] border-[#FFFBF4] font-semibold'
                            : 'bg-[#565449]/25 text-[#D8CFBC]/80 border-[#D8CFBC]/14 hover:text-[#FFFBF4] hover:border-[#D8CFBC]/30'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Target Discipline */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider text-[#D8CFBC]/80 font-medium">
                    Target Discipline
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES_NEEDED.map((svc) => (
                      <button
                        type="button"
                        key={svc}
                        onClick={() => setFormData({ ...formData, serviceNeeded: svc })}
                        className={`px-3 py-1.5 text-xs border transition-colors whitespace-nowrap cursor-pointer ${
                          formData.serviceNeeded === svc
                            ? 'bg-[#FFFBF4] text-[#11120D] border-[#FFFBF4] font-semibold'
                            : 'bg-[#565449]/25 text-[#D8CFBC]/80 border-[#D8CFBC]/14 hover:text-[#FFFBF4] hover:border-[#D8CFBC]/30'
                        }`}
                      >
                        {svc}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Package Tier Selection */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider text-[#D8CFBC]/80 font-medium">
                    Investment Tier
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {PACKAGES_OPTIONS.map((pkg) => (
                      <button
                        type="button"
                        key={pkg}
                        onClick={() => setFormData({ ...formData, selectedPackage: pkg })}
                        className={`px-3 py-2 text-xs border text-left transition-colors cursor-pointer ${
                          formData.selectedPackage === pkg
                            ? 'bg-[#FFFBF4] text-[#11120D] border-[#FFFBF4] font-semibold'
                            : 'bg-[#565449]/25 text-[#D8CFBC]/80 border-[#D8CFBC]/14 hover:text-[#FFFBF4] hover:border-[#D8CFBC]/30'
                        }`}
                      >
                        {pkg}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Estimated Budget */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider text-[#D8CFBC]/80 font-medium">
                    Budget Allocation
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {BUDGET_RANGES.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={`px-3 py-1.5 text-xs border transition-colors whitespace-nowrap cursor-pointer ${
                          formData.budget === b
                            ? 'bg-[#FFFBF4] text-[#11120D] border-[#FFFBF4] font-semibold'
                            : 'bg-[#565449]/25 text-[#D8CFBC]/80 border-[#D8CFBC]/14 hover:text-[#FFFBF4] hover:border-[#D8CFBC]/30'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Desired Timeline */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider text-[#D8CFBC]/80 font-medium">
                    Production Timeline
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {TIMELINES.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setFormData({ ...formData, timeline: t })}
                        className={`px-3 py-2 text-xs border text-center transition-colors cursor-pointer ${
                          formData.timeline === t
                            ? 'bg-[#FFFBF4] text-[#11120D] border-[#FFFBF4] font-semibold'
                            : 'bg-[#565449]/25 text-[#D8CFBC]/80 border-[#D8CFBC]/14 hover:text-[#FFFBF4] hover:border-[#D8CFBC]/30'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-wider text-[#D8CFBC]/80 font-medium">
                    Project Requirements & Brief <span className="text-[#FFFBF4]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your commercial objectives, desired brand position, key functional features (e.g. reservation engine, dynamic catalog, custom animations), and target launch milestone..."
                    value={formData.details}
                    onChange={(e) => {
                      setFormData({ ...formData, details: e.target.value });
                      if (errors.details) setErrors(prev => ({ ...prev, details: '' }));
                    }}
                    className={`w-full bg-[#565449]/25 border p-3 text-sm text-[#FFFBF4] placeholder-[#D8CFBC]/40 focus:outline-none transition-colors leading-relaxed ${
                      errors.details ? 'border-red-400 focus:border-red-400' : 'border-[#D8CFBC]/20 focus:border-[#D8CFBC]/60'
                    }`}
                  />
                  {errors.details && <p className="text-[11px] text-red-300 font-medium">{errors.details}</p>}
                </div>

                {/* Reference URL */}
                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-wider text-[#D8CFBC]/80 font-medium">
                    Reference Website or Link <span className="text-[#D8CFBC]/50">(Optional)</span>
                  </label>
                  <input
                    type="url"
                    placeholder="https://example.com"
                    value={formData.referenceUrl}
                    onChange={(e) => setFormData({ ...formData, referenceUrl: e.target.value })}
                    className="w-full bg-[#565449]/25 border border-[#D8CFBC]/20 px-4 py-3 text-sm text-[#FFFBF4] placeholder-[#D8CFBC]/40 focus:outline-none focus:border-[#D8CFBC]/60 transition-colors"
                  />
                </div>

                {/* Submit Action with Loading Spinner */}
                <div className="pt-4 border-t border-[#D8CFBC]/14 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-[#D8CFBC]/60">
                    Direct studio response guaranteed within 24 hours
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#FFFBF4] hover:bg-[#D8CFBC] text-[#11120D] font-semibold text-xs tracking-tight transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#11120D]" />
                        <span>Submitting enquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Brief ↗</span>
                        <ArrowUpRight className="w-4 h-4 text-[#11120D]" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Confirmed Success State */
            <div className="py-6 space-y-6 animate-in fade-in duration-300">
              <div className="flex items-start gap-4 p-5 bg-[#161713] border border-emerald-500/30 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[11px] font-mono text-emerald-300 font-semibold">
                    <span>Reference: {submittedLeadId}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#FFFBF4] font-display pt-1">
                    Your inquiry has been received.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D8CFBC]/80 leading-relaxed font-normal">
                    The studio will reach out via WhatsApp/email shortly. Your brief has been dispatched to our engineering desk.
                  </p>
                </div>
              </div>

              {/* Formatted Transmission Summary Preview */}
              <div className="p-5 bg-[#161713] border border-[#D8CFBC]/14 rounded-xl space-y-3">
                <div className="flex items-center justify-between text-xs text-[#D8CFBC]/70 font-medium">
                  <span>Structured Transmission Dossier</span>
                  <span>Recipient: rehan62088@gmail.com</span>
                </div>
                <div className="text-xs text-[#D8CFBC]/85 whitespace-pre-wrap bg-[#11120D] p-4 border border-[#D8CFBC]/14 rounded-lg max-h-56 overflow-y-auto leading-relaxed font-mono">
                  {getBriefSummaryText(submittedLeadId)}
                </div>
              </div>

              {/* One-Tap Transmission & Routing Triggers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={serverWhatsAppUrl || `https://wa.me/916206242488?text=${encodeURIComponent(getBriefSummaryText(submittedLeadId))}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="py-3.5 px-4 bg-[#FFFBF4] hover:bg-[#D8CFBC] text-[#11120D] text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-[#11120D]" />
                  <span>Connect on WhatsApp Now (+91 6206242488)</span>
                </a>

                <button
                  onClick={handleOpenMailto}
                  className="py-3.5 px-4 bg-[#565449]/30 hover:bg-[#565449]/50 text-[#FFFBF4] border border-[#D8CFBC]/20 text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Mail className="w-4 h-4 text-[#D8CFBC]" />
                  <span>Send Direct Email Copy</span>
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#D8CFBC]/10">
                <button
                  onClick={handleCopyBrief}
                  className="px-4 py-2 bg-[#565449]/25 text-[#FFFBF4] text-xs hover:bg-[#565449]/40 transition-colors flex items-center gap-2 border border-[#D8CFBC]/14 rounded-md cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#D8CFBC]" />}
                  <span>{copied ? 'Dossier Copied to Clipboard!' : 'Copy Formatted Text'}</span>
                </button>

                <button
                  onClick={onClose}
                  className="px-6 py-2 text-xs uppercase bg-[#FFFBF4]/10 hover:bg-[#FFFBF4]/20 text-[#FFFBF4] transition-colors rounded-md cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
