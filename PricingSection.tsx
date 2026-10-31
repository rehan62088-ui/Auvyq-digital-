import React from 'react';
import { PRICING_PACKAGES } from '../data/pricing';
import { Check, ArrowUpRight, MessageCircle, Sparkles, Clock } from 'lucide-react';

interface PricingSectionProps {
  onSelectPackage: (packageName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackage }) => {
  return (
    <section 
      id="pricing" 
      className="relative -mt-10 rounded-t-[40px] pt-24 sm:pt-28 pb-28 sm:pb-36 bg-[#D8CFBC] text-[#11120D] z-30 shadow-[0_-20px_50px_rgba(17,18,13,0.25)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="space-y-4 mb-12 sm:mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#FFFBF4] border border-[#11120D]/10 text-xs font-semibold tracking-[0.14em] uppercase text-[#565449] shadow-sm rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#11120D] shrink-0" />
            <span>Investment Schedule</span>
          </div>

          <h2 className="font-display font-semibold tracking-[-0.03em] text-[#11120D] text-3xl sm:text-5xl lg:text-6xl leading-[0.98]">
            Transparent investment{' '}
            <span className="font-serif-italic font-normal italic text-[#11120D]">
              packages.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#565449] leading-relaxed font-normal">
            Confirmed one-time investment tiers with defined deliverable scopes, turnaround commitments, and zero hidden retainers.
          </p>
        </div>

        {/* Stacked Vertical Cards (Single full-width card per row, ordered exactly: Basic, Professional, Enterprise, Premium) */}
        <div className="flex flex-col gap-6 sm:gap-8 max-w-5xl mx-auto">
          {PRICING_PACKAGES.map((pkg, idx) => {
            const isHighlight = pkg.highlighted;
            const isEnterprise = pkg.id === 'enterprise';
            const whatsappMessage = encodeURIComponent(
              `Hi AUVYQ Digital, I'm interested in discussing the ${pkg.name} (${pkg.price} one-time) for my business.`
            );

            return (
              <div
                key={pkg.id}
                className={`relative p-6 sm:p-8 lg:p-10 rounded-[24px] bg-[#FFFBF4] transition-all duration-300 shadow-[0_12px_36px_rgba(17,18,13,0.06)] hover:shadow-[0_20px_50px_rgba(17,18,13,0.12)] ${
                  isHighlight
                    ? 'border-2 border-[#11120D] ring-2 ring-[#11120D]/10'
                    : isEnterprise
                    ? 'border-2 border-[#565449]/40 bg-gradient-to-br from-[#FFFBF4] to-[#f4ebe1]'
                    : 'border border-[#11120D]/12 hover:border-[#11120D]/30'
                }`}
              >
                {/* Top Badge Indicators */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#11120D] px-2.5 py-1 bg-[#11120D]/5 rounded-md">
                      0{idx + 1}
                    </span>
                    <span className="text-xs uppercase tracking-[0.14em] text-[#565449] font-bold">
                      {pkg.idealFor}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {isHighlight && (
                      <span className="px-3.5 py-1 bg-[#11120D] text-[#FFFBF4] text-[10px] font-semibold uppercase tracking-wider rounded-full shadow-sm">
                        Most Selected Package
                      </span>
                    )}
                    {isEnterprise && (
                      <span className="px-3.5 py-1 bg-[#565449] text-[#FFFBF4] text-[10px] font-semibold uppercase tracking-wider rounded-full shadow-sm flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-[#D8CFBC]" />
                        <span>Flagship 360° Overhaul</span>
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#D8CFBC]/30 border border-[#11120D]/10 rounded-full text-xs font-semibold text-[#11120D]">
                      <Clock className="w-3.5 h-3.5 text-[#565449]" />
                      <span>{pkg.turnaround}</span>
                    </span>
                  </div>
                </div>

                {/* Main Card Content: 2-column editorial on desktop, stacked on mobile */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                  {/* Left Column: Title, Price, Tagline */}
                  <div className="lg:col-span-5 space-y-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-display font-semibold text-[#11120D] leading-tight">
                        {pkg.name}
                      </h3>
                      <div className="pt-2 flex items-baseline gap-2.5">
                        <span className="text-4xl sm:text-5xl font-display font-bold text-[#11120D] tracking-tight tabular-nums">
                          {pkg.price}
                        </span>
                        <span className="text-xs uppercase font-medium text-[#565449] tracking-wider">
                          {pkg.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-[#565449] leading-relaxed font-normal">
                      {pkg.tagline}
                    </p>

                    {/* Desktop Action Buttons (shown here on desktop) */}
                    <div className="hidden lg:flex flex-col gap-2.5 pt-4">
                      <button
                        onClick={() => onSelectPackage(pkg.name)}
                        className="w-full py-3.5 px-6 bg-[#11120D] hover:bg-[#565449] text-[#FFFBF4] text-xs font-semibold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-98"
                      >
                        <span>Choose {pkg.name}</span>
                        <ArrowUpRight className="w-4 h-4 text-[#FFFBF4]" />
                      </button>

                      <a
                        href={`https://wa.me/916206242488?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-2.5 text-xs text-[#565449] hover:text-[#11120D] transition-colors flex items-center justify-center gap-1.5 font-medium"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Inquire via WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Confirmed Deliverables Checklist */}
                  <div className="lg:col-span-7 bg-[#FFFBF4]/60 p-5 sm:p-6 rounded-[18px] border border-[#11120D]/8 space-y-4">
                    <span className="text-xs uppercase tracking-[0.14em] text-[#11120D] font-bold block">
                      Confirmed Scope & Deliverables:
                    </span>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {pkg.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-[#565449]">
                          <Check className="w-4 h-4 shrink-0 text-[#11120D] mt-0.5" />
                          <span className="text-[#11120D]/90 leading-snug font-normal">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Mobile Action Buttons (shown here on mobile) */}
                    <div className="lg:hidden flex flex-col gap-2.5 pt-4 border-t border-[#11120D]/10">
                      <button
                        onClick={() => onSelectPackage(pkg.name)}
                        className="w-full py-3 px-5 bg-[#11120D] hover:bg-[#565449] text-[#FFFBF4] text-xs font-semibold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                      >
                        <span>Choose {pkg.name}</span>
                        <ArrowUpRight className="w-4 h-4 text-[#FFFBF4]" />
                      </button>

                      <a
                        href={`https://wa.me/916206242488?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-2 text-xs text-[#565449] hover:text-[#11120D] transition-colors flex items-center justify-center gap-1.5 font-medium"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Inquire via WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
