import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { EXPERTISE_DATA } from '../data/expertiseData';
import { useLanguage } from '../hooks/useLanguage';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { BreadcrumbHeader } from '../components/BreadcrumbHeader';

export function ExpertiseDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useLanguage();

  const item = EXPERTISE_DATA.find((e) => e.slug === slug) || EXPERTISE_DATA[0];
  const others = EXPERTISE_DATA.filter((e) => e.id !== item.id);

  useDocumentTitle(item.title[lang], item.shortSummary[lang]);

  return (
    <div>
      <BreadcrumbHeader
        title={`${item.index}. ${item.title[lang]}`}
        subtitle={item.shortSummary[lang]}
        breadcrumbs={[
          { label: t('Expertise', 'Expertise'), to: '/expertise' },
          { label: item.title[lang] },
        ]}
        image={item.image}
        imageFit={item.imageFit || 'cover'}
      />

      <section className="py-16 bg-white border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">
                {t('Présentation du domaine', 'Domain Overview')}
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">{item.intro[lang]}</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">
                {t('Axes d’intervention', 'Core Capabilities')}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {item.pillars[lang].map((pillar, i) => (
                  <div
                    key={pillar.heading}
                    className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] space-y-2"
                  >
                    <div className="text-xs font-mono font-semibold text-[var(--color-primary)] tabular-nums">
                      0{i + 1}
                    </div>
                    <h4 className="text-lg font-bold text-slate-900">{pillar.heading}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {item.note && (
              <div className="p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-sm text-slate-600">
                {item.note[lang]}
              </div>
            )}
          </div>

          <aside className="lg:col-span-4 space-y-6">
            {item.secondaryImage && (
              <div className="rounded-xl overflow-hidden border border-[var(--color-border)] bg-white p-3 aspect-[4/3]">
                <img
                  src={item.secondaryImage}
                  alt={item.title[lang]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>
            )}

            <div className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] space-y-4">
              <h3 className="text-base font-bold text-slate-900">
                {t('Composantes clés', 'Key Deliverables')}
              </h3>
              <ul className="space-y-3">
                {item.deliverables[lang].map((deliv) => (
                  <li key={deliv} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-[var(--color-border)]">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white text-sm font-semibold transition-colors"
                >
                  <span>{t('Contacter un expert', 'Contact Our Team')}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-[var(--color-border)] bg-white space-y-3">
              <h3 className="text-sm font-bold text-slate-900">
                {t('Autres expertises', 'Other Expertise Areas')}
              </h3>
              <ul className="space-y-2 text-sm">
                {others.map((o) => (
                  <li key={o.id}>
                    <Link
                      to={`/expertise/${o.slug}`}
                      className="text-slate-600 hover:text-[var(--color-primary)] transition-colors flex items-center justify-between gap-2"
                    >
                      <span>{o.title[lang]}</span>
                      <ArrowRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to="/expertise"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-primary)] pt-2"
              >
                <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{t('Retour aux expertises', 'Back to Expertise')}</span>
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
