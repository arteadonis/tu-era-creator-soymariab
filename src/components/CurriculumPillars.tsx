import React from 'react';
import { Smartphone, Sparkles, TrendingUp, Video, Handshake, DollarSign, Check } from 'lucide-react';

const PILLARS = [
  {
    id: '01',
    icon: Smartphone,
    title: 'Creación de Contenido',
    badge: '📱 Producción con Smartphone',
    desc: 'Cómo dominar la cámara de tu celular, iluminación natural y de aro, ángulos favorecedores y composición para que tus videos se vean con calidad de estudio sin comprar equipos caros.',
    bullets: ['Ajustes secretos de cámara en el smartphone', 'Iluminación profesional con lo que ya tienes', 'Edición rápida en CapCut en menos de 15 minutos']
  },
  {
    id: '02',
    icon: Sparkles,
    title: 'Marca Personal y Estilo Propio',
    badge: '✨ Diferenciador Único',
    desc: 'Descubre qué te hace magnética y diferente en un mar de creadores. Construye una estética visual coherente, tono de voz y una propuesta que enamore a tu audiencia.',
    bullets: ['Definición de tu nicho y pilares de contenido', 'Paleta de colores, tipografías y estética en redes', 'Cómo perder el miedo y hablar natural a la cámara', 'Tu historia como imán de seguidores leales']
  },
  {
    id: '03',
    icon: TrendingUp,
    title: 'Estrategias para Crecer en Redes',
    badge: '📈 Algoritmo 2024-2026',
    desc: 'Deja de depender de la suerte o de que un reel se viralice por accidente. Entiende cómo funcionan las métricas de retención, ganchos (hooks) y llamados a la acción efectivos.',
    bullets: ['Estructura de guion que retiene más del 70% del video', 'Cómo interpretar tus estadísticas para escalar', 'Plan de publicación sostenible sin burnout']
  },
  {
    id: '04',
    icon: Video,
    title: 'Ideas y Herramientas Creator',
    badge: '🎥 Flujo de Trabajo Ágil',
    desc: 'El sistema probado para nunca quedarte en blanco frente a la cámara. Banco de ideas infinitas, uso de IA para guiones y las mejores apps que usan los creadores top.',
    bullets: ['Prompts de ChatGPT específicos para ideas de reels', 'Música y audios en tendencia antes de que exploten', 'Plantillas de guiones de alta conversión']
  },
  {
    id: '05',
    icon: Handshake,
    title: 'Cómo Trabajar y Contactar Marcas',
    badge: '🤝 Alianzas y Portafolio',
    desc: 'El paso a paso exacto para contactar a marcas de forma profesional. Qué escribir, cómo armar tu Media Kit / Portafolio de creador y cómo proponer colaboraciones que a las marcas les encanten.',
    bullets: ['Plantillas de pitch en frío por DM y correo electrónico', 'Cómo armar un Media Kit de una página que impresiona', 'Estrategias de comunicación y trato profesional', 'Buenas prácticas para entregas de video en tiempo y forma']
  },
  {
    id: '06',
    icon: DollarSign,
    title: 'Tu 1ra Colaboración por Intercambio',
    badge: '🎁 Asignación en Vivo',
    desc: 'No saldrás de aquí con solo teoría. En esta sesión práctica trabajarás directamente con los briefs de las 6 marcas confirmadas para realizar tu primera colaboración real por intercambio de producto.',
    bullets: ['Asignación de brief de marca confirmada en el salón', 'Dinámica en vivo', 'Cómo convertir un intercambio en una relación a largo plazo', 'Plan de acción para tus siguientes colaboraciones']
  },
];

export const CurriculumPillars: React.FC = () => {
  return (
    <section id="temario" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-brand-yellow/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-pink/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-brand-pink text-white font-extrabold text-xs uppercase tracking-wider mb-4 border-2 border-brand-black shadow-[2px_2px_0px_#0F0F12]">
            <span>📚 4 Horas de Inmersión Práctica</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-brand-black mb-4">
            Los 6 Pilares del Workshop <br />
            <span className="text-brand-pink">“Tu era Creator”</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-700 font-medium">
            Un programa intensivo, al grano y diseñado para que te vayas con resultados reales. Sin relleno ni teoría inútil.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {PILLARS.map((p) => {
            const IconComponent = p.icon;
            return (
              <div
                key={p.id}
                className="bg-[#FAF8F5] rounded-3xl border-3 border-brand-black p-6 shadow-[5px_6px_0px_#0F0F12] hover:shadow-[7px_9px_0px_#FF2E93] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display font-black text-3xl text-brand-black/20 group-hover:text-brand-pink transition-colors">
                      {p.id}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-brand-yellow border-2 border-brand-black flex items-center justify-center text-brand-black shadow-[2px_2px_0px_#0F0F12] group-hover:rotate-6 transition-transform">
                      <IconComponent className="w-6 h-6 text-brand-black" />
                    </div>
                  </div>

                  <span className="inline-block text-[11px] font-extrabold uppercase tracking-wide text-brand-pink bg-brand-pink-pale px-2.5 py-0.5 rounded-full border border-brand-pink/30 mb-2">
                    {p.badge}
                  </span>

                  <h3 className="font-display font-black text-xl text-brand-black mb-2 leading-snug">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed mb-4">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-3 border-t-2 border-zinc-200">
                  <ul className="space-y-1.5">
                    {p.bullets.map((b, i) => (
                      <li key={i} className="text-xs text-zinc-800 font-semibold flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner: "Y MUCHO MÁS..." (Direct from user reference image) */}
        <div className="bg-brand-black text-white rounded-3xl border-3 border-brand-black p-6 sm:p-8 shadow-[6px_6px_0px_#0F0F12] max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex items-center gap-4">
            <span className="text-4xl sm:text-5xl select-none animate-bounce">🎁</span>
            <div>
              <span className="text-brand-yellow text-xs font-black uppercase tracking-wider block">
                Y MUCHO MÁS · ADEMÁS......
              </span>
              <h4 className="font-display font-black text-xl sm:text-2xl text-white">
                Recibirás tu kit de bienvenida
              </h4>
            </div>
          </div>

          <div className="shrink-0 bg-brand-pink text-white font-black text-xs uppercase px-4 py-2 rounded-xl border-2 border-white shadow-[2px_2px_0px_#FFF385]">
            Incluido en tu entrada
          </div>
        </div>

      </div>
    </section>
  );
};
