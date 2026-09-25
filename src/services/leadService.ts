export interface LeadData {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  instagram: string;
  paymentMethod: 'whatsapp' | 'mercadopago' | 'transferencia';
  createdAt: string;
  notes?: string;
}

const STORAGE_KEY = 'soymariab_workshop_leads';

// Optional Webhook endpoint (Google Sheets Apps Script, Zapier, Make, or custom API)
export const WEBHOOK_URL = import.meta.env.VITE_LEADS_WEBHOOK_URL || '';

export const saveLead = async (lead: Omit<LeadData, 'id' | 'createdAt'>): Promise<LeadData> => {
  const newLead: LeadData = {
    ...lead,
    id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    createdAt: new Date().toISOString(),
  };

  // 1. Always save locally as robust fallback
  try {
    const existing = getStoredLeads();
    existing.unshift(newLead);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  } catch (err) {
    console.warn('Could not save lead to localStorage', err);
  }

  // 2. Fire webhook in background if configured
  if (WEBHOOK_URL) {
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLead),
        mode: 'no-cors', // Supports standard Google Apps Script webhooks
      });
    } catch (err) {
      console.warn('Webhook dispatch failed', err);
    }
  }

  return newLead;
};

export const getStoredLeads = (): LeadData[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const exportLeadsToCsv = () => {
  const leads = getStoredLeads();
  if (!leads.length) return false;

  const headers = ['ID', 'Fecha', 'Nombre Completo', 'Email', 'Telefono', 'Instagram', 'Metodo Pago'];
  const rows = leads.map(l => [
    l.id,
    new Date(l.createdAt).toLocaleString('es-UY'),
    `"${l.fullName.replace(/"/g, '""')}"`,
    l.email,
    l.phone,
    l.instagram,
    l.paymentMethod,
  ]);

  const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `inscritos_tu_era_creator_${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  return true;
};
