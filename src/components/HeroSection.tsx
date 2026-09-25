import React from 'react';
import { MapPin, Calendar, Clock, CheckCircle2, Flame, ArrowRight, MessageCircle } from 'lucide-react';
import { triggerCenterBlast, triggerSparkleConfetti } from '../utils/confetti';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onOpenWhatsApp }) => {
  const handlePrimaryClick = () => {
    triggerCenterBlast();
    onOpenBooking();
  };

  const handleWhatsAppClick = () => {
    triggerSparkleConfetti();
    onOpenWhatsApp();
  };

  return (
    <section className="relative pt-6 sm:pt-12 pb-16 sm:pb-24 overflow-hidden">
      {/* Decorative background grid and blurs */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[450px] bg-brand-pink/15 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-brand-yellow/30 rounded-full blur-[90px] pointer-events-none -z-10" />

      {/* Repeating ticker tape inspired by Maria's IG stories */}
      <div className="w-full bg-brand-yellow border-y-2 border-brand-black py-2 mb-8 sm:mb-12 overflow-hidden shadow-[0_3px_0px_#0F0F12]">
        <div className="flex whitespace-nowrap animate-marquee font-extrabold text-xs sm:text-sm tracking-widest text-brand-pink uppercase">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex items-center gap-4 mx-4">
              <span>★ RESERVA TU LUGAR</span>
              <span className="text-brand-black">·</span>
              <span className="text-brand-black">HOTEL COSTANERO DE MONTEVIDEO</span>
              <span className="text-brand-black">·</span>
              <span>SÁBADO 24 DE OCTUBRE</span>
              <span className="text-brand-black">·</span>
              <span className="text-brand-black">6 MARCAS CONFIRMADAS</span>
              <span className="text-brand-black">·</span>
              <span>¡SAL CON TU 1RA COLABORACIÓN!</span>
              <span className="text-brand-black">·</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-pink text-white font-extrabold text-xs sm:text-sm border-2 border-brand-black shadow-[3px_3px_0px_#0F0F12] mb-6 hover:scale-105 transition-transform cursor-default">
              <span>🎀 WORKSHOP PRESENCIAL VIP</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-ping" />
              <span className="text-brand-yellow font-black">MONTEVIDEO</span>
            </div>

            {/* Main Headline: Sticker Badge Style */}
            <div className="relative mb-6 max-w-2xl">
              {/* Floating Glitter Stars */}
              <div className="absolute -top-6 -left-4 sm:-left-8 text-2xl sm:text-4xl animate-float select-none">
                ⭐
              </div>
              <div className="absolute -bottom-4 right-0 sm:right-6 text-2xl sm:text-4xl animate-float select-none" style={{ animationDelay: '1.5s' }}>
                ✨
              </div>

              <div className="flex flex-col gap-2.5 sm:gap-3 items-center lg:items-start">
                {/* Yellow Sticker Box */}
                <div className="inline-block bg-brand-yellow border-3 border-brand-black px-4 sm:px-6 py-2 sm:py-3 shadow-[4px_5px_0px_#0F0F12] -rotate-1 hover:rotate-0 transition-transform">
                  <h1 className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-brand-pink leading-none">
                    ¿Quieres crear contenido
                  </h1>
                </div>

                {/* Pink Sticker Box */}
                <div className="inline-block bg-brand-pink border-3 border-brand-black px-4 sm:px-6 py-2 sm:py-3 shadow-[4px_5px_0px_#0F0F12] rotate-1 hover:rotate-0 transition-transform">
                  <span className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-brand-yellow leading-none">
                    y trabajar con marcas?
                  </span>
                </div>
              </div>
            </div>

            {/* Subtitle / Big Transformation Promise */}
            <p className="text-base sm:text-xl text-zinc-800 leading-relaxed max-w-xl mb-6 font-medium">
              El workshop inmersivo de 4 horas en el exclusivo <strong className="text-brand-black font-extrabold underline decoration-brand-pink decoration-3">Hotel Costanero</strong> para aprender a crear contenido magnético, hacer crecer tu marca personal y monetizar.
            </p>

            {/* Golden Hook Callout Card */}
            <div className="w-full max-w-xl bg-white/90 border-2 border-brand-black rounded-2xl p-4 sm:p-5 shadow-[4px_4px_0px_#0F0F12] mb-8 relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-brand-yellow/30 rounded-full blur-xl" />
              <div className="flex items-start gap-3">
                <span className="text-3xl select-none">🥹✨</span>
                <div>
                  <h3 className="font-extrabold text-brand-black text-sm sm:text-base leading-snug">
                    Y lo mejor de todo… <span className="text-brand-pink underline decoration-wavy">sales con tu 1ra colaboración real por intercambio</span>.
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                    Ya tenemos <strong>6 marcas aliadas confirmadas</strong> para que realices tus primeras colaboraciones de contenido por intercambio (productos y experiencias reales).
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Event Metadata Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 w-full max-w-xl mb-8 font-semibold text-xs sm:text-sm">
              <div className="bg-white border-2 border-brand-black rounded-xl p-2.5 flex items-center gap-2 shadow-[2px_2px_0px_#0F0F12]">
                <MapPin className="w-4 h-4 text-brand-pink shrink-0" />
                <span className="truncate">Hotel Costanero</span>
              </div>
              <div className="bg-white border-2 border-brand-black rounded-xl p-2.5 flex items-center gap-2 shadow-[2px_2px_0px_#0F0F12]">
                <Calendar className="w-4 h-4 text-brand-pink shrink-0" />
                <span>Sábado 24 de Octubre</span>
              </div>
              <div className="col-span-2 sm:col-span-1 bg-white border-2 border-brand-black rounded-xl p-2.5 flex items-center gap-2 shadow-[2px_2px_0px_#0F0F12]">
                <Clock className="w-4 h-4 text-brand-pink shrink-0" />
                <span>13:00 a 17:00 h</span>
              </div>
            </div>

            {/* Price Anchoring & Urgency Bar */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-xl mb-6">
              <div className="bg-brand-black text-white px-5 py-3 rounded-2xl border-2 border-brand-pink shadow-[3px_3px_0px_#FF2E93] flex items-center justify-between w-full sm:w-auto sm:min-w-[210px]">
                <div>
                  <div className="text-[10px] uppercase font-bold text-zinc-400 line-through">
                    Normal: USD 190
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display font-black text-2xl sm:text-3xl text-brand-yellow">USD 90</span>
                    <span className="text-[10px] font-black uppercase bg-brand-pink text-white px-1.5 py-0.5 rounded">
                      -$100 OFF
                    </span>
                  </div>
                </div>
                <Flame className="w-6 h-6 text-brand-pink animate-bounce sm:hidden" />
              </div>

              <div className="text-left text-xs sm:text-sm text-zinc-700">
                <div className="flex items-center gap-1.5 font-extrabold text-brand-black">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  Cupo íntimo: 11 / 15 confirmados
                </div>
                <p className="text-zinc-500 text-xs">
                  Precio especial habilitado para los últimos 4 lugares.
                </p>
              </div>
            </div>

            {/* Dual CTAs: Booking & WhatsApp */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-xl">
              <button
                onClick={handlePrimaryClick}
                className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-brand-pink text-white font-display font-black text-base tracking-wide border-3 border-brand-black shadow-[4px_5px_0px_#0F0F12] hover:shadow-[2px_2px_0px_#0F0F12] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] transition-all group"
              >
                <span>RESERVAR MI LUGAR · $90 USD</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm border-3 border-brand-black shadow-[4px_5px_0px_#0F0F12] hover:shadow-[2px_2px_0px_#0F0F12] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Consultar por WhatsApp</span>
              </button>
            </div>

            {/* Trust Reassurance Badges */}
            <div className="flex items-center gap-4 mt-5 text-[11px] sm:text-xs text-zinc-600 font-semibold flex-wrap justify-center lg:justify-start">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Pago 100% seguro (Mercado Pago / Santander)
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Entrada enviada por Email
              </span>
            </div>

          </div>

          {/* Right Column: Visual Editorial Card & Maria's Cutout */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px]">
              
              {/* Backing Accent Card */}
              <div className="absolute inset-0 bg-brand-pink rounded-3xl border-3 border-brand-black shadow-[8px_10px_0px_#0F0F12] rotate-2 transform" />

              {/* Main Photo Card */}
              <div className="relative bg-white rounded-3xl border-3 border-brand-black p-4 sm:p-5 -rotate-1 hover:rotate-0 transition-transform duration-300">
                
                {/* Photo Frame */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-brand-black mb-4 bg-zinc-100 group">
                  <img
                    src="/assets/maria-hero.jpg"
                    alt="María B - Creadora de contenido e influencer del workshop Tu Era Creator"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  
                  {/* Floating sticker overlay over image */}
                  <div className="absolute top-3 left-3 bg-brand-black/85 backdrop-blur-md text-white text-[11px] font-black uppercase px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-brand-pink animate-pulse" />
                    @soymariab · Montevideo
                  </div>

                  <div className="absolute bottom-3 right-3 bg-brand-yellow text-brand-black text-[11px] font-extrabold uppercase px-3 py-1 rounded-lg border-2 border-brand-black shadow-[2px_2px_0px_#0F0F12]">
                    ✨ Mentora & Creadora
                  </div>
                </div>

                {/* Card Bottom Meta */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-display font-black text-lg text-brand-black">
                        Workshop “Tu era Creator”
                      </h4>
                      <p className="text-xs text-zinc-500 font-medium">
                        Edición presencial exclusiva en Montevideo
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-brand-pink/10 border-2 border-brand-black flex items-center justify-center font-black text-sm text-brand-pink">
                      15/15
                    </div>
                  </div>

                  {/* Guaranteed Collab Badge */}
                  <div className="mt-1 bg-brand-yellow/50 border border-brand-black/20 rounded-xl p-2.5 flex items-center gap-2">
                    <span className="text-xl">🤝</span>
                    <span className="text-xs font-bold text-zinc-800">
                      Incluye <strong>1 colaboración real por intercambio</strong> con marcas confirmadas desde el día 1.
                    </span>
                  </div>
                </div>

              </div>

              {/* Floating badges around the card */}
              <div className="absolute -top-4 -right-4 bg-brand-yellow text-brand-black text-xs font-black uppercase px-3 py-1.5 rounded-full border-2 border-brand-black shadow-[3px_3px_0px_#0F0F12] rotate-6 animate-float">
                ✨ Cupos Limitados
              </div>

              <div className="absolute -bottom-3 -left-4 bg-brand-black text-brand-yellow text-xs font-black uppercase px-3 py-1.5 rounded-full border-2 border-brand-black shadow-[3px_3px_0px_#0F0F12] -rotate-6">
                🔥 USD 100 de Ahorro
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
