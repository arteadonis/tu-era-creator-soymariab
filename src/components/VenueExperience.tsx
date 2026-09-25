import React from 'react';
import { MapPin, Calendar, Clock, Coffee, Users, Camera, Sparkles, Building2 } from 'lucide-react';

export const VenueExperience: React.FC = () => {
  return (
    <section id="lugar" className="py-16 sm:py-24 bg-[#FAF8F5] relative overflow-hidden border-t-3 border-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-brand-yellow border-2 border-brand-black text-brand-black font-extrabold text-xs uppercase tracking-wider mb-4 shadow-[2px_2px_0px_#0F0F12]">
            <Building2 className="w-3.5 h-3.5 text-brand-pink" />
            <span>Una Locación Exclusiva de Primer Nivel</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-brand-black mb-4">
            Hotel Costanero de Montevideo <br />
            <span className="text-brand-pink">Frente a la Rambla de Pocitos</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-700 font-medium">
            No es un aula aburrida. Elegimos uno de los hoteles más modernos y estéticos de la ciudad para que tu entorno inspire tu mejor contenido.
          </p>
        </div>

        {/* Venue Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">

          {/* Left: Venue Details Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl border-3 border-brand-black p-6 sm:p-8 shadow-[6px_7px_0px_#0F0F12]">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-zinc-200">
              <div className="w-12 h-12 rounded-2xl bg-brand-pink text-white flex items-center justify-center font-black border-2 border-brand-black shadow-[2px_2px_0px_#0F0F12]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-black text-xl text-brand-black">
                  Hotel Costanero MGallery
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-zinc-500">
                  Rambla República del Perú 1371 (Frente a las emblemáticas Letras de Montevideo)
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#FAF8F5] p-4 rounded-2xl border-2 border-brand-black/20 flex items-start gap-3">
                <Coffee className="w-5 h-5 text-brand-pink shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-brand-black">Coffee Break Gourmet</h4>
                  <p className="text-xs text-zinc-600 mt-0.5">Café de especialidad, pastelería y bebidas durante toda la jornada.</p>
                </div>
              </div>

              <div className="bg-[#FAF8F5] p-4 rounded-2xl border-2 border-brand-black/20 flex items-start gap-3">
                <Users className="w-5 h-5 text-brand-pink shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-brand-black">Cupo Íntimo de 15</h4>
                  <p className="text-xs text-zinc-600 mt-0.5">Espacio reducido para que María te dé feedback directo.</p>
                </div>
              </div>

              <div className="bg-[#FAF8F5] p-4 rounded-2xl border-2 border-brand-black/20 flex items-start gap-3">
                <Camera className="w-5 h-5 text-brand-pink shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-brand-black">Dinámicas en vivo</h4>
                  <p className="text-xs text-zinc-600 mt-0.5">Tendremos diferentes actividades practicas durante todo el workshop.</p>
                </div>
              </div>

              <div className="bg-[#FAF8F5] p-4 rounded-2xl border-2 border-brand-black/20 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-brand-pink shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-brand-black">Networking VIP</h4>
                  <p className="text-xs text-zinc-600 mt-0.5">Conéctate con creadoras y emprendedoras apasionadas de tu misma ciudad.</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-yellow/60 border-2 border-brand-black rounded-xl p-3 flex items-center justify-between text-xs font-black text-brand-black">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-brand-pink" /> Sábado 24 de Octubre
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-brand-pink" /> 13:00 a 17:00 h
              </span>
            </div>
          </div>

          {/* Right: Venue Visual & Atmosphere Card */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-brand-black text-white rounded-3xl border-3 border-brand-black p-6 shadow-[6px_7px_0px_#FF2E93] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink/30 rounded-full blur-2xl" />

              <div className="text-3xl mb-3">📍🏨</div>
              <h4 className="font-display font-black text-xl text-brand-yellow uppercase tracking-wide mb-2">
                Ubicación Inmejorable
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 font-medium leading-relaxed mb-4">
                El Hotel Costanero ofrece un estándar de diseño contemporáneo, seguridad y comodidad con acceso directo sobre la Rambla de Pocitos. Estacionamiento cercano y fácil acceso desde cualquier punto de Montevideo.
              </p>

              <div className="inline-flex items-center gap-2 text-xs font-black text-white bg-zinc-800 px-3 py-1.5 rounded-lg border border-zinc-700">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Salón privado exclusivo reservado
              </div>
            </div>

            <div className="bg-white rounded-2xl border-2 border-brand-black p-4 shadow-[3px_3px_0px_#0F0F12] flex items-center gap-3">
              <span className="text-2xl">🎒</span>
              <div className="text-xs">
                <strong className="text-brand-black block font-extrabold">¿Qué necesitas traer?</strong>
                <span className="text-zinc-600">Solo tu celular con batería al 100% y ganas de pasarla increíble. Nosotros ponemos todo lo demás.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
