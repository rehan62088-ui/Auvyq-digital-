export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  filterCategory: string;
  year: string;
  tagline: string;
  oneLineResult: string;
  summary: string;
  theIdea: string;
  visualDirection: string;
  keyFeatures: string[];
  responsiveExperience: {
    desktopNotes: string;
    mobileNotes: string;
  };
  intendedResult: string;
  themeColor: string;
  accentHex: string;
  mockupType: 'desktop' | 'laptop' | 'dual' | 'editorial' | 'hotel';
  heroImage: string;
  phoneImage?: string;
  metrics?: { label: string; value: string }[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  businessValue: string;
  deliverables: string[];
  accentColor: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  period: string;
  highlighted?: boolean;
  tagline: string;
  idealFor: string;
  features: string[];
  turnaround: string;
}

export interface ProjectEnquiryData {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  businessType: string;
  serviceNeeded: string;
  selectedPackage?: string;
  budget: string;
  timeline: string;
  details: string;
  referenceUrl: string;
}
