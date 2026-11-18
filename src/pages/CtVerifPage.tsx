import { Link } from 'react-router-dom';
import { ExternalLink, ShieldCheck, Users, CheckCircle2, Info, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { useLanguage } from '../hooks/useLanguage';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { BreadcrumbHeader } from '../components/BreadcrumbHeader';
import { SolutionMark } from '../components/SolutionMark';

export function CtVerifPage() {
  const { lang, t } = useLanguage();

  useDocumentTitle(
    'CT-VERIF',
    t(
      'CT-VERIF : plateforme officielle de vérification publique de l’authenticité des visites techniques automobiles au Cameroun (mintct.cm).',
      'CT-VERIF: official public verification platform for vehicle technical inspection authenticity in Cameroon (mintct.cm).'
    )
  );

  const audiences = [
    {
      fr: 'Automobilistes et propriétaires souhaitant vérifier la validité de leur visite technique',
      en: 'Motorists and vehicle owners verifying the validity of their technical inspection',
    },
    {
      fr: 'Forces de contrôle routier et agents assermentés en mission sur le terrain',
      en: 'Roadside enforcement officers conducting field compliance checks',
    },
    {
      fr: 'Compagnies d’assurance lors de la souscription ou de la gestion des sinistres',
      en: 'Insurance companies during underwriting and claims assessment',
    },
    {
      fr: 'Acquéreurs de véhicules d’occasion soucieux de contrôler la conformité documentaire',
      en: 'Used-vehicle buyers verifying document authenticity prior to purchase',
    },
  ];

  const steps = [
    {
      step: '01',
      title: { fr: 'Accès au portail officiel', en: 'Access the Official Portal' },
      desc: {
        fr: 'Rendez-vous sur le portail public habilité mintct.cm via ordinateur ou smartphone.',
        en: 'Open the authorized public portal at mintct.cm from any computer or mobile device.',
      },
    },
    {
      step: '02',
      title: { fr: 'Saisie ou lecture du code sécurisé', en: 'Enter or Scan the Security Code' },
      desc: {
        fr: 'Renseignez les références figurant sur la vignette ou scannez le code associé au Scellé à Bulles®.',
        en: 'Enter the inspection sticker reference or scan the code linked to the Bubble Seal®.',
      },
    },
    {
      step: '03',
      title: { fr: 'Restitution directe du statut', en: 'Direct Authenticity Status' },
      desc: {
        fr: 'Le portail officiel confirme la concordance avec les données enregistrées au titre de la visite technique.',
        en: 'The official portal verifies alignment with the registered inspection database.',
      },
    },
  ];

  return (
    <div>
      <BreadcrumbHeader
        title="CT-VERIF"
        subtitle={t(
          'Plateforme grand public mise en place à la demande de la Direction des Transports Routiers du Ministère des Transports pour vérifier l’authenticité des visites techniques.',
          'Public platform commissioned by the Directorate of Road Transport of the Ministry of Transport to verify technical inspection authenticity.'
        )}
        breadcrumbs={[
          { label: t('Solutions', 'Solutions'), to: '/solutions' },
          { label: 'CT-VERIF' },
        ]}
        image="/assets/ct-verif/ct-verif-hero.png"
        imageAlt={t('Plateforme CT-VERIF de vérification des vignettes', 'CT-VERIF sticker verification platform')}
        imageFit="contain"
      />

      {/* Presentation & Direct Official Link */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-5">
            <SolutionMark id="ct-verif" logo="/assets/ct-verif/logo-ct-verif.png" name="CT-VERIF" className="h-10" />
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              {t(
                'Lutte contre la fraude documentaire et transparence routière',
                'Combating document fraud and improving road safety transparency'
              )}
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {t(
                'CT-VERIF permet à tout usager, organisme ou agent habilité de vérifier en ligne si une vignette ou un procès-verbal de contrôle technique correspond à une opération réellement enregistrée dans le système officiel.',
                'CT-VERIF enables motorists, organizations, and authorized officers to verify online whether a vehicle inspection sticker or certificate corresponds to a genuine record in the official registry.'
              )}
            </p>

            {/* Important honesty/security notice */}
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-4 flex items-start gap-3">
              <Info className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm text-slate-700 leading-relaxed">
                {t(
                  'Pour garantir l’intégrité des vérifications et protéger les données, aucun formulaire fictif ou simulateur local n’est proposé ici. Toute vérification officielle s’effectue exclusivement sur le portail externe habilité.',
                  'To safeguard data integrity, no local mock lookup or simulation is provided here. All official verifications take place exclusively on the authorized external portal.'
                )}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={SITE_CONFIG.externalPortals.ctVerif}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-md bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-colors"
              >
                <span>{t('Accéder à CT-VERIF (mintct.cm)', 'Access CT-VERIF (mintct.cm)')}</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
              <Link
                to="/contact?solution=CT-VERIF"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold rounded-md border border-[var(--color-border)] text-slate-800 hover:bg-[var(--color-surface)] transition-colors"
              >
                <span>{t('Signaler une anomalie / Nous contacter', 'Report an Issue / Contact Us')}</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-[var(--color-primary)]" aria-hidden="true" />
              <span>{t('Public cible', 'Target Public')}</span>
            </h3>
            <ul className="space-y-3">
              {audiences.map((aud) => (
                <li key={aud.fr} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{aud[lang]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* General Operation */}
      <section className="py-16 bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="max-w-2xl space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
              {t('Fonctionnement général', 'General Workflow')}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              {t('Une vérification simple en 3 temps', 'Simple 3-Step Verification')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((item) => (
              <div
                key={item.step}
                className="bg-white border border-[var(--color-border)] rounded-xl p-6 space-y-3"
              >
                <span className="font-mono text-sm font-bold text-[var(--color-primary)] tabular-nums">
                  {item.step}
                </span>
                <h3 className="text-lg font-bold text-slate-900">{item.title[lang]}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc[lang]}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-[var(--color-border)] rounded-xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  {t('Lien technologique avec DITROS-CT et le Code à Bulles®', 'Technological Link with DITROS-CT & Bubble Tag®')}
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  {t(
                    'CT-VERIF s’appuie sur les enregistrements générés tout au long des 12 points de sécurisation.',
                    'CT-VERIF draws on records generated across the 12-point inspection security chain.'
                  )}
                </p>
              </div>
            </div>
            <Link
              to="/processus-securisation"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] hover:underline shrink-0"
            >
              <span>{t('Voir le processus', 'View Process')}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
