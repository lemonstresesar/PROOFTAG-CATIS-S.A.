import type { Language } from '../config/siteConfig';

export interface TeamMember {
  id: string;
  name: string;
  role: Record<Language, string>;
  photo: string | null; // Uniquement si photo authentique confirmée
  initials: string;
  department: Record<Language, string>;
}

export const LEADERSHIP_TEAM: TeamMember[] = [
  {
    id: 'marceline-tchanga',
    name: 'Marceline TCHANGA',
    role: { fr: 'Administrateur Général', en: 'Managing Director' },
    photo: null,
    initials: 'MT',
    department: { fr: 'Direction Générale', en: 'Executive Management' },
  },
  {
    id: 'jocelyn-ngae',
    name: 'Jocelyn NGAE',
    role: { fr: 'Administrateur Général Adjoint', en: 'Deputy Managing Director' },
    photo: null,
    initials: 'JN',
    department: { fr: 'Direction Générale', en: 'Executive Management' },
  },
  {
    id: 'serge-tampolla',
    name: 'Serge TAMPOLLA',
    role: { fr: 'Directeur Technique', en: 'Technical Director' },
    photo: '/assets/team/serge-tampolla.png',
    initials: 'ST',
    department: { fr: 'Direction Technique & Systèmes', en: 'Technical & Systems Directorate' },
  },
  {
    id: 'kelly-njiemeli',
    name: 'Kelly NJIEMELI',
    role: { fr: 'Responsable Administratif et RH', en: 'Administrative & HR Manager' },
    photo: null,
    initials: 'KN',
    department: { fr: 'Administration & Ressources Humaines', en: 'Administration & HR' },
  },
  {
    id: 'regine-moma',
    name: 'Regine MOMA',
    role: { fr: 'Assistant Administratif et RH', en: 'Administrative & HR Assistant' },
    photo: null,
    initials: 'RM',
    department: { fr: 'Administration & Ressources Humaines', en: 'Administration & HR' },
  },
  {
    id: 'erve-giscard-fojo',
    name: 'Ervé-Giscard FOJO',
    role: { fr: 'Responsable Comptabilité', en: 'Accounting Manager' },
    photo: null,
    initials: 'EF',
    department: { fr: 'Finance & Comptabilité', en: 'Finance & Accounting' },
  },
];

export interface EcosystemActor {
  id: string;
  title: Record<Language, string>;
  roleDescription: Record<Language, string>;
}

// Note : Ces catégories décrivent les publics concernés par les solutions et non une liste de clients contractuels.
export const ECOSYSTEM_ACTORS: EcosystemActor[] = [
  {
    id: 'government',
    title: { fr: 'Gouvernement', en: 'Government' },
    roleDescription: {
      fr: 'Pilotage stratégique des politiques publiques de sécurité routière et sécurisation des recettes institutionnelles.',
      en: 'Strategic steering of road safety policies and protection of public regulatory revenues.',
    },
  },
  {
    id: 'ministries',
    title: { fr: 'Ministères', en: 'Ministries' },
    roleDescription: {
      fr: 'Supervision en temps réel des contrôles techniques et centralisation des données routières.',
      en: 'Real-time oversight of vehicle inspections and centralized road transport data management.',
    },
  },
  {
    id: 'inspection-centers',
    title: { fr: 'Centres de contrôle technique', en: 'Vehicle Inspection Centers' },
    roleDescription: {
      fr: 'Digitalisation de la chaîne d’inspection, interconnexion des bancs de test et édition sécurisée des PV et vignettes.',
      en: 'Workflow digitalization, test-bench interconnection, and secure issuance of reports and stickers.',
    },
  },
  {
    id: 'road-safety-officers',
    title: { fr: 'Agents de sécurité routière', en: 'Road Safety Officers' },
    roleDescription: {
      fr: 'Vérification rapide sur le terrain de la validité et de l’authenticité des vignettes et procès-verbaux.',
      en: 'Rapid field authentication and validity checking of vehicle inspection stickers and certificates.',
    },
  },
  {
    id: 'motorists',
    title: { fr: 'Automobilistes', en: 'Motorists' },
    roleDescription: {
      fr: 'Garantie de conformité technique et accès à des outils publics de vérification tel que CT-VERIF.',
      en: 'Confidence in vehicle roadworthiness and access to public verification portals such as CT-VERIF.',
    },
  },
  {
    id: 'vehicle-owners',
    title: { fr: 'Propriétaires de véhicules', en: 'Vehicle Owners' },
    roleDescription: {
      fr: 'Traçabilité fiable de l’historique de visite technique et protection contre les documents falsifiés.',
      en: 'Reliable inspection history traceability and protection against counterfeit certificates.',
    },
  },
  {
    id: 'insurers',
    title: { fr: 'Sociétés d’assurance', en: 'Insurance Companies' },
    roleDescription: {
      fr: 'Fiabilité accrue des justificatifs techniques lors de la souscription ou de l’évaluation des sinistres.',
      en: 'Increased reliability of technical inspection records during policy underwriting and claims assessment.',
    },
  },
  {
    id: 'garages',
    title: { fr: 'Garages automobiles', en: 'Automotive Garages' },
    roleDescription: {
      fr: 'Clarté des relevés de défauts normalisés facilitant la remise en état mécanique avant contre-visite.',
      en: 'Standardized defect reporting that streamlines mechanical repairs prior to re-inspection.',
    },
  },
  {
    id: 'prevention-actors',
    title: { fr: 'Acteurs de la prévention routière', en: 'Road Prevention Stakeholders' },
    roleDescription: {
      fr: 'Accès aux analyses statistiques consolidées pour orienter les campagnes de sensibilisation et de recherche.',
      en: 'Access to consolidated analytical insights supporting prevention campaigns and road safety research.',
    },
  },
];

export interface NewsArticle {
  id: string;
  slug: string;
  date: string;
  category: 'institutionnel' | 'technologie' | 'securite-routiere';
  image: string;
  title: Record<Language, string>;
  summary: Record<Language, string>;
  content: Record<Language, string[]>;
  sourceNote: string;
}

// Uniquement des éléments publics sourcés depuis les plateformes historiques et récentes (aucun article inventé)
export const VERIFIED_NEWS_ITEMS: NewsArticle[] = [
  {
    id: 'reforme-visite-technique-cameroun',
    slug: 'reforme-securisation-vignettes-visite-technique',
    date: 'Archive institutionnelle (2019–2020)',
    category: 'institutionnel',
    image: '/assets/official-www/83882294_120016879536842_3101088639661113344_n.jpg',
    title: {
      fr: 'Déploiement du dispositif de sécurisation des vignettes et procès-verbaux de visite technique',
      en: 'Deployment of the Secure Technical Inspection Sticker and Certificate System',
    },
    summary: {
      fr: 'Présentation du dispositif technologique combinant interconnexion des centres de contrôle technique, suite CertiDOCS CT et Scellé à Bulles®.',
      en: 'Overview of the technological framework combining inspection center interconnection, CertiDOCS CT software, and Bubble Seal® authentication.',
    },
    content: {
      fr: [
        'Dans le cadre de la modernisation du contrôle technique automobile au Cameroun et de la lutte contre la contrefaçon documentaire, PROOFTAG-CATIS S.A. a déployé une architecture numérique reliant les centres de contrôle technique agréés aux serveurs centraux de l’autorité compétente.',
        'Le dispositif repose sur un processus complet en douze points de sécurisation intégrant l’acquisition automatique des résultats des bancs de test, la géolocalisation, la génération automatisée des procès-verbaux et l’apposition de scellés à bulles infalsifiables.',
      ],
      en: [
        'As part of the modernization of vehicle technical inspection in Cameroon and the fight against counterfeit documents, PROOFTAG-CATIS S.A. deployed a digital architecture linking authorized inspection centers to central authority servers.',
        'The framework relies on a twelve-point security process combining automated test-bench acquisition, geolocation, automated inspection reporting, and tamper-evident Bubble Seals®.',
      ],
    },
    sourceNote: 'Source : Archives publiques www.prooftagcatis.com / net.prooftagcatis.com',
  },
  {
    id: 'soiree-prevention-routiere-2019',
    slug: 'engagement-prevention-routiere-decennie-onu',
    date: 'Novembre 2019 · Archive publique',
    category: 'securite-routiere',
    image: '/assets/official-www/EX6E47RWoAEaEwe.jpg',
    title: {
      fr: 'Sensibilisation à la sécurité routière et alignement sur les objectifs internationaux',
      en: 'Road Safety Awareness and Alignment with International Decade of Action Goals',
    },
    summary: {
      fr: 'Participation aux initiatives de prévention routière et accompagnement des politiques publiques en faveur de la réduction des accidents.',
      en: 'Participation in road safety prevention initiatives and support for public policies aimed at reducing road traffic casualties.',
    },
    content: {
      fr: [
        'PROOFTAG-CATIS S.A. oriente ses solutions technologiques vers la contribution aux objectifs de la résolution 74/299 des Nations Unies (Décennie d’action pour la sécurité routière 2021–2030), qui vise une réduction d’au moins 50 % des décès et blessures dus aux accidents de la route d’ici 2030.',
        'À travers des outils comme DITROS-CT, CT-VERIF et DOSER, l’entreprise accompagne la fiabilisation mécanique des véhicules en circulation et l’analyse structurée des données d’accidents.',
      ],
      en: [
        'PROOFTAG-CATIS S.A. aligns its digital platforms with United Nations Resolution 74/299 (Second Decade of Action for Road Safety 2021–2030), targeting at least a 50% reduction in road traffic deaths and injuries by 2030.',
        'Through DITROS-CT, CT-VERIF, and DOSER, the company supports both vehicle roadworthiness compliance and structured road accident data analytics.',
      ],
    },
    sourceNote: 'Source : Archives publiques www.prooftagcatis.com/galerie/ (cérémonie officielle prévention routière)',
  },
];

export interface CareerTrack {
  id: string;
  type: 'academic' | 'professional' | 'job';
  duration: Record<Language, string>;
  title: Record<Language, string>;
  target: Record<Language, string>;
  description: Record<Language, string>;
}

export const CAREER_TRACKS: CareerTrack[] = [
  {
    id: 'stage-academique',
    type: 'academic',
    duration: { fr: '1 à 3 mois', en: '1 to 3 months' },
    title: { fr: 'Stage Académique', en: 'Academic Internship' },
    target: {
      fr: 'Étudiants en cursus universitaire ou école d’ingénieurs',
      en: 'University or engineering school students',
    },
    description: {
      fr: 'Stages destinés aux étudiants dont les programmes académiques requièrent une immersion en entreprise et la rédaction d’un mémoire ou rapport de stage.',
      en: 'Internships for students whose academic curriculum requires corporate field immersion and a formal internship dissertation or report.',
    },
  },
  {
    id: 'stage-professionnel',
    type: 'professional',
    duration: { fr: '3 à 6 mois', en: '3 to 6 months' },
    title: { fr: 'Stage Professionnel', en: 'Professional Internship' },
    target: {
      fr: 'Jeunes diplômés et jeunes professionnels',
      en: 'Recent graduates and early-career professionals',
    },
    description: {
      fr: 'Parcours professionnalisant permettant d’intégrer nos équipes techniques, d’assistance opérationnelle ou de gestion de projets numériques à Douala.',
      en: 'Hands-on professional track within our engineering, technical support, or digital project operations teams in Douala.',
    },
  },
];
