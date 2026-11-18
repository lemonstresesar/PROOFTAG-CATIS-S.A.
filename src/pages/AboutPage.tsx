import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Building2, Shield, Users, Target } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { LEADERSHIP_TEAM } from '../data/companyData';
import { useLanguage } from '../hooks/useLanguage';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { BreadcrumbHeader } from '../components/BreadcrumbHeader';

export function AboutPage() {
  const { lang, t } = useLanguage();

  useDocumentTitle(
    t('À propos & CATIS', 'About & CATIS'),
    t(
      'Découvrez PROOFTAG-CATIS S.A. (Cameroon Technology Information Services), son organisation, son équipe dirigeante à Douala et sa relation avec PROOFTAG SAS.',
      'Learn about PROOFTAG-CATIS S.A. (Cameroon Technology Information Services), its organization, Douala leadership team, and relationship with PROOFTAG SAS.'
    )
  );

  return (
    <div>
      <BreadcrumbHeader
        title={t('À propos de PROOFTAG-CATIS S.A.', 'About PROOFTAG-CATIS S.A.')}
        subtitle={t(
          'CATIS — Cameroon Technology Information Services : des solutions numériques au service des transports, de la sécurité routière et de l’authentification documentaire.',
          'CATIS — Cameroon Technology Information Services: digital technology solutions serving road transport, traffic safety, and document authentication.'
        )}
        breadcrumbs={[{ label: t('À propos & CATIS', 'About & CATIS') }]}
        image="/assets/official-www/EX6E6UaXQAEQk0A.jpg"
        imageAlt={t('Cérémonie institutionnelle PROOFTAG-CATIS S.A.', 'PROOFTAG-CATIS S.A. institutional delegation')}
      />

      {/* Company Overview & Meaning of CATIS */}
      <section className="py-16 bg-white border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              {t('Identité & positionnement', 'Identity & Positioning')}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              {t(
                'PROOFTAG-CATIS S.A. est une entreprise camerounaise de technologies de l’information implantée à Douala. L’acronyme CATIS signifie « Cameroon Technology Information Services ».',
                'PROOFTAG-CATIS S.A. is a Cameroonian information technology company headquartered in Douala. The acronym CATIS stands for "Cameroon Technology Information Services".'
              )}
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              {t(
                'L’entreprise développe, déploie et accompagne des systèmes numériques dédiés à la modernisation des processus de transport, à la sécurisation du contrôle technique automobile, à l’authentification des documents officiels, à la centralisation des données et au support technique opérationnel.',
                'The company develops, deploys, and supports digital systems dedicated to transport process modernization, vehicle inspection security, official document authentication, centralized data analytics, and field technical support.'
              )}
            </p>

            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 space-y-2">
              <h3 className="text-sm font-bold text-slate-900">
                {t('Historique et repères vérifiables', 'History & Verifiable Milestones')}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t(
                  'Selon les publications historiques de l’entreprise (www.prooftagcatis.com), PROOFTAG-CATIS a lancé ses activités au Cameroun en 2019 afin de déployer le logiciel et les équipements de sécurisation des vignettes automobiles et des procès-verbaux de visite technique. Conformément à la démarche de transparence éditoriale, cette date de lancement reste signalée pour confirmation définitive auprès de la direction.',
                  'According to historical company records (www.prooftagcatis.com), PROOFTAG-CATIS began operations in Cameroon in 2019 to supply software and equipment for securing vehicle inspection stickers and certificates. This milestone is flagged for final confirmation with corporate management.'
                )}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <div className="rounded-xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] aspect-[16/10]">
              <img
                src="/assets/official-www/Slider.png"
                alt={t('Présentation institutionnelle des solutions de supervision PROOFTAG-CATIS', 'PROOFTAG-CATIS institutional supervision briefing')}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] space-y-2">
                <Target className="w-5 h-5 text-[var(--color-primary)]" aria-hidden="true" />
                <h3 className="text-sm font-bold text-slate-900">{t('Vision', 'Vision')}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t(
                    'Produire des solutions technologiques sûres, sécurisées et innovantes afin d’améliorer les transports et de réduire significativement les décès et blessures sur les routes.',
                    'Deliver safe, secure, and innovative technological solutions to improve transport systems and significantly reduce road traffic deaths and injuries.'
                  )}
                </p>
              </div>
              <div className="p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] space-y-2">
                <Shield className="w-5 h-5 text-[var(--color-primary)]" aria-hidden="true" />
                <h3 className="text-sm font-bold text-slate-900">{t('Mission', 'Mission')}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t(
                    'Accompagner les gouvernements et acteurs de la sécurité routière vers les objectifs de la résolution 74/299 des Nations Unies (Décennie d’action 2021–2030).',
                    'Support governments and road safety stakeholders in achieving the targets of UN Resolution 74/299 (2021–2030 Decade of Action).'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Distinct Relationship with PROOFTAG SAS */}
      <section className="py-16 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-[var(--color-border)] rounded-xl p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]">
                {t('Architecture institutionnelle & technologique', 'Institutional & Technological Relationship')}
              </p>
              <h2 className="text-2xl font-bold text-slate-900">
                {t(
                  'Distinction entre PROOFTAG-CATIS S.A. et PROOFTAG SAS',
                  'Distinguishing PROOFTAG-CATIS S.A. and PROOFTAG SAS'
                )}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t(
                  'PROOFTAG-CATIS S.A. est l’entité camerounaise qui représente PROOFTAG SAS, société française spécialisée dans les technologies de sécurisation et d’authentification documentaire (notamment le Code à Bulles® et la suite CertiDOCS®).',
                  'PROOFTAG-CATIS S.A. is the Cameroonian entity representing PROOFTAG SAS, a French company specialized in document security and authentication technologies (including Bubble Tag® and CertiDOCS®).'
                )}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t(
                  'Tandis que PROOFTAG SAS conçoit les technologies mères d’empreinte physique et de certification, PROOFTAG-CATIS S.A. assure l’ingénierie applicative locale, le déploiement des systèmes de transport (DITROS-CT, CT-VERIF, DOSER), la formation et le support technique au Cameroun.',
                  'While PROOFTAG SAS develops the core physical authentication and certification technologies, PROOFTAG-CATIS S.A. leads local software engineering, deployment of transport platforms (DITROS-CT, CT-VERIF, DOSER), training, and field support in Cameroon.'
                )}
              </p>
              <div>
                <a
                  href={SITE_CONFIG.externalPortals.prooftagSas}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] hover:underline"
                >
                  <span>{t('Découvrir PROOFTAG SAS (prooftag.net)', 'Visit PROOFTAG SAS (prooftag.net)')}</span>
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] space-y-4">
              <img
                src={SITE_CONFIG.logos.prooftagSas}
                alt="Logo PROOFTAG SAS"
                referrerPolicy="no-referrer"
                className="h-14 w-auto object-contain"
              />
              <span className="text-xs text-slate-500 text-center">
                {t('Partenaire technologique — France (prooftag.net)', 'Technology Partner — France (prooftag.net)')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Organization & Leadership Team */}
      <section className="py-16 bg-white border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]">
                <Users className="w-4 h-4" aria-hidden="true" />
                <span>{t('Organisation & Gouvernance', 'Organization & Leadership')}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {t('L’équipe dirigeante et opérationnelle', 'Leadership & Operations Team')}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t(
                  'Profils issus de la présentation institutionnelle officielle de PROOFTAG-CATIS S.A. La structure s’appuie sur une Direction Générale, une Direction Technique dédiée aux systèmes et ingénieurs, ainsi qu’une Direction Administrative, RH et Comptable.',
                  'Profiles sourced from PROOFTAG-CATIS S.A.’s official corporate presentation. The organization integrates Executive Management, a Technical & Engineering Directorate, and Administration, HR & Accounting.'
                )}
              </p>
              <div className="p-4 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] text-xs text-slate-600 leading-relaxed">
                {t(
                  'Note éditoriale : seule la photographie vérifiée de Serge TAMPOLLA est affichée ; les portraits des autres membres sont représentés par des monogrammes dans l’attente de la validation de leurs portraits officiels.',
                  'Editorial note: only the verified portrait of Serge TAMPOLLA is displayed; other leadership profiles use clean monograms pending verified official photography.'
                )}
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {LEADERSHIP_TEAM.map((member) => (
                <div
                  key={member.id}
                  className="border border-[var(--color-border)] rounded-xl p-5 bg-[var(--color-surface)] flex items-center gap-4"
                >
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 rounded-full object-cover border border-[var(--color-border)] bg-white shrink-0"
                    />
                  ) : (
                    <div
                      aria-hidden="true"
                      className="w-16 h-16 rounded-full bg-[var(--color-primary)] text-white font-bold text-lg flex items-center justify-center shrink-0"
                    >
                      {member.initials}
                    </div>
                  )}
                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-slate-900 truncate">{member.name}</h3>
                    <p className="text-sm font-medium text-[var(--color-primary)]">
                      {member.role[lang]}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">{member.department[lang]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quality & Management Commitment + Historical Partners Reference */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-6 rounded-xl border border-[var(--color-border)] bg-white space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <Building2 className="w-4 h-4 text-[var(--color-primary)]" aria-hidden="true" />
                <span>{t('Engagements & système de management', 'Commitments & Management System')}</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t(
                  'La qualité des services et des solutions délivrés repose sur des processus rigoureux permettant aux équipes techniques et administratives de travailler de manière fiable, traçable et orientée vers la continuité opérationnelle.',
                  'Service and solution quality relies on structured processes enabling technical and administrative teams to deliver reliable, traceable operations focused on system continuity.'
                )}
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[var(--color-border)] bg-white space-y-3">
              <h3 className="text-sm font-bold text-slate-900">
                {t('Références institutionnelles historiques', 'Historical Institutional References')}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t(
                  'Les archives publiques mentionnent notamment la collaboration avec le Ministère des Transports du Cameroun (MINT / Direction des Transports Routiers), les Centres de contrôle technique agréés et PROOFTAG SAS. Les autorisations de publication des logos tiers restent soumises à validation préalable.',
                  'Public archives reference collaboration with the Ministry of Transport of Cameroon (MINT / Directorate of Road Transport), authorized vehicle inspection centers, and PROOFTAG SAS. Display of third-party institutional logos remains subject to formal approval.'
                )}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white text-sm font-semibold transition-colors"
            >
              <span>{t('Explorer nos solutions', 'Explore Our Solutions')}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-[var(--color-border)] hover:border-[var(--color-primary)] text-slate-800 text-sm font-semibold transition-colors"
            >
              <span>{t('Contacter la direction', 'Contact Management')}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
