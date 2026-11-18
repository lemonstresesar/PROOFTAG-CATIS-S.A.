import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { EXPERTISE_DATA } from '../data/expertiseData';
import { useLanguage } from '../hooks/useLanguage';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { BreadcrumbHeader } from '../components/BreadcrumbHeader';

export function ExpertisePage() {
  const { lang, t } = useLanguage();

  useDocumentTitle(
    t('Expertise', 'Expertise'),
    t(
      'Découvrez les cinq domaines d’expertise de PROOFTAG-CATIS S.A. : R&D, support technique, analyse de données, sécurité documentaire et prévention routière.',
      'Explore PROOFTAG-CATIS S.A.’s five areas of expertise: R&D, technical support, data reporting, document security, and road safety.'
    )
  );

  return (
    <div>
      <BreadcrumbHeader
        title={t('Nos domaines d’expertise', 'Our Areas of Expertise')}
        subtitle={t(
          'Une approche intégrée combinant ingénierie logicielle, authentification physique, exploitation de données et accompagnement technique de terrain.',
          'An integrated approach combining software engineering, physical authentication, data analytics, and field technical support.'
        )}
        breadcrumbs={[{ label: t('Expertise', 'Expertise') }]}
        image="/assets/official-www/centre-de-visite-technique_1.jpg"
        imageAlt={t('Centre de contrôle technique équipé par PROOFTAG-CATIS S.A.', 'Vehicle inspection center equipped by PROOFTAG-CATIS S.A.')}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="grid grid-cols-1 gap-8">
            {EXPERTISE_DATA.map((item) => (
              <article
                key={item.id}
                className="border border-[var(--color-border)] rounded-xl overflow-hidden bg-[var(--color-surface)] grid grid-cols-1 lg:grid-cols-12"
              >
                <div className={`lg:col-span-5 aspect-[16/10] lg:aspect-auto lg:h-full ${item.imageFit === 'contain' ? 'bg-white p-3' : 'bg-slate-200'}`}>
                  <img
                    src={item.image}
                    alt={item.title[lang]}
                    referrerPolicy="no-referrer"
                    className={`w-full h-full ${item.imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
                  />
                </div>
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="text-xs font-mono font-bold text-[var(--color-primary)] tabular-nums">
                      {item.index}. {t('Pôle d’expertise', 'Expertise Pillar')}
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">{item.title[lang]}</h2>
                    <p className="text-base text-slate-600 leading-relaxed">{item.intro[lang]}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-sm text-slate-700">
                      {item.deliverables[lang].map((deliv) => (
                        <li key={deliv} className="flex items-start gap-2">
                          <span className="text-[var(--color-primary)] font-bold" aria-hidden="true">·</span>
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <Link
                      to={`/expertise/${item.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white text-sm font-semibold transition-colors"
                    >
                      <span>{t('Consulter la page dédiée', 'View Dedicated Page')}</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
