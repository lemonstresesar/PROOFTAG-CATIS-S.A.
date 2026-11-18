# AUDIT DOCUMENTAIRE ET RECHERCHE — PROOFTAG-CATIS S.A.

## 1. Synthèse de l'identité de l'entreprise

- **Raison sociale officielle** : PROOFTAG-CATIS S.A.
- **Signification de CATIS** : **CA**meroon **T**echnology **I**nformation **S**ervices
- **Localisation** : Bonapriso, Douala, Cameroun
- **Secteur d'activité** : Technologies et services de l'information appliqués aux transports, à la sécurité routière, au contrôle technique automobile et à l'authentification documentaire.
- **Positionnement** : Acteur technologique spécialisé dans la transformation numérique des processus de transport, la sécurité routière, la sécurisation et l'authentification documentaire, la traçabilité, les systèmes d'information, l'analyse des données et le support technique.
- **Relation avec PROOFTAG SAS** : PROOFTAG-CATIS S.A. est présentée sur ses plateformes publiques comme l'entité camerounaise représentant **PROOFTAG SAS** (société française pionnière de l'authentification physique par technologie chaosmétrique Code à Bulles® et de la suite logicielle CertiDOCS®). Les deux identités doivent rester clairement distinguées : PROOFTAG SAS conçoit les technologies mères d'authentification (Code à Bulles®, Scellé à Bulles®, CertiDOCS®), tandis que PROOFTAG-CATIS S.A. assure le développement, le déploiement local, l'interconnexion des systèmes de transport et l'accompagnement opérationnel au Cameroun.

---

## 2. Sources publiques explorées

1. **Nouveau site de présentation (2024)** : `https://site.prooftagcatis.com/`
   - Pages explorées : Accueil, `/catis/`, `/expertise/`, `/expertise/recherche-et-developpement/`, `/expertise/support-technique/`, `/expertise/data-analysis-reporting/`, `/expertise/securite-documentaire/`, `/expertise/securite-prevention-routiere/`, `/solutions/`, `/solutions/ditros-ct/`, `/solutions/ct-verif/`, `/en/solutions/ct-verif/`, `/solutions/doser/`, `/partenaires/`, `/blog/`, `/contact/`, `/catis/carriere/`.
   - API WordPress REST (`/wp-json/wp/v2/`) : **16 pages** publiées, **0 article** (`/posts`), **50 fichiers média** extraits et archivés dans `public/assets/`. Feuilles de style analysées (`post-6.css`, `global.css`, `post-40.css`, `astra`). Polices détectées : `Inter`, `Plus Jakarta Sans`, `Poppins`, `Roboto`, `Raleway`, `Roboto Slab`.
2. **Site principal historique (2020–2021)** : `https://www.prooftagcatis.com/`
   - Pages explorées : Accueil, `/a-propos/`, `/organisation/`, `/historique/`, `/mission/`, `/lois-et-reglements/`, `/douze-points-de-securisation/`, `/certidics-ct/`, `/scelles-a-bulles/`, `/support-technique/`, `/partenaires/`, `/toute-lactualite/`, `/carriere/`, `/galerie/`, `/securite-documentaire/`, `/business-intelligence/`.
   - API WordPress REST protégée par iThemes Security (`itsec_rest_api_access_restricted`). Exploration intégrale réalisée sur **48 pages** via HTML/CSS directs : **33 visuels officiels pleine résolution** extraits directement vers `public/assets/official-www/`, polices `Poppins`, `Hind`, `Roboto`, `Playfair Display`. Aucune image générée ni illustration stock de modèle n'est utilisée dans l'interface publique.
3. **Version miroir historique** : `https://net.prooftagcatis.com/`
   - Contenu structurel comparable à `www.prooftagcatis.com` (polices `Poppins`, `Hind`, `Roboto`), présentant un avertissement PHP public (`Cookie_Notice::__wakeup()`) sur les points de terminaison REST et quelques divergences de configuration (`info@net.prooftagcatis.com`).
4. **Site de PROOFTAG SAS (maison mère / partenaire technologique)** : `https://prooftag.net/`
   - Pages explorées : Accueil, `/fr/code-a-bulles/`, `/en/bubble-tag/`, `/fr/certidocs/`, `/fr/securite-documentaire/`, `/fr/scelles-de-securite/`.
   - Polices détectées : `Poppins`, `Roboto`, `Montserrat`. **86 fichiers** dans le catalogue (`50`+ pages, `87` médias dont `25`+ fichiers `.svg`) : 8 visuels PNG/JPG officiels et **8 graphiques vectoriels SVG** (`public/assets/svg/`) extraits et inventoriés dans `ASSETS_MANIFEST.json`.

---

## 3. Extraction de l'identité visuelle et de la palette chromatique

L'analyse directe des pixels des logos (`logo-prooftag-catis.png`, `favicon-orig.png`) et des feuilles de style CSS (`post-40.css`, `post-6.css`, `global.css` sur `site.prooftagcatis.com` et thème sur `www.prooftagcatis.com`) établit la palette officielle suivante :

| Rôle CSS | Code HEX | Source vérifiée |
| :--- | :--- | :--- |
| `--color-primary` | `#106898` | Pixels dominants du logotype `Prooftag - CATIS SA` (`logo-prooftag-catis.png`), CSS Elementor `#0C6794` (`post-40.css`, 7 occurrences) et historique `#195F8E` (`www.prooftagcatis.com`, 128 occurrences) |
| `--color-primary-dark` | `#093E5C` | Dérivé sombre institutionnel du bleu marine CATIS (cohérent avec `#161C28` utilisé 10 fois dans `post-40.css`) |
| `--color-secondary` | `#00B0FF` | Pixels exacts du `A` et du point du `I` dans le logotype (`#00B0FF` / `#00AEFE`) et CSS Elementor `#03ADFF` (`post-40.css`) |
| `--color-accent` | `#0F766E` | Écho sobre au motif géométrique (`motif-experience.png`) et aux validations opérationnelles |
| `--color-bg` | `#FFFFFF` | Fond principal (`--e-global-color-astglobalcolor5: #FFFFFF`) |
| `--color-surface` | `#F4F7FA` | Surfaces secondaires (`--e-global-color-astglobalcolor6: #F2F5F7` / `#F5F5F5`) |
| `--color-text` | `#111827` | Typographie principale sombre (`--e-global-color-astglobalcolor2: #1E293B` / `#161C28`) |
| `--color-muted` | `#475569` | Textes secondaires et métadonnées (`--e-global-color-astglobalcolor3: #67768E` / `#535B6E`) |
| `--color-border` | `#DCE4EC` | Séparateurs fins et bordures structurelles |
| `--color-success` | `#15803D` | États de validation (interface DITROS-CT Caisse) |
| `--color-warning` | `#B45309` | Alertes et bandeaux d'avertissement lisibles (dérivé accessible de `--e-global-color-astglobalcolor7: #FFCD57`) |

> **Anomalie CSS détectée sur `site.prooftagcatis.com`** : Le kit global Astra par défaut comporte des variables résiduelles non surchargées (`--e-global-color-astglobalcolor0: #060097`, `astglobalcolor1: #c10fff`, `--e-global-color-primary: #6EC1E4`) alors que les widgets Elementor personnalisés (`post-40.css`) appliquent les vraies teintes de marque (`#0C6794`, `#03ADFF`, `#161C28`). La refonte unifie strictement toute la charte sur le bleu marine/pétrole et cyan authentiques de l'entreprise.

---

## 4. Domaines d'expertise et technologies documentés

1. **Recherche et développement (R&D)** : Conception et amélioration continue de solutions numériques adaptées aux transports, à l'interconnexion des systèmes et à l'authentification.
2. **Support technique** : Installation d'équipements, déploiement logiciel (CertiDOCS CT), formation des contrôleurs, supervision proactive/réactive et gestion des incidents afin d'assurer la continuité de service des centres.
3. **Analyse de données et reporting** : Collecte structurée, recherche, production de tableaux de bord, suivi statistique des visites techniques et des accidents de la route pour l'aide à la décision publique.
4. **Sécurité documentaire** : Protection de documents à valeur légale contre la contrefaçon et la falsification, garantissant unicité, authenticité, intégrité et traçabilité tout au long du cycle de vie via le **Code à Bulles®**, le **Scellé à Bulles®**, les codes QR/DataMatrix et **CertiDOCS®**.
5. **Sécurité et prévention routière** : Contribution aux objectifs de la résolution 74/299 des Nations Unies (Décennie d'action pour la sécurité routière 2021–2030 : réduction d'au moins 50 % des décès et blessures sur les routes à l'horizon 2030).

---

## 5. Les trois solutions numériques phares

1. **DITROS-CT** (`site.prooftagcatis.com/solutions/ditros-ct/`) : Système de délivrance sécurisée des vignettes de visite technique automobile. Assure la gestion globale du contrôle technique, l'interconnexion en temps réel de l'ensemble des centres agréés et la centralisation des résultats vers le serveur du Ministère des Transports. *Lien externe* : non ouvert au grand public (boutons de contact intégrés).
2. **CT-VERIF** (`site.prooftagcatis.com/solutions/ct-verif/`) : Plateforme grand public mise en place à la demande de la Direction des Transports Routiers du Ministère des Transports du Cameroun permettant de vérifier la validité et l'authenticité des visites techniques. *Lien officiel vérifié dans le bouton « Accéder » du site source* : `https://mintct.cm/`.
3. **DOSER** (`site.prooftagcatis.com/solutions/doser/`) : Système de Données de Sécurité Routière dédié à la collecte, la recherche, l'analyse et l'établissement des statistiques sur les accidents de la route, offrant un espace partagé aux acteurs de la sécurité routière. *Lien officiel vérifié dans le bouton « Accéder » du site source* : `https://doser.ditros.org/`.

---

## 6. Contradictions et informations à confirmer avant mise en production

L'audit comparatif entre la version historique (2020–2021 : `www.prooftagcatis.com` / `net.prooftagcatis.com`) et la version récente (2024 : `site.prooftagcatis.com`) révèle plusieurs points divergents ou incomplets :

| Élément | Version historique (`www` / `net`) | Version récente (`site`) | Statut / Action appliquée dans la refonte |
| :--- | :--- | :--- | :--- |
| **Adresse physique** | `Immeuble "Résidence Le Carat", Bonapriso — BP 4601 Douala` | `4601 Hôtel de l'air, Bonapriso, Douala, Cameroun` | Les deux mentions sont documentées dans `src/config/siteConfig.ts` et signalées comme à confirmer par la direction. |
| **Adresse e-mail** | `info@prooftagcatis.com` (`www`) vs `info@net.prooftagcatis.com` (`net`) | `info@prooftagcatis.com` | `info@prooftagcatis.com` retenu comme adresse principale configurable. |
| **Année de création** | Mention « a lancé ses activités en 2019 » (`www/a-propos`) | Non précisée | Mentionnée avec précision documentaire et note de vérification avant publication définitive. |
| **Compteurs clés** | `+0 Collaborateurs`, `+0 Centres`, `+0 Villes` (compteurs non renseignés) | `UTILISATEURS 0`, `REGIONS 0` (compteurs restés à zéro) | Aucun chiffre inventé n'a été substitué ; remplacés par des indicateurs qualitatifs factuels (« Déploiement national — 10 régions visées ») et champs configurables. |
| **Équipe dirigeante** | Organigramme générique + 4 avatars illustrés | 6 noms et fonctions cités sur `/catis/`, mais 5 portraits génériques Elementor et 1 photo authentique (`s-tampolla.png`) | Les 6 membres officiels sont conservés exactement avec leurs titres ; seule la photo vérifiée de Serge TAMPOLLA est affichée en portrait réel, les autres utilisant des monogrammes sobres jusqu'à fourniture des portraits officiels. |
| **Pages vides sur `site.prooftagcatis.com`** | Contenu présent sur `www` (12 points, stages, partenaires, lois 2018–2020) | `/blog/`, `/catis/carriere/`, `/expertise/*` quasi vides | Contenus consolidés à partir des textes officiels vérifiés sans inventer d'articles de presse ni d'offres d'emploi fictives. |
| **Réseaux sociaux** | Facebook, Twitter, LinkedIn (`company/prooftag-catis-sa` vs `in/prooftag-catis`), WhatsApp `+237699192919` | Icône YouTube (`UCxM3SHp-tolk5KEfu0Fyk-A`) + boutons génériques sans URL | Liens officiels vérifiés intégrés dans une configuration centralisée avec mention de vérification de pérennité. |
| **Statistiques EPSR 2018** | Mention 1 500 décès / 16 000 accidents / 70 % sans visite (rapport CEE-ONU 2018) | Mention Résolution ONU 74/299 (2021–2030) | Données de 2018 explicitement datées comme contexte historique du rapport EPSR 2018 et non présentées comme statistiques courantes. |
| **Visuel PV (`PV.png`)** | Non présent | Contient une immatriculation et un nom réel | Exclu de l'affichage public par sécurité et remplacé par une maquette fictive anonymisée (`XX 000 XX` — « SPÉCIMEN FICTIF NON OFFICIEL »). |
