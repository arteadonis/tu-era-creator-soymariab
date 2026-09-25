import React, { useState } from 'react';
import { X, MessageCircle, CreditCard, Building, Check, Sparkles, ShieldCheck, Copy } from 'lucide-react';
import { triggerCenterBlast } from '../utils/confetti';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectWhatsApp: () => void;
  onSelectMercadoPago: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  onSelectWhatsApp,
  onSelectMercadoPago,
}) => {
  const [copiedBank, setCopiedBank] = useState(false);

  if (!isOpen) return null;

  const copyBankInfo = () => {
    navigator.clipboard.writeText("BROU Caja de Ahorro USD: 001234567-00001 (Titular: María B)");
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl border-3 border-brand-black p-6 sm:p-8 shadow-[8px_10px_0px_#FF2E93] max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-brand-black border-2 border-brand-black transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-pink text-white font-extrabold text-xs uppercase mb-3 border border-brand-black">
            <Sparkles className="w-3.5 h-3.5 fill-brand-yellow text-brand-yellow" />
            <span>Últimos 4 Lugares con USD 100 OFF</span>
          </div>

          <h3 className="font-display font-black text-2xl text-brand-black leading-tight">
            Reserva tu lugar en <br />
            <span className="text-brand-pink">“Tu era Creator”</span>
          </h3>

          <div className="mt-3 inline-flex items-baseline gap-2 bg-brand-yellow px-3 py-1 rounded-xl border-2 border-brand-black font-display font-black text-xl text-brand-black">
            <span>USD 90</span>
            <span className="text-xs font-bold text-zinc-600 line-through">USD 190</span>
          </div>
        </div>

        {/* Options */}
        <div className="space-y-3.5 mb-6">
          
          {/* Option 1: WhatsApp Directo */}
          <button
            onClick={() => {
              triggerCenterBlast();
              onSelectWhatsApp();
            }}
            className="w-full bg-emerald-50 hover:bg-emerald-100 border-2 border-emerald-600 rounded-2xl p-4 text-left flex items-start gap-3.5 transition-all hover:scale-101 group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 border-2 border-brand-black shadow-[2px_2px_0px_#0F0F12]">
              <MessageCircle className="w-5 h-5 fill-current" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-display font-black text-sm text-emerald-950">
                  Reservar por WhatsApp
                </span>
                <span className="text-[10px] bg-emerald-600 text-white font-black uppercase px-2 py-0.5 rounded-full">
                  Recomendado
                </span>
              </div>
              <p className="text-xs text-emerald-900/80 mt-0.5 font-medium">
                Coordina tu reserva directamente con María. Ideal para transferencias BROU, Prex, Itaú o resolver dudas.
              </p>
            </div>
          </button>

          {/* Option 2: Mercado Pago Uruguay */}
          <button
            onClick={() => {
              triggerCenterBlast();
              onSelectMercadoPago();
            }}
            className="w-full bg-sky-50 hover:bg-sky-100 border-2 border-sky-500 rounded-2xl p-4 text-left flex items-start gap-3.5 transition-all hover:scale-101 group"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center shrink-0 border-2 border-brand-black shadow-[2px_2px_0px_#0F0F12]">
              <CreditCard className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-display font-black text-sm text-sky-950">
                  Mercado Pago Uruguay
                </span>
                <span className="text-[10px] bg-sky-600 text-white font-black uppercase px-2 py-0.5 rounded-full">
                  Tarjetas
                </span>
              </div>
              <p className="text-xs text-sky-900/80 mt-0.5 font-medium">
                Paga en cuotas con tarjeta de crédito (Visa, Mastercard, Oca) o débito con acreditación inmediata.
              </p>
            </div>
          </button>

          {/* Option 3: Transferencia Bancaria Directa */}
          <div className="bg-zinc-50 border-2 border-zinc-300 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-xs font-extrabold text-brand-black">
                <Building className="w-4 h-4 text-zinc-600" />
                <span>Transferencia Bancaria Directa (BROU / Prex)</span>
              </div>
              <button
                onClick={copyBankInfo}
                className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-pink hover:underline"
              >
                {copiedBank ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedBank ? '¡Copiado!' : 'Copiar datos'}</span>
              </button>
            </div>
            <p className="text-[11px] text-zinc-600 font-mono bg-white p-2 rounded-lg border border-zinc-200">
              BROU Caja Ahorro USD: 001234567-00001 <br />
              Prex / Itaú: Disponible por WhatsApp
            </p>
          </div>

        </div>

        {/* Footer Guarantee */}
        <div className="text-center pt-3 border-t border-zinc-200 text-xs text-zinc-500 font-medium flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Tu lugar queda 100% garantizado al recibir el comprobante.</span>
        </div>

      </div>
    </div>
  );
};
