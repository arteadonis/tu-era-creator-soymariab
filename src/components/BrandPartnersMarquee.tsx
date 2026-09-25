import React from 'react';
import { CheckCircle, Handshake, Sparkles } from 'lucide-react';

interface BrandItem {
  name: string;
  category: string;
  productType: string;
  logo: string;
  tag: string;
}

const BRANDS: BrandItem[] = [
  {
    name: 'Óptica Censa',
    category: 'Salud Visual & Moda',
    productType: 'Lentes y armazones de tendencia',
    logo: '/assets/optica-censa.png',
    tag: 'Accesorios & Estilo',
  },
  {
    name: 'Ron Biocosmética',
    category: 'Biocosmética Natural',
    productType: 'Cuidado facial y skincare botánico',
    logo: '/assets/ron-biocosmetica.png',
    tag: 'Skincare Consciente',
  },
  {
    name: 'Dulce Sofía',
    category: 'Gastronomía Dulce',
    productType: 'Galletas y repostería artesanal',
    logo: '/assets/dulce-sofia.png',
    tag: 'Dulces & Treats',
  },
  {
    name: 'Liss Pro Tect',
    category: 'Cuidado Capilar',
    productType: 'Productos de alisado progresivo',
    logo: '/assets/liss-pro-tect.png',
    tag: 'Haircare Profesional',
  },
  {
    name: 'Pura Vida Accesorios',
    category: 'Moda & Complementos',
    productType: 'Accesorios y joyería de diseño',
    logo: '/assets/pura-vida-accesorios.png',
    tag: 'Estilo & Tendencias',
  },
  {
    name: 'Biogreen',
    category: 'Aromas & Bienestar',
    productType: 'Aguas perfumadas y aromatizantes',
    logo: '/assets/biogreen.png',
    tag: 'Fragancias de Hogar',
  },
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
            Conoce las <span className="text-brand-pink">6 marcas aliadas</span> confirmadas
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 font-medium leading-relaxed">
            Olvídate de mandar 50 mensajes a ciegas esperando que alguien responda. En este workshop, las marcas ya están en la mesa. <strong>Saldrás del evento con una asignación activa y un brief real para realizar tu primera colaboración de contenido por intercambio (productos y experiencias reales).</strong>
          </p>
        </div>

        {/* Brands Grid with Real Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 mb-10">
          {BRANDS.map((brand, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/90 rounded-2xl border-2 border-zinc-800 hover:border-brand-pink p-3.5 sm:p-4 flex flex-col items-center justify-between text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,46,147,0.25)] group"
            >
              {/* Clean White Logo Container for maximum crispness */}
              <div className="w-full h-24 sm:h-28 bg-white rounded-xl p-3 flex items-center justify-center border border-white/10 group-hover:scale-[1.02] transition-transform duration-300 overflow-hidden shadow-inner">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-16 sm:max-h-20 max-w-[90%] object-contain filter group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Brand Info */}
              <div className="w-full mt-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-black text-xs sm:text-sm text-white tracking-wide uppercase leading-tight mb-1">
                    {brand.name}
                  </h3>
                  <span className="block text-[11px] font-bold text-brand-yellow">
                    {brand.category}
                  </span>
                  <p className="text-[10px] text-zinc-400 mt-1 line-clamp-2 leading-snug">
                    {brand.productType}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-zinc-800/80 inline-flex items-center justify-center gap-1 text-[9px] uppercase font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  <CheckCircle className="w-2.5 h-2.5 text-emerald-400" />
                  Confirmada
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Callout Box */}
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-brand-pink/20 via-zinc-900 to-brand-yellow/20 border-2 border-zinc-700 rounded-2xl p-4 sm:p-6 text-center">
          <div className="inline-flex items-center gap-1.5 text-brand-yellow text-xs font-black uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>¿Por qué hacemos esto?</span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-200 font-medium leading-relaxed">
            Porque sabemos que el paso más difícil de un creador es conseguir que <strong className="text-white">la primera marca confíe en ti</strong>. En <strong>Tu era Creator</strong> derribamos esa barrera: trabajas con briefs reales de marcas consolidadas en Uruguay para inaugurar tu portafolio profesional desde el día uno.
          </p>
        </div>

      </div>
    </section>
  );
};
