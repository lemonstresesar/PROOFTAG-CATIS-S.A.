import { Link } from 'react-router-dom';
import { ExternalLink, BarChart3, Database, Share2, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { useLanguage } from '../hooks/useLanguage';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { BreadcrumbHeader } from '../components/BreadcrumbHeader';
import { DoserAnalyticsPreview } from '../components/DoserAnalyticsPreview';

export function DoserPage() {
  const { lang, t } = useLanguage();

  useDocumentTitle(
    'DOSER',
    t(
      'DOSER : Système de Données de Sécurité Routière développé pour la collecte, l’analyse statistique et le pilotage des accidents de la route.',
      'DOSER: Road Safety Data System engineered for accident data collection, statistical analysis, and public policy support.'
    )
  );

  const problemsSolved = [
    {
      fr: 'Dispersion des constats d’accidents entre forces de l’ordre, services de santé et administrations',
      en: 'Fragmentation of crash records across law enforcement, health services, and ministries',
    },
    {
      fr: 'Absence d’indicateurs harmonisés pour localiser les zones accidentogènes et leurs facteurs clés',
      en: 'Lack of standardized indicators to pinpoint high-risk corridors and contributing factors',
    },
    {
      fr: 'Délais importants dans la consolidation statistique utile aux campagnes de prévention routière',
      en: 'Slow statistical consolidation delaying targeted road safety prevention campaigns',
    },
  ];

  const pillars = [
    {
      icon: Database,
      title: { fr: 'Collecte structurée sur le terrain', en: 'Structured Field Data Collection' },
      desc: {
        fr: 'Enregistrement normalisé des circonstances, usagers impliqués, conditions routières et conséquences des accidents.',
        en: 'Standardized recording of crash circumstances, road users involved, infrastructure conditions, and severity.',
      },
    },
    {
      icon: BarChart3,
      title: { fr: 'Traitement & analyse statistique', en: 'Processing & Statistical Analysis' },
      desc: {
        fr: 'Production de tableaux de bord, croisements multifactoriels et appui aux travaux de recherche scientifique.',
        en: 'Generation of analytical dashboards, multifactorial cross-tabulations, and scientific research support.',
      },
    },
    {
      icon: Share2,
      title: { fr: 'Partage inter-institutionnel', en: 'Inter-Institutional Information Sharing' },
      desc: {
        fr: 'Mise à disposition contrôlée des synthèses entre ministères, forces de sécurité, hôpitaux et acteurs de prévention.',
        en: 'Controlled insight sharing across ministries, enforcement agencies, health institutions, and prevention bodies.',
      },
    },
  ];

  return (
    <div>
      <BreadcrumbHeader
        title="DOSER"
        subtitle={t(
          'Système de Données de Sécurité Routière dédié à la collecte des données d’accidents, à la recherche analytique et à la coordination des acteurs publics.',
          'Road Safety Data System dedicated to accident data collection, analytical research, and multi-agency coordination.'
        )}
        breadcrumbs={[
          { label: t('Solutions', 'Solutions'), to: '/solutions' },
          { label: 'DOSER' },
        ]}
        image="/assets/doser/doser-hero.png"
        imageAlt={t('Système DOSER de données de sécurité routière', 'DOSER road safety data system')}
        imageFit="contain"
      />

      {/* Presentation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-5">
            <img
              src="/assets/doser/logo-doser.png"
              alt="Logo DOSER"
              referrerPolicy="no-referrer"
              className="h-11 w-auto object-contain"
            />
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              {t(
                'Éclairer les décisions de sécurité routière par des données fiables',
                'Informing road safety policy with structured data'
              )}
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {t(
                'DOSER répond aux besoins d’observation et de recherche sur l’accidentalité routière. En structurant la remontée d’informations depuis le terrain jusqu’aux décideurs publics, la plateforme accompagne l’évaluation des politiques de prévention et les objectifs de la Décennie d’action pour la sécurité routière 2021–2030.',
                'DOSER addresses the need for systematic road crash observation and research. By structuring data flows from field collection to public decision-makers, the platform supports road safety evaluation and the UN Decade of Action 2021–2030 goals.'
              )}
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={SITE_CONFIG.externalPortals.doser}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-md bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-colors"
              >
                <span>{t('Découvrir DOSER (doser.ditros.org)', 'Explore DOSER (doser.ditros.org)')}</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
              <Link
                to="/contact?solution=DOSER"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold rounded-md border border-[var(--color-border)] text-slate-800 hover:bg-[var(--color-surface)] transition-colors"
              >
                <span>{t('Demander une présentation', 'Request a Briefing')}</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              {t('Problématiques traitées', 'Challenges Addressed')}
            </h3>
            <ul className="space-y-3">
              {problemsSolved.map((p) => (
                <li key={p.fr} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{p[lang]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pillars & Fictitious Illustrative Preview */}
      <section className="py-16 bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title.fr}
                  className="bg-white border border-[var(--color-border)] rounded-xl p-6 space-y-3"
                >
                  <Icon className="w-6 h-6 text-[var(--color-primary)]" aria-hidden="true" />
                  <h3 className="text-base font-bold text-slate-900">{pillar.title[lang]}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{pillar.desc[lang]}</p>
                </div>
              );
            })}
          </div>

          {/* Explicitly labeled fictitious illustrative preview */}
          <DoserAnalyticsPreview />
        </div>
      </section>
    </div>
  );
}
