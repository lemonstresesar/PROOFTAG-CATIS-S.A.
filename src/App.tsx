import { Link, Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ExpertisePage } from './pages/ExpertisePage';
import { ExpertiseDetailPage } from './pages/ExpertiseDetailPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { DitrosCtPage } from './pages/DitrosCtPage';
import { CtVerifPage } from './pages/CtVerifPage';
import { DoserPage } from './pages/DoserPage';
import { SecurityProcessPage } from './pages/SecurityProcessPage';
import { NewsPage } from './pages/NewsPage';
import { CareerPage } from './pages/CareerPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { useLanguage } from './hooks/useLanguage';

function NotFoundView() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center space-y-5">
        <p className="font-mono text-sm font-bold text-[var(--color-primary)]">404</p>
        <h1 className="text-3xl font-bold text-slate-900">
          {t('Page introuvable', 'Page Not Found')}
        </h1>
        <p className="text-slate-600">
          {t(
            'La page demandée n’existe pas ou a été déplacée. Retrouvez nos rubriques principales ci-dessous.',
            'The requested page does not exist or has moved. Return to our primary sections below.'
          )}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="px-5 py-2.5 text-sm font-semibold rounded-md bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-colors"
          >
            {t('Retour à l’accueil', 'Back to Home')}
          </Link>
          <Link
            to="/solutions"
            className="px-5 py-2.5 text-sm font-semibold rounded-md border border-[var(--color-border)] text-slate-800 hover:bg-[var(--color-surface)] transition-colors"
          >
            {t('Nos solutions', 'Our Solutions')}
          </Link>
          <Link
            to="/contact"
            className="px-5 py-2.5 text-sm font-semibold rounded-md border border-[var(--color-border)] text-slate-800 hover:bg-[var(--color-surface)] transition-colors"
          >
            {t('Contact', 'Contact')}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/catis" element={<AboutPage />} />
        <Route path="/expertise" element={<ExpertisePage />} />
        <Route path="/expertise/:slug" element={<ExpertiseDetailPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/solutions/ditros-ct" element={<DitrosCtPage />} />
        <Route path="/solutions/ct-verif" element={<CtVerifPage />} />
        <Route path="/solutions/doser" element={<DoserPage />} />
        <Route path="/processus-securisation" element={<SecurityProcessPage />} />
        <Route path="/actualites" element={<NewsPage />} />
        <Route path="/carriere" element={<CareerPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/mentions-legales" element={<LegalPage mode="legal" />} />
        <Route path="/politique-confidentialite" element={<LegalPage mode="privacy" />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </MainLayout>
  );
}
