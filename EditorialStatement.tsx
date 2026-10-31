import React from 'react';

export const EditorialStatement: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-36 relative border-b border-[#D8CFBC]/14 overflow-hidden bg-[#11120D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Section Marker */}
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#565449]/30 border border-[#D8CFBC]/14 text-xs font-medium tracking-[0.14em] uppercase text-[#D8CFBC]/75">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFFBF4] shrink-0" />
              <span>Studio Manifesto</span>
            </div>
          </div>

          {/* Editorial Big Typography & Supporting Text */}
          <div className="lg:col-span-9 space-y-8 sm:space-y-12">
            <h2 className="font-display font-semibold tracking-[-0.03em] text-[#FFFBF4] text-3xl sm:text-5xl lg:text-6xl leading-[0.98] text-balance">
              Good design gets attention.{' '}
              <span className="font-serif-italic font-normal italic text-[#FFFBF4]/90 block sm:inline">
                Great
              </span>{' '}
              digital experiences keep it.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-[#D8CFBC]/14">
              <div className="md:col-span-8">
                <p className="text-base sm:text-lg lg:text-xl text-[#D8CFBC]/70 leading-relaxed font-normal">
                  AUVYQ Digital combines custom web development, hotel reservation platforms, targeted digital marketing, branding, 3D physical signboards and custom merchandise to help your business stand out and win customers.
                </p>
              </div>

              <div className="md:col-span-4 flex flex-col justify-end border-t md:border-t-0 md:border-l border-[#D8CFBC]/14 pt-6 md:pt-0 md:pl-8">
                <div className="text-sm text-[#D8CFBC]/70 space-y-2.5">
                  <div className="text-[#FFFBF4] font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#FFFBF4] shrink-0" />
                    <span>Direct Studio Access</span>
                  </div>
                  <div>Zero middle managers or sales handoffs.</div>
                  <div>Work directly with the engineer who builds your site.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
