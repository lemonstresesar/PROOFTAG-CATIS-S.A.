# PROOFTAG-CATIS S.A. — Plateforme Corporate Bilingue (FR / EN)

Refonte institutionnelle du site web de **PROOFTAG-CATIS S.A.** (*Cameroon Technology Information Services*, Bonapriso, Douala, Cameroun), dédiée à la digitalisation des systèmes de transport, à la sécurisation du contrôle technique automobile, à l’authentification documentaire et à la sécurité routière.

## Stack technique

- **Frontend** : React 19, TypeScript, Vite, Tailwind CSS v4 (`@import "tailwindcss";`)
- **Routage** : `react-router-dom`
- **Icônes** : `lucide-react`
- **Messagerie Contact** : `@emailjs/browser` (pilotée par variables d’environnement Vite)
- **Tests unitaires** : `node:test` via `tsx --test` (`src/utils/validation.test.ts`)

## Démarrage local

```bash
npm install
npm run dev
```

L’application est servie sur `http://localhost:3000`.

## Configuration EmailJS (`.env`)

Créez un fichier `.env` à partir de `.env.example` et renseignez vos identifiants EmailJS pour activer l’envoi réel depuis `/contact` :

```env
VITE_EMAILJS_SERVICE_ID="your_service_id"
VITE_EMAILJS_TEMPLATE_ID="your_template_id"
VITE_EMAILJS_PUBLIC_KEY="your_public_key"
```

Si ces variables ne sont pas définies, l’interface informe explicitement l’utilisateur qu’EmailJS n’est pas configuré et propose les canaux directs (`+237 699 19 29 19` / `info@prooftagcatis.com`), sans jamais simuler un faux envoi.

## Vérification & Build

```bash
npx --yes tsx --test src/utils/validation.test.ts
npm run lint
npm run build
```

## Documentation & inventaire

- `COMPANY_RESEARCH.md` : Audit détaillé des plateformes publiques (`site.prooftagcatis.com`, `www.prooftagcatis.com`, `net.prooftagcatis.com`, `prooftag.net`), extraction colorimétrique exacte, incohérences documentées et vérifications requises.
- `ASSETS_MANIFEST.json` : Inventaire complet des 86 ressources visuelles locales archivées dans `public/assets/` (78 images PNG/JPG et 8 fichiers vectoriels SVG).
