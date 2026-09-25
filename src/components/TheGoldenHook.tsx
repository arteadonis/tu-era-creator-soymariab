import React from 'react';
import { XCircle, CheckCircle2, Sparkles, Zap, ArrowRight } from 'lucide-react';

interface TheGoldenHookProps {
  onOpenBooking: () => void;
}

export const TheGoldenHook: React.FC<TheGoldenHookProps> = ({ onOpenBooking }) => {
  return (
    <section id="beneficios" className="py-16 sm:py-24 bg-brand-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-brand-yellow border-2 border-brand-black text-brand-black font-extrabold text-xs uppercase tracking-wider mb-4 shadow-[2px_2px_0px_#0F0F12]">
            <Sparkles className="w-3.5 h-3.5 text-brand-pink fill-brand-pink" />
            <span>El Salto de Creador Aficionado a Creador Pro</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-brand-black mb-4">
            Deja de regalar tu contenido <br className="hidden sm:inline" />
            y <span className="bg-brand-pink text-white px-3 py-0.5 inline-block -rotate-1 border-2 border-brand-black shadow-[3px_3px_0px_#0F0F12]">empieza a monetizarlo</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-700 font-medium">
            Muchas personas pasan años soñando con crear contenido y trabajar con marcas, pero quedan atrapadas en el mismo ciclo. Mira la diferencia de vivir esta experiencia inmersiva:
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          
          {/* Card 1: La Vía Común y Frustrante */}
          <div className="bg-white rounded-3xl border-3 border-brand-black p-6 sm:p-8 shadow-[6px_6px_0px_#0F0F12] relative flex flex-col justify-between">
            <div>
              {/* Top Row Pill */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="text-xs font-bold uppercase text-zinc-500 tracking-wider">La Vía Tradicional</span>
                <span className="inline-flex items-center gap-1 bg-zinc-100 text-zinc-600 text-[10px] sm:text-[11px] font-bold uppercase px-3 py-1 rounded-full border border-zinc-300">
                  Sin Método
                </span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-rose-100 border-2 border-brand-black flex items-center justify-center text-rose-600 font-black shrink-0">
                  <XCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-zinc-500 block">El camino habitual</span>
                  <h3 className="font-display font-black text-xl text-brand-black">Hacerlo sola y a ciegas</h3>
                </div>
              </div>

              <ul className="space-y-4 text-sm sm:text-base text-zinc-700 font-medium">
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-black text-lg leading-none">✕</span>
                  <span>Grabar sin encuadre, iluminación ni ganchos efectivos que retengan atención.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-black text-lg leading-none">✕</span>
                  <span>Mandar 50 mensajes directos por Instagram a marcas para que te dejen en visto.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-black text-lg leading-none">✕</span>
                  <span>Aceptar canjes de productos sin valor comercial por miedo o pena a cobrar.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-black text-lg leading-none">✕</span>
                  <span>No tener un tarifario claro ni saber negociar derechos de imagen en dólares.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-black text-lg leading-none">✕</span>
                  <span>Sentirte sola y con el síndrome del impostor ante el qué dirán.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t-2 border-zinc-200 text-xs font-bold text-zinc-500 text-center">
              Resultado: Meses de esfuerzo sin ingresos y desmotivación.
            </div>
          </div>

          {/* Card 2: El Método "Tu Era Creator" */}
          <div className="bg-brand-yellow-pale rounded-3xl border-3 border-brand-black p-6 sm:p-8 shadow-[8px_8px_0px_#FF2E93] relative flex flex-col justify-between overflow-hidden">
            <div>
              {/* Top Row Pill (Flujo natural sin superposiciones en móvil) */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="text-xs font-black uppercase text-brand-pink tracking-wider">El Método Acelerador</span>
                <span className="inline-flex items-center gap-1 bg-brand-pink text-white text-[10px] sm:text-[11px] font-black uppercase px-3 py-1 rounded-full border-2 border-brand-black shadow-[2px_2px_0px_#0F0F12]">
                  ✨ La Experiencia Presencial
                </span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-brand-yellow border-2 border-brand-black flex items-center justify-center text-brand-black font-black shrink-0">
                  <Zap className="w-6 h-6 fill-current text-brand-black" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-brand-pink block">Workshop "Tu era Creator"</span>
                  <h3 className="font-display font-black text-xl text-brand-black">El Acelerador en Hotel Costanero</h3>
                </div>
              </div>

              <ul className="space-y-4 text-sm sm:text-base text-zinc-900 font-semibold">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Técnica de grabación ágil con smartphone:</strong> luz, audio, hooks y edición en 10 min.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>1ra Colaboración real por intercambio:</strong> Sales del salón con un brief real asignado de las 6 marcas aliadas para romper el hielo y armar tu primer portafolio.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Plantillas de pitch y propuesta para marcas:</strong> Los guiones exactos para contactar y presentar ideas profesionales.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Relación con marcas y crecimiento:</strong> Cómo entregar un trabajo impecable para que las marcas te sigan convocando.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Comunidad íntima (máx. 15):</strong> Networking VIP, coffee break y feedback 1 a 1 de María.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t-2 border-brand-black/20 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs font-black uppercase text-brand-pink tracking-wider">
                ¡Tu primera colaboración real asegurada!
              </span>
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-pink text-white font-extrabold text-xs border-2 border-brand-black shadow-[2px_2px_0px_#0F0F12] hover:scale-105 transition-transform"
              >
                <span>Asegurar mi lugar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
