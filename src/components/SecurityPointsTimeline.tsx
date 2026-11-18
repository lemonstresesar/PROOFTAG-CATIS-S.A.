import { useState } from 'react';
import {
  Database,
  RefreshCw,
  Cpu,
  Camera,
  MapPin,
  Tablet,
  FileText,
  CheckSquare,
  Printer,
  ShieldCheck,
  Server,
  ScanSearch,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { SECURITY_POINTS, type SecurityPoint } from '../data/securityPointsData';
import { useLanguage } from '../hooks/useLanguage';

const ICON_MAP: Record<SecurityPoint['iconKey'], typeof Database> = {
  Database,
  RefreshCw,
  Cpu,
  Camera,
  MapPin,
  Tablet,
  FileText,
  CheckSquare,
  Printer,
  ShieldCheck,
  Server,
  ScanSearch,
};

export function SecurityPointsTimeline() {
  const { lang, t } = useLanguage();
  const [selectedStep, setSelectedStep] = useState<number>(1);
  const [imgFailed, setImgFailed] = useState<Record<number, boolean>>({});

  const activePoint = SECURITY_POINTS.find((p) => p.step === selectedStep) || SECURITY_POINTS[0];
  const ActiveIcon = ICON_MAP[activePoint.iconKey];

  return (
    <div className="space-y-8">
      {/* 12-Step Interactive Selector Grid */}
      <div
        role="tablist"
        aria-label={t('Les 12 points de sécurisation', 'The 12 Security Points')}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
      >
        {SECURITY_POINTS.map((point) => {
          const Icon = ICON_MAP[point.iconKey];
          const isActive = point.step === selectedStep;
          return (
            <button
              key={point.step}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setSelectedStep(point.step)}
              className={`text-left p-3.5 rounded-lg border transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                isActive
                  ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-sm'
                  : 'bg-white text-slate-800 border-[var(--color-border)] hover:border-[var(--color-primary)] hover:bg-[var(--color-surface)]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`font-mono text-xs font-bold tabular-nums ${
                    isActive ? 'text-sky-200' : 'text-[var(--color-primary)]'
                  }`}
                >
                  {String(point.step).padStart(2, '0')}
                </span>
                <Icon
                  className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`}
                  aria-hidden="true"
                />
              </div>
              <div className="text-xs font-semibold leading-snug line-clamp-2">
                {point.phase[lang]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Step Detail Card */}
      <div
        role="tabpanel"
        aria-live="polite"
        className="bg-white border border-[var(--color-border)] rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12"
      >
        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs font-medium text-slate-500">
              <span className="font-mono font-bold text-[var(--color-primary)] tabular-nums">
                {t('Étape', 'Step')} {String(activePoint.step).padStart(2, '0')} / 12
              </span>
              <span aria-hidden="true">·</span>
              <span>{activePoint.phase[lang]}</span>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center shrink-0">
                <ActiveIcon className="w-5 h-5 text-[var(--color-primary)]" aria-hidden="true" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                {activePoint.title[lang]}
              </h3>
            </div>

            <p className="text-base text-slate-600 leading-relaxed">
              {activePoint.description[lang]}
            </p>
          </div>

          {/* Step Navigation Controls */}
          <div className="pt-5 border-t border-[var(--color-border)] flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setSelectedStep((s) => (s > 1 ? s - 1 : 12))}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-md border border-[var(--color-border)] text-slate-700 hover:bg-[var(--color-surface)] cursor-pointer transition-colors"
            >
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              <span>{t('Étape précédente', 'Previous Step')}</span>
            </button>

            <div className="hidden sm:flex items-center gap-1.5" aria-hidden="true">
              {SECURITY_POINTS.map((p) => (
                <span
                  key={p.step}
                  className={`h-1.5 rounded-full transition-all ${
                    p.step === selectedStep ? 'w-5 bg-[var(--color-primary)]' : 'w-1.5 bg-slate-300'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => setSelectedStep((s) => (s < 12 ? s + 1 : 1))}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-md bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] cursor-pointer transition-colors"
            >
              <span>{t('Étape suivante', 'Next Step')}</span>
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 bg-[var(--color-surface)] border-t lg:border-t-0 lg:border-l border-[var(--color-border)] p-6 flex flex-col justify-center">
          {!imgFailed[activePoint.step] ? (
            <div className="rounded-lg overflow-hidden border border-[var(--color-border)] bg-white aspect-[4/3]">
              <img
                src={activePoint.illustration}
                alt={activePoint.title[lang]}
                referrerPolicy="no-referrer"
                onError={() => setImgFailed((prev) => ({ ...prev, [activePoint.step]: true }))}
                className={`w-full h-full ${
                  activePoint.imageFit === 'contain' ? 'object-contain p-2' : 'object-cover'
                }`}
              />
            </div>
          ) : (
            <div className="rounded-lg border border-[var(--color-border)] bg-white aspect-[4/3] flex flex-col items-center justify-center p-6 text-center space-y-2">
              <ActiveIcon className="w-8 h-8 text-[var(--color-primary)]" aria-hidden="true" />
              <p className="text-sm font-semibold text-slate-800">{activePoint.phase[lang]}</p>
            </div>
          )}
          <p className="text-xs text-slate-500 mt-3 text-center">
            {t(
              'Illustration opérationnelle — Aucun identifiant ou paramètre système interne exposé.',
              'Operational illustration — No internal system credentials or configurations exposed.'
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
