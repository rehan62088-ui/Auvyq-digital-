import React from 'react';
import { ArrowUpRight, Mail, MessageCircle, Phone } from 'lucide-react';

interface ContactSectionProps {
  onStartProject: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onStartProject }) => {
  return (
    <section 
      id="contact" 
      className="relative -mt-10 rounded-t-[40px] pt-24 sm:pt-28 pb-28 sm:pb-36 bg-[#D8CFBC] text-[#11120D] z-50 shadow-[0_-20px_50px_rgba(17,18,13,0.25)] overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 sm:space-y-12 z-10">
        <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#FFFBF4] border border-[#11120D]/10 text-xs font-medium tracking-[0.14em] uppercase text-[#565449] shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#11120D] shrink-0" />
          <span>Direct Inquiries</span>
        </div>

        <h2 className="font-display font-semibold tracking-[-0.03em] text-[#11120D] text-4xl sm:text-6xl lg:text-7xl leading-[0.95] max-w-4xl mx-auto">
          Have an idea? Let’s build something{' '}
          <span className="font-serif-italic font-normal italic text-[#11120D]/90 block sm:inline">
            remarkable.
          </span>
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-[#565449] max-w-xl mx-auto font-normal leading-relaxed">
          Tell us about your project, timeline, and goals. We respond promptly with clear scope recommendations and honest guidance.
        </p>

        {/* Display email, WhatsApp and Phone with minimal architectural buttons on light */}
        <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:rehan62088@gmail.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#FFFBF4] hover:bg-[#FFFBF4]/80 border border-[#11120D]/10 hover:border-[#11120D]/30 text-[#11120D] text-sm transition-all shadow-[0_8px_20px_rgba(17,18,13,0.06)] min-h-[48px]"
          >
            <Mail className="w-4 h-4 text-[#565449] shrink-0" />
            <span className="font-medium">rehan62088@gmail.com</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#565449] shrink-0" />
          </a>

          <a
            href="https://wa.me/916206242488?text=Hi%20Auvyq%20Digital,%20I%E2%80%99m%20interested%20in%20discussing%20a%20website%20or%20digital%20service%20for%20my%20business."
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#FFFBF4] hover:bg-[#FFFBF4]/80 border border-[#11120D]/10 hover:border-[#11120D]/30 text-[#11120D] text-sm transition-all shadow-[0_8px_20px_rgba(17,18,13,0.06)] min-h-[48px]"
          >
            <MessageCircle className="w-4 h-4 text-[#565449] shrink-0" />
            <span className="font-medium">WhatsApp: +91 6206242488</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#565449] shrink-0" />
          </a>

          <a
            href="tel:+916206242488"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#FFFBF4] hover:bg-[#FFFBF4]/80 border border-[#11120D]/10 hover:border-[#11120D]/30 text-[#11120D] text-sm transition-all shadow-[0_8px_20px_rgba(17,18,13,0.06)] min-h-[48px]"
          >
            <Phone className="w-4 h-4 text-[#565449] shrink-0" />
            <span className="font-medium">Direct Call: +91 6206242488</span>
          </a>
        </div>

        {/* Primary Project Enquiry Trigger: Smoky Black fill on light */}
        <div className="pt-4">
          <button
            onClick={onStartProject}
            className="w-full sm:w-auto px-8 py-4 bg-[#11120D] hover:bg-[#565449] text-[#FFFBF4] font-semibold text-sm transition-all duration-300 inline-flex items-center justify-center gap-2.5 shadow-[0_4px_24px_rgba(17,18,13,0.25)] cursor-pointer min-h-[50px] active:scale-98"
          >
            <span>Open project inquiry form</span>
            <ArrowUpRight className="w-4 h-4 text-[#FFFBF4] shrink-0" />
          </button>
        </div>
      </div>
    </section>
  );
};
