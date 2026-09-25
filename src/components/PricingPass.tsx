import React from 'react';
import { Check, Flame, MessageCircle, CreditCard, ShieldCheck } from 'lucide-react';

interface PricingPassProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
  onOpenMercadoPago: () => void;
}

const INCLUDED_FEATURES = [
  'Acceso al workshop presencial de 4 horas en Hotel Costanero',
  '1 Colaboración real garantizada por intercambio con marcas confirmadas',
  'Coffee break gourmet de especialidad y bebidas durante la tarde',
  'Creator Starter Kit físico de bienvenida para cada asistente',
  'Plantillas de Pitch en frío para marcas (guiones probados)',
  'Plantillas de Media Kit y propuestas profesionales de contenido',
  'Acceso al grupo privado VIP de creadoras con feedback de María',
  'Certificado oficial de finalización "Tu Era Creator"'
];

export const PricingPass: React.FC<PricingPassProps> = ({
  onOpenWhatsApp,
  onOpenMercadoPago,
}) => {
  return (
    <section id="inversion" className="py-16 sm:py-24 bg-brand-black text-white relative overflow-hidden border-t-3 border-brand-black">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-pink/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-yellow/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-zinc-900 border border-brand-pink/50 text-brand-pink font-extrabold text-xs uppercase tracking-wider mb-4">
            <Flame className="w-3.5 h-3.5 fill-current" />
            <span>Últimos Cupos Disponibles</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white mb-4">
            Asegura tu lugar en <br />
            <span className="text-brand-yellow">“Tu era Creator”</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 font-medium">
            Habilitamos un precio especial de lanzamiento para los últimos lugares. Inversión 100% recuperable con tu primera colaboración.
          </p>
        </div>

        {/* VIP Pass Card */}
        <div className="max-w-3xl mx-auto bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-[36px] border-3 border-brand-pink p-6 sm:p-10 shadow-[0_0_50px_rgba(255,46,147,0.35)] relative overflow-hidden">
          
          {/* Top Ticket Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b-2 border-zinc-800">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-brand-pink">
                VIP ALL-ACCESS TICKET · EDICIÓN PRESENCIAL
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white mt-1">
                Workshop "Tu era Creator"
              </h3>
              <p className="text-xs text-zinc-400 font-medium mt-0.5">
                Hotel Costanero Montevideo · Jueves 24 de Octubre · 13:00 a 17:00 h
              </p>
            </div>

            <div className="bg-brand-pink/20 border border-brand-pink/50 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 self-start sm:self-center">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-bold text-brand-pink-light">Solo 4 cupos restantes</span>
            </div>
          </div>

          {/* Pricing Row */}
          <div className="py-8 flex flex-col sm:flex-row items-baseline sm:items-center justify-between gap-4 border-b-2 border-zinc-800">
            <div>
              <div className="text-sm font-bold text-zinc-500 line-through">
                Precio regular: USD 190
              </div>
              <div className="flex items-baseline gap-3">
                <span className="font-display font-black text-4xl sm:text-6xl text-brand-yellow">
                  USD 90
                </span>
                <span className="bg-brand-pink text-white font-extrabold text-xs uppercase px-2.5 py-1 rounded-lg border border-white/30">
                  🔥 -$100 USD Descuento
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-1 font-medium">
                Pago único · Sin costos ocultos · Incluye acceso a las marcas aliadas
              </p>
            </div>

            <div className="text-right hidden sm:block">
              <span className="text-xs font-bold text-emerald-400 block">
                ✓ Cupo limitado a 15 asistentes
              </span>
              <span className="text-[11px] text-zinc-400">
                Atención personalizada garantizada
              </span>
            </div>
          </div>

          {/* Included Features List */}
          <div className="py-8">
            <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-zinc-300 mb-5">
              Todo lo que incluye tu entrada:
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {INCLUDED_FEATURES.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200 font-semibold">
                  <div className="w-5 h-5 rounded-full bg-brand-pink/20 text-brand-pink flex items-center justify-center shrink-0 mt-0.5 border border-brand-pink/50">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dual Action Buttons */}
          <div className="pt-6 border-t-2 border-zinc-800 flex flex-col sm:flex-row gap-3.5">
            {/* WhatsApp Booking */}
            <button
              onClick={onOpenWhatsApp}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-display font-black text-sm tracking-wide border-2 border-white/30 shadow-[0_5px_20px_rgba(16,185,129,0.4)] hover:scale-102 transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Reservar por WhatsApp Directo</span>
            </button>

            {/* Mercado Pago / Online Card */}
            <button
              onClick={onOpenMercadoPago}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-brand-pink hover:bg-brand-pink-hover text-white font-display font-black text-sm tracking-wide border-2 border-white/30 shadow-[0_5px_20px_rgba(255,46,147,0.4)] hover:scale-102 transition-all"
            >
              <CreditCard className="w-5 h-5" />
              <span>Pagar con Mercado Pago Uruguay</span>
            </button>
          </div>

          {/* Reassurance Footer */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-[11px] text-zinc-400 font-semibold">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Transferencias Santander, otros bancos y tarjetas
            </span>
            <span>·</span>
            <span>Acreditación y reserva inmediata</span>
          </div>

        </div>

      </div>
    </section>
  );
};
