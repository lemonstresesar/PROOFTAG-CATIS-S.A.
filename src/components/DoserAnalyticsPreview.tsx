import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';

interface SampleDataset {
  id: 'causes' | 'vehicles' | 'severity';
  label: { fr: string; en: string };
  bars: { label: { fr: string; en: string }; value: number }[];
}

// Données explicitement fictives d'illustration — jamais présentées comme statistiques officielles
const ILLUSTRATIVE_DATASETS: SampleDataset[] = [
  {
    id: 'causes',
    label: { fr: 'Facteurs (exemple fictif)', en: 'Factors (fictitious sample)' },
    bars: [
      { label: { fr: 'Facteur comportemental', en: 'Behavioral factor' }, value: 42 },
      { label: { fr: 'État mécanique', en: 'Mechanical condition' }, value: 26 },
      { label: { fr: 'Infrastructure & signalisation', en: 'Infrastructure & signage' }, value: 19 },
      { label: { fr: 'Conditions météo / visibilité', en: 'Weather / visibility' }, value: 13 },
    ],
  },
  {
    id: 'vehicles',
    label: { fr: 'Catégories (exemple fictif)', en: 'Vehicle classes (fictitious sample)' },
    bars: [
      { label: { fr: 'Véhicules légers', en: 'Light vehicles' }, value: 48 },
      { label: { fr: 'Transport en commun', en: 'Public transport' }, value: 22 },
      { label: { fr: 'Deux-roues motorisés', en: 'Motorized two-wheelers' }, value: 18 },
      { label: { fr: 'Poids lourds', en: 'Heavy goods vehicles' }, value: 12 },
    ],
  },
  {
    id: 'severity',
    label: { fr: 'Typologie (exemple fictif)', en: 'Incident type (fictitious sample)' },
    bars: [
      { label: { fr: 'Dommages matériels', en: 'Property damage' }, value: 58 },
      { label: { fr: 'Blessures légères', en: 'Minor injuries' }, value: 27 },
      { label: { fr: 'Blessures graves', en: 'Serious injuries' }, value: 11 },
      { label: { fr: 'Cas critiques', en: 'Critical incidents' }, value: 4 },
    ],
  },
];

export function DoserAnalyticsPreview() {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'causes' | 'vehicles' | 'severity'>('causes');
  const current = ILLUSTRATIVE_DATASETS.find((d) => d.id === activeTab) || ILLUSTRATIVE_DATASETS[0];

  return (
    <div className="bg-white border border-[var(--color-border)] rounded-xl p-6 sm:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--color-border)]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-warning)]">
            {t(
              'Données fictives d’illustration — Non représentatives de statistiques officielles',
              'Fictitious illustrative data — Not official road safety statistics'
            )}
          </p>
          <h3 className="text-lg font-bold text-slate-900 mt-1">
            {t('Exemple d’interface analytique DOSER', 'Sample DOSER Analytical View')}
          </h3>
        </div>

        <div className="inline-flex items-center p-1 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg self-start">
          {ILLUSTRATIVE_DATASETS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-white text-[var(--color-primary)] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label[lang]}
            </button>
          ))}
        </div>
      </div>

      {/* Horizontal bar visualization */}
      <div className="space-y-4">
        {current.bars.map((bar) => (
          <div key={bar.label.fr} className="space-y-1.5">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-slate-800">{bar.label[lang]}</span>
              <span className="font-mono text-xs font-semibold text-[var(--color-primary)] tabular-nums">
                {bar.value} % ({t('exemple', 'sample')})
              </span>
            </div>
            <div className="h-3 w-full bg-[var(--color-surface)] rounded-full overflow-hidden border border-[var(--color-border)]">
              <div
                className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full transition-all duration-300"
                style={{ width: `${bar.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-slate-500 pt-2 border-t border-[var(--color-border)]">
        {t(
          'Avertissement : les valeurs ci-dessus sont exclusivement générées à des fins de démonstration visuelle de l’architecture de reporting DOSER. Les données officielles sont administrées exclusivement sur la plateforme habilitée.',
          'Disclaimer: Values shown above are strictly synthetic examples demonstrating DOSER reporting capabilities. Official statistics reside solely within the authorized platform.'
        )}
      </p>
    </div>
  );
}
