/**
 * Analytics & Conversion Tracking Utilities
 * Supports GA4 (G-F9P2PEEF3N) and Google Ads (AW-18457729346)
 */

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

const GOOGLE_ADS_CONVERSION_SEND_TO = 'AW-18457729346/LeECCIK3hfscEMKyquFE';

export function trackWhatsAppInquiry(source: string = 'general') {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      // 1. GA4 Custom Event
      window.gtag('event', 'whatsapp_inquiry', {
        event_category: 'engagement',
        event_label: source,
        source: source,
        workshop_price: 90,
      });

      // 2. GA4 Standard Recommended Lead Event (marked as conversion)
      window.gtag('event', 'generate_lead', {
        value: 90,
        currency: 'USD',
        lead_type: 'whatsapp_inquiry',
        source: source,
      });

      // 3. Google Ads Primary Conversion Event
      window.gtag('event', 'conversion', {
        send_to: GOOGLE_ADS_CONVERSION_SEND_TO,
        value: 90.0,
        currency: 'USD',
      });
    }
  } catch (err) {
    console.warn('Analytics tracking error:', err);
  }
}

export function trackReserveClick(source: string = 'cta_button') {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      // 1. GA4 Custom Event
      window.gtag('event', 'reserve_button_click', {
        event_category: 'ecommerce',
        event_label: source,
        source: source,
        workshop_price: 90,
      });

      // 2. GA4 Standard Begin Checkout Event
      window.gtag('event', 'begin_checkout', {
        value: 90,
        currency: 'USD',
        items: [
          {
            item_name: 'Workshop Tu era Creator - Entrada Presencial',
            price: 90,
            quantity: 1,
          },
        ],
      });

      // 3. Google Ads Primary Conversion Event (Purchase intent)
      window.gtag('event', 'conversion', {
        send_to: GOOGLE_ADS_CONVERSION_SEND_TO,
        value: 90.0,
        currency: 'USD',
      });
    }
  } catch (err) {
    console.warn('Analytics tracking error:', err);
  }
}

export function trackLeadSubmission(paymentMethod: 'whatsapp' | 'mercadopago', _data?: { fullName?: string; email?: string }) {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      // 1. GA4 Form Submission Event
      window.gtag('event', 'lead_form_submitted', {
        event_category: 'conversion',
        payment_method: paymentMethod,
        value: 90,
        currency: 'USD',
      });

      // 2. GA4 Standard Generate Lead Event
      window.gtag('event', 'generate_lead', {
        value: 90,
        currency: 'USD',
        lead_type: paymentMethod === 'whatsapp' ? 'whatsapp_confirmed' : 'mercadopago_checkout',
      });

      // 3. Google Ads Primary Conversion Event
      window.gtag('event', 'conversion', {
        send_to: GOOGLE_ADS_CONVERSION_SEND_TO,
        value: 90.0,
        currency: 'USD',
      });
    }
  } catch (err) {
    console.warn('Analytics tracking error:', err);
  }
}
