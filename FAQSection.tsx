import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/faq';
import { ChevronDown, MessageCircle, Mail } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Pricing', 'Services', 'Process', 'Support'];

  const filteredItems = selectedCategory === 'All'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter(item => item.category === selectedCategory);

  const toggleAccordion = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 sm:py-28 lg:py-36 relative border-b border-[#D8CFBC]/14 bg-[#11120D] text-[#FFFBF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 mb-12 sm:mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#565449]/30 border border-[#D8CFBC]/14 text-xs font-medium tracking-[0.14em] uppercase text-[#D8CFBC]/75">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFFBF4] shrink-0" />
            <span>Common Queries</span>
          </div>

          <h2 className="font-display font-semibold tracking-[-0.03em] text-[#FFFBF4] text-3xl sm:text-5xl lg:text-6xl leading-[0.98]">
            Frequently asked{' '}
            <span className="font-serif-italic font-normal italic text-[#FFFBF4]/90">
              questions.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#D8CFBC]/70 leading-relaxed font-normal">
            Clear, honest answers regarding our fixed investment pricing, deliverables, turnaround schedules, and post-launch support.
          </p>

          {/* Filter buttons */}
          <div className="pt-3 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-medium border transition-all cursor-pointer min-h-[38px] ${
                  selectedCategory === cat
                    ? 'bg-[#FFFBF4] text-[#11120D] font-semibold border-[#FFFBF4] shadow-sm'
                    : 'bg-[#565449]/30 text-[#D8CFBC]/70 border-[#D8CFBC]/14 hover:text-[#FFFBF4] hover:border-[#D8CFBC]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl space-y-3">
          {filteredItems.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="bg-[#565449]/30 border border-[#D8CFBC]/14 hover:border-[#D8CFBC]/30 transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-display font-medium text-[#FFFBF4]">
                    {item.question}
                  </span>
                  <div className={`p-1.5 bg-[#11120D] border border-[#D8CFBC]/15 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4 text-[#D8CFBC]/80" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#D8CFBC]/70 leading-relaxed border-t border-[#D8CFBC]/10">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Help Prompt */}
        <div className="mt-12 p-6 bg-[#565449]/30 border border-[#D8CFBC]/14 max-w-4xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-base font-semibold text-[#FFFBF4]">
              Have a specific question not covered here?
            </h4>
            <p className="text-xs text-[#D8CFBC]/70">
              Message us directly for an immediate answer from the studio lead.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/916206242488?text=Hi%20Auvyq%20Digital,%20I%20have%20a%20question%20about%20your%20services."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFFBF4] hover:bg-[#D8CFBC] text-[#11120D] font-semibold text-xs transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Lead</span>
            </a>
            <a
              href="mailto:rehan62088@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-transparent border border-[#D8CFBC]/25 hover:border-[#D8CFBC]/50 text-[#FFFBF4] text-xs transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#D8CFBC]" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
