import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';
import { triggerSparkleConfetti } from '../utils/confetti';

interface AboutMariaProps {
  onOpenBooking: () => void;
}

export const AboutMaria: React.FC<AboutMariaProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-16 sm:py-24 bg-brand-cream relative overflow-hidden border-t-3 border-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
          
          {/* Left: Photo with Stickers */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px]">
              {/* Backing Pink Border Card */}
              <div className="absolute inset-0 bg-brand-yellow rounded-3xl border-3 border-brand-black shadow-[8px_8px_0px_#0F0F12] rotate-3" />

              {/* Main Image Frame */}
              <div className="relative bg-white rounded-3xl border-3 border-brand-black p-4 -rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden border-2 border-brand-black bg-zinc-100 mb-3">
                  <img
                    src="/assets/reel-video-2.png"
                    alt="María B - Mentora de Tu era Creator"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="flex items-center justify-between px-1">
                  <div>
                    <h4 className="font-display font-black text-lg text-brand-black">María B</h4>
                    <p className="text-xs font-bold text-brand-pink">@soymariab</p>
                  </div>
                  <a
                    href="https://www.instagram.com/soymariab/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold bg-brand-black text-white px-2.5 py-1 rounded-lg border border-zinc-700 hover:bg-brand-pink transition-colors"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>Seguir</span>
                  </a>
                </div>
              </div>

              {/* Floating Star Badges */}
              <div className="absolute -top-3 -left-3 text-3xl animate-float">
                ⭐
              </div>
              <div className="absolute -bottom-3 -right-3 text-3xl animate-float" style={{ animationDelay: '1.2s' }}>
                ✨
              </div>
            </div>
          </div>

          {/* Right: Story & Mission */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-pink text-white font-extrabold text-xs uppercase tracking-wider mb-4 border-2 border-brand-black shadow-[2px_2px_0px_#0F0F12]">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>Conoce a tu Mentora</span>
            </div>

            <h2 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight text-brand-black mb-4">
              "Yo también empecé con vergüenza, dudas y cero marcas"
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-zinc-700 font-medium leading-relaxed mb-6">
              <p>
                ¡Hola! Soy <strong>María (@soymariab)</strong>. Sé exactamente lo que se siente querer crear contenido, tener mil ideas en la cabeza, pero paralizarte al momento de prender la cámara por miedo al qué dirán de tus amigos o conocidos.
              </p>
              <p>
                Durante mucho tiempo pensé que para trabajar con marcas necesitabas 100K seguidores o un estudio de grabación profesional. Cuando descubrí que las marcas <strong>lo que realmente buscan es calidad visual, autenticidad y creadoras que entiendan cómo comunicar</strong>, todo cambió.
              </p>
              <p>
                Creé <strong>"Tu era Creator"</strong> porque estoy convencida de que en Montevideo y la región hay un talento gigante que solo necesita el método correcto, la seguridad para cobrar y el contacto directo con marcas que ya están buscando creadoras.
              </p>
            </div>

            {/* Credential Points */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="bg-white p-3 rounded-2xl border-2 border-brand-black shadow-[2px_2px_0px_#0F0F12] flex items-center gap-2 text-xs font-bold text-brand-black">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Colaboraciones reales activas</span>
              </div>
              <div className="bg-white p-3 rounded-2xl border-2 border-brand-black shadow-[2px_2px_0px_#0F0F12] flex items-center gap-2 text-xs font-bold text-brand-black">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Metodología 100% práctica</span>
              </div>
            </div>

            <button
              onClick={() => {
                triggerSparkleConfetti();
                onOpenBooking();
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-brand-black hover:bg-zinc-800 text-white font-display font-black text-sm tracking-wide border-2 border-brand-black shadow-[4px_4px_0px_#FF2E93] hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              <span>Quiero ser parte de esta edición</span>
              <ArrowRight className="w-4 h-4 text-brand-yellow" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
