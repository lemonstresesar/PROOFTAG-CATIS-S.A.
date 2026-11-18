import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Layers, Fingerprint, QrCode, ScanLine, Cpu, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { EXPERTISE_DATA } from '../data/expertiseData';
import { SOLUTIONS_LIST } from '../data/solutionsData';
import { ECOSYSTEM_ACTORS, VERIFIED_NEWS_ITEMS } from '../data/companyData';
import { useLanguage } from '../hooks/useLanguage';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { SecurityPointsTimeline } from '../components/SecurityPointsTimeline';
import { SolutionMark } from '../components/SolutionMark';

export function HomePage() {
  const { lang, t } = useLanguage();

  useDocumentTitle(
    t('Accueil — Solutions technologiques pour les transports et la sécurité documentaire', 'Home — Transport Technology & Document Security'),
    t(
      'PROOFTAG-CATIS S.A. (Cameroon Technology Information Services) déploie à Douala des solutions numériques pour la sécurité routière et l’authentification documentaire.',
      'PROOFTAG-CATIS S.A. (Cameroon Technology Information Services) deploys digital transport, road safety, and document authentication solutions from Douala.'
    )
  );

  const technologies = [
    {
      icon: Fingerprint,
      title: t('Code à Bulles® (PROOFTAG)', 'Bubble Tag® (PROOFTAG)'),
      desc: t(
        'Empreinte chaosmétrique tridimensionnelle générée aléatoirement dans un polymère, unique et non reproductible.',
        '3D chaosmetric polymer fingerprint formed by an unpredictable bubble constellation, impossible to replicate.'
      ),
    },
    {
      icon: Layers,
      title: t('CertiDOCS®', 'CertiDOCS®'),
      desc: t(
        'Suite logicielle dédiée à l’émission et à la certification sécurisée des documents et procès-verbaux.',
        'Software suite dedicated to issuing and certifying secure documents and inspection certificates.'
      ),
    },
    {
      icon: ShieldCheck,
      title: t('Authentification multi-niveaux', 'Multi-level Authentication'),
      desc: t(
        'Contrôle visuel ouvert, vérification en ligne par smartphone et authentification experte par lecteur dédié.',
        'Overt visual verification, online smartphone check, and covert expert authentication with dedicated readers.'
      ),
    },
    {
      icon: ScanLine,
      title: t('Traçabilité du cycle de vie', 'Lifecycle Traceability'),
      desc: t(
        'Enregistrement centralisé de chaque étape, de la prise en charge du véhicule jusqu’au contrôle sur le terrain.',
        'Centralized logging of every inspection stage from vehicle intake to roadside verification.'
      ),
    },
    {
      icon: QrCode,
      title: t('QR Code & Scellés sécurisés', 'QR Code & Security Seals'),
      desc: t(
        'Couplage d’un QR code et d’un film destructible à bulles afin d’empêcher toute récupération ou substitution.',
        'Pairing of QR codes with tamper-evident destructible bubble seals to prevent reuse or substitution.'
      ),
    },
    {
      icon: Cpu,
      title: t('Solutions numériques connectées', 'Connected Digital Systems'),
      desc: t(
        'Interconnexion en temps réel des équipements de mesure, tablettes d’inspection et serveurs centraux.',
        'Real-time interconnection of inspection test benches, field tablets, and central authority servers.'
      ),
    },
  ];

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="relative bg-[var(--color-navy-deep)] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-[var(--color-secondary)]">
                PROOFTAG-CATIS S.A. · Douala, {t('Cameroun', 'Cameroon')}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[3.15rem] font-extrabold tracking-tight leading-[1.12]">
                {t(
                  'Des solutions technologiques pour un monde plus sûr et plus connecté',
                  'Technological solutions for a safer and more connected world'
                )}
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
                {t(
                  'PROOFTAG-CATIS développe et déploie des solutions numériques innovantes au service des transports, de la sécurité routière et de l’authentification documentaire.',
                  'PROOFTAG-CATIS develops and deploys innovative digital solutions serving road transport, traffic safety, and document authentication.'
                )}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/solutions"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[var(--color-secondary)] hover:bg-sky-400 text-slate-950 font-bold text-sm transition-colors whitespace-nowrap"
                >
                  <span>{t('Découvrir nos solutions', 'Explore Our Solutions')}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-slate-500 hover:border-white text-white font-semibold text-sm transition-colors whitespace-nowrap"
                >
                  <span>{t('Nous contacter', 'Contact Us')}</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex items-stretch">
              <div className="w-full rounded-xl overflow-hidden border border-slate-700 bg-slate-900 relative min-h-[260px] lg:min-h-[380px]">
                <img
                  src="/assets/official-www/Slider.png"
                  alt={t(
                    'Présentation officielle des tableaux de bord DITROS devant les autorités de transport — PROOFTAG-CATIS S.A.',
                    'Official presentation of DITROS analytical dashboards to transport authorities — PROOFTAG-CATIS S.A.'
                  )}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-deep)]/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-slate-200 flex items-center justify-between gap-2">
                  <span className="font-semibold text-white">CATIS</span>
                  <span className="text-slate-300">Cameroon Technology Information Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRESENTATION SECTION */}
      <section className="py-16 lg:py-24 bg-white border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]">
                CATIS · Cameroon Technology Information Services
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                {t(
                  'L’innovation technologique au service de la sécurité',
                  'Technological innovation in the service of safety'
                )}
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                {t(
                  'PROOFTAG-CATIS S.A. est une entreprise technologique camerounaise basée à Douala qui conçoit, déploie et accompagne des systèmes d’information dédiés aux transports en général et à la sécurité routière en particulier.',
                  'PROOFTAG-CATIS S.A. is a Cameroonian technology company based in Douala that designs, deploys, and supports information systems dedicated to transport and road safety.'
                )}
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                {t(
                  'Entité camerounaise représentant la société française PROOFTAG SAS, elle associe ingénierie logicielle locale, interconnexion des centres de contrôle technique et technologies d’authentification documentaire pour accompagner les pouvoirs publics vers les objectifs de la résolution 74/299 des Nations Unies (Décennie d’action 2021–2030).',
                  'As the Cameroonian entity representing French authentication specialist PROOFTAG SAS, the company combines local software engineering, inspection center interconnection, and document authentication to support public authorities toward UN Resolution 74/299 (2021–2030 Decade of Action).'
                )}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-sm font-semibold">
                <Link
                  to="/a-propos"
                  className="inline-flex items-center gap-1.5 text-[var(--color-primary)] hover:underline"
                >
                  <span>{t('Découvrir PROOFTAG-CATIS S.A.', 'Learn about PROOFTAG-CATIS S.A.')}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
              <div className="rounded-xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] aspect-[4/3] sm:aspect-auto sm:h-full">
                <img
                  src="/assets/official-www/83882294_120016879536842_3101088639661113344_n.jpg"
                  alt={t('Centre de contrôle technique et banc d’essai au Cameroun', 'Technical inspection station and brake test bench in Cameroon')}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="rounded-xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] aspect-[4/3]">
                  <img
                    src="/assets/official-www/centre-technique-automobile.jpg"
                    alt={t('Contrôleurs techniques opérant un équipement de diagnostic', 'Technical inspectors operating vehicle diagnostic equipment')}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-5 space-y-1.5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                    {t('Résolution ONU 74/299', 'UN Resolution 74/299')}
                  </div>
                  <p className="text-sm font-medium text-slate-800 leading-snug">
                    {t(
                      'Contribuer à la réduction d’au moins 50 % des décès et blessures sur les routes à l’horizon 2030.',
                      'Supporting a minimum 50% reduction in road traffic deaths and injuries by 2030.'
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPERTISE SECTION (5 Cards) */}
      <section className="py-16 lg:py-24 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]">
                {t('Domaines d’expertise', 'Areas of Expertise')}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {t(
                  'Cinq pôles de compétences dédiés à la fiabilité des systèmes',
                  'Five core capabilities dedicated to system reliability'
                )}
              </h2>
            </div>
            <Link
              to="/expertise"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] hover:underline whitespace-nowrap"
            >
              <span>{t('Voir toutes nos expertises', 'View all expertise')}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPERTISE_DATA.map((item, idx) => (
              <article
                key={item.id}
                className={`bg-white border border-[var(--color-border)] rounded-xl overflow-hidden flex flex-col justify-between hover:border-[var(--color-primary)] transition-colors ${
                  idx === 0 ? 'lg:col-span-2 lg:grid lg:grid-cols-12' : ''
                }`}
              >
                <div
                  className={`${idx === 0 ? 'lg:col-span-6 aspect-[16/10] lg:aspect-auto lg:h-full' : 'aspect-[16/10]'} ${
                    item.imageFit === 'contain' ? 'bg-white p-3' : 'bg-slate-100'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title[lang]}
                    referrerPolicy="no-referrer"
                    className={`w-full h-full ${item.imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
                  />
                </div>
                <div className={`${idx === 0 ? 'lg:col-span-6' : ''} p-6 flex flex-col justify-between space-y-4`}>
                  <div className="space-y-2.5">
                    <div className="text-xs font-mono font-semibold text-[var(--color-primary)] tabular-nums">
                      {item.index}.
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {item.title[lang]}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.shortSummary[lang]}
                    </p>
                  </div>
                  <Link
                    to={`/expertise/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] hover:underline pt-1"
                  >
                    <span>{t('Explorer ce domaine', 'Explore this domain')}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SOLUTIONS SECTION (DITROS-CT, CT-VERIF, DOSER) */}
      <section className="py-16 lg:py-24 bg-white border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]">
                {t('Solutions numériques', 'Digital Solutions')}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {t(
                  'Trois plateformes structurantes pour le contrôle technique et la sécurité routière',
                  'Three core platforms for vehicle inspection and road safety'
                )}
              </h2>
            </div>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] hover:underline whitespace-nowrap"
            >
              <span>{t('Comparer nos solutions', 'Compare solutions')}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {SOLUTIONS_LIST.map((sol) => (
              <article
                key={sol.id}
                className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="bg-white border-b border-[var(--color-border)] p-4 aspect-[16/10] flex items-center justify-center overflow-hidden">
                    <img
                      src={sol.heroImage}
                      alt={`${sol.name} — ${sol.tagline[lang]}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      <SolutionMark id={sol.id} logo={sol.logo} name={sol.name} className="h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{sol.name}</h3>
                    <p className="text-xs font-medium text-[var(--color-primary)]">
                      {sol.tagline[lang]}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {sol.shortDescription[lang]}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-[var(--color-border)] flex items-center justify-between gap-3">
                  <Link
                    to={sol.route}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white text-sm font-semibold transition-colors"
                  >
                    <span>{t('Découvrir', 'Discover')}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                  {sol.externalUrl && (
                    <a
                      href={sol.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-[var(--color-primary)]"
                    >
                      <span>{t('Portail officiel', 'Official portal')}</span>
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 12 SECURITY POINTS INFOGRAPHIC */}
      <section className="py-16 lg:py-24 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]">
                {t('Chaîne de confiance', 'Chain of Trust')}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {t(
                  'Les douze points de sécurisation du contrôle technique',
                  'The twelve security checkpoints of vehicle technical inspection'
                )}
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                {t(
                  'Parcourez chaque étape du processus, de la vérification initiale de la carte grise jusqu’au contrôle formel ou informel sur la route.',
                  'Explore each step of the workflow, from initial registration verification through roadside inspection.'
                )}
              </p>
            </div>
            <Link
              to="/processus-securisation"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] hover:underline whitespace-nowrap"
            >
              <span>{t('Vue détaillée du processus', 'Detailed process view')}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <SecurityPointsTimeline />
        </div>
      </section>

      {/* 6. TECHNOLOGIES SECTION */}
      <section className="py-16 lg:py-24 bg-white border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]">
                {t('Technologies d’authentification', 'Authentication Technologies')}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {t(
                  'Sécurisation physique et numérique des documents officiels',
                  'Physical and digital security for official documents'
                )}
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                {t(
                  'PROOFTAG-CATIS S.A. intègre les technologies éprouvées développées par PROOFTAG SAS — notamment le Code à Bulles® et la suite logicielle CertiDOCS® — avec les standards numériques de traçabilité (QR code, bases centralisées et contrôle mobile).',
                  'PROOFTAG-CATIS S.A. integrates proven authentication technologies developed by PROOFTAG SAS — including Bubble Tag® and CertiDOCS® — with digital traceability standards (QR codes, centralized databases, and mobile verification).'
                )}
              </p>
            </div>
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-[var(--color-border)] bg-white p-4 flex items-center justify-center aspect-[16/10]">
                <img
                  src="/assets/official-www/Scell_C3_A9-_C3_A0-bulle.png"
                  alt={t('Scellé à Bulles® PROOFTAG avec QR code', 'PROOFTAG Bubble Seal with QR code')}
                  referrerPolicy="no-referrer"
                  className="max-h-full w-auto object-contain"
                />
              </div>
              <div className="rounded-xl border border-[var(--color-border)] bg-white p-3 flex items-center justify-center aspect-[16/10]">
                <img
                  src="/assets/official-www/Certidocs-3.png"
                  alt={t('Interface CertiDOCS CT pour l’enregistrement et l’authentification des véhicules', 'CertiDOCS CT vehicle registration and authentication interface')}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain rounded"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.title}
                  className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] space-y-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-white border border-[var(--color-border)] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[var(--color-primary)]" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{tech.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{tech.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. STAKEHOLDERS / ACTORS SECTION */}
      <section className="py-16 lg:py-24 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="max-w-2xl space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]">
              {t('Écosystème concerné', 'Target Ecosystem')}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {t(
                'Les acteurs concernés par nos solutions',
                'Stakeholders served by our platforms'
              )}
            </h2>
            <p className="text-sm text-slate-600">
              {t(
                'Catégories d’acteurs institutionnels, professionnels et usagers concernés par les chaînes de sécurité routière et documentaire.',
                'Institutional, professional, and citizen stakeholder groups involved in road safety and document verification.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ECOSYSTEM_ACTORS.map((actor, index) => (
              <div
                key={actor.id}
                className="bg-white border border-[var(--color-border)] rounded-xl p-5 space-y-2"
              >
                <div className="text-xs font-mono text-slate-400 tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-base font-bold text-slate-900">{actor.title[lang]}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{actor.roleDescription[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. NEWS SECTION (Only verified public records) */}
      <section className="py-16 lg:py-24 bg-white border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]">
                {t('Publications & archives', 'News & Archives')}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {t('Actualités institutionnelles', 'Institutional News')}
              </h2>
            </div>
            <Link
              to="/actualites"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] hover:underline"
            >
              <span>{t('Consulter l’espace actualités', 'View newsroom')}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VERIFIED_NEWS_ITEMS.map((article) => (
              <article
                key={article.id}
                className="border border-[var(--color-border)] rounded-xl overflow-hidden bg-[var(--color-surface)] flex flex-col"
              >
                <div className="aspect-[16/9] bg-slate-200 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title[lang]}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="text-xs text-slate-500 flex items-center gap-2">
                      <span>{article.date}</span>
                      <span aria-hidden="true">·</span>
                      <span className="capitalize">{article.category.replace('-', ' ')}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {article.title[lang]}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {article.summary[lang]}
                    </p>
                  </div>
                  <Link
                    to={`/actualites#${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] hover:underline"
                  >
                    <span>{t('Lire la fiche', 'Read briefing')}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CONTACT CTA SECTION */}
      <section className="py-16 lg:py-20 bg-[var(--color-primary-dark)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              {t(
                'Vous souhaitez en savoir davantage sur nos solutions ?',
                'Would you like to learn more about our solutions?'
              )}
            </h2>
            <p className="text-base text-slate-200">
              {t(
                'Échangez avec nos équipes basées à Douala concernant DITROS-CT, CT-VERIF, DOSER ou nos dispositifs d’authentification documentaire.',
                'Connect with our Douala-based team regarding DITROS-CT, CT-VERIF, DOSER, or our document authentication systems.'
              )}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[var(--color-secondary)] hover:bg-sky-400 text-slate-950 font-bold text-sm transition-colors whitespace-nowrap"
            >
              <span>{t('Contactez notre équipe', 'Contact Our Team')}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <a
              href={SITE_CONFIG.contact.phoneHref}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-slate-500 hover:border-white text-white text-sm font-semibold transition-colors tabular-nums whitespace-nowrap"
            >
              {SITE_CONFIG.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
