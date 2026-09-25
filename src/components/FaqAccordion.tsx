import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

const FAQS = [
  {
    q: '¿Necesito tener muchos seguidores o experiencia previa para asistir?',
    a: '¡Para nada! El workshop está pensado tanto para quienes están en cero absoluto como para quienes ya crean contenido y quieren empezar a monetizarlo. Hoy las marcas valoran la calidad visual, la autenticidad y el formato de video mucho más que un número inflado de seguidores.'
  },
  {
    q: '¿Cómo funciona exactamente la primera colaboración garantizada?',
    a: 'En esta edición contamos con 6 marcas aliadas confirmadas: Óptica Censa, Ron Biocosmética, Dulce Sofía, Liss Pro Tect, Pura Vida Accesorios y Biogreen (abarcando cuidado capilar, óptica, skincare botánico, fragancias, moda y dulces artesanales). Durante la jornada trabajaremos con sus briefs reales y saldrás del workshop con una asignación activa para realizar tu primera colaboración de contenido por intercambio (recibiendo productos o experiencias reales de la marca), ideal para romper el hielo y armar tu primer portafolio profesional.'
  },
  {
    q: '¿Qué tengo que llevar al Hotel Costanero?',
    a: 'Únicamente tu smartphone (iPhone o Android) con la batería al 100%, cargador, y tus ganas de crear. En el salón tendrás tu Starter Kit de bienvenida, cuadernillo de notas, coffee break gourmet y las herramientas necesarias.'
  },
  {
    q: '¿Qué métodos de pago tienen habilitados?',
    a: 'Aceptamos Mercado Pago Uruguay (tarjetas de crédito en cuotas y débito) y transferencias bancarias directas en UYU o USD (Banco Santander y transferencias interbancarias desde cualquier banco uruguayo). También puedes coordinar tu cupo directamente por WhatsApp.'
  },
  {
    q: '¿Dónde es exactamente y en qué horario?',
    a: 'Nos encontramos en el Hotel Costanero MGallery, sobre la Rambla República del Perú 1371 (frente a las letras de Montevideo, Pocitos). La jornada es el Sábado 24 de Octubre de 13:00 a 17:00 h.'
  },
  {
    q: '¿Por qué el cupo es solo para 15 personas?',
    a: 'Porque queremos que sea una experiencia íntima y personalizada. María revisará tus videos y tu cuenta de manera directa, algo imposible de hacer en conferencias masivas de 100 personas.'
  }
];

interface FaqAccordionProps {
  onOpenWhatsApp: () => void;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ onOpenWhatsApp }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FAF8F5] relative overflow-hidden border-t-3 border-brand-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-brand-pink text-white font-extrabold text-xs uppercase tracking-wider mb-4 border-2 border-brand-black shadow-[2px_2px_0px_#0F0F12]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Respuestas Claras</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight text-brand-black mb-3">
            Preguntas Frecuentes
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 font-medium">
            Todo lo que necesitas saber antes de asegurar tu lugar.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-12">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border-3 border-brand-black shadow-[4px_4px_0px_#0F0F12] overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-display font-black text-base sm:text-lg text-brand-black hover:text-brand-pink transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-brand-yellow border-2 border-brand-black flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-brand-pink text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-700 font-medium leading-relaxed border-t-2 border-zinc-100">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Callout */}
        <div className="bg-brand-yellow border-3 border-brand-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_#0F0F12] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="font-display font-black text-xl text-brand-black mb-1">
              ¿Tienes alguna duda específica?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-800 font-medium">
              Escríbele directamente a María o al equipo por WhatsApp para resolver cualquier consulta en minutos.
            </p>
          </div>

          <button
            onClick={onOpenWhatsApp}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-brand-black hover:bg-zinc-800 text-white font-extrabold text-xs sm:text-sm border-2 border-brand-black shadow-[3px_3px_0px_#FF2E93] hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400" />
            <span>Hablar por WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
