import React from 'react';

export const AboutStudio: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 lg:py-36 relative border-b border-[#D8CFBC]/14 bg-[#11120D] text-[#FFFBF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-8 sm:space-y-10">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#565449]/30 border border-[#D8CFBC]/14 text-xs font-medium tracking-[0.14em] uppercase text-[#D8CFBC]/75">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFFBF4] shrink-0" />
            <span>Studio Background & Standards</span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs text-[#D8CFBC]/60 uppercase tracking-widest font-semibold">
              <span className="text-[#FFFBF4]">AUVYQ Digital</span>
              <span>/</span>
              <span>Established 2026</span>
            </div>

            <h2 className="font-display font-semibold tracking-[-0.03em] text-[#FFFBF4] text-3xl sm:text-5xl lg:text-6xl leading-[0.98]">
              Independent studio.{' '}
              <span className="font-serif-italic font-normal italic text-[#FFFBF4]/90 block sm:inline">
                Uncompromising
              </span>{' '}
              standards.
            </h2>
          </div>

          <div className="space-y-5 text-base sm:text-lg lg:text-xl text-[#D8CFBC]/70 leading-relaxed font-normal max-w-3xl">
            <p>
              AUVYQ Digital is a premium digital studio creating distinctive websites, digital experiences, brand identities and creative solutions. We engineer custom web platforms, direct hotel booking systems, unified branding languages, physical 3D storefront signboards, and custom apparel for ambitious businesses.
            </p>
            <p className="text-[#D8CFBC]/60 text-sm sm:text-base lg:text-lg">
              We reject arbitrary decorative clutter in favor of visual clarity, speed, and real commercial impact. You work directly with the studio lead—the engineer who writes the code and designs the interface—ensuring your vision is translated without translation loss.
            </p>
          </div>

          {/* Genuine Studio Principles */}
          <div className="pt-8 border-t border-[#D8CFBC]/14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div className="space-y-1.5 border-l border-[#D8CFBC]/20 pl-4 py-1">
              <span className="text-[#D8CFBC]/50 block uppercase tracking-wider text-xs">Primary Focus</span>
              <span className="text-[#FFFBF4] font-medium">Bespoke Digital & Physical Assets</span>
            </div>
            <div className="space-y-1.5 border-l border-[#D8CFBC]/20 pl-4 py-1">
              <span className="text-[#D8CFBC]/50 block uppercase tracking-wider text-xs">Direct Engagement</span>
              <span className="text-[#FFFBF4] font-medium">Direct Access to Studio Lead</span>
            </div>
            <div className="space-y-1.5 border-l border-[#D8CFBC]/20 pl-4 py-1 sm:col-span-2 lg:col-span-1">
              <span className="text-[#D8CFBC]/50 block uppercase tracking-wider text-xs">Direct Verification</span>
              <span className="text-[#FFFBF4] font-medium">Zero Outsourcing or Middlemen</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
