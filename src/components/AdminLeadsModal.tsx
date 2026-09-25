import React, { useState, useEffect } from 'react';
import { X, Download, Users, Trash2, RefreshCw } from 'lucide-react';
import { getStoredLeads, exportLeadsToCsv, LeadData } from '../services/leadService';

interface AdminLeadsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminLeadsModal: React.FC<AdminLeadsModalProps> = ({ isOpen, onClose }) => {
  const [leads, setLeads] = useState<LeadData[]>([]);

  useEffect(() => {
    if (isOpen) {
      setLeads(getStoredLeads());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleExport = () => {
    exportLeadsToCsv();
  };

  const handleClear = () => {
    if (confirm('¿Estás seguro de que deseas limpiar la lista de inscritos guardada localmente?')) {
      localStorage.removeItem('soymariab_workshop_leads');
      setLeads([]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl border-3 border-brand-black p-6 sm:p-8 shadow-[8px_10px_0px_#FF2E93] max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b-2 border-zinc-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-brand-pink text-white flex items-center justify-center font-black border-2 border-brand-black shadow-[2px_2px_0px_#0F0F12]">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-black text-xl text-brand-black">
                Panel de Inscritos & Leads ({leads.length})
              </h3>
              <p className="text-xs text-zinc-500 font-medium">
                Base de datos para acreditación y remarketing · Workshop "Tu era Creator"
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-brand-black border-2 border-brand-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toolbar */}
        <div className="py-4 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleExport}
            disabled={leads.length === 0}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-extrabold text-xs border-2 border-brand-black shadow-[2px_2px_0px_#0F0F12] transition-transform active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Descargar Base de Datos (CSV / Excel)</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLeads(getStoredLeads())}
              className="p-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-2 border-zinc-300 text-xs font-bold"
              title="Actualizar lista"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={handleClear}
              disabled={leads.length === 0}
              className="p-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border-2 border-rose-300 text-xs font-bold"
              title="Borrar registros"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Table Content */}
        <div className="flex-1 overflow-auto border-2 border-zinc-200 rounded-2xl bg-zinc-50">
          {leads.length === 0 ? (
            <div className="py-16 text-center text-zinc-500 font-medium text-sm">
              <span className="text-3xl block mb-2">📋</span>
              Aún no hay inscritos registrados. Los registros aparecerán aquí automáticamente en tiempo real.
            </div>
          ) : (
            <table className="w-full text-left text-xs font-medium">
              <thead className="bg-zinc-900 text-white sticky top-0 font-bold uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="p-3">Fecha</th>
                  <th className="p-3">Nombre</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">WhatsApp / Tel</th>
                  <th className="p-3">Instagram</th>
                  <th className="p-3">Método</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 bg-white">
                {leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-brand-yellow-pale/40 transition-colors">
                    <td className="p-3 text-zinc-500 font-mono text-[11px] whitespace-nowrap">
                      {new Date(lead.createdAt).toLocaleDateString('es-UY', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })}
                    </td>
                    <td className="p-3 font-bold text-brand-black">{lead.fullName}</td>
                    <td className="p-3 text-zinc-700">{lead.email}</td>
                    <td className="p-3 font-mono font-bold text-zinc-900">{lead.phone}</td>
                    <td className="p-3">
                      <span className="font-bold text-brand-pink">
                        {lead.instagram.startsWith('@') ? lead.instagram : `@${lead.instagram}`}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-zinc-100 border border-zinc-300">
                        {lead.paymentMethod}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Footer Note */}
        <div className="pt-4 text-center text-[11px] text-zinc-500">
          Nota: También puedes conectar un Webhook (Google Sheets, Zapier o Make) en la variable de entorno <code className="bg-zinc-100 px-1 py-0.5 rounded">VITE_LEADS_WEBHOOK_URL</code> para sincronizar automáticamente.
        </div>

      </div>
    </div>
  );
};
