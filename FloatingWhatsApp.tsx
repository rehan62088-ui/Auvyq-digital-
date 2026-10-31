import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const handleWhatsAppClick = () => {
    try {
      // 1. Google Analytics 4 (gtag)
      if (typeof window !== 'undefined' && typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === 'function') {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'click_floating_whatsapp', {
          event_category: 'lead_generation',
          event_label: 'Floating WhatsApp Direct Trigger',
          transport_type: 'beacon'
        });
      }

      // 2. Google Tag Manager (dataLayer)
      if (typeof window !== 'undefined') {
        const win = window as unknown as { dataLayer?: Record<string, unknown>[] };
        if (Array.isArray(win.dataLayer)) {
          win.dataLayer.push({
            event: 'whatsapp_direct_click',
            interaction_source: 'floating_widget',
            target_number: '+916206242488',
            timestamp: new Date().toISOString()
          });
        }
      }
    } catch (err) {
      // Non-blocking analytics error suppression
      console.debug('[Analytics Log] WhatsApp click tracker event error:', err);
    }
  };

  return (
    <a
      href="https://wa.me/916206242488?text=Hi%20AUVYQ%20Digital%2C%20I'm%20interested%20in%20discussing%20a%20project%20for%20my%20business."
      target="_blank"
      rel="noreferrer noopener"
      onClick={handleWhatsAppClick}
      aria-label="Direct WhatsApp Chat with AUVYQ Digital"
      className="fixed bottom-6 left-6 z-40 p-3.5 bg-[#11120D] hover:bg-[#565449]/40 text-[#FFFBF4] border border-[#D8CFBC]/25 hover:border-[#D8CFBC]/50 shadow-[0_12px_32px_rgba(0,0,0,0.6)] transition-all duration-300 flex items-center gap-2.5 group cursor-pointer"
    >
      <MessageCircle className="w-5 h-5 text-[#FFFBF4] group-hover:scale-110 transition-transform" />
      <span className="hidden sm:inline text-xs font-semibold tracking-tight text-[#FFFBF4]">
        WhatsApp Direct
      </span>
    </a>
  );
};
