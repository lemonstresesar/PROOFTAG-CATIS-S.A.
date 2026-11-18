import type { Language } from '../config/siteConfig';

export interface ExpertiseItem {
  id: string;
  slug: string;
  index: string;
  image: string;
  imageFit?: 'cover' | 'contain';
  secondaryImage?: string;
  title: Record<Language, string>;
  shortSummary: Record<Language, string>;
  intro: Record<Language, string>;
  pillars: Record<Language, { heading: string; description: string }[]>;
  deliverables: Record<Language, string[]>;
  note?: Record<Language, string>;
}

export const EXPERTISE_DATA: ExpertiseItem[] = [
  {
    id: 'rd',
    slug: 'recherche-et-developpement',
    index: '01',
    image: '/assets/official-www/cropped-Slider3.png',
    imageFit: 'cover',
    secondaryImage: '/assets/official-www/Certidocs-1.png',
    title: {
      fr: 'Recherche et développement',
      en: 'Research & Development',
    },
    shortSummary: {
      fr: 'Conception et intégration continue de solutions numériques adaptées aux systèmes de transport et à l’authentification.',
      en: 'Design and continuous integration of digital solutions tailored to transport systems and document authentication.',
    },
    intro: {
      fr: 'La recherche et le développement (R&D) sont au cœur de la démarche d’innovation de PROOFTAG-CATIS S.A. Nos équipes conçoivent, intègrent et font évoluer des systèmes numériques sur mesure pour répondre aux exigences opérationnelles des administrations et des acteurs du transport.',
      en: 'Research and Development (R&D) sits at the core of PROOFTAG-CATIS S.A.’s innovation strategy. Our engineering teams design, integrate, and evolve purpose-built digital systems tailored to transport authorities and operational stakeholders.',
    },
    pillars: {
      fr: [
        {
          heading: 'Ingénierie logicielle adaptée aux transports',
          description: 'Développement de plateformes web, applicatifs métiers et passerelles d’interconnexion entre équipements de terrain et serveurs centraux.',
        },
        {
          heading: 'Intégration technologique',
          description: 'Couplage entre acquisition matérielle automatisée (bancs d’essais, terminaux mobiles) et architecture sécurisée de traitement documentaire.',
        },
        {
          heading: 'Amélioration continue',
          description: 'Veille technologique et optimisation régulière des modules logiciels en fonction des retours d’exploitation sur le terrain.',
        },
      ],
      en: [
        {
          heading: 'Transport-oriented software engineering',
          description: 'Development of web platforms, operational applications, and interconnection gateways between field inspection equipment and central servers.',
        },
        {
          heading: 'Systems & hardware integration',
          description: 'Seamless coupling of automated test-bench acquisition, mobile inspection terminals, and secure document processing architectures.',
        },
        {
          heading: 'Continuous improvement',
          description: 'Ongoing technical research and iterative software refinement driven by real-world field operations.',
        },
      ],
    },
    deliverables: {
      fr: [
        'Architecture de systèmes d’information sectoriels',
        'Interconnexion des protocoles de bancs de contrôle technique',
        'Applications web et mobiles de vérification terrain',
        'Modules d’échange de données centralisées',
      ],
      en: [
        'Sectoral information system architecture',
        'Inspection test-bench protocol interconnection',
        'Field verification web and mobile applications',
        'Centralized data exchange modules',
      ],
    },
  },
  {
    id: 'support',
    slug: 'support-technique',
    index: '02',
    image: '/assets/official-www/centre-technique-automobile.jpg',
    imageFit: 'cover',
    secondaryImage: '/assets/official-www/Certidocs-3.png',
    title: {
      fr: 'Support technique',
      en: 'Technical Support',
    },
    shortSummary: {
      fr: 'Assistance aux utilisateurs, déploiement des équipements, supervision et accompagnement des centres de contrôle.',
      en: 'User assistance, equipment deployment, system monitoring, and operational support for inspection centers.',
    },
    intro: {
      fr: 'Les services d’assistance et de support technique visent à garantir la disponibilité et la continuité opérationnelle des systèmes déployés. Notre accompagnement couvre l’installation des équipements, le déploiement logiciel, la formation des opérateurs et le suivi technique.',
      en: 'Our technical support services ensure that users and inspection centers benefit from reliable system availability and operational continuity, from equipment installation and software rollout through operator training and ongoing assistance.',
    },
    pillars: {
      fr: [
        {
          heading: 'Déploiement & installation',
          description: 'Mise en service des postes informatiques, tablettes de contrôle, lecteurs et logiciels métiers (tels que CertiDOCS CT) au sein des centres.',
        },
        {
          heading: 'Formation & accompagnement des utilisateurs',
          description: 'Prise en main des outils numériques par les contrôleurs et personnels administratifs pour fiabiliser les opérations quotidiennes.',
        },
        {
          heading: 'Supervision & gestion des incidents',
          description: 'Suivi à distance du bon fonctionnement des systèmes, assistance technique et maintenance applicative lorsque proposée dans le cadre du projet.',
        },
      ],
      en: [
        {
          heading: 'Deployment & commissioning',
          description: 'Installation of workstations, inspection tablets, readers, and operational software (such as CertiDOCS CT) across authorized centers.',
        },
        {
          heading: 'Operator training & guidance',
          description: 'Hands-on onboarding for technical inspectors and administrative staff to standardize daily digital workflows.',
        },
        {
          heading: 'Monitoring & incident handling',
          description: 'Remote system health tracking, user helpdesk assistance, and preventive/corrective maintenance where covered by project scope.',
        },
      ],
    },
    deliverables: {
      fr: [
        'Installation des équipements et déploiement applicatif',
        'Formation initiale et continue des contrôleurs techniques',
        'Supervision proactive et réactive des composants',
        'Assistance utilisateurs et résolution d’incidents',
      ],
      en: [
        'Hardware installation and software deployment',
        'Initial and ongoing training for inspection operators',
        'Proactive and reactive system supervision',
        'User helpdesk and technical incident resolution',
      ],
    },
    note: {
      fr: 'Les modalités précises de maintenance et de niveau de service dépendent du périmètre conventionnel défini avec chaque institution ou centre partenaire.',
      en: 'Specific maintenance scopes and service-level terms are defined within each institutional or center agreement.',
    },
  },
  {
    id: 'data',
    slug: 'analyse-donnees-reporting',
    index: '03',
    image: '/assets/official-www/Slider.png',
    imageFit: 'cover',
    secondaryImage: '/assets/official-www/WhatsApp-Image-2020-05-13-at-13.54.10.jpeg',
    title: {
      fr: 'Analyse de données et reporting',
      en: 'Data Analysis & Reporting',
    },
    shortSummary: {
      fr: 'Collecte, structuration, analyse statistique et tableaux de bord d’aide à la décision publique.',
      en: 'Structured data collection, statistical analysis, and decision-support dashboards for public authorities.',
    },
    intro: {
      fr: 'Nous concevons des systèmes d’information permettant de collecter, centraliser et analyser les données issues des contrôles techniques et des événements routiers afin de produire des rapports fiables et d’éclairer la prise de décision.',
      en: 'We build information systems that collect, centralize, and analyze vehicle inspection and road-safety data to generate structured reports and support evidence-based public policy.',
    },
    pillars: {
      fr: [
        {
          heading: 'Collecte automatisée et fiable',
          description: 'Remontée structurée des mesures techniques et des incidents sans ressaisie manuelle susceptible d’introduire des biais.',
        },
        {
          heading: 'Statistiques et indicateurs sectoriels',
          description: 'Suivi des volumes d’inspection, typologies de défauts constatés, répartition par catégorie de véhicule et cartographie des zones à risque.',
        },
        {
          heading: 'Aide à la décision institutionnelle',
          description: 'Production de rapports exploitables par les autorités de régulation et les acteurs de la prévention routière pour ajuster les politiques publiques.',
        },
      ],
      en: [
        {
          heading: 'Automated, reliable data capture',
          description: 'Structured ingestion of technical test measurements and road incident records without manual re-entry.',
        },
        {
          heading: 'Sectoral statistics & indicators',
          description: 'Tracking inspection volumes, recurring mechanical defects, vehicle categories, and geographic risk patterns.',
        },
        {
          heading: 'Decision-support reporting',
          description: 'Actionable dashboards and periodic reports enabling transport authorities and safety agencies to refine road safety programs.',
        },
      ],
    },
    deliverables: {
      fr: [
        'Centralisation des flux issus des centres de contrôle',
        'Tableaux de bord analytiques et cartographiques',
        'Production de statistiques sur le parc automobile et la sinistralité',
        'Exports structurés pour le pilotage administratif',
      ],
      en: [
        'Centralized data aggregation from inspection centers',
        'Analytical and GIS-enabled dashboards',
        'Fleet condition and accidentology statistical reporting',
        'Structured reporting exports for regulatory oversight',
      ],
    },
  },
  {
    id: 'document-security',
    slug: 'securite-documentaire',
    index: '04',
    image: '/assets/official-www/Vignette-et-description_Plan-de-travail-1.png',
    imageFit: 'contain',
    secondaryImage: '/assets/official-www/Scell_C3_A9-_C3_A0-bulle.png',
    title: {
      fr: 'Sécurité documentaire',
      en: 'Document Security',
    },
    shortSummary: {
      fr: 'Authentification physique et électronique combinant Code à Bulles®, scellés sécurisés, QR codes et CertiDOCS®.',
      en: 'Physical and digital document authentication combining Bubble Tag®, security seals, QR codes, and CertiDOCS®.',
    },
    intro: {
      fr: 'Nos solutions de sécurisation documentaire associent des éléments d’empreinte physique chaosmétrique issus des technologies PROOFTAG à une infrastructure informatique sécurisée pour protéger les documents officiels contre la contrefaçon et la falsification.',
      en: 'Our document security solutions combine physical chaosmetric authentication elements developed by PROOFTAG with secure database verification to protect official documents against counterfeiting and tampering.',
    },
    pillars: {
      fr: [
        {
          heading: 'Unicité, Authenticité & Intégrité',
          description: 'Chaque document est doté d’un identifiant physique unique lié aux données enregistrées en base centrale afin d’empêcher la duplication et la modification du contenu.',
        },
        {
          heading: 'Technologie Code à Bulles® de PROOFTAG',
          description: 'Empreinte chaosmétrique tridimensionnelle formée par une génération aléatoire de bulles dans un polymère, impossible à reproduire à l’identique et associée à un scellé destructible.',
        },
        {
          heading: 'Contrôle multi-niveaux',
          description: 'Vérification visuelle ouverte (sans équipement), authentification en ligne par smartphone ou QR code, et contrôle expert par lecteur dédié.',
        },
      ],
      en: [
        {
          heading: 'Uniqueness, Authenticity & Integrity',
          description: 'Each document carries a unique physical identifier cryptographically and relationally linked to central database records to prevent forgery or alteration.',
        },
        {
          heading: 'PROOFTAG Bubble Tag® Technology',
          description: 'A 3D chaosmetric fingerprint formed by a random, non-reproducible constellation of bubbles inside a polymer matrix, integrated into tamper-evident seals.',
        },
        {
          heading: 'Multi-level verification',
          description: 'Overt visual inspection, online verification via smartphone or QR code, and covert expert verification with dedicated readers.',
        },
      ],
    },
    deliverables: {
      fr: [
        'Protection contre la contrefaçon (authenticité du support)',
        'Protection contre la falsification (intégrité des données)',
        'Traçabilité complète du cycle de vie documentaire',
        'Déploiement de Scellés à Bulles® et de la suite CertiDOCS®',
      ],
      en: [
        'Anti-counterfeiting protection (substrate authenticity)',
        'Anti-tampering protection (content integrity)',
        'Full document lifecycle traceability',
        'Deployment of Bubble Seals® and CertiDOCS® suite',
      ],
    },
  },
  {
    id: 'road-safety',
    slug: 'securite-prevention-routiere',
    index: '05',
    image: '/assets/official-www/EX6E3cOWoAA4-i1.jpg',
    imageFit: 'cover',
    secondaryImage: '/assets/official-www/EX6E6UaXQAEQk0A.jpg',
    title: {
      fr: 'Sécurité et prévention routière',
      en: 'Road Safety & Prevention',
    },
    shortSummary: {
      fr: 'Modernisation du contrôle technique automobile et outils numériques alignés sur les objectifs 2021–2030.',
      en: 'Modernizing vehicle roadworthiness inspections and digital safety tools aligned with 2021–2030 UN goals.',
    },
    intro: {
      fr: 'PROOFTAG-CATIS S.A. conçoit des solutions technologiques au service des transports afin d’assainir le processus de contrôle technique, fiabiliser le suivi du parc automobile et soutenir les politiques de prévention routière.',
      en: 'PROOFTAG-CATIS S.A. develops digital transport solutions designed to strengthen technical inspection integrity, improve fleet traceability, and support national road safety policies.',
    },
    pillars: {
      fr: [
        {
          heading: 'Fiabilisation des contrôles techniques',
          description: 'Acquisition automatique des mesures des bancs de test (freinage, suspension, ripage) pour éliminer les visites fictives ou complaisantes.',
        },
        {
          heading: 'Traçabilité et contrôle sur le terrain',
          description: 'Géolocalisation des inspections et vérification instantanée de la validité des vignettes par les forces de sécurité routière et les citoyens.',
        },
        {
          heading: 'Objectifs ONU 2021–2030',
          description: 'Accompagnement des gouvernements dans l’atteinte des exigences de la résolution 74/299 des Nations Unies visant à réduire d’au moins 50 % les décès et blessures sur les routes d’ici 2030.',
        },
      ],
      en: [
        {
          heading: 'More reliable technical inspections',
          description: 'Automated capture of test-bench measurements (braking, suspension, alignment) to eliminate fictitious or non-compliant inspections.',
        },
        {
          heading: 'Field traceability & enforcement',
          description: 'Inspection geolocation and instant roadside or public verification of sticker validity.',
        },
        {
          heading: 'UN Decade of Action 2021–2030',
          description: 'Supporting governments toward UN Resolution 74/299 targets to cut road traffic deaths and injuries by at least 50% by 2030.',
        },
      ],
    },
    deliverables: {
      fr: [
        'Digitalisation complète de la chaîne de visite technique',
        'Lutte contre la fraude aux vignettes et procès-verbaux',
        'Outils de collecte et d’analyse des accidents de la route (DOSER)',
        'Sensibilisation et appui aux politiques publiques de transport',
      ],
      en: [
        'End-to-end digitalization of vehicle inspection workflows',
        'Prevention of counterfeit inspection stickers and reports',
        'Road accident data collection and analysis systems (DOSER)',
        'Support for public transport safety policies and awareness',
      ],
    },
  },
];
