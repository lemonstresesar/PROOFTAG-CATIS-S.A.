import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Server,
  MonitorCheck,
  Lock,
  Building2,
} from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { BreadcrumbHeader } from '../components/BreadcrumbHeader';
import { SpecimenVignette } from '../components/SpecimenVignette';

export function DitrosCtPage() {
  const { lang, t } = useLanguage();

  useDocumentTitle(
    'DITROS-CT',
    t(
      'DITROS-CT : système de sécurisation et de délivrance des vignettes et procès-verbaux de contrôle technique automobile déployé par PROOFTAG-CATIS S.A.',
      'DITROS-CT: secure vehicle technical inspection management and sticker issuance system deployed by PROOFTAG-CATIS S.A.'
    )
  );

  const challenges = [
    {
      fr: 'Falsification et circulation de vignettes ou procès-verbaux contrefaits',
      en: 'Counterfeiting and circulation of forged inspection stickers and reports',
    },
    {
      fr: 'Saisies manuelles exposées aux erreurs ou aux manipulations de résultats',
      en: 'Manual data entry vulnerable to human error or test-result manipulation',
    },
    {
      fr: 'Manque d’interconnexion en temps réel entre centres agréés et administration de tutelle',
      en: 'Lack of real-time interconnection between authorized centers and supervisory ministries',
    },
    {
      fr: 'Absence d’historique centralisé fiable sur l’état technique du parc automobile',
      en: 'Absence of a reliable centralized history on national fleet roadworthiness',
    },
  ];

  const equipmentList = [
    {
      fr: 'Serveur local et interface d’interconnexion GIEGLAN / bancs de test',
      en: 'Local server and GIEGLAN test-bench interconnection interface',
    },
    {
      fr: 'Caméras de capture horodatée et modules de géolocalisation du centre',
      en: 'Timestamped camera capture and center geolocation modules',
    },
    {
      fr: 'Tablettes d’inspection pour le contrôle visuel des points réglementaires',
      en: 'Inspection tablets for standardized visual checklist verification',
    },
    {
      fr: 'Imprimantes sécurisées de procès-verbaux et Scellés à Bulles® CertiDOCS CT',
      en: 'Secure report printers and CertiDOCS CT Bubble Seals®',
    },
  ];

  const stakeholderBenefits = [
    {
      title: { fr: 'Autorités publiques & Ministères', en: 'Public Authorities & Ministries' },
      desc: {
        fr: 'Visibilité consolidée sur l’activité des centres agréés, sécurisation des recettes et statistiques nationales fiables.',
        en: 'Consolidated oversight of authorized centers, revenue protection, and reliable national inspection data.',
      },
    },
    {
      title: { fr: 'Centres de contrôle technique', en: 'Technical Inspection Centers' },
      desc: {
        fr: 'Fluidification des flux d’accueil, capture automatisée depuis les bancs et traçabilité complète des opérations.',
        en: 'Streamlined lane operations, automated test-bench capture, and full operational auditability.',
      },
    },
    {
      title: { fr: 'Forces de contrôle & Assureurs', en: 'Enforcement & Insurance Sector' },
      desc: {
        fr: 'Vérification immédiate de l’authenticité des vignettes sur le terrain et fiabilisation des pièces justificatives.',
        en: 'Immediate roadside authentication of stickers and higher confidence in inspection records.',
      },
    },
  ];

  return (
    <div>
      <BreadcrumbHeader
        title="DITROS-CT"
        subtitle={t(
          'Système intégré de sécurisation du contrôle technique automobile, d’interconnexion des centres agréés et de délivrance de vignettes infalsifiables.',
          'Integrated system securing vehicle technical inspection, interconnecting authorized centers, and issuing tamper-proof stickers.'
        )}
        breadcrumbs={[
          { label: t('Solutions', 'Solutions'), to: '/solutions' },
          { label: 'DITROS-CT' },
        ]}
        image="/assets/ditros-ct/ditros-ct-caisse.png"
        imageAlt={t('Poste de gestion et d’accueil DITROS-CT', 'DITROS-CT management workstation')}
        imageFit="contain"
      />

      {/* Presentation & Logo */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <img
              src="/assets/ditros-ct/logo-ditros.png"
              alt="Logo DITROS-CT"
              referrerPolicy="no-referrer"
              className="h-11 w-auto object-contain"
            />
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              {t(
                'Moderniser et sécuriser toute la chaîne de la visite technique',
                'Modernizing and securing the entire technical inspection chain'
              )}
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {t(
                'DITROS-CT est une solution métier développée pour assurer la gestion globale des contrôles techniques automobiles : de l’identification administrative du véhicule jusqu’à la délivrance de la vignette sécurisée et la remontée des données vers le serveur central de l’autorité compétente.',
                'DITROS-CT is an enterprise platform engineered to manage end-to-end vehicle inspections: from initial vehicle identification to secure sticker issuance and central data reporting to supervisory authorities.'
              )}
            </p>
            <p className="text-sm text-slate-500">
              {t(
                'Note : DITROS-CT est un système applicatif interne exploité au sein des centres agréés et par l’administration de tutelle (non ouvert en accès libre au grand public).',
                'Note: DITROS-CT is an internal operational system used inside authorized inspection centers and by supervisory authorities (not a public self-service portal).'
              )}
            </p>
          </div>

          <div className="lg:col-span-5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[var(--color-primary)]" aria-hidden="true" />
              <span>{t('Enjeux adressés par DITROS-CT', 'Challenges Addressed by DITROS-CT')}</span>
            </h3>
            <ul className="space-y-3">
              {challenges.map((item) => (
                <li key={item.fr} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item[lang]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Architecture & Equipment */}
      <section className="py-16 bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="bg-white border border-[var(--color-border)] rounded-xl p-4 space-y-4">
              <img
                src="/assets/official-www/Certidocs-3.png"
                alt={t('Interface logicielle CertiDOCS CT', 'CertiDOCS CT software interface')}
                referrerPolicy="no-referrer"
                className="w-full h-auto rounded-lg object-contain"
              />
              <div className="grid grid-cols-2 gap-3">
                <img
                  src="/assets/official-www/Scell_C3_A9-_C3_A0-bulle.png"
                  alt={t('Scellé à Bulles® PROOFTAG', 'PROOFTAG Bubble Seal®')}
                  referrerPolicy="no-referrer"
                  className="w-full h-28 object-contain bg-[var(--color-surface)] rounded border border-[var(--color-border)] p-2"
                />
                <img
                  src="/assets/official-www/centre-technique-automobile.jpg"
                  alt={t('Équipements de contrôle technique', 'Vehicle inspection test equipment')}
                  referrerPolicy="no-referrer"
                  className="w-full h-28 object-cover rounded border border-[var(--color-border)]"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                {t('Architecture matérielle & logicielle', 'Hardware & Software Architecture')}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {t(
                  'Équipements en centre, CertiDOCS CT et centralisation',
                  'Center equipment, CertiDOCS CT, and central synchronization'
                )}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {t(
                  'Le dispositif combine la collecte automatisée des mesures mécaniques sur piste, le contrôle visuel assisté sur tablette, l’association cryptographique avec le Scellé à Bulles® et la synchronisation sécurisée avec les serveurs centraux.',
                  'The architecture combines automated mechanical test-lane acquisition, tablet-guided visual inspection, cryptographic pairing with Bubble Seals®, and secure synchronization with central servers.'
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {equipmentList.map((eq, idx) => {
                const icons = [Server, MonitorCheck, Lock, ShieldCheck];
                const Icon = icons[idx % icons.length];
                return (
                  <div
                    key={eq.fr}
                    className="bg-white border border-[var(--color-border)] rounded-lg p-4 flex items-start gap-3"
                  >
                    <Icon className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm text-slate-700 leading-snug">{eq[lang]}</span>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <Link
                to="/processus-securisation"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:underline"
              >
                <span>{t('Découvrir en détail les 12 points de sécurisation', 'Explore the 12 security points in detail')}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholder Benefits + Anonymized Specimen */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="space-y-3 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              {t('Bénéfices pour l’ensemble des acteurs', 'Benefits Across Stakeholders')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stakeholderBenefits.map((benefit) => (
              <div
                key={benefit.title.fr}
                className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 space-y-3"
              >
                <Building2 className="w-5 h-5 text-[var(--color-primary)]" aria-hidden="true" />
                <h3 className="text-base font-bold text-slate-900">{benefit.title[lang]}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{benefit.desc[lang]}</p>
              </div>
            ))}
          </div>

          {/* Anonymized Specimen (replaces pv-example.png) */}
          <SpecimenVignette />

          {/* Contact CTA */}
          <div className="bg-[var(--color-navy-deep)] text-white rounded-xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h3 className="text-xl font-bold">
                {t(
                  'Vous représentez une administration ou un centre de contrôle technique ?',
                  'Representing a public authority or vehicle inspection center?'
                )}
              </h3>
              <p className="text-sm text-slate-300">
                {t(
                  'Contactez nos équipes techniques à Douala pour échanger sur le déploiement, l’interconnexion de vos bancs ou l’assistance DITROS-CT.',
                  'Contact our technical team in Douala to discuss deployment, test-bench interconnection, or DITROS-CT support.'
                )}
              </p>
            </div>
            <Link
              to="/contact?solution=DITROS-CT"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-md bg-[var(--color-secondary)] text-slate-950 hover:bg-sky-300 transition-colors shrink-0 self-start md:self-auto"
            >
              <span>{t('Contacter l’équipe DITROS-CT', 'Contact DITROS-CT Team')}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
