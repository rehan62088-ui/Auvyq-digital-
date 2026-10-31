import React from 'react';
import { Mail, ArrowUpRight, MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { AuvyqLogo } from './AuvyqLogo';

interface FooterProps {
  onStartProject: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onStartProject }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative -mt-10 rounded-t-[40px] py-16 sm:py-20 lg:py-24 bg-[#11120D] text-[#D8CFBC]/70 z-60 shadow-[0_-20px_50px_rgba(0,0,0,0.6)] border-t border-[#D8CFBC]/14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center py-1">
              <AuvyqLogo width={190} height={42} className="w-[170px] sm:w-[190px] h-auto block" />
            </div>
            <p className="text-sm text-[#D8CFBC]/70 max-w-sm leading-relaxed font-normal">
              A premium digital studio creating distinctive websites, digital experiences, brand identities and creative solutions.
            </p>
            <div className="pt-2 flex flex-col space-y-2 text-xs">
              <a
                href="mailto:rehan62088@gmail.com"
                className="inline-flex items-center gap-2 text-[#D8CFBC]/80 hover:text-[#FFFBF4] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#D8CFBC]/60 shrink-0" />
                <span>rehan62088@gmail.com</span>
              </a>

              <a
                href="https://wa.me/916206242488?text=Hi%20AUVYQ%20Digital,%20I%E2%80%99m%20interested%20in%20discussing%20a%20website%20or%20digital%20service%20for%20my%20business."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[#D8CFBC]/80 hover:text-[#FFFBF4] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#D8CFBC]/60 shrink-0" />
                <span>WhatsApp: +91 6206242488</span>
              </a>

              <a
                href="tel:+916206242488"
                className="inline-flex items-center gap-2 text-[#D8CFBC]/80 hover:text-[#FFFBF4] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D8CFBC]/60 shrink-0" />
                <span>Call: +91 6206242488</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6 text-xs">
            <div className="space-y-3">
              <span className="text-[#FFFBF4] uppercase tracking-[0.14em] block font-semibold text-[11px]">
                Capabilities
              </span>
              <ul className="space-y-2 text-[#D8CFBC]/65">
                <li><a href="#services" className="hover:text-[#FFFBF4] transition-colors">Website Development</a></li>
                <li><a href="#services" className="hover:text-[#FFFBF4] transition-colors">Social Media & Ads</a></li>
                <li><a href="#services" className="hover:text-[#FFFBF4] transition-colors">Graphic Design & Brand</a></li>
                <li><a href="#services" className="hover:text-[#FFFBF4] transition-colors">Video & Content Engine</a></li>
                <li><a href="#services" className="hover:text-[#FFFBF4] transition-colors">WhatsApp & AI Automation</a></li>
                <li><a href="#services" className="hover:text-[#FFFBF4] transition-colors">3D Signage & Merch</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-[#FFFBF4] uppercase tracking-[0.14em] block font-semibold text-[11px]">
                Navigation
              </span>
              <ul className="space-y-2 text-[#D8CFBC]/65">
                <li><a href="#work" className="hover:text-[#FFFBF4] transition-colors">Selected Work</a></li>
                <li><a href="#services" className="hover:text-[#FFFBF4] transition-colors">Services</a></li>
                <li><a href="#process" className="hover:text-[#FFFBF4] transition-colors">Process</a></li>
                <li><a href="#pricing" className="hover:text-[#FFFBF4] transition-colors">Pricing Packages</a></li>
                <li><a href="#why-us" className="hover:text-[#FFFBF4] transition-colors">Why Auvyq</a></li>
                <li><a href="#faq" className="hover:text-[#FFFBF4] transition-colors">FAQ</a></li>
                <li><a href="#about" className="hover:text-[#FFFBF4] transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-[#FFFBF4] transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Action Column */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[#FFFBF4] uppercase tracking-[0.14em] block font-semibold text-[11px]">
              Ready to start?
            </span>
            <p className="text-xs text-[#D8CFBC]/70 leading-relaxed font-normal">
              Accepting commissions for bespoke web design, hotel booking engines, and brand transformations.
            </p>
            <button
              onClick={onStartProject}
              className="w-full py-3.5 px-4 bg-[#FFFBF4] hover:bg-[#D8CFBC] text-[#11120D] font-semibold text-xs tracking-tight transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Start a project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#11120D]" />
            </button>
          </div>
        </div>

        {/* Bottom Legal & Colophon Bar */}
        <div className="pt-8 border-t border-[#D8CFBC]/14 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8CFBC]/50">
          <div>
            © {new Date().getFullYear()} AUVYQ Digital. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#D8CFBC]/70 hover:text-[#FFFBF4] transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
