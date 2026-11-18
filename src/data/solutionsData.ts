import type { Language } from '../config/siteConfig';

export interface SolutionSummary {
  id: 'ditros-ct' | 'ct-verif' | 'doser';
  route: string;
  name: string;
  logo: string;
  heroImage: string;
  externalUrl: string | null;
  tagline: Record<Language, string>;
  shortDescription: Record<Language, string>;
  audience: Record<Language, string>;
}

export const SOLUTIONS_LIST: SolutionSummary[] = [
  {
    id: 'ditros-ct',
    route: '/solutions/ditros-ct',
    name: 'DITROS-CT',
    logo: '/assets/ditros-ct/logo-ditros.png',
    heroImage: '/assets/ditros-ct/ditros-ct-caisse.png',
    externalUrl: null,
    tagline: {
      fr: 'Sécurisation du système de Contrôle Technique',
      en: 'Securing the Vehicle Technical Inspection System',
    },
    shortDescription: {
      fr: 'Système de délivrance sécurisée des vignettes de visite technique automobile assurant la gestion globale des contrôles, l’interconnexion des centres et la centralisation des données.',
      en: 'Secure vehicle inspection sticker issuance system enabling end-to-end inspection management, center interconnection, and centralized authority reporting.',
    },
    audience: {
      fr: 'Ministères · Centres de contrôle technique · Agents de contrôle',
      en: 'Ministries · Inspection centers · Control officers',
    },
  },
  {
    id: 'ct-verif',
    route: '/solutions/ct-verif',
    name: 'CT-VERIF',
    logo: '/assets/ct-verif/logo-ct-verif.png',
    heroImage: '/assets/ct-verif/ct-verif-hero.png',
    externalUrl: 'https://mintct.cm/',
    tagline: {
      fr: 'Vérification publique de l’authenticité des visites techniques',
      en: 'Public Verification of Vehicle Inspection Authenticity',
    },
    shortDescription: {
      fr: 'Plateforme grand public mise en place à la demande de la Direction des Transports Routiers du Ministère des Transports pour vérifier la validité des visites techniques au Cameroun.',
      en: 'Public-facing portal commissioned by the Directorate of Road Transport of the Ministry of Transport to verify technical inspection validity in Cameroon.',
    },
    audience: {
      fr: 'Grand public · Automobilistes · Assurances · Forces de contrôle',
      en: 'General public · Motorists · Insurers · Road safety officers',
    },
  },
  {
    id: 'doser',
    route: '/solutions/doser',
    name: 'DOSER',
    logo: '/assets/doser/logo-doser.png',
    heroImage: '/assets/doser/doser-hero.png',
    externalUrl: 'https://doser.ditros.org/',
    tagline: {
      fr: 'Système de Données de Sécurité Routière',
      en: 'Road Safety Data System',
    },
    shortDescription: {
      fr: 'Plateforme dédiée à la collecte des données d’accidents de la route, à la recherche, à l’analyse statistique et au partage d’informations entre acteurs institutionnels.',
      en: 'Platform designed for road accident data collection, research, statistical analysis, and multi-stakeholder coordination for road safety policy.',
    },
    audience: {
      fr: 'Autorités publiques · Forces de l’ordre · Services de santé · Chercheurs',
      en: 'Public authorities · Law enforcement · Health services · Researchers',
    },
  },
];
