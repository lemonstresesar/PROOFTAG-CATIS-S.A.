import type { Language } from '../config/siteConfig';

export interface SecurityPoint {
  step: number;
  iconKey:
    | 'Database'
    | 'RefreshCw'
    | 'Cpu'
    | 'Camera'
    | 'MapPin'
    | 'Tablet'
    | 'FileText'
    | 'CheckSquare'
    | 'Printer'
    | 'ShieldCheck'
    | 'Server'
    | 'ScanSearch';
  phase: Record<Language, string>;
  title: Record<Language, string>;
  description: Record<Language, string>;
  illustration: string;
  imageFit: 'cover' | 'contain';
}

export const SECURITY_POINTS: SecurityPoint[] = [
  {
    step: 1,
    iconKey: 'Database',
    phase: { fr: 'Identification', en: 'Identification' },
    title: {
      fr: 'Vérification des informations de la carte grise dans la base de données du MINT',
      en: 'Verification of vehicle registration data in the MINT central database',
    },
    description: {
      fr: 'Consultation en lecture de la base des cartes grises afin de contrôler la cohérence administrative du véhicule et détecter d’éventuelles anomalies documentaires.',
      en: 'Read-only verification against the Ministry of Transport registration database to validate vehicle identity and detect mismatched or suspect records.',
    },
    illustration: '/assets/official-www/Certidocs-3.png',
    imageFit: 'contain',
  },
  {
    step: 2,
    iconKey: 'RefreshCw',
    phase: { fr: 'Synchronisation', en: 'Synchronization' },
    title: {
      fr: 'Mise à jour des données recueillies dans les bases centrales',
      en: 'Synchronization of collected records into central databases',
    },
    description: {
      fr: 'Enregistrement structuré des informations du véhicule contrôlé dans la base centrale pour alimenter le suivi national du parc automobile par catégorie et période.',
      en: 'Structured registration of inspected vehicle records in central databases to support national fleet monitoring by category and period.',
    },
    illustration: '/assets/official-www/Certidocs-1.png',
    imageFit: 'contain',
  },
  {
    step: 3,
    iconKey: 'Cpu',
    phase: { fr: 'Mesure automatisée', en: 'Automated Testing' },
    title: {
      fr: 'Collecte automatique des données des bancs de tests',
      en: 'Automated data capture from inspection test benches',
    },
    description: {
      fr: 'Acquisition directe des mesures techniques issues des bancs (freinage, suspension, ripage, éclairage, émissions) via protocole normalisé (GIEGLAN), éliminant la saisie manuelle.',
      en: 'Direct capture of mechanical measurements (braking, suspension, wheel alignment, headlamps, emissions) from test benches via standardized protocols, preventing manual alteration.',
    },
    illustration: '/assets/official-www/centre-technique-automobile.jpg',
    imageFit: 'cover',
  },
  {
    step: 4,
    iconKey: 'Camera',
    phase: { fr: 'Preuve visuelle', en: 'Visual Evidence' },
    title: {
      fr: 'Prise de photographies',
      en: 'Time-stamped vehicle photography',
    },
    description: {
      fr: 'Capture horodatée de vues du véhicule et de sa plaque d’immatriculation via terminal mobile dédié afin d’attester sa présence physique dans le centre.',
      en: 'Time-stamped capture of vehicle and license plate photographs using a dedicated mobile device to document physical presence at the testing lane.',
    },
    illustration: '/assets/official-www/83882294_120016879536842_3101088639661113344_n.jpg',
    imageFit: 'cover',
  },
  {
    step: 5,
    iconKey: 'MapPin',
    phase: { fr: 'Géolocalisation', en: 'Geolocation' },
    title: {
      fr: 'Localisation GPS',
      en: 'GPS location logging',
    },
    description: {
      fr: 'Association des coordonnées géographiques du centre de contrôle technique à l’opération, exploitables au sein du système d’information géographique de l’autorité.',
      en: 'Binding of the authorized testing center’s GPS coordinates to the inspection record for geographic auditability.',
    },
    illustration: '/assets/official-www/cropped-Slider3.png',
    imageFit: 'cover',
  },
  {
    step: 6,
    iconKey: 'Tablet',
    phase: { fr: 'Inspection visuelle', en: 'Visual Inspection' },
    title: {
      fr: 'Utilisation d’une tablette pour les contrôles visuels',
      en: 'Tablet-assisted visual defect inspection',
    },
    description: {
      fr: 'Sélection guidée des défauts constatés à partir d’un lexique réglementaire normalisé sur tablette, réduisant les erreurs d’interprétation ou de transcription.',
      en: 'Guided defect selection on tablet from a standardized regulatory lexicon, reducing transcription errors or subjective discrepancies.',
    },
    illustration: '/assets/official-www/centre-de-visite-technique_1.jpg',
    imageFit: 'cover',
  },
  {
    step: 7,
    iconKey: 'FileText',
    phase: { fr: 'Édition numérique', en: 'Report Generation' },
    title: {
      fr: 'Génération automatique du procès-verbal et du rapport de test',
      en: 'Automated generation of the inspection report and test log',
    },
    description: {
      fr: 'Consolidation automatique des mesures des bancs et des observations visuelles dans un procès-verbal structuré selon les normes d’interprétation en vigueur.',
      en: 'Automatic consolidation of test-bench metrics and visual observations into a standardized inspection report.',
    },
    illustration: '/assets/official-www/WhatsApp-Image-2020-05-13-at-13.54.10.jpeg',
    imageFit: 'contain',
  },
  {
    step: 8,
    iconKey: 'CheckSquare',
    phase: { fr: 'Décision objective', en: 'Automated Decision' },
    title: {
      fr: 'Génération automatique de la décision',
      en: 'Automated pass/fail decision engine',
    },
    description: {
      fr: 'Détermination automatisée du résultat (« Acceptée » ou « Refusée ») sur la base stricte des valeurs mesurées et de la criticité des défauts enregistrés.',
      en: 'Automated determination of the roadworthiness outcome (Accepted / Refused) strictly derived from measured thresholds and defect severity.',
    },
    illustration: '/assets/official-www/1588859220771_Process-S_C3_A9curis_C3_A9-D_C3_A9livrance-Vignette2019-ok_Paysage.jpg',
    imageFit: 'contain',
  },
  {
    step: 9,
    iconKey: 'Printer',
    phase: { fr: 'Émission sécurisée', en: 'Secure Printing' },
    title: {
      fr: 'Impression du résultat sur un procès-verbal sécurisé',
      en: 'Printing onto a secure roadworthiness certificate',
    },
    description: {
      fr: 'Édition du procès-verbal sécurisé et validation sur pavé de signature électronique par l’opérateur habilité du centre.',
      en: 'Printing of the official report format alongside electronic signature validation by the authorized center operator.',
    },
    illustration: '/assets/official-www/Vignettes-bleu-2-MINI.png',
    imageFit: 'contain',
  },
  {
    step: 10,
    iconKey: 'ShieldCheck',
    phase: { fr: 'Authentification physique', en: 'Physical Security' },
    title: {
      fr: 'Sécurisation de la vignette avec le scellé à bulles et le QR code',
      en: 'Sticker protection with Bubble Seal® and QR code',
    },
    description: {
      fr: 'Apposition d’un Scellé à Bulles® chaosmétrique infalsifiable et d’un QR code liant physiquement et numériquement la vignette aux données certifiées.',
      en: 'Application of a tamper-evident chaosmetric Bubble Seal® and QR code linking the physical sticker to the certified digital record.',
    },
    illustration: '/assets/official-www/Scell_C3_A9-_C3_A0-bulle.png',
    imageFit: 'contain',
  },
  {
    step: 11,
    iconKey: 'Server',
    phase: { fr: 'Centralisation', en: 'Centralization' },
    title: {
      fr: 'Centralisation des données dans le serveur du MINT',
      en: 'Centralized archiving on MINT servers',
    },
    description: {
      fr: 'Consolidation des opérations de tous les centres connectés sur l’infrastructure centrale pour le pilotage statistique (taux de réussite, défauts récurrents, état du parc).',
      en: 'Aggregation of all connected center transactions onto central authority servers for national statistics and compliance oversight.',
    },
    illustration: '/assets/official-www/Slider.png',
    imageFit: 'cover',
  },
  {
    step: 12,
    iconKey: 'ScanSearch',
    phase: { fr: 'Vérification terrain', en: 'Field Verification' },
    title: {
      fr: 'Contrôle formel ou informel sur le terrain',
      en: 'Formal and informal roadside verification',
    },
    description: {
      fr: 'Contrôle d’authenticité et de validité à trois niveaux (visuel ouvert, vérification en ligne via smartphone/CT-VERIF, et contrôle expert par lecteur dédié).',
      en: 'Three-tier verification on the road: overt visual inspection, online check via smartphone or CT-VERIF, and covert reader authentication.',
    },
    illustration: '/assets/official-www/Vignette-et-description_Plan-de-travail-1.png',
    imageFit: 'contain',
  },
];
