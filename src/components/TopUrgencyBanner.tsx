import React, { useState, useEffect } from 'react';
import { MapPin, Flame } from 'lucide-react';

export const TopUrgencyBanner: React.FC = () => {
  // Event is Saturday, October 24 at 13:00 h
  const calculateTimeLeft = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    let target = new Date(currentYear, 9, 24, 13, 0, 0); // Month 9 = October

    if (now.getTime() > target.getTime()) {
      target = new Date(currentYear + 1, 9, 24, 13, 0, 0);
    }

    const diff = target.getTime() - now.getTime();
    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <aside aria-label="Aviso de disponibilidad y urgencia" className="bg-brand-black text-white text-xs sm:text-sm font-semibold tracking-wide border-b-2 border-brand-pink relative overflow-hidden">
      {/* Background glow strip */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-pink/20 via-transparent to-brand-yellow/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-2 relative z-10">
        <div className="flex items-center gap-2 text-center sm:text-left flex-wrap justify-center">
          <span className="inline-flex items-center gap-1 bg-brand-pink text-white text-[11px] font-extrabold uppercase px-2 py-0.5 rounded-full animate-pulse">
            <Flame className="w-3.5 h-3.5 fill-current" />
            Cupos Críticos
          </span>
          <span className="text-zinc-200">
            Edición exclusiva limitada a <strong className="text-brand-yellow font-black">15 creadoras</strong> · 
            <span className="text-brand-pink-light ml-1 font-bold">¡Últimos cupos disponibles con USD 100 OFF!</span>
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1.5 bg-zinc-900/90 px-2.5 py-1 rounded-md border border-zinc-700">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span className="text-zinc-300 font-mono">
              {String(timeLeft.days).padStart(2, '0')}d : {String(timeLeft.hours).padStart(2, '0')}h : {String(timeLeft.minutes).padStart(2, '0')}m : {String(timeLeft.seconds).padStart(2, '0')}s
            </span>
          </div>
          <span className="hidden md:inline-flex items-center gap-1 text-zinc-400">
            <MapPin className="w-3.5 h-3.5 text-brand-pink" /> Hotel Costanero, MVD
          </span>
        </div>
      </div>
    </aside>
  );
};
