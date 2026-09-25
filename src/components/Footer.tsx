import React from 'react';
import { Heart, MapPin } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white py-12 sm:py-16 border-t-3 border-brand-black pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-zinc-800 text-center md:text-left">
          
          {/* Logo & Handle with Real Avatar */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-2">
              <img
                src="/assets/avatar-perfil-soymariab.jpg"
                alt="María B"
                className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-[2px_2px_0px_#FFF385]"
              />
              <span className="font-display font-black text-2xl text-white tracking-tight">
                @soymariab
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-medium max-w-sm">
              Workshop presencial "Tu era Creator". El espacio exclusivo en Montevideo para aprender a crear contenido con tu celular y tener tu primera colaboración por intercambio con marcas reales.
            </p>
          </div>

          {/* Quick Info & Social */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <a
              href="https://www.instagram.com/soymariab/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-brand-pink text-white font-bold text-xs transition-colors"
            >
              <InstagramIcon className="w-4 h-4 text-brand-pink" />
              <span>Sígueme en @soymariab</span>
            </a>

            <div className="flex items-center gap-2 text-xs text-zinc-400 font-medium">
              <MapPin className="w-3.5 h-3.5 text-brand-pink" />
              <span>Hotel Costanero · Montevideo, Uruguay</span>
            </div>
          </div>

        </div>

        {/* Bottom legal line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} @soymariab · Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <p className="flex items-center gap-1 justify-center">
              Diseñado para la comunidad creadora de Uruguay y la región <Heart className="w-3 h-3 text-brand-pink fill-brand-pink inline" />
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};
