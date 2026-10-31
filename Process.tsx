import React from 'react';

const STEPS = [
  {
    number: '01',
    phase: 'Discover',
    title: 'Understanding your goals',
    detail: 'We evaluate your business, your target customers, and what your competitors are doing. Together, we define the exact deliverables and timeline.'
  },
  {
    number: '02',
    phase: 'Design',
    title: 'Custom visual direction',
    detail: 'We design tailored layouts, typography, and clear customer journeys. No generic templates—everything is created to make your business look bigger.'
  },
  {
    number: '03',
    phase: 'Build',
    title: 'Fast & responsive coding',
    detail: 'We code your website using modern, clean standards. It loads in under a second, works smoothly across every smartphone and desktop, and directs leads straight to your WhatsApp and email.'
  },
  {
    number: '04',
    phase: 'Launch',
    title: 'Audit & seamless handoff',
    detail: 'We test across devices, verify speed and SEO tags, launch your site, and provide dedicated support so you have total peace of mind.'
  }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 sm:py-28 lg:py-36 relative border-b border-[#D8CFBC]/14 bg-[#11120D] text-[#FFFBF4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 mb-12 sm:mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#565449]/30 border border-[#D8CFBC]/14 text-xs font-medium tracking-[0.14em] uppercase text-[#D8CFBC]/75">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFFBF4] shrink-0" />
            <span>Workflow</span>
          </div>

          <h2 className="font-display font-semibold tracking-[-0.03em] text-[#FFFBF4] text-3xl sm:text-5xl lg:text-6xl leading-[0.98]">
            From initial idea to successful{' '}
            <span className="font-serif-italic font-normal italic text-[#FFFBF4]/90">
              launch.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#D8CFBC]/70 leading-relaxed font-normal">
            A straightforward, transparent four-step process built on quick communication and zero guesswork.
          </p>
        </div>

        {/* 4-step Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="p-6 sm:p-7 bg-[#565449]/30 border border-[#D8CFBC]/14 hover:border-[#D8CFBC]/30 hover:bg-[#565449]/40 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#D8CFBC]/14 pb-3">
                  <span className="text-xs font-mono font-bold text-[#D8CFBC]/50">
                    STEP {step.number}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-[#D8CFBC]/80 font-medium">
                    {step.phase}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-display font-semibold text-[#FFFBF4]">
                  {step.title}
                </h3>

                <p className="text-sm text-[#D8CFBC]/70 leading-relaxed font-normal">
                  {step.detail}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-[#D8CFBC]/50">
                <span className="w-1 h-1 bg-[#D8CFBC]/50 rounded-full" />
                <span>Clear milestone sign-off</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
