export type Language = 'fr' | 'en';

export interface SocialLink {
  id: 'linkedin' | 'facebook' | 'twitter' | 'youtube';
  label: string;
  url: string;
  verifiedSource: string;
}

export const SITE_CONFIG = {
  company: {
    legalName: 'PROOFTAG-CATIS S.A.',
    shortName: 'PROOFTAG-CATIS',
    acronymMeaningFr: 'Cameroon Technology Information Services',
    acronymMeaningEn: 'Cameroon Technology Information Services',
    parentPartnerName: 'PROOFTAG SAS',
    foundingYearNotice: '2019',
    foundingYearConfirmed: false, // À confirmer avant publication définitive (mentionné sur www.prooftagcatis.com)
    countryFr: 'Cameroun',
    countryEn: 'Cameroon',
    city: 'Douala',
  },
  contact: {
    phoneDisplay: '+237 699 19 29 19',
    phoneHref: 'tel:+237699192919',
    email: 'info@prooftagcatis.com',
    emailHref: 'mailto:info@prooftagcatis.com',
    // Deux libellés d'adresse coexistent sur les versions publiques du site — configurables ici
    addressPrimary: '4601 Hôtel de l’air, Bonapriso, Douala, Cameroun',
    addressSecondaryLegacy: 'Immeuble « Résidence Le Carat », Bonapriso — BP 4601 Douala, Cameroun',
    addressConfirmed: false,
    officeHoursFr: 'Lundi – Vendredi : horaires à confirmer auprès du secrétariat',
    officeHoursEn: 'Monday – Friday: schedule subject to confirmation',
    whatsappNumber: '+237699192919',
    whatsappHref: 'https://wa.me/237699192919',
    whatsappConfirmed: true, // Lien présent sur www.prooftagcatis.com et net.prooftagcatis.com
  },
  palette: {
    primary: '#106898',
    primaryDark: '#093E5C',
    secondary: '#00B0FF',
    accent: '#0F766E',
    background: '#FFFFFF',
    surface: '#F4F7FA',
    text: '#111827',
    muted: '#475569',
    border: '#DCE4EC',
    success: '#15803D',
    warning: '#B45309',
  },
  logos: {
    colorLightBg: '/assets/logo/logo-prooftag-catis.png',
    whiteDarkBg: '/assets/official-www/logo-white-2-03.png',
    blackMono: '/assets/logo/logo-prooftag-catis-black.png',
    legacyWhite: '/assets/official-www/logo-white-2-03.png',
    favicon: '/assets/official-www/cropped-Favicon_Plan-de-travail-1-1.png',
    prooftagSas: '/assets/official-www/logo-prooftag-securite-tracabilite-bouteilles-vins.jpg',
  },
  externalPortals: {
    ctVerif: 'https://mintct.cm/',
    doser: 'https://doser.ditros.org/',
    ditrosCt: null as string | null, // Portail interne destiné aux centres agréés et à l'autorité de tutelle
    prooftagSas: 'https://prooftag.net/',
  },
  socialLinks: [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/company/prooftag-catis-sa',
      verifiedSource: 'www.prooftagcatis.com',
    },
    {
      id: 'facebook',
      label: 'Facebook',
      url: 'https://www.facebook.com/Prooftag-Catis-100322071669817',
      verifiedSource: 'www.prooftagcatis.com',
    },
    {
      id: 'twitter',
      label: 'X / Twitter',
      url: 'https://twitter.com/ProoftagCatis',
      verifiedSource: 'www.prooftagcatis.com',
    },
    {
      id: 'youtube',
      label: 'YouTube',
      url: 'https://www.youtube.com/channel/UCxM3SHp-tolk5KEfu0Fyk-A',
      verifiedSource: 'site.prooftagcatis.com',
    },
  ] as SocialLink[],
  // Champs institutionnels configurables (à ne jamais inventer)
  configurableMetrics: {
    installedCentersCount: null as number | null,
    employeesCount: null as number | null,
    activeCitiesCount: null as number | null,
  },
} as const;
