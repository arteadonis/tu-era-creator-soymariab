import React, { useState } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';
import { triggerSparkleConfetti } from '../utils/confetti';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCtaClick = () => {
    triggerSparkleConfetti();
    onOpenBooking();
  };

  return (
    <nav aria-label="Navegación principal" className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b-2 border-brand-black transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand Logo & Profile Avatar */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src="/assets/avatar-perfil-soymariab.jpg"
              alt="María B"
              className="w-11 h-11 rounded-full object-cover border-2 border-brand-black shadow-[2px_2px_0px_#0F0F12] group-hover:rotate-6 transition-transform"
            />
            <span className="absolute -bottom-1 -right-1 text-xs select-none">✨</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-lg sm:text-xl tracking-tight text-brand-black leading-none flex items-center gap-1">
              @soymariab
            </span>
            <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-brand-pink mt-0.5">
              Workshop "Tu era Creator"
            </span>
          </div>
        </a>

        {/* Desktop Nav Items (without calculadora) */}
        <div className="hidden lg:flex items-center gap-7 font-bold text-sm tracking-wide text-brand-black">
          <a href="#beneficios" className="hover:text-brand-pink transition-colors">Beneficios</a>
          <a href="#marcas" className="hover:text-brand-pink transition-colors">Marcas Aliadas</a>
          <a href="#temario" className="hover:text-brand-pink transition-colors">Temario</a>
          <a href="#experiencia" className="hover:text-brand-pink transition-colors">Hotel Costanero</a>
          <a href="#faq" className="hover:text-brand-pink transition-colors">Preguntas</a>
        </div>

        {/* Event Date Pill & Quick CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="hidden md:flex flex-col text-right">
            <span className="text-[11px] font-black uppercase text-brand-pink tracking-wider">24 OCTUBRE · MONTEVIDEO</span>
            <span className="text-xs font-bold text-zinc-600">13:00 a 17:00 h</span>
          </div>

          <button
            onClick={handleCtaClick}
            className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-brand-pink text-white font-black text-sm tracking-wide border-2 border-brand-black shadow-[3px_3px_0px_#0F0F12] hover:shadow-[1px_1px_0px_#0F0F12] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[3px] active:translate-y-[3px] transition-all"
          >
            <span>Reservar Lugar · $90</span>
            <Sparkles className="w-4 h-4 fill-brand-yellow text-brand-yellow" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={handleCtaClick}
            className="px-3.5 py-1.5 rounded-full bg-brand-pink text-white font-extrabold text-xs border-2 border-brand-black shadow-[2px_2px_0px_#0F0F12]"
          >
            $90 USD
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border-2 border-brand-black bg-brand-yellow text-brand-black shadow-[2px_2px_0px_#0F0F12]"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FAF8F5] border-b-2 border-brand-black px-4 pt-3 pb-6 flex flex-col gap-3 font-bold text-brand-black">
          <a href="#beneficios" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-zinc-200">✨ Beneficios Clave</a>
          <a href="#marcas" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-zinc-200">🤝 6 Marcas Confirmadas</a>
          <a href="#temario" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-zinc-200">📚 Los 6 Pilares del Workshop</a>
          <a href="#experiencia" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-zinc-200">📍 Experiencia Hotel Costanero</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-zinc-200">❓ Preguntas Frecuentes</a>
          
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              handleCtaClick();
            }}
            className="w-full mt-2 py-3 rounded-xl bg-brand-pink text-white font-black text-center border-2 border-brand-black shadow-[3px_3px_0px_#0F0F12]"
          >
            Asegurar Mi Cupo · USD 90
          </button>
        </div>
      )}
    </nav>
  );
};
