import React from 'react';
import { Compass, Target, Zap, ShieldCheck } from 'lucide-react';

const ADVANTAGES = [
  {
    icon: <Compass className="w-5 h-5 text-[#FFFBF4]" />,
    number: '01',
    title: 'Custom design that builds authority',
    copy: 'Every visual layout, typography choice, and responsive breakpoint is crafted with intent. We eliminate generic template clutter so your business immediately looks established and credible.'
  },
  {
    icon: <Target className="w-5 h-5 text-[#FFFBF4]" />,
    number: '02',
    title: 'Engineered for direct inquiries & bookings',
    copy: 'A website should make it effortless for customers to contact you. We build friction-free inquiry flows with direct WhatsApp buttons, instant call triggers, and automated lead capture.'
  },
  {
    icon: <Zap className="w-5 h-5 text-[#FFFBF4]" />,
    number: '03',
    title: 'Full digital & physical brand coverage',
    copy: 'From high-speed React websites and hotel booking systems to physical 3D acrylic signboards and branded staff apparel, your brand presence stays cohesive across every touchpoint.'
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-[#FFFBF4]" />,
    number: '04',
    title: 'Honest delivery & transparent pricing',
    copy: 'Fixed one-time packages (₹10,000 / ₹20,000 / ₹30,000 / ₹50,000) with defined deliverable scopes and post-launch support. No surprise bills, no hidden markups, and direct access to the studio lead.'
  }
];

export const WhyAuvyq: React.FC = () => {
  return (
    <section id="why-us" className="py-20 sm:py-28 lg:py-36 relative border-b border-[#D8CFBC]/14 bg-[#11120D] text-[#FFFBF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Title Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#565449]/30 border border-[#D8CFBC]/14 text-xs font-medium tracking-[0.14em] uppercase text-[#D8CFBC]/75">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFFBF4] shrink-0" />
              <span>Studio Edge</span>
            </div>

            <h2 className="font-display font-semibold tracking-[-0.03em] text-[#FFFBF4] text-3xl sm:text-4xl lg:text-5xl leading-[0.98]">
              Why businesses choose AUVYQ to{' '}
              <span className="font-serif-italic font-normal italic text-[#FFFBF4]/90">
                lead.
              </span>
            </h2>

            <p className="text-base text-[#D8CFBC]/70 leading-relaxed font-normal">
              We reject cookie-cutter templates. Every website is built from the ground up to give you distinct competitive separation.
            </p>
          </div>

          {/* Right 4 Editorial Points Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ADVANTAGES.map((adv) => (
              <div
                key={adv.number}
                className="p-6 sm:p-8 bg-[#565449]/30 border border-[#D8CFBC]/14 hover:border-[#D8CFBC]/30 hover:bg-[#565449]/40 transition-all duration-300 space-y-4 shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-center justify-between border-b border-[#D8CFBC]/14 pb-4">
                  <div className="p-2.5 bg-[#11120D] border border-[#D8CFBC]/15">
                    {adv.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#D8CFBC]/40">
                    0{adv.number}
                  </span>
                </div>

                <h3 className="text-xl font-display font-semibold text-[#FFFBF4]">
                  {adv.title}
                </h3>

                <p className="text-sm text-[#D8CFBC]/70 leading-relaxed font-normal">
                  {adv.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
