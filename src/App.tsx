import { useState } from 'react';
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

  const WHATSAPP_NUMBER = '59895970988';
  const MERCADO_PAGO_URL = 'https://link.mercadopago.com.uy/soymariab';

  // Generic direct WhatsApp link (if triggered before filling form, opens modal first to capture lead)
  const handleOpenBooking = () => {
    setIsModalOpen(true);
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
          onOpenWhatsApp={handleOpenBooking}
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
          onOpenWhatsApp={handleOpenBooking}
          onOpenMercadoPago={handleOpenBooking}
        />

        {/* 12. Dynamic FAQ Accordion */}
        <FaqAccordion onOpenWhatsApp={handleOpenBooking} />
      </main>

      {/* 13. Footer with copyright & credits */}
      <Footer onOpenAdmin={() => setIsAdminOpen(true)} />

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
