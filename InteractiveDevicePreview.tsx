import React, { useState } from 'react';
import { Monitor, Tablet, Smartphone, Star, Check } from 'lucide-react';

export const InteractiveDevicePreview: React.FC = () => {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [selectedRoom, setSelectedRoom] = useState<'villa' | 'suite' | 'penthouse'>('villa');
  const [nights, setNights] = useState<number>(3);

  const roomPrices = {
    villa: 18500,
    suite: 12000,
    penthouse: 29000,
  };

  return (
    <div className="bg-[#FFFBF4] border border-[#11120D]/10 p-5 sm:p-8 space-y-6 mb-12 sm:mb-16 shadow-[0_12px_32px_rgba(17,18,13,0.06)]">
      {/* Header bar with device switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#11120D]/10 pb-5">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#565449] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#11120D]" />
            <span>Interactive Multi-Viewport Simulator</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-semibold text-[#11120D]">
            Experience responsive fluidity
          </h3>
          <p className="text-sm text-[#565449]">
            Switch devices to test the live reservation engine and editorial layout.
          </p>
        </div>

        {/* Device Switcher Buttons */}
        <div className="flex items-center gap-1.5 bg-[#D8CFBC]/40 p-1 border border-[#11120D]/10 self-start sm:self-auto">
          <button
            onClick={() => setDevice('desktop')}
            className={`px-3 py-1.5 text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
              device === 'desktop'
                ? 'bg-[#11120D] text-[#FFFBF4] font-semibold shadow-sm'
                : 'text-[#565449] hover:text-[#11120D]'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Desktop</span>
          </button>
          <button
            onClick={() => setDevice('tablet')}
            className={`px-3 py-1.5 text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
              device === 'tablet'
                ? 'bg-[#11120D] text-[#FFFBF4] font-semibold shadow-sm'
                : 'text-[#565449] hover:text-[#11120D]'
            }`}
          >
            <Tablet className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Tablet</span>
          </button>
          <button
            onClick={() => setDevice('mobile')}
            className={`px-3 py-1.5 text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
              device === 'mobile'
                ? 'bg-[#11120D] text-[#FFFBF4] font-semibold shadow-sm'
                : 'text-[#565449] hover:text-[#11120D]'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Mobile</span>
          </button>
        </div>
      </div>

      {/* Viewport Frame */}
      <div className="flex justify-center transition-all duration-300">
        <div
          className={`w-full transition-all duration-300 border border-[#11120D]/15 bg-[#11120D] shadow-2xl overflow-hidden ${
            device === 'desktop'
              ? 'max-w-full'
              : device === 'tablet'
              ? 'max-w-[620px]'
              : 'max-w-[340px]'
          }`}
        >
          {/* Simulated Browser Bar */}
          <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-[#D8CFBC]/14 bg-[#1A1B16] text-[11px] text-[#D8CFBC]/60">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#D8CFBC]/30" />
              <span className="w-2 h-2 rounded-full bg-[#D8CFBC]/30" />
              <span className="w-2 h-2 rounded-full bg-[#D8CFBC]/30" />
            </div>
            <span className="text-[#D8CFBC]/80 truncate font-mono text-[10px]">
              azurehaven-resort.com/booking
            </span>
            <span className="text-[#FFFBF4] text-[10px] font-medium">SSL 256-bit</span>
          </div>

          {/* Interactive Hotel Web Application Inside (Retains its bespoke client presentation) */}
          <div className="p-4 sm:p-6 space-y-5 text-[#FFFBF4] bg-[#11120D]">
            {/* Top Brand Bar */}
            <div className="flex items-center justify-between border-b border-[#D8CFBC]/14 pb-3">
              <div>
                <span className="font-display font-bold tracking-wider text-sm block text-[#FFFBF4]">
                  AZURE HAVEN
                </span>
                <span className="text-[10px] text-[#D8CFBC]/60 tracking-[0.14em] uppercase">
                  Uluwatu Clifftop Villas
                </span>
              </div>
              <div className="hidden xs:flex items-center gap-4 text-xs text-[#D8CFBC]/70">
                <span className="text-[#FFFBF4]">Sanctuary</span>
                <span>Dining</span>
                <span>Spa</span>
              </div>
            </div>

            {/* Simulated Hero Feature */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-7 space-y-2.5">
                <div className="flex items-center gap-1 text-[11px] text-[#FFFBF4]">
                  <Star className="w-3.5 h-3.5 fill-[#FFFBF4] text-[#FFFBF4]" />
                  <Star className="w-3.5 h-3.5 fill-[#FFFBF4] text-[#FFFBF4]" />
                  <Star className="w-3.5 h-3.5 fill-[#FFFBF4] text-[#FFFBF4]" />
                  <Star className="w-3.5 h-3.5 fill-[#FFFBF4] text-[#FFFBF4]" />
                  <Star className="w-3.5 h-3.5 fill-[#FFFBF4] text-[#FFFBF4]" />
                  <span className="ml-1 text-[10px] text-[#D8CFBC]/60">5.0 Boutique Rating</span>
                </div>
                <h4 className="font-display text-lg sm:text-xl font-semibold leading-tight text-[#FFFBF4]">
                  Direct Zero-Commission Booking Suite
                </h4>
                <p className="text-xs text-[#D8CFBC]/70 leading-relaxed">
                  Guests reserve their ocean villa directly with instant rate calculation, WhatsApp confirmation and zero intermediary commissions.
                </p>
              </div>

              {/* Interactive Rate Calculator Card */}
              <div className="md:col-span-5 bg-[#565449]/30 border border-[#D8CFBC]/15 p-3.5 space-y-3">
                <div className="text-[11px] text-[#D8CFBC]/70 uppercase tracking-wider font-medium">
                  Select Suite Type
                </div>
                <div className="grid grid-cols-3 gap-1 text-[11px]">
                  <button
                    onClick={() => setSelectedRoom('villa')}
                    className={`py-1.5 px-1 text-center transition-colors border ${
                      selectedRoom === 'villa'
                        ? 'bg-[#FFFBF4] text-[#11120D] font-semibold border-[#FFFBF4]'
                        : 'bg-[#11120D]/60 text-[#D8CFBC] border-[#D8CFBC]/20'
                    }`}
                  >
                    Villa
                  </button>
                  <button
                    onClick={() => setSelectedRoom('suite')}
                    className={`py-1.5 px-1 text-center transition-colors border ${
                      selectedRoom === 'suite'
                        ? 'bg-[#FFFBF4] text-[#11120D] font-semibold border-[#FFFBF4]'
                        : 'bg-[#11120D]/60 text-[#D8CFBC] border-[#D8CFBC]/20'
                    }`}
                  >
                    Suite
                  </button>
                  <button
                    onClick={() => setSelectedRoom('penthouse')}
                    className={`py-1.5 px-1 text-center transition-colors border ${
                      selectedRoom === 'penthouse'
                        ? 'bg-[#FFFBF4] text-[#11120D] font-semibold border-[#FFFBF4]'
                        : 'bg-[#11120D]/60 text-[#D8CFBC] border-[#D8CFBC]/20'
                    }`}
                  >
                    Penthouse
                  </button>
                </div>

                {/* Duration */}
                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-[#D8CFBC]/70">Duration:</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setNights(Math.max(1, nights - 1))}
                      className="w-5 h-5 bg-[#11120D] border border-[#D8CFBC]/20 text-xs flex items-center justify-center text-[#FFFBF4]"
                    >
                      -
                    </button>
                    <span className="font-semibold text-xs tabular-nums text-[#FFFBF4]">{nights} nights</span>
                    <button
                      onClick={() => setNights(nights + 1)}
                      className="w-5 h-5 bg-[#11120D] border border-[#D8CFBC]/20 text-xs flex items-center justify-center text-[#FFFBF4]"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Total */}
                <div className="pt-2 border-t border-[#D8CFBC]/15 flex items-baseline justify-between">
                  <span className="text-xs text-[#D8CFBC]/70">Direct Rate:</span>
                  <span className="text-sm font-semibold font-display text-[#FFFBF4] tabular-nums">
                    ₹{(roomPrices[selectedRoom] * nights).toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="w-full py-2 bg-[#FFFBF4] text-[#11120D] font-semibold text-center text-xs flex items-center justify-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>Reserve Direct</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
