import React, { useState } from 'react';
import { X, MessageCircle, CreditCard, Building, Check, Sparkles, ShieldCheck, Copy, User, Mail, Phone, AtSign, ArrowRight } from 'lucide-react';
import { triggerCenterBlast, triggerSparkleConfetti } from '../utils/confetti';
import { saveLead } from '../services/leadService';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultWhatsAppNumber?: string;
  defaultMercadoPagoUrl?: string;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  defaultWhatsAppNumber = '59899000000',
  defaultMercadoPagoUrl = 'https://link.mercadopago.com.uy/soymariab',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    instagram: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedBank, setCopiedBank] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Ingresa tu nombre completo';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Ingresa un email válido';
    if (!formData.phone.trim() || formData.phone.length < 7) newErrors.phone = 'Ingresa tu número de WhatsApp';
    if (!formData.instagram.trim()) newErrors.instagram = 'Ingresa tu usuario de Instagram';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsAppCheckout = async () => {
    if (!validate()) return;
    setIsSubmitting(true);

    const cleanIg = formData.instagram.startsWith('@') ? formData.instagram : `@${formData.instagram}`;

    // 1. Save lead to local database & webhook
    await saveLead({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      instagram: cleanIg,
      paymentMethod: 'whatsapp',
    });

    triggerCenterBlast();
    setIsSubmitting(false);
    onClose();

    // 2. Open WhatsApp with pre-filled lead details for warm concierge experience
    const message = encodeURIComponent(
      `¡Hola María! 💖✨ Soy ${formData.fullName} (${cleanIg}).\n\nAcabo de completar mis datos en la web para el workshop "Tu era Creator" en el Hotel Costanero (Precio especial USD 90).\n\n📱 Celular: ${formData.phone}\n✉️ Email: ${formData.email}\n\n¿Cómo coordinamos el pago para asegurar mi lugar? ✨`
    );
    window.open(`https://wa.me/${defaultWhatsAppNumber}?text=${message}`, '_blank');
  };

  const handleMercadoPagoCheckout = async () => {
    if (!validate()) return;
    setIsSubmitting(true);

    const cleanIg = formData.instagram.startsWith('@') ? formData.instagram : `@${formData.instagram}`;

    // 1. Save lead
    await saveLead({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      instagram: cleanIg,
      paymentMethod: 'mercadopago',
    });

    triggerSparkleConfetti();
    setIsSubmitting(false);
    onClose();

    // 2. Open Mercado Pago checkout
    window.open(defaultMercadoPagoUrl, '_blank');
  };

  const copyBankInfo = () => {
    navigator.clipboard.writeText("BROU Caja de Ahorro USD: 001234567-00001 (Titular: María B)");
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-brand-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-[32px] border-3 border-brand-black p-5 sm:p-8 shadow-[8px_10px_0px_#FF2E93] max-h-[92vh] overflow-y-auto">
        
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-pink text-white font-extrabold text-xs uppercase mb-2 border border-brand-black">
            <Sparkles className="w-3.5 h-3.5 fill-brand-yellow text-brand-yellow" />
            <span>Paso 1: Tu Acreditación VIP</span>
          </div>

          <h3 className="font-display font-black text-2xl sm:text-3xl text-brand-black leading-tight">
            Reserva tu lugar en <br />
            <span className="text-brand-pink">“Tu era Creator”</span>
          </h3>

          <p className="text-xs text-zinc-600 mt-1 font-medium">
            Completa tus datos para emitir tu acreditación al Hotel Costanero y registrarte con las marcas aliadas.
          </p>

          <div className="mt-3 inline-flex items-baseline gap-2 bg-brand-yellow px-3 py-1 rounded-xl border-2 border-brand-black font-display font-black text-lg sm:text-xl text-brand-black">
            <span>USD 90</span>
            <span className="text-xs font-bold text-zinc-600 line-through">USD 190</span>
          </div>
        </div>

        {/* Form Inputs (Warm, Clean, Minimalist) */}
        <div className="space-y-3 mb-6 text-left">
          
          {/* Full Name */}
          <div>
            <label className="block text-xs font-extrabold text-brand-black uppercase tracking-wider mb-1">
              Nombre y Apellido *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
                <User className="w-4 h-4" />
              </div>
              <input
                type="text"
                placeholder="Ej. Sofía Martínez"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className={`w-full pl-9 pr-3 py-2.5 rounded-xl border-2 font-medium text-xs sm:text-sm bg-zinc-50 focus:bg-white focus:outline-none transition-colors ${errors.fullName ? 'border-rose-500 bg-rose-50' : 'border-brand-black focus:border-brand-pink'}`}
              />
            </div>
            {errors.fullName && <p className="text-[11px] font-bold text-rose-500 mt-0.5">{errors.fullName}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-extrabold text-brand-black uppercase tracking-wider mb-1">
              Correo Electrónico *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                placeholder="tu@email.com (para tu kit y confirmación)"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full pl-9 pr-3 py-2.5 rounded-xl border-2 font-medium text-xs sm:text-sm bg-zinc-50 focus:bg-white focus:outline-none transition-colors ${errors.email ? 'border-rose-500 bg-rose-50' : 'border-brand-black focus:border-brand-pink'}`}
              />
            </div>
            {errors.email && <p className="text-[11px] font-bold text-rose-500 mt-0.5">{errors.email}</p>}
          </div>

          {/* WhatsApp / Phone & Instagram (2 columns on tablet/desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-extrabold text-brand-black uppercase tracking-wider mb-1">
                WhatsApp / Celular *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  type="tel"
                  placeholder="+598 99 123 456"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full pl-9 pr-3 py-2.5 rounded-xl border-2 font-medium text-xs sm:text-sm bg-zinc-50 focus:bg-white focus:outline-none transition-colors ${errors.phone ? 'border-rose-500 bg-rose-50' : 'border-brand-black focus:border-brand-pink'}`}
                />
              </div>
              {errors.phone && <p className="text-[11px] font-bold text-rose-500 mt-0.5">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-xs font-extrabold text-brand-black uppercase tracking-wider mb-1">
                Usuario de Instagram *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
                  <AtSign className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  placeholder="@tu_usuario"
                  value={formData.instagram}
                  onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                  className={`w-full pl-9 pr-3 py-2.5 rounded-xl border-2 font-medium text-xs sm:text-sm bg-zinc-50 focus:bg-white focus:outline-none transition-colors ${errors.instagram ? 'border-rose-500 bg-rose-50' : 'border-brand-black focus:border-brand-pink'}`}
                />
              </div>
              {errors.instagram && <p className="text-[11px] font-bold text-rose-500 mt-0.5">{errors.instagram}</p>}
            </div>
          </div>

        </div>

        {/* Payment Buttons with Captured Info */}
        <div className="space-y-3 mb-5">
          
          {/* Button 1: WhatsApp Concierge */}
          <button
            onClick={handleWhatsAppCheckout}
            disabled={isSubmitting}
            className="w-full bg-emerald-500 hover:bg-emerald-600 active:scale-98 text-white rounded-2xl p-3.5 sm:p-4 text-left flex items-center justify-between border-2 border-brand-black shadow-[3px_3px_0px_#0F0F12] transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0 border border-white/40">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-black text-sm text-white">
                    Confirmar por WhatsApp
                  </span>
                  <span className="text-[9px] bg-brand-yellow text-brand-black font-black uppercase px-2 py-0.5 rounded-full">
                    Recomendado
                  </span>
                </div>
                <p className="text-[11px] text-emerald-100 font-medium">
                  Coordina tu reserva directa con María (BROU / Prex / Itaú).
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Button 2: Mercado Pago Uruguay */}
          <button
            onClick={handleMercadoPagoCheckout}
            disabled={isSubmitting}
            className="w-full bg-brand-pink hover:bg-brand-pink-hover active:scale-98 text-white rounded-2xl p-3.5 sm:p-4 text-left flex items-center justify-between border-2 border-brand-black shadow-[3px_3px_0px_#0F0F12] transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0 border border-white/40">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display font-black text-sm text-white block">
                  Pagar USD 90 con Mercado Pago
                </span>
                <p className="text-[11px] text-pink-100 font-medium">
                  Tarjetas de crédito en cuotas y débito (Acreditación inmediata).
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Direct Bank Transfer helper */}
          <div className="bg-zinc-50 border-2 border-zinc-300 rounded-2xl p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-bold text-brand-black">
                <Building className="w-3.5 h-3.5 text-zinc-500" />
                <span>Datos bancarios (BROU / Prex)</span>
              </div>
              <button
                onClick={copyBankInfo}
                className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-pink hover:underline"
              >
                {copiedBank ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedBank ? '¡Copiado!' : 'Copiar BROU'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Footer Guarantee & Privacy */}
        <div className="text-center pt-2 border-t border-zinc-200 text-[11px] text-zinc-500 font-medium flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Tus datos están protegidos y recibirás confirmación inmediata.</span>
        </div>

      </div>
    </div>
  );
};
