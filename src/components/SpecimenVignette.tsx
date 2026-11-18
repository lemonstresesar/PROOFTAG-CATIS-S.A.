import { QrCode, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export function SpecimenVignette() {
  const { t } = useLanguage();

  return (
    <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[var(--color-border)]">
        <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-warning)]">
          {t('Spécimen fictif — Illustration non officielle', 'Fictitious Specimen — Non-Official Illustration')}
        </span>
        <span className="font-mono text-xs text-slate-500 tabular-nums">
          REF : EXEMPLE-0000
        </span>
      </div>

      {/* Anonymized Report & Sticker Illustration */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
        <div className="md:col-span-7 bg-white border border-[var(--color-border)] rounded-lg p-5 space-y-4">
          <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase">
                {t('Exemple de procès-verbal numérique', 'Sample Digital Inspection Report')}
              </p>
              <h4 className="text-base font-bold text-slate-900 mt-0.5">
                {t('Contrôle Technique Périodique', 'Periodic Technical Inspection')}
              </h4>
            </div>
            <span className="text-xs font-mono font-semibold text-[var(--color-success)]">
              {t('EXEMPLE : ACCEPTÉ', 'SAMPLE: ACCEPTED')}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <span className="block text-slate-500">{t('Immatriculation (fictive)', 'License Plate (fictitious)')}</span>
              <span className="font-mono font-semibold text-slate-900">XX 000 XX</span>
            </div>
            <div>
              <span className="block text-slate-500">{t('Catégorie', 'Category')}</span>
              <span className="font-medium text-slate-900">{t('Véhicule de tourisme (exemple)', 'Passenger vehicle (sample)')}</span>
            </div>
            <div>
              <span className="block text-slate-500">{t('Bancs de test (GIEGLAN)', 'Test Benches (GIEGLAN)')}</span>
              <span className="font-medium text-slate-900">{t('Acquisition automatique', 'Automated capture')}</span>
            </div>
            <div>
              <span className="block text-slate-500">{t('Géolocalisation', 'Geolocation')}</span>
              <span className="font-mono text-slate-900">0.0000° N, 0.0000° E</span>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 text-xs text-slate-500">
            {t(
              'Illustration schématique anonymisée : aucune donnée réelle de véhicule ou de propriétaire n’est affichée.',
              'Anonymized schematic illustration: no real vehicle or owner data is displayed.'
            )}
          </div>
        </div>

        {/* Simulated Non-functional Bubble Seal + QR schematic */}
        <div className="md:col-span-5 bg-white border border-[var(--color-border)] rounded-lg p-5 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-700">
              {t('Schéma de vignette sécurisée', 'Secure Sticker Schematic')}
            </span>
            <ShieldCheck className="w-4 h-4 text-[var(--color-primary)]" aria-hidden="true" />
          </div>

          <div className="border border-dashed border-slate-300 rounded-md p-4 bg-slate-50 flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="text-[11px] font-semibold text-[var(--color-primary)] uppercase">
                {t('Empreinte Code à Bulles®', 'Bubble Tag® Fingerprint')}
              </div>
              <div className="h-10 w-24 rounded bg-gradient-to-br from-slate-700 to-slate-900 relative overflow-hidden flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-sky-300/70 absolute top-2 left-3" />
                <span className="w-1.5 h-1.5 rounded-full bg-sky-200/80 absolute bottom-2 right-4" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/50 absolute top-4 right-7" />
                <span className="text-[9px] font-mono text-white/90 tracking-wider">DEMO-TAG</span>
              </div>
              <div className="text-[11px] font-mono text-slate-500">XX-000-XX</div>
            </div>

            <div className="flex flex-col items-center">
              <QrCode className="w-14 h-14 text-slate-400" aria-hidden="true" />
              <span className="text-[10px] font-mono text-slate-400 mt-1">NON ACTIF</span>
            </div>
          </div>

          <p className="text-[11px] text-slate-500 leading-relaxed">
            {t(
              'Maquette non fonctionnelle à but exclusivement pédagogique. Ne constitue pas un titre officiel.',
              'Non-functional mockup for educational illustration only. Does not constitute an official certificate.'
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
