import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Share2, Check, ArrowRight, Newspaper } from 'lucide-react';
import { VERIFIED_NEWS_ITEMS, type NewsArticle } from '../data/companyData';
import { useLanguage } from '../hooks/useLanguage';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { BreadcrumbHeader } from '../components/BreadcrumbHeader';

type CategoryFilter = 'all' | NewsArticle['category'];

export function NewsPage() {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useDocumentTitle(
    t('Actualités & Archives', 'News & Archives'),
    t(
      'Archives institutionnelles et publications vérifiées de PROOFTAG-CATIS S.A. sur la sécurité routière et la sécurisation documentaire.',
      'Verified institutional archives and updates from PROOFTAG-CATIS S.A. on road safety and document authentication.'
    )
  );

  const categories: { id: CategoryFilter; label: { fr: string; en: string } }[] = [
    { id: 'all', label: { fr: 'Toutes les publications', en: 'All Publications' } },
    { id: 'institutionnel', label: { fr: 'Institutionnel', en: 'Institutional' } },
    { id: 'securite-routiere', label: { fr: 'Sécurité routière', en: 'Road Safety' } },
    { id: 'technologie', label: { fr: 'Technologie', en: 'Technology' } },
  ];

  const filteredItems =
    filter === 'all'
      ? VERIFIED_NEWS_ITEMS
      : VERIFIED_NEWS_ITEMS.filter((item) => item.category === filter);

  const handleShare = async (article: NewsArticle) => {
    const shareUrl = `${window.location.origin}/actualites#${article.slug}`;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopiedId(article.id);
      setTimeout(() => setCopiedId(null), 2500);
    } catch {
      setCopiedId(article.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  return (
    <div>
      <BreadcrumbHeader
        title={t('Actualités & archives publiques', 'News & Public Archives')}
        subtitle={t(
          'Publications sourcées et archives institutionnelles de PROOFTAG-CATIS S.A. Aucun article fictif ou événement non confirmé n’est publié sur cet espace.',
          'Sourced publications and institutional archives from PROOFTAG-CATIS S.A. No unverified or fabricated news items are published here.'
        )}
        breadcrumbs={[{ label: t('Actualités', 'News') }]}
        image="/assets/official-www/EX6E3cOWoAA4-i1.jpg"
        imageAlt={t('Remise officielle PROOFTAG-CATIS S.A.', 'PROOFTAG-CATIS S.A. official ceremony')}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-[var(--color-border)] pb-5">
            {categories.map((cat) => {
              const isActive = filter === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setFilter(cat.id)}
                  className={`px-4 py-2 text-xs font-semibold rounded-md border transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]'
                      : 'bg-[var(--color-surface)] text-slate-700 border-[var(--color-border)] hover:border-[var(--color-primary)]'
                  }`}
                >
                  {cat.label[lang]}
                </button>
              );
            })}
          </div>

          {/* Articles or Honest Empty State */}
          {filteredItems.length === 0 ? (
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-10 text-center space-y-3">
              <Newspaper className="w-8 h-8 text-slate-400 mx-auto" aria-hidden="true" />
              <h3 className="text-lg font-bold text-slate-900">
                {t(
                  'Aucune archive publique vérifiée dans cette catégorie pour le moment',
                  'No verified public archives in this category at the moment'
                )}
              </h3>
              <p className="text-sm text-slate-600 max-w-xl mx-auto">
                {t(
                  'Par exigence de rigueur éditoriale, nous n’affichons que les communiqués et archives documentés par PROOFTAG-CATIS S.A. Vous pouvez consulter l’ensemble des publications ou contacter notre direction de la communication.',
                  'To uphold editorial accuracy, only documented PROOFTAG-CATIS S.A. archives are displayed. You can view all publications or contact our communications desk.'
                )}
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setFilter('all')}
                  className="px-4 py-2 text-xs font-semibold rounded-md bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] cursor-pointer"
                >
                  {t('Afficher toutes les publications', 'Show All Publications')}
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredItems.map((article) => (
                <article
                  key={article.id}
                  id={article.slug}
                  className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-[16/9] bg-slate-200 overflow-hidden border-b border-[var(--color-border)]">
                      <img
                        src={article.image}
                        alt={article.title[lang]}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                        <span className="font-semibold text-[var(--color-primary)] uppercase">
                          {article.category === 'institutionnel'
                            ? t('Institutionnel', 'Institutional')
                            : article.category === 'securite-routiere'
                            ? t('Sécurité routière', 'Road Safety')
                            : t('Technologie', 'Technology')}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{article.date}</span>
                      </div>

                      <h2 className="text-xl font-bold text-slate-900 leading-snug">
                        {article.title[lang]}
                      </h2>
                      <p className="text-sm font-medium text-slate-700 leading-relaxed">
                        {article.summary[lang]}
                      </p>

                      <div className="space-y-3 pt-2 border-t border-[var(--color-border)] text-sm text-slate-600 leading-relaxed">
                        {article.content[lang].map((para) => (
                          <p key={para.slice(0, 32)}>{para}</p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 py-4 bg-white border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs text-slate-500">{article.sourceNote}</span>
                    <button
                      type="button"
                      onClick={() => handleShare(article)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] cursor-pointer"
                    >
                      {copiedId === article.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[var(--color-accent)]" aria-hidden="true" />
                          <span className="text-[var(--color-accent)]">{t('Lien copié', 'Link copied')}</span>
                        </>
                      ) : (
                        <>
                          <Share2 className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>{t('Copier le lien', 'Copy Link')}</span>
                        </>
                      )}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Institutional Contact CTA */}
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div className="space-y-1.5">
              <h3 className="text-lg font-bold text-slate-900">
                {t('Demande presse ou documentation institutionnelle', 'Press Inquiries & Institutional Documentation')}
              </h3>
              <p className="text-sm text-slate-600">
                {t(
                  'Contactez notre secrétariat à Douala pour toute demande de communiqué officiel ou d’entretien.',
                  'Contact our Douala office for official press statements or interview requests.'
                )}
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-md bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-colors shrink-0 self-start md:self-auto"
            >
              <span>{t('Contacter PROOFTAG-CATIS S.A.', 'Contact PROOFTAG-CATIS S.A.')}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
