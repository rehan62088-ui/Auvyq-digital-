import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { AuvyqLogo } from './AuvyqLogo';

interface NavbarProps {
  onStartProject: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProject }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'FAQ', href: '#faq' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#11120D]/92 backdrop-blur-xl border-b border-[#D8CFBC]/14 py-3.5 shadow-2xl'
            : 'bg-transparent py-5 sm:py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Custom SVG AUVYQ DIGITAL STUDIO Logo */}
          <a
            href="#"
            className="group flex items-center hover:opacity-95 transition-opacity shrink-0 py-1"
            aria-label="AUVYQ Digital Home"
          >
            <AuvyqLogo width={180} height={40} className="w-[145px] sm:w-[175px] md:w-[180px] h-auto block" />
          </a>

          {/* Desktop Horizontal Navigation (Sentence Case, Clean Spacing) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#D8CFBC]/70">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#FFFBF4] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/916206242488?text=Hi%20Auvyq%20Digital,%20I%E2%80%99m%20interested%20in%20discussing%20a%20website%20or%20digital%20service%20for%20my%20business."
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp Auvyq Digital"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#D8CFBC]/80 hover:text-[#FFFBF4] border border-[#D8CFBC]/15 hover:border-[#D8CFBC]/35 bg-[#565449]/30 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#D8CFBC]/70 shrink-0" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onStartProject}
              className="px-4 sm:px-5 py-2 bg-[#FFFBF4] hover:bg-[#D8CFBC] text-[#11120D] font-semibold text-xs tracking-tight transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-md min-h-[38px] shrink-0 active:scale-95"
            >
              <span>Start a project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#11120D] shrink-0" />
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#D8CFBC]/80 hover:text-[#FFFBF4] border border-[#D8CFBC]/15 bg-[#565449]/30 cursor-pointer min-h-[38px] min-w-[38px] flex items-center justify-center shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-[#11120D]/98 backdrop-blur-2xl flex flex-col justify-between border-b border-[#D8CFBC]/14 overflow-y-auto px-6 pt-20 pb-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#D8CFBC]/14 pb-4">
              <AuvyqLogo width={160} height={36} className="w-[150px] h-auto block" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#D8CFBC]/80 hover:text-[#FFFBF4] border border-[#D8CFBC]/15 bg-[#565449]/30"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col space-y-3 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 text-xl font-display font-medium text-[#D8CFBC]/80 hover:text-[#FFFBF4] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-8 border-t border-[#D8CFBC]/14 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartProject();
              }}
              className="w-full py-3.5 bg-[#FFFBF4] text-[#11120D] font-semibold text-sm flex items-center justify-center gap-2"
            >
              <span>Start a project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/916206242488"
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 border border-[#D8CFBC]/20 text-[#FFFBF4] text-xs font-medium flex items-center justify-center gap-2 bg-[#565449]/30"
            >
              <MessageCircle className="w-4 h-4 text-[#D8CFBC]" />
              <span>Direct WhatsApp Desk (+91 6206242488)</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
