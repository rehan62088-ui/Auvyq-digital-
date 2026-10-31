import React, { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { Hero3D } from './Hero3D';

interface HeroProps {
  onStartProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject }) => {
  // Counters animation when mounted
  const [loadSpeedCount, setLoadSpeedCount] = useState(0.0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 1200;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setLoadSpeedCount(parseFloat((ease * 0.76).toFixed(2)));
      setSatisfactionCount(Math.floor(ease * 100));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-16 overflow-hidden bg-[#11120D]">
      {/* Soft Bone-colored radial spotlight (6–10% opacity) behind hero and 3D scene */}
      <div 
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_25%,rgba(216,207,188,0.08),transparent_70%)]" 
        aria-hidden="true" 
      />
      <div 
        className="absolute inset-0 pointer-events-none opacity-25 bg-[linear-gradient(to_right,rgba(216,207,188,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(216,207,188,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,#11120D_40%,transparent_80%)]" 
        aria-hidden="true" 
      />

      {/* Main Content & 3D Interactive Stage */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Bold Editorial Typography & CTA */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Section Tag */}
            <div className="hero-enter-1 inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#565449]/30 border border-[#D8CFBC]/14 text-xs font-medium tracking-[0.14em] uppercase text-[#D8CFBC]/80">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFFBF4] shrink-0" />
              <span>Independent Digital Studio · Established 2026</span>
            </div>

            {/* Main Headline: Sentence case with Clash Display & Instrument Serif italic */}
            <h1 className="hero-enter-2 font-display font-semibold tracking-[-0.03em] text-[#FFFBF4] text-4xl sm:text-6xl lg:text-7xl leading-[0.95] text-balance">
              Websites that make your business look{' '}
              <span className="font-serif-italic font-normal italic text-[#FFFBF4]/90 block sm:inline">
                bigger.
              </span>
            </h1>

            {/* Subtext: Plain, confident, benefit-first English in Bone at 70% */}
            <p className="hero-enter-3 text-base sm:text-lg lg:text-xl text-[#D8CFBC]/70 max-w-xl leading-relaxed">
              Websites, booking systems, SEO, branding and signage for businesses and hotels. Built directly by the studio lead.
            </p>

            {/* Buttons: Floral White fill on dark + Bone/Olive border ghost */}
            <div className="hero-enter-4 pt-2 sm:pt-4 flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4">
              <button
                onClick={onStartProject}
                className="w-full xs:w-auto px-7 py-4 bg-[#FFFBF4] hover:bg-[#D8CFBC] text-[#11120D] font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer shadow-[0_4px_24px_rgba(216,207,188,0.18)] active:scale-[0.98] min-h-[50px]"
              >
                <span>Start a project</span>
                <ArrowUpRight className="w-4 h-4 text-[#11120D] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
              </button>

              <a
                href="#work"
                className="w-full xs:w-auto px-7 py-4 bg-transparent hover:bg-[#565449]/25 text-[#FFFBF4] font-medium text-sm border border-[#D8CFBC]/25 hover:border-[#D8CFBC]/50 transition-all duration-200 flex items-center justify-center gap-2.5 min-h-[50px]"
              >
                <span>See our work</span>
                <ArrowDown className="w-4 h-4 text-[#D8CFBC]/70 shrink-0" />
              </a>
            </div>
          </div>

          {/* Right Column: 3D Monitor on Pedestal with Live Scrolling Site Canvas */}
          <div className="hero-enter-5 lg:col-span-5 h-[360px] sm:h-[440px] lg:h-[540px] w-full flex items-center justify-center relative">
            <Hero3D />
          </div>
        </div>
      </div>

      {/* Bottom Technical Specifications & Metric Ribbon */}
      <div className="hero-enter-6 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4">
        <div className="border-t border-[#D8CFBC]/14 pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {/* Metric 1 */}
          <div className="flex flex-col space-y-1 sm:border-r border-[#D8CFBC]/14 sm:pr-6">
            <div className="text-3xl sm:text-4xl font-display font-semibold text-[#FFFBF4] tabular-nums tracking-tight">
              {satisfactionCount}%
            </div>
            <div className="text-xs text-[#D8CFBC]/50 font-medium uppercase tracking-[0.14em]">
              Bespoke Architecture
            </div>
            <p className="text-sm text-[#D8CFBC]/70 pt-0.5">
              Zero prefabricated templates. Tailored UI designed from scratch.
            </p>
          </div>

          {/* Metric 2 */}
          <div className="flex flex-col space-y-1 sm:border-r border-[#D8CFBC]/14 sm:pr-6">
            <div className="text-3xl sm:text-4xl font-display font-semibold text-[#FFFBF4] tabular-nums tracking-tight">
              &lt; {loadSpeedCount.toFixed(2)}s
            </div>
            <div className="text-xs text-[#D8CFBC]/50 font-medium uppercase tracking-[0.14em]">
              Performance Benchmark
            </div>
            <p className="text-sm text-[#D8CFBC]/70 pt-0.5">
              Sub-second Core Web Vitals to keep visitors engaged and booking.
            </p>
          </div>

          {/* Metric 3 */}
          <div className="flex flex-col space-y-1">
            <div className="text-3xl sm:text-4xl font-display font-semibold text-[#FFFBF4] tabular-nums tracking-tight">
              ₹10k–50k
            </div>
            <div className="text-xs text-[#D8CFBC]/50 font-medium uppercase tracking-[0.14em]">
              Clear Investment Scope
            </div>
            <p className="text-sm text-[#D8CFBC]/70 pt-0.5">
              Fixed transparent pricing with zero surprise charges or retainers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
