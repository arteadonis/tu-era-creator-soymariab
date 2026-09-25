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
import { StickyMobileBar } from './components/StickyMobileBar';
import { Footer } from './components/Footer';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Pre-configured WhatsApp message with full details
  const handleOpenWhatsApp = () => {
    const message = encodeURIComponent(
      'Hola María!! 💖✨ Vi la web del workshop "Tu era Creator" y quiero reservar uno de los últimos lugares con el precio especial de USD 90 en el Hotel Costanero. ¿Cómo coordinamos el pago/reserva? ✨'
    );
    window.open(`https://wa.me/59899000000?text=${message}`, '_blank');
  };

  // Mercado Pago Uruguay checkout action
  const handleOpenMercadoPago = () => {
    window.open('https://link.mercadopago.com.uy/soymariab', '_blank');
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-black flex flex-col font-sans selection:bg-brand-pink selection:text-white">
      {/* 1. Urgency announcement bar */}
      <TopUrgencyBanner />

      {/* 2. Glassmorphism navigation */}
      <Navbar onOpenBooking={() => setIsModalOpen(true)} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 3. Hero Section with sticker badges & Maria's photo cutout */}
        <HeroSection
          onOpenBooking={() => setIsModalOpen(true)}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* 4. 6 Confirmed Brand Partners */}
        <BrandPartnersMarquee />

        {/* 5. The Golden Hook: Difference from ordinary courses */}
        <TheGoldenHook onOpenBooking={() => setIsModalOpen(true)} />

        {/* 6. The 6 Pillars of the Workshop */}
        <CurriculumPillars />

        {/* 7. Hotel Costanero & In-person Luxury Experience */}
        <VenueExperience />

        {/* 8. Vertical Reels Showcase */}
        <ReelsShowcase />

        {/* 9. Honest Qualification Filter (Is it for you?) */}
        <ObjectionsFilter />

        {/* 10. Meet Maria (@soymariab) Storytelling */}
        <AboutMaria onOpenBooking={() => setIsModalOpen(true)} />

        {/* 11. Main Pricing & VIP All-Access Ticket */}
        <PricingPass
          onOpenBooking={() => setIsModalOpen(true)}
          onOpenWhatsApp={handleOpenWhatsApp}
          onOpenMercadoPago={handleOpenMercadoPago}
        />

        {/* 12. Dynamic FAQ Accordion */}
        <FaqAccordion onOpenWhatsApp={handleOpenWhatsApp} />
      </main>

      {/* 13. Footer with copyright & credits */}
      <Footer />

      {/* 14. Mobile Sticky Bottom Conversion Bar */}
      <StickyMobileBar onOpenBooking={() => setIsModalOpen(true)} />

      {/* 15. Interactive Checkout & Booking Modal */}
      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectWhatsApp={handleOpenWhatsApp}
        onSelectMercadoPago={handleOpenMercadoPago}
      />
    </div>
  );
}

export default App;
