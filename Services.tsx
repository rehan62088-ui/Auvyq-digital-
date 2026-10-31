import React from 'react';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/services';
import { Glossy3DIcon, GlossyIconType } from './Glossy3DIcon';

interface ServicesProps {
  onStartProject: (serviceName?: string) => void;
}

const SERVICE_ICON_MAP: Record<string, GlossyIconType> = {
  'website-development': 'website',
  'social-media-management': 'social',
  'graphic-design-branding': 'branding',
  'video-editing-creation': 'video',
  'digital-advertising': 'ads',
  'whatsapp-business-solutions': 'whatsapp',
  'local-business-setup': 'local',
  'ecommerce-architecture': 'ecommerce',
  'custom-merchandise-design': 'merch',
  'signboard-3d-architectural': 'signage',
  'ai-business-automation': 'ai',
  'digital-content-copywriting': 'copywriting'
};

export const Services: React.FC<ServicesProps> = ({ onStartProject }) => {
  return (
    <section 
      id="services" 
      className="relative -mt-10 rounded-t-[40px] pt-24 sm:pt-28 pb-28 sm:pb-36 bg-[#11120D] text-[#FFFBF4] z-25 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="space-y-4 mb-12 sm:mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#565449]/30 border border-[#D8CFBC]/14 text-xs font-semibold tracking-[0.14em] uppercase text-[#D8CFBC]/80 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFFBF4] shrink-0" />
            <span>12 Core Disciplines</span>
          </div>

          <h2 className="font-display font-semibold tracking-[-0.03em] text-[#FFFBF4] text-3xl sm:text-5xl lg:text-6xl leading-[0.98]">
            Disciplines engineered to{' '}
            <span className="font-serif-italic font-normal italic text-[#FFFBF4]/90">
              scale.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#D8CFBC]/70 leading-relaxed font-normal">
            An organized, full-stack agency suite spanning digital flagships, automated sales funnels, paid media, 3D architectural signage, and custom apparel.
          </p>
        </div>

        {/* STRICT SINGLE-COLUMN (1-BY-1 VERTICAL STACK) — NO 2-COLUMN OR 3-COLUMN */}
        <div className="flex flex-col gap-6 sm:gap-8 max-w-5xl mx-auto w-full">
          {SERVICES.map((service, idx) => {
            const iconType = SERVICE_ICON_MAP[service.id] || 'website';

            return (
              <div
                key={service.id}
                className="w-full bg-[#565449]/25 border border-[#D8CFBC]/14 hover:border-[#D8CFBC]/35 hover:bg-[#565449]/35 p-6 sm:p-8 lg:p-10 rounded-[24px] flex flex-col justify-between transition-all duration-300 relative shadow-xl hover:-translate-y-0.5 group"
              >
                {/* Top Row: Number & Category Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5 border-b border-[#D8CFBC]/10 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-[#FFFBF4] px-2.5 py-1 bg-[#11120D]/60 border border-[#D8CFBC]/15 rounded-md">
                      [{service.number}]
                    </span>
                    <span className="text-xs uppercase tracking-[0.14em] text-[#D8CFBC]/70 font-semibold">
                      {service.category}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#11120D]/40 border border-[#D8CFBC]/10 rounded-full text-[11px] font-medium text-[#D8CFBC]/70">
                    <Sparkles className="w-3 h-3 text-[#D8CFBC]" />
                    <span>Discipline 0{idx + 1} of 12</span>
                  </span>
                </div>

                {/* Main Card Content */}
                <div className="space-y-5">
                  {/* Title & Icon */}
                  <div className="flex items-start gap-4">
                    <Glossy3DIcon type={iconType} />
                    <div className="space-y-1">
                      <h3 className="text-2xl sm:text-3xl font-display font-semibold text-[#FFFBF4] leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm uppercase tracking-wider text-[#D8CFBC]/70 font-semibold leading-snug">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Comprehensive Description */}
                  <p className="text-sm sm:text-base text-[#D8CFBC]/85 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  {/* Business Value Impact Box */}
                  <div className="p-4 rounded-xl bg-[#11120D]/50 border border-[#D8CFBC]/10 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3">
                    <span className="text-xs font-bold text-[#FFFBF4] uppercase tracking-wider shrink-0 mt-0.5">
                      Business Impact:
                    </span>
                    <p className="text-xs sm:text-sm text-[#D8CFBC]/80 leading-relaxed font-normal">
                      {service.businessValue}
                    </p>
                  </div>

                  {/* Deliverables Checklist (Spacious 2-column on wider screens, clean single-col on mobile) */}
                  <div className="pt-4 border-t border-[#D8CFBC]/14 space-y-3">
                    <span className="text-xs uppercase tracking-[0.14em] text-[#D8CFBC]/60 font-bold block">
                      Confirmed Key Deliverables:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs sm:text-sm text-[#D8CFBC]/90">
                      {service.deliverables.map((deliv, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#FFFBF4] shrink-0 mt-0.5" />
                          <span className="leading-snug text-[#FFFBF4]/90">{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Bottom CTA Row */}
                  <div className="pt-5 border-t border-[#D8CFBC]/14 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-[#D8CFBC]/60 order-2 sm:order-1 text-center sm:text-left">
                      Custom tailored scope · Direct integration with your team
                    </span>

                    <button
                      onClick={() => onStartProject(service.title)}
                      className="w-full sm:w-auto px-6 py-3 bg-[#FFFBF4] hover:bg-[#D8CFBC] text-[#11120D] text-xs font-semibold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-98 order-1 sm:order-2"
                    >
                      <span>Inquire {service.title}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
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
