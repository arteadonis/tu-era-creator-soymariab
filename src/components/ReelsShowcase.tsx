import React from 'react';
import { Heart, MessageCircle, Send, Volume2, Sparkles, Play } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';

const REELS = [
  {
    image: '/assets/reel-video-1.png',
    title: '¿Quieres crear contenido y trabajar con marcas?',
    caption: 'Todo lo que necesitas saber para perder la pena, crear videos con tu celular y conseguir marcas reales. ✨',
    likes: '1,420',
    audio: 'Audio original · @soymariab'
  },
  {
    image: '/assets/reel-video-2.png',
    title: 'Monetizar tus redes y cerrar acuerdos',
    caption: 'El contenido que vende no necesita millones de seguidores. Necesita estrategia y seguridad. 💖',
    likes: '2,890',
    audio: 'Tendencia Creator · Montevideo'
  },
  {
    image: '/assets/workshop-board.png',
    title: 'Anuncio Oficial: Tu era Creator',
    caption: '¡Por fin revelado! Nuestro workshop presencial en Montevideo para dar el gran salto digital. 🎀',
    likes: '1,150',
    audio: 'Tu era Creator · 24 Oct'
  }
];

export const ReelsShowcase: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-brand-black text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-brand-pink/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-brand-pink/40 text-brand-pink font-extrabold text-xs uppercase tracking-wider mb-4">
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>Formato Vertical Móvil Real</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white mb-4">
            Así es el contenido que <br className="hidden sm:inline" />
            <span className="text-brand-yellow">las marcas buscan hoy</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 font-medium">
            Sin poses artificiales ni producciones de televisión. Contenido fresco, dinámico y que conecta directamente con la audiencia.
          </p>
        </div>

        {/* Reels Mockup Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {REELS.map((reel, idx) => (
            <div
              key={idx}
              className="bg-zinc-900 rounded-[32px] border-3 border-zinc-800 hover:border-brand-pink p-3 sm:p-4 shadow-[6px_6px_0px_rgba(255,46,147,0.3)] transition-all duration-300 hover:-translate-y-2 flex flex-col group relative overflow-hidden"
            >
              {/* Phone Speaker Notch */}
              <div className="w-20 h-3.5 bg-zinc-800 rounded-full mx-auto mb-3 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-900" />
              </div>

              {/* Reel Video Frame */}
              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-black border border-zinc-700/60 flex items-center justify-center">
                <img
                  src={reel.image}
                  alt={reel.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle gradient overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                {/* Top Instagram Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white text-xs font-bold z-10">
                  <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-brand-pink" />
                    <span>Reels</span>
                  </div>
                  <div className="bg-black/60 backdrop-blur-md p-1.5 rounded-full border border-white/10">
                    <Volume2 className="w-3.5 h-3.5 text-zinc-300" />
                  </div>
                </div>

                {/* Play Button Simulation */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full bg-brand-pink/90 text-white flex items-center justify-center border-2 border-white shadow-lg">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Right Side Social Actions */}
                <div className="absolute right-2.5 bottom-16 flex flex-col items-center gap-4 text-white text-xs font-bold z-10">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 hover:text-brand-pink transition-colors">
                      <Heart className="w-4 h-4 fill-brand-pink text-brand-pink" />
                    </div>
                    <span className="text-[10px]">{reel.likes}</span>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <span className="text-[10px]">108</span>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <Send className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Caption & Audio */}
                <div className="absolute bottom-3 left-3 right-12 text-left z-10">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <img
                      src="/assets/avatar-perfil-soymariab.jpg"
                      alt="María B"
                      className="w-6 h-6 rounded-full object-cover border border-white"
                    />
                    <span className="text-xs font-extrabold text-white">@soymariab</span>
                    <span className="text-[10px] bg-brand-yellow text-brand-black px-1.5 py-0.2 rounded font-black">PRO</span>
                  </div>
                  <p className="text-[11px] text-zinc-200 line-clamp-2 leading-snug font-medium mb-1.5">
                    {reel.caption}
                  </p>
                  <div className="flex items-center gap-1 text-[10px] text-zinc-300 font-mono">
                    <Sparkles className="w-3 h-3 text-brand-yellow" />
                    <span className="truncate">{reel.audio}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Label */}
              <div className="mt-3 text-center">
                <span className="text-xs font-bold text-zinc-300 group-hover:text-brand-yellow transition-colors">
                  {reel.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div className="mt-10 text-center text-xs text-zinc-400">
          📍 Grabado y producido en Montevideo con smartphone estándar. Aprenderás las mismas configuraciones en el taller.
        </div>

      </div>
    </section>
  );
};
