import React from 'react';
import { ArrowRight } from 'lucide-react';
import { triggerSparkleConfetti } from '../utils/confetti';

interface StickyMobileBarProps {
  onOpenBooking: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenBooking }) => {
  const handleClick = () => {
    triggerSparkleConfetti();
    onOpenBooking();
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t-3 border-brand-black px-4 py-3 shadow-[0_-8px_25px_rgba(0,0,0,0.15)] animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center justify-between gap-3">
        
        {/* Left: Price & Urgency */}
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="text-[10px] font-bold text-zinc-400 line-through">USD 190</span>
            <span className="text-[9px] font-black uppercase text-brand-pink bg-brand-pink-pale px-1 rounded">
              -53%
            </span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="font-display font-black text-xl text-brand-black">USD 90</span>
            <span className="text-[10px] font-bold text-zinc-500">· 4 cupos</span>
          </div>
        </div>

        {/* Right: CTA Button */}
        <button
          onClick={handleClick}
          className="flex-1 py-3 px-4 rounded-xl bg-brand-pink text-white font-display font-black text-xs uppercase tracking-wide border-2 border-brand-black shadow-[3px_3px_0px_#0F0F12] active:translate-x-[2px] active:translate-y-[2px] flex items-center justify-center gap-1.5"
        >
          <span>Reservar Mi Lugar</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

      </div>
    </div>
  );
};
