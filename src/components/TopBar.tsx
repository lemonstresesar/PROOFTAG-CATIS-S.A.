import { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Phone, Mail, MapPin, Globe } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { EXPERTISE_DATA } from '../data/expertiseData';
import { SOLUTIONS_LIST } from '../data/solutionsData';
import { useLanguage } from '../hooks/useLanguage';
import { BrandLogo } from './BrandLogo';

export function TopBar() {
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<'expertise' | 'solutions' | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `whitespace-nowrap shrink-0 text-sm font-medium transition-colors py-1 border-b-2 ${
      isActive
        ? 'text-[var(--color-primary)] border-[var(--color-primary)]'
        : 'text-slate-700 border-transparent hover:text-[var(--color-primary)] hover:border-slate-300'
    }`;

  return (
    <header ref={navRef} className="sticky top-0 z-50 bg-white border-b border-[var(--color-border)]">
      {/* Desktop utility bar (hidden on mobile to preserve <15% sticky viewport cap) */}
      <div className="hidden lg:block bg-[var(--color-navy-deep)] text-slate-200 text-xs">
        <div className="max-w-7xl mx-auto px-6 h-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a
              href={SITE_CONFIG.contact.phoneHref}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[var(--color-secondary)]" aria-hidden="true" />
              <span className="tabular-nums">{SITE_CONFIG.contact.phoneDisplay}</span>
            </a>
            <a
              href={SITE_CONFIG.contact.emailHref}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5 text-[var(--color-secondary)]" aria-hidden="true" />
              <span>{SITE_CONFIG.contact.email}</span>
            </a>
            <span className="inline-flex items-center gap-1.5 text-slate-300 whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-[var(--color-secondary)]" aria-hidden="true" />
              <span>
                {SITE_CONFIG.company.city}, {t(SITE_CONFIG.company.countryFr, SITE_CONFIG.company.countryEn)}
              </span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            {SITE_CONFIG.socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-[var(--color-secondary)] transition-colors whitespace-nowrap"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main 3-Zone Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 lg:h-[72px] flex items-center justify-between gap-6 lg:gap-8">
        {/* Zone 1: Brand Mark (single link element) */}
        <Link to="/" aria-label="PROOFTAG-CATIS S.A." className="shrink-0 flex items-center">
          <BrandLogo variant="color" className="h-8 sm:h-9 w-auto" />
        </Link>

        {/* Zone 2: Primary Desktop Navigation */}
        <nav aria-label={t('Navigation principale', 'Main navigation')} className="hidden lg:flex items-center gap-6">
          <NavLink to="/" end className={navLinkClass}>
            {t('Accueil', 'Home')}
          </NavLink>
          <NavLink to="/a-propos" className={navLinkClass}>
            {t('À propos', 'About')}
          </NavLink>

          {/* Expertise Dropdown */}
          <div className="relative">
            <button
              type="button"
              aria-expanded={openDropdown === 'expertise'}
              onClick={() => setOpenDropdown((v) => (v === 'expertise' ? null : 'expertise'))}
              className={`inline-flex items-center gap-1 whitespace-nowrap shrink-0 text-sm font-medium py-1 border-b-2 transition-colors cursor-pointer ${
                location.pathname.startsWith('/expertise')
                  ? 'text-[var(--color-primary)] border-[var(--color-primary)]'
                  : 'text-slate-700 border-transparent hover:text-[var(--color-primary)]'
              }`}
            >
              <span>{t('Expertise', 'Expertise')}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-150 ${
                  openDropdown === 'expertise' ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>
            {openDropdown === 'expertise' && (
              <div className="absolute left-0 top-full mt-2 w-72 bg-white border border-[var(--color-border)] rounded-lg shadow-lg py-2 z-50">
                <Link
                  to="/expertise"
                  className="block px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)] hover:bg-[var(--color-surface)] border-b border-[var(--color-border)]"
                >
                  {t('Toutes nos expertises', 'All Expertise Areas')}
                </Link>
                {EXPERTISE_DATA.map((item) => (
                  <Link
                    key={item.id}
                    to={`/expertise/${item.slug}`}
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    <span className="font-mono text-xs text-slate-400 mr-2 tabular-nums">{item.index}.</span>
                    {item.title[lang]}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div className="relative">
            <button
              type="button"
              aria-expanded={openDropdown === 'solutions'}
              onClick={() => setOpenDropdown((v) => (v === 'solutions' ? null : 'solutions'))}
              className={`inline-flex items-center gap-1 whitespace-nowrap shrink-0 text-sm font-medium py-1 border-b-2 transition-colors cursor-pointer ${
                location.pathname.startsWith('/solutions') || location.pathname === '/processus-securisation'
                  ? 'text-[var(--color-primary)] border-[var(--color-primary)]'
                  : 'text-slate-700 border-transparent hover:text-[var(--color-primary)]'
              }`}
            >
              <span>{t('Solutions', 'Solutions')}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-150 ${
                  openDropdown === 'solutions' ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>
            {openDropdown === 'solutions' && (
              <div className="absolute left-0 top-full mt-2 w-80 bg-white border border-[var(--color-border)] rounded-lg shadow-lg py-2 z-50">
                <Link
                  to="/solutions"
                  className="block px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)] hover:bg-[var(--color-surface)] border-b border-[var(--color-border)]"
                >
                  {t('Écosystème de solutions', 'Solutions Ecosystem')}
                </Link>
                {SOLUTIONS_LIST.map((sol) => (
                  <Link
                    key={sol.id}
                    to={sol.route}
                    className="block px-4 py-2.5 hover:bg-[var(--color-surface)] transition-colors"
                  >
                    <div className="text-sm font-semibold text-slate-900">{sol.name}</div>
                    <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">{sol.tagline[lang]}</div>
                  </Link>
                ))}
                <Link
                  to="/processus-securisation"
                  className="block px-4 py-2.5 text-sm font-medium text-[var(--color-primary)] hover:bg-[var(--color-surface)] border-t border-[var(--color-border)] mt-1"
                >
                  {t('Les 12 points de sécurisation', '12-Point Security Process')}
                </Link>
              </div>
            )}
          </div>

          <NavLink to="/actualites" className={navLinkClass}>
            {t('Actualités', 'News')}
          </NavLink>
          <NavLink to="/carriere" className={navLinkClass}>
            {t('Carrière', 'Careers')}
          </NavLink>
        </nav>

        {/* Zone 3: Language Switcher + Primary Contact Action + Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <div
            role="group"
            aria-label={t('Sélecteur de langue', 'Language selector')}
            className="hidden sm:inline-flex items-center border border-[var(--color-border)] rounded-md p-0.5 bg-[var(--color-surface)]"
          >
            <button
              type="button"
              onClick={() => setLang('fr')}
              aria-pressed={lang === 'fr'}
              className={`px-2 py-1 text-xs font-semibold rounded transition-colors cursor-pointer whitespace-nowrap ${
                lang === 'fr' ? 'bg-white text-[var(--color-primary)] shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
              className={`px-2 py-1 text-xs font-semibold rounded transition-colors cursor-pointer whitespace-nowrap ${
                lang === 'en' ? 'bg-white text-[var(--color-primary)] shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              EN
            </button>
          </div>

          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] rounded-md transition-colors whitespace-nowrap shrink-0"
          >
            {t('Contact', 'Contact')}
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? t('Fermer le menu', 'Close menu') : t('Ouvrir le menu', 'Open menu')}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-[var(--color-border)] text-slate-700 hover:bg-[var(--color-surface)] cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[var(--color-border)] bg-white max-h-[82vh] overflow-y-auto">
          <nav aria-label={t('Menu mobile', 'Mobile menu')} className="px-4 py-4 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border)]">
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-600">
                <Globe className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                {t('Langue', 'Language')}
              </span>
              <div className="inline-flex items-center border border-[var(--color-border)] rounded-md p-0.5 bg-[var(--color-surface)]">
                <button
                  type="button"
                  onClick={() => setLang('fr')}
                  className={`px-3 py-1 text-xs font-semibold rounded cursor-pointer ${
                    lang === 'fr' ? 'bg-white text-[var(--color-primary)] shadow-xs' : 'text-slate-600'
                  }`}
                >
                  FR
                </button>
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 text-xs font-semibold rounded cursor-pointer ${
                    lang === 'en' ? 'bg-white text-[var(--color-primary)] shadow-xs' : 'text-slate-600'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            <div className="space-y-1">
              <Link to="/" className="block py-2 text-base font-semibold text-slate-900">
                {t('Accueil', 'Home')}
              </Link>
              <Link to="/a-propos" className="block py-2 text-base font-semibold text-slate-900">
                {t('À propos & CATIS', 'About & CATIS')}
              </Link>
            </div>

            <div className="pt-2 border-t border-[var(--color-border)]">
              <Link to="/expertise" className="block py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                {t('Expertise', 'Expertise')}
              </Link>
              <div className="pl-2 space-y-1 mt-1">
                {EXPERTISE_DATA.map((item) => (
                  <Link
                    key={item.id}
                    to={`/expertise/${item.slug}`}
                    className="block py-1.5 text-sm text-slate-700"
                  >
                    {item.title[lang]}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-[var(--color-border)]">
              <Link to="/solutions" className="block py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                {t('Solutions numériques', 'Digital Solutions')}
              </Link>
              <div className="pl-2 space-y-1 mt-1">
                {SOLUTIONS_LIST.map((sol) => (
                  <Link key={sol.id} to={sol.route} className="block py-1.5 text-sm text-slate-700 font-medium">
                    {sol.name} — <span className="font-normal text-slate-500">{sol.tagline[lang]}</span>
                  </Link>
                ))}
                <Link to="/processus-securisation" className="block py-1.5 text-sm font-medium text-[var(--color-primary)]">
                  {t('12 points de sécurisation', '12-Point Security Process')}
                </Link>
              </div>
            </div>

            <div className="pt-2 border-t border-[var(--color-border)] space-y-1">
              <Link to="/actualites" className="block py-2 text-base font-semibold text-slate-900">
                {t('Actualités', 'News')}
              </Link>
              <Link to="/carriere" className="block py-2 text-base font-semibold text-slate-900">
                {t('Carrière', 'Careers')}
              </Link>
            </div>

            <div className="pt-3 border-t border-[var(--color-border)] space-y-3">
              <Link
                to="/contact"
                className="block w-full text-center py-2.5 px-4 rounded-md bg-[var(--color-primary)] text-white font-semibold text-sm"
              >
                {t('Contactez notre équipe', 'Contact Our Team')}
              </Link>
              <div className="text-xs text-slate-600 space-y-1">
                <div>{SITE_CONFIG.contact.phoneDisplay}</div>
                <div>{SITE_CONFIG.contact.email}</div>
                <div>{SITE_CONFIG.company.city}, {t(SITE_CONFIG.company.countryFr, SITE_CONFIG.company.countryEn)}</div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
