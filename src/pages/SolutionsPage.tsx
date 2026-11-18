import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, ShieldCheck, Layers, Server } from 'lucide-react';
import { SOLUTIONS_LIST } from '../data/solutionsData';
import { useLanguage } from '../hooks/useLanguage';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { BreadcrumbHeader } from '../components/BreadcrumbHeader';
import { SolutionMark } from '../components/SolutionMark';

export function SolutionsPage() {
  const { lang, t } = useLanguage();

  useDocumentTitle(
    t('Solutions numériques', 'Digital Solutions'),
    t(
      'Découvrez les plateformes technologiques développées et déployées par PROOFTAG-CATIS S.A. : DITROS-CT, CT-VERIF et DOSER.',
      'Explore the digital platforms developed and deployed by PROOFTAG-CATIS S.A.: DITROS-CT, CT-VERIF, and DOSER.'
    )
  );

  return (
    <div>
      <BreadcrumbHeader
        title={t('Nos solutions technologiques', 'Our Technology Solutions')}
        subtitle={t(
          'Trois plateformes complémentaires couvrant la sécurisation du contrôle technique automobile, l’authentification publique des vignettes et l’analyse des données d’accidents de la route.',
          'Three complementary platforms covering vehicle inspection security, public sticker verification, and road safety accident analytics.'
        )}
        breadcrumbs={[{ label: t('Solutions', 'Solutions') }]}
        image="/assets/official-www/83882294_120016879536842_3101088639661113344_n.jpg"
        imageAlt={t('Centre de contrôle technique automobile', 'Vehicle technical inspection center')}
      />

      {/* Solutions Overview Grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
              {t('Écosystème applicatif', 'Application Ecosystem')}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              {t(
                'Des plateformes conçues pour la traçabilité et la confiance institutionnelle',
                'Platforms engineered for traceability and institutional trust'
              )}
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {t(
                'Chaque solution répond à un besoin opérationnel précis des autorités publiques, des opérateurs agréés et des usagers de la route.',
                'Each solution addresses a concrete operational need for public authorities, authorized operators, and road users.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {SOLUTIONS_LIST.map((solution) => (
              <article
                key={solution.id}
                className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl overflow-hidden flex flex-col justify-between hover:border-[var(--color-primary)] transition-colors"
              >
                <div>
                  <div className="bg-white border-b border-[var(--color-border)] p-6 flex items-center justify-between gap-4">
                    <SolutionMark id={solution.id} logo={solution.logo} name={solution.name} className="h-9" />
                    <span className="text-xs font-mono font-semibold text-slate-500">
                      {solution.externalUrl
                        ? t('Portail public', 'Public Portal')
                        : t('Système interne', 'Internal System')}
                    </span>
                  </div>

                  <div className="aspect-[16/10] bg-white border-b border-[var(--color-border)] p-3 overflow-hidden">
                    <img
                      src={solution.heroImage}
                      alt={solution.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-slate-900">{solution.name}</h3>
                    <p className="text-sm font-semibold text-[var(--color-primary)]">
                      {solution.tagline[lang]}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {solution.shortDescription[lang]}
                    </p>
                    <p className="text-xs text-slate-500 pt-2 border-t border-[var(--color-border)]">
                      {solution.audience[lang]}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 flex flex-wrap items-center gap-3">
                  <Link
                    to={solution.route}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold rounded-md bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-colors"
                  >
                    <span>{t('Découvrir la fiche', 'View Details')}</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>

                  {solution.externalUrl && (
                    <a
                      href={solution.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold rounded-md border border-[var(--color-border)] bg-white text-slate-700 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors"
                    >
                      <span>{t('Portail officiel', 'Official Portal')}</span>
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture & Security Process Banner */}
      <section className="py-16 bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
              {t('Socle technologique commun', 'Shared Technological Foundation')}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              {t(
                'Interconnexion terrain, Scellé à Bulles® et centralisation nationale',
                'Field interconnection, Bubble Seal® authentication, and national centralization'
              )}
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {t(
                'Nos solutions associent la capture automatisée sur les bancs de contrôle technique (protocole GIEGLAN), l’authentification physique/numérique par Code à Bulles® (CertiDOCS CT) et des portails de restitution destinés aux autorités et aux citoyens.',
                'Our solutions combine automated test-bench capture (GIEGLAN protocol), physical/digital Bubble Tag® authentication (CertiDOCS CT), and reporting portals built for authorities and citizens.'
              )}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white border border-[var(--color-border)] rounded-lg p-4 space-y-1.5">
                <Server className="w-5 h-5 text-[var(--color-primary)]" aria-hidden="true" />
                <div className="text-sm font-bold text-slate-900">GIEGLAN & ODB</div>
                <p className="text-xs text-slate-600">
                  {t('Acquisition directe sans saisie manuelle', 'Direct capture without manual entry')}
                </p>
              </div>
              <div className="bg-white border border-[var(--color-border)] rounded-lg p-4 space-y-1.5">
                <ShieldCheck className="w-5 h-5 text-[var(--color-primary)]" aria-hidden="true" />
                <div className="text-sm font-bold text-slate-900">CertiDOCS CT</div>
                <p className="text-xs text-slate-600">
                  {t('Scellé à Bulles® infalsifiable et QR code', 'Tamper-proof Bubble Seal® and QR code')}
                </p>
              </div>
              <div className="bg-white border border-[var(--color-border)] rounded-lg p-4 space-y-1.5">
                <Layers className="w-5 h-5 text-[var(--color-primary)]" aria-hidden="true" />
                <div className="text-sm font-bold text-slate-900">{t('12 points de contrôle', '12 Security Points')}</div>
                <p className="text-xs text-slate-600">
                  {t('Traçabilité complète du processus', 'End-to-end process traceability')}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white border border-[var(--color-border)] rounded-xl p-6 sm:p-8 space-y-5">
            <h3 className="text-lg font-bold text-slate-900">
              {t('Explorer la chaîne complète en 12 étapes', 'Explore the complete 12-step chain')}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t(
                'Consultez notre schéma interactif détaillant chaque point de sécurisation : de l’identification en base centrale jusqu’au contrôle routier sur le terrain.',
                'Inspect our interactive schematic detailing every security checkpoint: from central database matching to roadside authentication.'
              )}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/processus-securisation"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-md bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-colors"
              >
                <span>{t('Voir les 12 points de sécurisation', 'View the 12 Security Points')}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-md border border-[var(--color-border)] text-slate-800 hover:bg-[var(--color-surface)] transition-colors"
              >
                <span>{t('Planifier un échange', 'Schedule a Consultation')}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
