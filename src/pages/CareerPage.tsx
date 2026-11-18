import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Briefcase, GraduationCap, Upload, CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { CAREER_TRACKS } from '../data/companyData';
import { SITE_CONFIG } from '../config/siteConfig';
import {
  validateCareerApplication,
  type CareerApplicationValues,
  type ValidationErrors,
} from '../utils/validation';
import { useLanguage } from '../hooks/useLanguage';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { BreadcrumbHeader } from '../components/BreadcrumbHeader';

const INITIAL_FORM: CareerApplicationValues = {
  fullName: '',
  email: '',
  phone: '',
  applicationType: 'stage-academique',
  targetRole: '',
  coverLetter: '',
  cvFile: null,
};

export function CareerPage() {
  const { lang, t } = useLanguage();
  const [values, setValues] = useState<CareerApplicationValues>(INITIAL_FORM);
  const [errors, setErrors] = useState<ValidationErrors<CareerApplicationValues>>({});
  const [submittedNotice, setSubmittedNotice] = useState(false);

  useDocumentTitle(
    t('Carrière & Stages', 'Careers & Internships'),
    t(
      'Rejoignez PROOFTAG-CATIS S.A. à Douala : programmes de stages académiques, stages professionnels et candidatures spontanées.',
      'Join PROOFTAG-CATIS S.A. in Douala: academic internships, professional tracks, and spontaneous applications.'
    )
  );

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (!file) {
      setValues((prev) => ({ ...prev, cvFile: null }));
      return;
    }
    setValues((prev) => ({
      ...prev,
      cvFile: { name: file.name, size: file.size, type: file.type },
    }));
    setErrors((prev) => ({ ...prev, cvFile: undefined }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateCareerApplication(values, lang);
    setErrors(validationErrors);
    setSubmittedNotice(false);

    if (Object.keys(validationErrors).length === 0) {
      setSubmittedNotice(true);
    }
  };

  return (
    <div>
      <BreadcrumbHeader
        title={t('Carrière & recrutement', 'Careers & Talent')}
        subtitle={t(
          'Déposez votre candidature pour un stage académique, un stage professionnel ou une opportunité au sein de nos équipes à Douala.',
          'Apply for an academic internship, professional internship, or spontaneous opportunity with our teams in Douala.'
        )}
        breadcrumbs={[{ label: t('Carrière', 'Careers') }]}
        image="/assets/official-www/EX6E6UaXQAEQk0A.jpg"
        imageAlt={t('Délégation et partenaires PROOFTAG-CATIS S.A.', 'PROOFTAG-CATIS S.A. delegation and partners')}
      />

      {/* Internship Tracks + Verified Openings */}
      <section className="py-16 bg-white border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CAREER_TRACKS.map((track) => (
              <div
                key={track.id}
                className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 space-y-3"
              >
                <div className="flex items-center justify-between gap-4">
                  <GraduationCap className="w-6 h-6 text-[var(--color-primary)]" aria-hidden="true" />
                  <span className="font-mono text-xs font-semibold text-[var(--color-primary)] tabular-nums">
                    {track.duration[lang]}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-slate-900">{track.title[lang]}</h2>
                <p className="text-xs font-semibold text-slate-500">{track.target[lang]}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{track.description[lang]}</p>
              </div>
            ))}
          </div>

          {/* Job openings honest status */}
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Briefcase className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" aria-hidden="true" />
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900">
                  {t('Offres d’emploi publiées', 'Published Job Openings')}
                </h3>
                <p className="text-sm text-slate-600">
                  {t(
                    'Aucune fiche de poste ouverte n’est actuellement publiée sur les sources publiques de PROOFTAG-CATIS S.A. Les candidatures spontanées et demandes de stage restent ouvertes via le formulaire ci-dessous.',
                    'No active job requisition is currently published on PROOFTAG-CATIS S.A. public channels. Spontaneous applications and internship inquiries remain open via the form below.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Validated Application Form */}
      <section className="py-16 bg-[var(--color-surface)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-[var(--color-border)] rounded-xl p-6 sm:p-8 space-y-6">
            <div className="space-y-2 border-b border-[var(--color-border)] pb-5">
              <h2 className="text-2xl font-bold text-slate-900">
                {t('Déposer une candidature', 'Submit an Application')}
              </h2>
              <p className="text-sm text-slate-600">
                {t(
                  'Contrôle de conformité intégré : seul le format PDF (5 Mo maximum) est autorisé pour les pièces jointes.',
                  'Built-in compliance check: only PDF files (5 MB maximum) are accepted for CV uploads.'
                )}
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="career-fullname" className="block text-sm font-medium text-slate-800">
                    {t('Nom complet', 'Full Name')} *
                  </label>
                  <input
                    id="career-fullname"
                    type="text"
                    value={values.fullName}
                    onChange={(e) => setValues((p) => ({ ...p, fullName: e.target.value }))}
                    className="w-full rounded-md border border-[var(--color-border)] px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[var(--color-primary)]"
                    placeholder={t('Ex. Jean-Paul Mbarga', 'e.g. Jean-Paul Mbarga')}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="career-email" className="block text-sm font-medium text-slate-800">
                    {t('Adresse e-mail', 'Email Address')} *
                  </label>
                  <input
                    id="career-email"
                    type="email"
                    value={values.email}
                    onChange={(e) => setValues((p) => ({ ...p, email: e.target.value }))}
                    className="w-full rounded-md border border-[var(--color-border)] px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[var(--color-primary)]"
                    placeholder="nom@exemple.cm"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="career-phone" className="block text-sm font-medium text-slate-800">
                    {t('Téléphone', 'Phone Number')} *
                  </label>
                  <input
                    id="career-phone"
                    type="tel"
                    value={values.phone}
                    onChange={(e) => setValues((p) => ({ ...p, phone: e.target.value }))}
                    className="w-full rounded-md border border-[var(--color-border)] px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[var(--color-primary)]"
                    placeholder="+237 6XX XX XX XX"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="career-type" className="block text-sm font-medium text-slate-800">
                    {t('Type de candidature', 'Application Type')} *
                  </label>
                  <select
                    id="career-type"
                    value={values.applicationType}
                    onChange={(e) => setValues((p) => ({ ...p, applicationType: e.target.value }))}
                    className="w-full rounded-md border border-[var(--color-border)] px-3.5 py-2.5 text-sm text-slate-900 bg-white focus:outline-none focus:border-[var(--color-primary)]"
                  >
                    <option value="stage-academique">{t('Stage Académique (1–3 mois)', 'Academic Internship (1–3m)')}</option>
                    <option value="stage-professionnel">{t('Stage Professionnel (3–6 mois)', 'Professional Internship (3–6m)')}</option>
                    <option value="candidature-spontanee">{t('Candidature Spontanée', 'Spontaneous Application')}</option>
                  </select>
                  {errors.applicationType && (
                    <p className="text-xs text-red-600">{errors.applicationType}</p>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="career-role" className="block text-sm font-medium text-slate-800">
                  {t('Domaine ou poste souhaité', 'Target Role or Department')} *
                </label>
                <input
                  id="career-role"
                  type="text"
                  value={values.targetRole}
                  onChange={(e) => setValues((p) => ({ ...p, targetRole: e.target.value }))}
                  className="w-full rounded-md border border-[var(--color-border)] px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[var(--color-primary)]"
                  placeholder={t('Ex. Développement logiciel, Support technique, Analyse de données', 'e.g. Software Engineering, Technical Support, Data Analytics')}
                />
                {errors.targetRole && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>{errors.targetRole}</span>
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="career-letter" className="block text-sm font-medium text-slate-800">
                  {t('Présentation & motivation', 'Cover Note & Motivation')} *
                </label>
                <textarea
                  id="career-letter"
                  rows={4}
                  value={values.coverLetter}
                  onChange={(e) => setValues((p) => ({ ...p, coverLetter: e.target.value }))}
                  className="w-full rounded-md border border-[var(--color-border)] px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[var(--color-primary)]"
                  placeholder={t(
                    'Présentez brièvement votre parcours, vos disponibilités et vos motivations...',
                    'Briefly outline your background, availability, and motivation...'
                  )}
                />
                {errors.coverLetter && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>{errors.coverLetter}</span>
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="career-cv" className="block text-sm font-medium text-slate-800">
                  {t('Curriculum Vitae (format PDF uniquement, max 5 Mo)', 'Resume / CV (PDF only, max 5 MB)')} *
                </label>
                <label
                  htmlFor="career-cv"
                  className="flex items-center justify-between gap-3 rounded-lg border border-dashed border-slate-300 bg-[var(--color-surface)] px-4 py-3.5 cursor-pointer hover:border-[var(--color-primary)] transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Upload className="w-5 h-5 text-[var(--color-primary)] shrink-0" aria-hidden="true" />
                    <span className="text-sm text-slate-700 truncate">
                      {values.cvFile
                        ? `${values.cvFile.name} (${(values.cvFile.size / 1024).toFixed(0)} Ko)`
                        : t('Sélectionner un fichier PDF...', 'Choose a PDF file...')}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-[var(--color-primary)] shrink-0">
                    {t('Parcourir', 'Browse')}
                  </span>
                  <input
                    id="career-cv"
                    type="file"
                    accept="application/pdf,.pdf"
                    onChange={handleFileChange}
                    className="sr-only"
                  />
                </label>
                {errors.cvFile && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>{errors.cvFile}</span>
                  </p>
                )}
              </div>

              {submittedNotice && (
                <div className="rounded-lg border border-sky-200 bg-sky-50 p-4 flex items-start gap-3 text-sm text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="space-y-1.5">
                    <p className="font-semibold">
                      {t(
                        'Dossier validé localement — Transmission finale par e-mail requise',
                        'Application validated locally — Direct email submission required'
                      )}
                    </p>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {t(
                        'Ce site statique ne stocke pas de fichiers sur un serveur distant. Veuillez adresser votre CV PDF et votre lettre de motivation directement à ',
                        'This static site does not upload files to a remote server. Please send your PDF CV and cover note directly to '
                      )}
                      <a
                        href={`mailto:${SITE_CONFIG.contact.email}?subject=${encodeURIComponent(
                          `[Candidature - ${values.applicationType}] ${values.targetRole} - ${values.fullName}`
                        )}`}
                        className="font-semibold text-[var(--color-primary)] underline"
                      >
                        {SITE_CONFIG.contact.email}
                      </a>
                      .
                    </p>
                  </div>
                </div>
              )}

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Info className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{t('Validation PDF stricte côté client.', 'Strict client-side PDF validation.')}</span>
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 text-sm font-semibold rounded-md bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-colors cursor-pointer"
                >
                  {t('Vérifier et préparer la candidature', 'Validate & Prepare Application')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
