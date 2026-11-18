import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbHeaderProps {
  title: string;
  subtitle: string;
  breadcrumbs: BreadcrumbItem[];
  image?: string;
  imageAlt?: string;
  imageFit?: 'cover' | 'contain';
}

export function BreadcrumbHeader({
  title,
  subtitle,
  breadcrumbs,
  image,
  imageAlt,
  imageFit = 'cover',
}: BreadcrumbHeaderProps) {
  const { t } = useLanguage();

  return (
    <section className="bg-[var(--color-navy-deep)] text-white border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16 relative z-10">
        <nav aria-label={t('Fil d’Ariane', 'Breadcrumb')} className="flex flex-wrap items-center gap-1.5 text-xs text-slate-300 mb-5">
          <Link to="/" className="hover:text-white transition-colors">
            {t('Accueil', 'Home')}
          </Link>
          {breadcrumbs.map((bc, idx) => (
            <span key={bc.label + idx} className="inline-flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
              {bc.to ? (
                <Link to={bc.to} className="hover:text-white transition-colors">
                  {bc.label}
                </Link>
              ) : (
                <span className="text-[var(--color-secondary)] font-medium">{bc.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div className={`grid grid-cols-1 ${image ? 'lg:grid-cols-12 gap-8 items-center' : ''}`}>
          <div className={image ? 'lg:col-span-7 space-y-4' : 'max-w-3xl space-y-4'}>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-tight">
              {title}
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          </div>

          {image && (
            <div className="lg:col-span-5">
              <div
                className={`rounded-xl overflow-hidden border aspect-[16/10] ${
                  imageFit === 'contain'
                    ? 'border-slate-700 bg-white p-3'
                    : 'border-slate-700 bg-slate-900/50'
                }`}
              >
                <img
                  src={image}
                  alt={imageAlt || title}
                  referrerPolicy="no-referrer"
                  className={`w-full h-full ${imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
