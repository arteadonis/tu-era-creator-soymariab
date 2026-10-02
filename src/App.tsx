import { useState, useEffect } from 'react';
import { TopUrgencyBanner } from './components/TopUrgencyBanner';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BrandPartnersMarquee } from './components/BrandPartnersMarquee';
import { TheGoldenHook } from './components/TheGoldenHook';
import { CurriculumPillars } from './components/CurriculumPillars';
import { VenueExperience } from './components/VenueExperience';
import { ReelsShowcase } from './components/ReelsShowcase';
import { ObjectionsFilter } from './components/ObjectionsFilter';
import { AboutMaria } from './components/AboutMaria';
import { PricingPass } from './components/PricingPass';
import { FaqAccordion } from './components/FaqAccordion';
import { CheckoutModal } from './components/CheckoutModal';
import { AdminLeadsModal } from './components/AdminLeadsModal';
import { StickyMobileBar } from './components/StickyMobileBar';
import { Footer } from './components/Footer';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Private secret parameter to open leads modal (?admin=soymariab)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('admin') === 'soymariab') {
      setIsAdminOpen(true);
    }
  }, []);

  const WHATSAPP_NUMBER = '59895970988';
  const MERCADO_PAGO_URL = 'https://mpago.la/2qoASSL';

  const handleOpenBooking = () => {
    setIsModalOpen(true);
  };

  // Direct WhatsApp chat for no-pressure questions and warm conversation
  const handleOpenWhatsAppChat = (customMessage?: string) => {
    const text = customMessage || '¡Hola María! 💖 Vi la info del workshop "Tu era Creator" en el Hotel Costanero y quería hacerte una consulta.';
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-black flex flex-col font-sans selection:bg-brand-pink selection:text-white">
      {/* 1. Urgency announcement bar */}
      <TopUrgencyBanner />

      {/* 2. Glassmorphism navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 3. Hero Section with sticker badges & Maria's photo cutout */}
        <HeroSection
          onOpenBooking={handleOpenBooking}
          onOpenWhatsApp={() => handleOpenWhatsAppChat('¡Hola María! 💖 Vi la info del workshop "Tu era Creator" en el Hotel Costanero y quería hacerte una consulta.')}
        />

        {/* 4. 6 Confirmed Brand Partners */}
        <BrandPartnersMarquee />

        {/* 5. The Golden Hook: Difference from ordinary courses */}
        <TheGoldenHook onOpenBooking={handleOpenBooking} />

        {/* 6. The 6 Pillars of the Workshop */}
        <CurriculumPillars />

        {/* 7. Hotel Costanero & In-person Luxury Experience */}
        <VenueExperience />

        {/* 8. Vertical Reels Showcase */}
        <ReelsShowcase />

        {/* 9. Honest Qualification Filter (Is it for you?) */}
        <ObjectionsFilter />

        {/* 10. Meet Maria (@soymariab) Storytelling */}
        <AboutMaria onOpenBooking={handleOpenBooking} />

        {/* 11. Main Pricing & VIP All-Access Ticket */}
        <PricingPass
          onOpenBooking={handleOpenBooking}
          onOpenWhatsApp={() => handleOpenWhatsAppChat('¡Hola María! 💖 Quiero consultar y coordinar mi lugar para el workshop "Tu era Creator" en el Hotel Costanero.')}
          onOpenMercadoPago={handleOpenBooking}
        />

        {/* 12. Dynamic FAQ Accordion */}
        <FaqAccordion onOpenWhatsApp={() => handleOpenWhatsAppChat('¡Hola María! 💖 Tengo unas dudas sobre el workshop "Tu era Creator" y quería consultarte.')} />
      </main>

      {/* 13. Footer with copyright & credits */}
      <Footer />

      {/* 14. Mobile Sticky Bottom Conversion Bar */}
      <StickyMobileBar onOpenBooking={handleOpenBooking} />

      {/* 15. High-Converting Checkout Modal with Lead Capture */}
      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultWhatsAppNumber={WHATSAPP_NUMBER}
        defaultMercadoPagoUrl={MERCADO_PAGO_URL}
      />

      {/* 16. Admin Leads & Database Modal */}
      <AdminLeadsModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />
    </div>
  );
}

export default App;
