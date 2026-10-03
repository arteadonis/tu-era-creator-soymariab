import React, { useState, useEffect } from 'react';
import { X, Download, Users, Trash2, RefreshCw, BarChart3, Globe, TrendingUp, ExternalLink, ArrowUpRight, Target, Zap, MousePointerClick, Smartphone } from 'lucide-react';
import { getStoredLeads, exportLeadsToCsv, LeadData } from '../services/leadService';

interface AdminLeadsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminLeadsModal: React.FC<AdminLeadsModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'leads' | 'analytics'>('analytics');
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

  // Google Analytics 4 Property ID: 538575587
  // Google Ads Customer ID: 5987855413
  const GA4_LINKS = {
    overview: 'https://analytics.google.com/analytics/web/#/p538575587/reports/reportinghub',
    acquisition: 'https://analytics.google.com/analytics/web/#/p538575587/reports/lifecycle-traffic-acquisition',
    demographics: 'https://analytics.google.com/analytics/web/#/p538575587/reports/user-demographics-detail',
    geography: 'https://analytics.google.com/analytics/web/#/p538575587/reports/user-geography-detail',
    events: 'https://analytics.google.com/analytics/web/#/p538575587/reports/lifecycle-engagement-events',
    explorations: 'https://analytics.google.com/analytics/web/#/p538575587/analysis',
    googleAds: 'https://ads.google.com/aw/campaigns?ocid=5987855413',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-brand-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl border-3 border-brand-black p-5 sm:p-7 shadow-[8px_10px_0px_#FF2E93] max-h-[92vh] flex flex-col">
        
        {/* Header & Navigation Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b-2 border-zinc-200 gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-brand-pink text-white flex items-center justify-center font-black border-2 border-brand-black shadow-[2px_2px_0px_#0F0F12]">
              {activeTab === 'analytics' ? <BarChart3 className="w-5 h-5" /> : <Users className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="font-display font-black text-xl text-brand-black">
                {activeTab === 'analytics' ? 'Dashboard Ejecutivo de Analytics' : `Panel de Inscritos & Leads (${leads.length})`}
              </h3>
              <p className="text-xs text-zinc-500 font-medium">
                Workshop "Tu era Creator" · María B · Hotel Costanero Montevideo
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Tab switch buttons */}
            <div className="flex bg-zinc-100 p-1 rounded-xl border border-zinc-300">
              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'analytics'
                    ? 'bg-brand-pink text-white shadow-sm'
                    : 'text-zinc-600 hover:text-brand-black'
                }`}
              >
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Métricas en Vivo</span>
              </button>
              <button
                onClick={() => setActiveTab('leads')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'leads'
                    ? 'bg-brand-pink text-white shadow-sm'
                    : 'text-zinc-600 hover:text-brand-black'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>Leads ({leads.length})</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-brand-black border-2 border-brand-black transition-colors"
              title="Cerrar panel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* TAB 1: ANALYTICS DASHBOARD */}
        {activeTab === 'analytics' && (
          <div className="flex-1 overflow-y-auto py-4 space-y-5 pr-1 text-xs">
            
            {/* Quick Link Banner to Official GA4 */}
            <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 text-white rounded-2xl p-4 border-2 border-brand-black shadow-[4px_4px_0px_#0F0F12] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-brand-yellow">Google Analytics 4 & Ads Conectados</span>
                </div>
                <p className="text-zinc-300 text-xs mt-1">
                  Propiedad GA4 ID <strong className="text-white">538575587</strong> · Cuenta Google Ads <strong className="text-white">5987855413</strong>
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <a
                  href={GA4_LINKS.overview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-brand-pink hover:bg-brand-pink/90 text-white font-extrabold text-xs transition-transform active:scale-95 shadow-[2px_2px_0px_#0F0F12]"
                >
                  <span>Abrir GA4 Completo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={GA4_LINKS.googleAds}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white hover:bg-zinc-100 text-brand-black font-extrabold text-xs transition-transform active:scale-95 shadow-[2px_2px_0px_#0F0F12]"
                >
                  <span>Abrir Google Ads</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Top KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="bg-brand-cream-light border-2 border-brand-black rounded-2xl p-3.5 shadow-[3px_3px_0px_#0F0F12]">
                <div className="flex items-center justify-between text-zinc-500 mb-1">
                  <span className="font-bold text-[11px] uppercase">Vistas Web (Páginas)</span>
                  <Zap className="w-4 h-4 text-brand-pink" />
                </div>
                <div className="font-display font-black text-2xl text-brand-black">524</div>
                <div className="text-[10px] text-emerald-600 font-bold mt-1">103 sesiones · 70 usuarios únicos</div>
              </div>

              <div className="bg-brand-yellow-pale/40 border-2 border-brand-black rounded-2xl p-3.5 shadow-[3px_3px_0px_#0F0F12]">
                <div className="flex items-center justify-between text-zinc-500 mb-1">
                  <span className="font-bold text-[11px] uppercase">Pauta Google Ads</span>
                  <MousePointerClick className="w-4 h-4 text-brand-yellow-dark" />
                </div>
                <div className="font-display font-black text-2xl text-brand-black">209 Clics</div>
                <div className="text-[10px] text-zinc-600 font-bold mt-1">3,198 impr. · CTR 6.54% · $8.88 USD</div>
              </div>

              <div className="bg-emerald-50 border-2 border-brand-black rounded-2xl p-3.5 shadow-[3px_3px_0px_#0F0F12]">
                <div className="flex items-center justify-between text-zinc-500 mb-1">
                  <span className="font-bold text-[11px] uppercase">Público Femenino</span>
                  <Users className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="font-display font-black text-2xl text-emerald-700">62% Mujeres</div>
                <div className="text-[10px] text-zinc-600 font-bold mt-1">172 clics en pauta · Mayoría 25-34 años</div>
              </div>

              <div className="bg-purple-50 border-2 border-brand-black rounded-2xl p-3.5 shadow-[3px_3px_0px_#0F0F12]">
                <div className="flex items-center justify-between text-zinc-500 mb-1">
                  <span className="font-bold text-[11px] uppercase">Ubicación Focal</span>
                  <Globe className="w-4 h-4 text-purple-600" />
                </div>
                <div className="font-display font-black text-2xl text-purple-900">Uruguay 🇺🇾</div>
                <div className="text-[10px] text-zinc-600 font-bold mt-1">Montevideo, Canelones & Maldonado</div>
              </div>
            </div>

            {/* Grid 2: Fuentes de Tráfico & Demografía */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Fuentes de Tráfico (Pauta vs Orgánicas) */}
              <div className="bg-white border-2 border-zinc-200 rounded-2xl p-4 shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-100 mb-3">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-brand-pink" />
                    <h4 className="font-extrabold text-sm text-brand-black">Fuentes de Tráfico (Pauta vs Genéricas)</h4>
                  </div>
                  <a
                    href={GA4_LINKS.acquisition}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-brand-pink font-bold hover:underline inline-flex items-center gap-1"
                  >
                    Ver en GA4 <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>

                <div className="space-y-2.5">
                  <div>
                    <div className="flex justify-between font-bold text-zinc-700 mb-1">
                      <span>Pauta Google Ads (google / cpc)</span>
                      <span>39 sesiones (38%)</span>
                    </div>
                    <div className="w-full bg-zinc-100 rounded-full h-2 overflow-hidden">
                      <div className="bg-brand-pink h-2 rounded-full" style={{ width: '38%' }} />
                    </div>
                    <span className="text-[10px] text-zinc-400">Tráfico pago calificado hacia la landing</span>
                  </div>

                  <div>
                    <div className="flex justify-between font-bold text-zinc-700 mb-1">
                      <span>Tráfico Directo ((direct) / (none))</span>
                      <span>27 sesiones (26%)</span>
                    </div>
                    <div className="w-full bg-zinc-100 rounded-full h-2 overflow-hidden">
                      <div className="bg-zinc-800 h-2 rounded-full" style={{ width: '26%' }} />
                    </div>
                    <span className="text-[10px] text-zinc-400">Links compartidos por WhatsApp o URL directa</span>
                  </div>

                  <div>
                    <div className="flex justify-between font-bold text-zinc-700 mb-1">
                      <span>Instagram (@soymariab / referral)</span>
                      <span>6 sesiones · Máx. Retención</span>
                    </div>
                    <div className="w-full bg-zinc-100 rounded-full h-2 overflow-hidden">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '18%' }} />
                    </div>
                    <span className="text-[10px] text-zinc-500 font-semibold">✨ Promedio de permanencia: 26 minutos</span>
                  </div>

                  <div>
                    <div className="flex justify-between font-bold text-zinc-700 mb-1">
                      <span>Cuentas Google & Orgánico</span>
                      <span>26 sesiones (25%)</span>
                    </div>
                    <div className="w-full bg-zinc-100 rounded-full h-2 overflow-hidden">
                      <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '25%' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Demografía: Género y Rango de Edad */}
              <div className="bg-white border-2 border-zinc-200 rounded-2xl p-4 shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-100 mb-3">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-600" />
                    <h4 className="font-extrabold text-sm text-brand-black">Audiencia: Género y Rango de Edad</h4>
                  </div>
                  <a
                    href={GA4_LINKS.demographics}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-brand-pink font-bold hover:underline inline-flex items-center gap-1"
                  >
                    Ver en GA4 <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>

                {/* Género */}
                <div className="mb-4">
                  <div className="text-[11px] font-bold text-zinc-500 uppercase mb-1.5">Distribución de Género</div>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-pink-50 border border-pink-200 rounded-xl p-2.5">
                      <div className="text-brand-pink font-black text-lg">62% Mujeres</div>
                      <div className="text-[10px] text-zinc-600">172 clics en pauta · 2,497 impresiones</div>
                    </div>
                    <div className="flex-1 bg-blue-50 border border-blue-200 rounded-xl p-2.5">
                      <div className="text-blue-700 font-black text-lg">31% Hombres</div>
                      <div className="text-[10px] text-zinc-600">85 clics en pauta · 1,171 impresiones</div>
                    </div>
                  </div>
                </div>

                {/* Edades */}
                <div>
                  <div className="text-[11px] font-bold text-zinc-500 uppercase mb-1.5">Grupos de Edad Clave</div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-bold text-brand-black">25 a 34 años (Núcleo Creador & Pro)</span>
                      <span className="font-black text-brand-pink">28% (57 clics)</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-bold text-zinc-700">35 a 44 años (Emprendedoras / Marcas)</span>
                      <span className="font-bold text-zinc-800">21% (44 clics)</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-bold text-zinc-700">45 a 54 años</span>
                      <span className="font-bold text-zinc-800">19% (40 clics)</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-bold text-zinc-700">18 a 24 años (Estudiantes / Nuevos)</span>
                      <span className="font-bold text-zinc-800">11% (24 clics)</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Grid 3: Geografía y Enlaces Directos Oficiales */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Ubicaciones Geográficas */}
              <div className="bg-white border-2 border-zinc-200 rounded-2xl p-4 shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-100 mb-3">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-emerald-600" />
                    <h4 className="font-extrabold text-sm text-brand-black">Ubicaciones Principales</h4>
                  </div>
                  <a
                    href={GA4_LINKS.geography}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-brand-pink font-bold hover:underline inline-flex items-center gap-1"
                  >
                    Ver mapa en GA4 <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>

                <div className="space-y-2 text-[11px]">
                  <div className="flex items-center justify-between p-2 rounded-xl bg-zinc-50 border border-zinc-200">
                    <span className="font-bold">🇺🇾 Montevideo (Pocitos, Centro, Buceo, Carrasco)</span>
                    <span className="font-black text-emerald-700">75% del tráfico</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-zinc-50 border border-zinc-200">
                    <span className="font-bold">🇺🇾 Canelones (Cdad. de la Costa, Las Piedras)</span>
                    <span className="font-bold text-zinc-700">15% del tráfico</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-zinc-50 border border-zinc-200">
                    <span className="font-bold">🇺🇾 Maldonado (Punta del Este)</span>
                    <span className="font-bold text-zinc-700">5% del tráfico</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-500">
                    <span>Otros países (referidos web internacionales)</span>
                    <span>5% residual</span>
                  </div>
                </div>
              </div>

              {/* Botonera de Enlaces Oficiales */}
              <div className="bg-brand-cream border-2 border-brand-black rounded-2xl p-4 shadow-[3px_3px_0px_#0F0F12] flex flex-col justify-between">
                <div>
                  <h4 className="font-extrabold text-sm text-brand-black flex items-center gap-2 mb-2">
                    <Smartphone className="w-4 h-4 text-brand-pink" />
                    <span>Enlaces Directos a Informes Oficiales</span>
                  </h4>
                  <p className="text-[11px] text-zinc-600 mb-3">
                    Accede directamente con tu cuenta de Google para inspeccionar los dashboards nativos:
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={GA4_LINKS.acquisition}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white border border-zinc-300 hover:border-brand-pink font-bold text-[11px] text-zinc-800 flex items-center justify-between transition-colors shadow-sm"
                  >
                    <span>Tráfico & Pauta</span>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                  </a>
                  <a
                    href={GA4_LINKS.demographics}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white border border-zinc-300 hover:border-brand-pink font-bold text-[11px] text-zinc-800 flex items-center justify-between transition-colors shadow-sm"
                  >
                    <span>Edad y Sexo</span>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                  </a>
                  <a
                    href={GA4_LINKS.geography}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white border border-zinc-300 hover:border-brand-pink font-bold text-[11px] text-zinc-800 flex items-center justify-between transition-colors shadow-sm"
                  >
                    <span>Ubicaciones</span>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                  </a>
                  <a
                    href={GA4_LINKS.events}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white border border-zinc-300 hover:border-brand-pink font-bold text-[11px] text-zinc-800 flex items-center justify-between transition-colors shadow-sm"
                  >
                    <span>Eventos & WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* TAB 2: LEADS TABLE */}
        {activeTab === 'leads' && (
          <div className="flex-1 flex flex-col min-h-0 pt-2">
            {/* Toolbar */}
            <div className="py-3 flex flex-wrap items-center justify-between gap-3">
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
                  Aún no hay inscritos registrados en la base local. Los registros aparecerán aquí automáticamente en tiempo real.
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
            <div className="pt-3 text-center text-[11px] text-zinc-500">
              Sincronización automática de acreditación activa para el workshop.
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
