import React from 'react';
import { CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

export const ObjectionsFilter: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden border-t-3 border-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-brand-yellow border-2 border-brand-black text-brand-black font-extrabold text-xs uppercase tracking-wider mb-4 shadow-[2px_2px_0px_#0F0F12]">
            <HelpCircle className="w-3.5 h-3.5 text-brand-pink" />
            <span>Filtro de Admisión Honesto</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-brand-black mb-4">
            ¿Es este workshop para ti? <br />
            <span className="text-brand-pink">Queremos ser 100% transparentes</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-700 font-medium">
            Solo abrimos 15 cupos porque buscamos a personas realmente comprometidas con su crecimiento digital. Revisa si cumples el perfil:
          </p>
        </div>

        {/* 2 Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* SÍ ES PARA TI */}
          <div className="bg-emerald-50/70 rounded-3xl border-3 border-emerald-600 p-6 sm:p-8 shadow-[6px_7px_0px_#059669]">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-emerald-200">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-black text-xl border-2 border-brand-black shadow-[2px_2px_0px_#0F0F12]">
                ✓
              </div>
              <div>
                <span className="text-xs font-black uppercase text-emerald-800">El perfil ideal</span>
                <h3 className="font-display font-black text-2xl text-emerald-950">SÍ es para ti si...</h3>
              </div>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm font-semibold text-emerald-950">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Empiezas desde cero o tienes pocos seguidores y quieres crear con estética y estrategia.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Ya publicas reels o historias pero no consigues marcas que te paguen dinero real.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Estás cansada de los canjes y quieres aprender a negociar y tarifar tus acuerdos en USD.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Valoras el contacto presencial, el networking de calidad y el feedback 1 a 1 de María.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Quieres salir con tu primera colaboración real garantizada con marcas del medio.</span>
              </li>
            </ul>
          </div>

          {/* NO ES PARA TI */}
          <div className="bg-rose-50/70 rounded-3xl border-3 border-rose-400 p-6 sm:p-8 shadow-[6px_7px_0px_#e11d48]">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-rose-200">
              <div className="w-12 h-12 rounded-2xl bg-rose-600 text-white flex items-center justify-center font-black text-xl border-2 border-brand-black shadow-[2px_2px_0px_#0F0F12]">
                ✕
              </div>
              <div>
                <span className="text-xs font-black uppercase text-rose-800">Por favor abstente si...</span>
                <h3 className="font-display font-black text-2xl text-rose-950">NO es para ti si...</h3>
              </div>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm font-semibold text-rose-950">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <span>Buscas hacerte rica o viral de la noche a la mañana sin poner dedicación y constancia.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <span>No estás dispuesta a salir en cámara, hablar a tu smartphone o practicar con tus compañeras.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <span>Buscas solo teoría académica abstracta sin dinámicas de grabación en tiempo real.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <span>No puedes asistir presencialmente a Montevideo el 24 de Octubre de 13:00 a 17:00 h.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
