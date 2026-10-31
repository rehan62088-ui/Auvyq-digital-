export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Pricing' | 'Process' | 'Services' | 'Support';
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'pkg-difference',
    question: 'What is the main difference between the Basic and Professional packages?',
    answer: 'The Basic package (₹10,000) provides 5–7 structured pages (Home, About, Services, Gallery, Contact) with responsive layout, semantic structure, WhatsApp button, and 1 month of support—ideal for establishing a clean, credible presence. The Professional package (₹20,000) expands to 8–12 custom pages, custom responsive design, blog capability, multi-field enquiry/booking forms, maps, and 2 months of dedicated support.',
    category: 'Pricing'
  },
  {
    id: 'timeline-workflow',
    question: 'How long does a website project take from start to launch?',
    answer: 'Basic packages typically take 5 to 7 business days once we receive your brand assets, logo, and copy. Professional custom sites take approximately 10 to 14 business days. Specialized hotel reservation solutions or bespoke 3D projects take 18 to 24 business days depending on features and review cycles.',
    category: 'Process'
  },
  {
    id: 'hosting-domains',
    question: 'Are domain names, web hosting, and third-party subscriptions included?',
    answer: 'Package fees cover our complete design, development, and engineering work. Domain registrations (e.g., .com, .in) and hosting server fees are billed directly by your preferred provider (such as Hostinger, Cloudflare, or Vercel). We assist you in setting up and pointing domains and SSL certificates at no extra charge.',
    category: 'Pricing'
  },
  {
    id: 'hotel-booking-engine',
    question: 'How do hotel websites and direct booking enquiry solutions work?',
    answer: 'We design hotel websites with dedicated room showcases, amenities galleries, and direct enquiry/booking systems. Guests can check dates, select room categories, and submit reservations via structured forms that route directly to your WhatsApp (+91 6206242488) and email. For automated online card processing or channel management, we integrate your chosen merchant gateway upon scoping.',
    category: 'Services'
  },
  {
    id: 'print-and-signboards',
    question: 'Do you design custom T-shirts and 3D architectural signboards?',
    answer: 'Yes! We create vector production-ready artwork, color separations, and print specifications for apparel (screen print, puff, DTF), as well as architectural CAD layout proofs and lighting specs (acrylic, brushed metal, LED halo-lit) for physical 3D shop signboards.',
    category: 'Services'
  },
  {
    id: 'design-philosophy',
    question: 'What makes Auvyq Digital different from typical web agencies?',
    answer: 'We operate as a bespoke digital studio rather than a mass-production agency. We do not use cookie-cutter templates or generic site builders. Every project is architected with tailored layout systems, editorial typography, custom 3D art direction, and direct senior engineer collaboration without middle management bloat.',
    category: 'Services'
  },
  {
    id: 'post-launch-support',
    question: 'What happens after the website launches?',
    answer: 'All projects include complimentary post-launch support (1 month for Basic, 2 months for Professional). We verify forms, check mobile performance, fix any technical bugs, and can train you on updating your content.',
    category: 'Support'
  },
  {
    id: 'get-started',
    question: 'How do I start a project with AUVYQ Digital?',
    answer: 'You can click "Start a Project" anywhere on the site to submit your project brief, or reach out directly to us on WhatsApp at +91 6206242488 or email rehan62088@gmail.com. We will discuss your requirements, confirm the appropriate scope, and begin work promptly.',
    category: 'Process'
  }
];
