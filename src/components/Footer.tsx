import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { EXPERTISE_DATA } from '../data/expertiseData';
import { SOLUTIONS_LIST } from '../data/solutionsData';
import { useLanguage } from '../hooks/useLanguage';
import { BrandLogo } from './BrandLogo';

export function Footer() {
  const { lang, setLang, t } = useLanguage();

  return (
    <footer className="bg-[var(--color-navy-deep)] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Presentation */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block">
              <BrandLogo variant="white" className="h-9 w-auto" />
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              {t(
                'PROOFTAG-CATIS S.A. (Cameroon Technology Information Services) développe et déploie des solutions numériques pour les transports, l’authentification documentaire et la sécurité routière au Cameroun.',
                'PROOFTAG-CATIS S.A. (Cameroon Technology Information Services) develops and deploys digital solutions for transport systems, document authentication, and road safety in Cameroon.'
              )}
            </p>
            <p className="text-xs text-slate-400">
              {t(
                'Entité camerounaise représentant PROOFTAG SAS.',
                'Cameroonian entity representing PROOFTAG SAS.'
              )}
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-semibold text-white">
              {t('Entreprise', 'Company')}
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">{t('Accueil', 'Home')}</Link></li>
              <li><Link to="/a-propos" className="hover:text-white transition-colors">{t('À propos & CATIS', 'About & CATIS')}</Link></li>
              <li><Link to="/processus-securisation" className="hover:text-white transition-colors">{t('12 points de sécurisation', '12 Security Points')}</Link></li>
              <li><Link to="/actualites" className="hover:text-white transition-colors">{t('Actualités', 'News')}</Link></li>
              <li><Link to="/carriere" className="hover:text-white transition-colors">{t('Carrière', 'Careers')}</Link></li>
            </ul>
          </div>

          {/* Expertise */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-semibold text-white">
              {t('Expertise', 'Expertise')}
            </h3>
            <ul className="space-y-2 text-sm">
              {EXPERTISE_DATA.map((exp) => (
                <li key={exp.id}>
                  <Link to={`/expertise/${exp.slug}`} className="hover:text-white transition-colors">
                    {exp.title[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions & Contact */}
          <div className="lg:col-span-3 space-y-5">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-white">
                {t('Solutions', 'Solutions')}
              </h3>
              <ul className="space-y-2 text-sm">
                {SOLUTIONS_LIST.map((sol) => (
                  <li key={sol.id}>
                    <Link to={sol.route} className="hover:text-white transition-colors">
                      {sol.name} — {sol.tagline[lang]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-800 text-sm">
              <h3 className="text-sm font-semibold text-white">{t('Contact', 'Contact')}</h3>
              <div className="flex items-start gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-[var(--color-secondary)] shrink-0 mt-0.5" aria-hidden="true" />
                <a href={SITE_CONFIG.contact.phoneHref} className="hover:text-white tabular-nums">
                  {SITE_CONFIG.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-[var(--color-secondary)] shrink-0 mt-0.5" aria-hidden="true" />
                <a href={SITE_CONFIG.contact.emailHref} className="hover:text-white">
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-[var(--color-secondary)] shrink-0 mt-0.5" aria-hidden="true" />
                <span>Bonapriso, Douala, {t('Cameroun', 'Cameroon')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {SITE_CONFIG.company.legalName}. {t('Tous droits réservés.', 'All rights reserved.')}
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <Link to="/mentions-legales" className="hover:text-white transition-colors">
              {t('Mentions légales', 'Legal Notice')}
            </Link>
            <Link to="/politique-confidentialite" className="hover:text-white transition-colors">
              {t('Politique de confidentialité', 'Privacy Policy')}
            </Link>
            <div className="inline-flex items-center gap-2">
              <button
                type="button"
                onClick={() => setLang('fr')}
                className={`cursor-pointer ${lang === 'fr' ? 'text-white font-semibold' : 'hover:text-white'}`}
              >
                Français
              </button>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`cursor-pointer ${lang === 'en' ? 'text-white font-semibold' : 'hover:text-white'}`}
              >
                English
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
