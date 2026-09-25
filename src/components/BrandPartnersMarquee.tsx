import React from 'react';
import { CheckCircle, Handshake } from 'lucide-react';

const BRANDS = [
  { name: 'DERMA GLOW LAB', category: 'Skincare & Belleza', icon: '🧴' },
  { name: 'URBAN CHIC STUDIO', category: 'Moda & Tendencias', icon: '👗' },
  { name: 'AUREA JEWELS', category: 'Joyería & Accesorios', icon: '💍' },
  { name: 'ROASTERS & CO. MVD', category: 'Café & Gastronomía', icon: '☕' },
  { name: 'VITA BOTANICS', category: 'Cosmética Natural', icon: '🌿' },
  { name: 'COSTANERO LIFESTYLE', category: 'Hospitality & Wellness', icon: '🏨' },
];

export const BrandPartnersMarquee: React.FC = () => {
  return (
    <section id="marcas" className="py-14 sm:py-20 bg-brand-black text-white relative overflow-hidden border-y-3 border-brand-black">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-pink/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-brand-yellow/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-brand-yellow font-extrabold text-xs uppercase tracking-wider mb-4">
            <Handshake className="w-3.5 h-3.5 text-brand-pink" />
            <span>Colaboraciones Reales por Intercambio</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white mb-4">
            Ya tenemos <span className="text-brand-pink">6 marcas confirmadas</span> para ti
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 font-medium leading-relaxed">
            Olvídate de mandar 50 correos a ciegas para que nadie responda. En este workshop, las marcas ya están en la mesa. <strong>Saldrás del evento con un brief real asignado para realizar tu primera colaboración de contenido por intercambio de productos o experiencias con marcas reales.</strong>
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-10">
          {BRANDS.map((brand, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/90 rounded-2xl border-2 border-zinc-800 hover:border-brand-pink p-4 sm:p-5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(255,46,147,0.25)] group"
            >
              <div className="text-3xl sm:text-4xl mb-3 group-hover:scale-110 transition-transform">
                {brand.icon}
              </div>
              <h4 className="font-display font-black text-xs sm:text-sm text-white tracking-wide uppercase leading-tight mb-1">
                {brand.name}
              </h4>
              <span className="text-[10px] sm:text-xs font-semibold text-brand-yellow/80">
                {brand.category}
              </span>
              <div className="mt-3 inline-flex items-center gap-1 text-[9px] uppercase font-bold text-zinc-400 bg-zinc-800/80 px-2 py-0.5 rounded-full">
                <CheckCircle className="w-2.5 h-2.5 text-emerald-400" />
                Confirmada
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Callout Box */}
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-brand-pink/20 via-zinc-900 to-brand-yellow/20 border-2 border-zinc-700 rounded-2xl p-4 sm:p-6 text-center">
          <p className="text-xs sm:text-sm text-zinc-200 font-semibold leading-snug">
            ✨ <strong className="text-white">¿Por qué hacemos esto?</strong> Porque sabemos que el paso más difícil de un creador es conseguir que la primera marca confíe en ti. Nosotros derribamos esa barrera desde el día uno.
          </p>
        </div>

      </div>
    </section>
  );
};
