import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SECURITY_POINTS } from '../data/securityPointsData';
import { useLanguage } from '../hooks/useLanguage';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { BreadcrumbHeader } from '../components/BreadcrumbHeader';
import { SecurityPointsTimeline } from '../components/SecurityPointsTimeline';
import { SpecimenVignette } from '../components/SpecimenVignette';

export function SecurityProcessPage() {
  const { lang, t } = useLanguage();

  useDocumentTitle(
    t('Les 12 points de sécurisation', 'The 12 Security Points'),
    t(
      'Découvrez l’architecture complète en 12 étapes assurant la fiabilité, la traçabilité et l’infalsifiabilité du contrôle technique automobile.',
      'Explore the full 12-step security architecture ensuring vehicle technical inspection reliability, traceability, and anti-counterfeiting protection.'
    )
  );

  return (
    <div>
      <BreadcrumbHeader
        title={t('Le processus complet en 12 points de sécurisation', 'The Complete 12-Point Security Process')}
        subtitle={t(
          'De l’identification en base centrale à l’authentification sur le terrain, chaque étape verrouille l’intégrité des données et des vignettes de visite technique.',
          'From central database matching to roadside authentication, each step locks down the integrity of inspection records and stickers.'
        )}
        breadcrumbs={[
          { label: t('Solutions', 'Solutions'), to: '/solutions' },
          { label: t('12 points de sécurisation', '12 Security Points') },
        ]}
        image="/assets/official-www/1588859220771_Process-S_C3_A9curis_C3_A9-D_C3_A9livrance-Vignette2019-ok_Paysage.jpg"
        imageAlt={t('Schéma du processus de sécurisation en 12 points', '12-point security workflow overview')}
        imageFit="contain"
      />

      {/* Interactive Timeline */}
      <section className="py-16 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="max-w-3xl space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
              {t('Exploration interactive', 'Interactive Walkthrough')}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              {t('Parcourir les 12 étapes de la chaîne de confiance', 'Navigate the 12 steps of the chain of trust')}
            </h2>
          </div>

          <SecurityPointsTimeline />
        </div>
      </section>

      {/* Complete Reference Index of All 12 Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              {t('Synthèse des 12 points de contrôle et de sécurité', 'Summary of All 12 Security Checkpoints')}
            </h2>
            <p className="text-slate-600">
              {t(
                'Vue d’ensemble séquentielle des mécanismes déployés dans les centres agréés équipés de DITROS-CT et CertiDOCS CT.',
                'Sequential overview of the mechanisms deployed across authorized centers equipped with DITROS-CT and CertiDOCS CT.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SECURITY_POINTS.map((point) => (
              <div
                key={point.step}
                className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-5 space-y-2.5"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono font-bold text-[var(--color-primary)] tabular-nums">
                    {String(point.step).padStart(2, '0')} / 12
                  </span>
                  <span className="text-slate-500 font-medium">{point.phase[lang]}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {point.title[lang]}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {point.description[lang]}
                </p>
              </div>
            ))}
          </div>

          <SpecimenVignette />

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[var(--color-border)]">
            <p className="text-sm text-slate-600">
              {t(
                'Souhaitez-vous approfondir l’architecture technique avec nos ingénieurs ?',
                'Would you like to discuss this technical architecture with our engineers?'
              )}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-md bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-colors"
            >
              <span>{t('Nous contacter', 'Contact Us')}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
