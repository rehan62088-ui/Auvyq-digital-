import { PricingPackage } from '../types';

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'basic',
    name: 'Basic Package',
    price: '₹10,000',
    period: 'one-time investment',
    highlighted: false,
    tagline: 'Ideal for local businesses, clinics, and independent professionals seeking a clean, high-speed digital presence.',
    idealFor: 'Local Businesses & Professionals',
    turnaround: '5–7 Days',
    features: [
      '5–7 responsive structured pages',
      'Mobile & desktop optimization',
      'Direct WhatsApp & call lead routing',
      'Google Maps integration & clean semantic SEO',
      '1 Month technical support'
    ]
  },
  {
    id: 'professional',
    name: 'Professional Package',
    price: '₹20,000',
    period: 'one-time investment',
    highlighted: true,
    tagline: 'Tailored for growing businesses requiring bespoke layouts, dynamic publishing, and high-conversion lead capture.',
    idealFor: 'Growing Businesses & Studios',
    turnaround: '10–14 Days',
    features: [
      '8–12 bespoke pages & blog/article engine',
      'Advanced lead capture & booking forms',
      'Fast Core Web Vitals optimization',
      'Interactive social links & maps',
      '2 Months dedicated support'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise Transformation Suite',
    price: '₹50,000',
    period: 'one-time investment',
    highlighted: false,
    tagline: 'Flagship 360° agency overhaul: 15–18 page custom web platform, complete brand identity suite, 3D acrylic/LED signage blueprints, 6 cinematic reels + 10 ad creatives, 24/7 AI WhatsApp lead bot, Google Business Profile ranking, 3 months priority support.',
    idealFor: 'Market Leaders & High-Growth Ventures',
    turnaround: '25–30 Days',
    features: [
      'Flagship 15–18 page custom web platform with bespoke micro-animations',
      'Complete Brand Identity: Vector logo, color typography hierarchy, brand guidelines',
      'Physical Branding & 3D Signage: Acrylic/LED storefront board day & night architectural blueprints + print-ready menu/merch designs',
      'Content Engine: 6 cinematic edited short-form videos/reels + 10 static ad creatives + high-conversion sales copy',
      'Full Business Automation: 24/7 AI lead capture chatbot, WhatsApp catalog & quick replies, automated email & Google Sheets lead notifications',
      'Local Search Dominance: Verified Google Business Profile optimization, review funnel setup, and ready-to-run Google/Meta Ads structure',
      '3 Months Priority Dedicated Support & full source IP/code asset handover'
    ]
  },
  {
    id: 'premium',
    name: 'Premium Package',
    price: '₹30,000',
    period: 'one-time investment',
    highlighted: false,
    tagline: 'Luxury boutique experience: custom booking flow, payment gateway integration, headless CMS admin dashboard, architectural 3D accents, WhatsApp concierge sync.',
    idealFor: 'Hotels, Resorts & Luxury Brands',
    turnaround: '18–24 Days',
    features: [
      'Full luxury multi-page digital experience',
      'Bespoke architectural 3D accents & visual design',
      'Custom room/service booking flow & payment gateway integration',
      'Headless CMS / Admin dashboard configuration',
      'WhatsApp concierge sync & priority technical handover'
    ]
  }
];
