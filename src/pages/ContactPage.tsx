import { useState, useEffect, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  AlertCircle,
  CheckCircle2,
  Info,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import {
  validateContactForm,
  type ContactFormValues,
  type ValidationErrors,
} from '../utils/validation';
import { sendContactEmail, type EmailSendResult } from '../services/emailService';
import { useLanguage } from '../hooks/useLanguage';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { BreadcrumbHeader } from '../components/BreadcrumbHeader';

const INITIAL_VALUES: ContactFormValues = {
  firstName: '',
  lastName: '',
  organization: '',
  email: '',
  phone: '',
  requestType: 'institutionnel',
  solution: '',
  subject: '',
  message: '',
};

export function ContactPage() {
  const { lang, t } = useLanguage();
  const [searchParams] = useSearchParams();
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ValidationErrors<ContactFormValues>>({});
  const [sending, setSending] = useState(false);
  const [sendResult, setSendResult] = useState<EmailSendResult | null>(null);

  useEffect(() => {
    const sol = searchParams.get('solution');
    if (sol) {
      setValues((prev) => ({ ...prev, solution: sol }));
    }
  }, [searchParams]);

  useDocumentTitle(
    t('Contact', 'Contact'),
    t(
      'Contactez PROOFTAG-CATIS S.A. à Bonapriso, Douala (Cameroun) : +237 699 19 29 19, info@prooftagcatis.com.',
      'Contact PROOFTAG-CATIS S.A. in Bonapriso, Douala (Cameroon): +237 699 19 29 19, info@prooftagcatis.com.'
    )
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSendResult(null);

    const validationErrors = validateContactForm(values, lang);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setSending(true);
    const result = await sendContactEmail(values, lang);
    setSending(false);
    setSendResult(result);

    if (result.ok) {
      setValues(INITIAL_VALUES);
    }
  };

  return (
    <div>
      <BreadcrumbHeader
        title={t('Contacter PROOFTAG-CATIS S.A.', 'Contact PROOFTAG-CATIS S.A.')}
        subtitle={t(
          'Échangez avec nos équipes à Douala pour toute demande institutionnelle, technique, commerciale ou demande de démonstration.',
          'Reach out to our team in Douala for institutional, technical, partnership, or product demonstration inquiries.'
        )}
        breadcrumbs={[{ label: t('Contact', 'Contact') }]}
        image="/assets/official-www/Banni_C3_A8re-CONTACT_Plan-de-travail-1-copie-5.png"
        imageAlt={t('Direction Générale PROOFTAG-CATIS S.A. — Douala', 'PROOFTAG-CATIS S.A. Head Office — Douala')}
        imageFit="contain"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Direct Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 space-y-5">
              <h2 className="text-xl font-bold text-slate-900">
                {t('Coordonnées vérifiées', 'Verified Contact Information')}
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <div className="font-semibold text-slate-900">{t('Téléphone', 'Phone')}</div>
                    <a
                      href={SITE_CONFIG.contact.phoneHref}
                      className="text-[var(--color-primary)] hover:underline tabular-nums font-medium"
                    >
                      {SITE_CONFIG.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <div className="font-semibold text-slate-900">{t('E-mail officiel', 'Official Email')}</div>
                    <a
                      href={SITE_CONFIG.contact.emailHref}
                      className="text-[var(--color-primary)] hover:underline font-medium"
                    >
                      {SITE_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="space-y-1">
                    <div className="font-semibold text-slate-900">{t('Siège — Douala', 'Head Office — Douala')}</div>
                    <p className="text-slate-700">{SITE_CONFIG.contact.addressPrimary}</p>
                    <p className="text-xs text-slate-500">
                      {t('Mention historique alternative : ', 'Alternative legacy listing: ')}
                      {SITE_CONFIG.contact.addressSecondaryLegacy}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <div className="font-semibold text-slate-900">{t('Horaires', 'Office Hours')}</div>
                    <p className="text-slate-600">
                      {lang === 'fr' ? SITE_CONFIG.contact.officeHoursFr : SITE_CONFIG.contact.officeHoursEn}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--color-border)] flex flex-wrap gap-3">
                <a
                  href={SITE_CONFIG.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-md bg-[var(--color-accent)] text-white hover:opacity-95 transition-opacity"
                >
                  <MessageSquare className="w-4 h-4" aria-hidden="true" />
                  <span>{t('Échanger sur WhatsApp', 'Message on WhatsApp')}</span>
                </a>
                <a
                  href={SITE_CONFIG.contact.emailHref}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-md border border-[var(--color-border)] bg-white text-slate-800 hover:border-[var(--color-primary)] transition-colors"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span>{t('Ouvrir le client mail', 'Open Email Client')}</span>
                </a>
              </div>
            </div>

            <div className="bg-white border border-[var(--color-border)] rounded-xl p-6 space-y-2.5">
              <h3 className="text-sm font-bold text-slate-900">
                {t('Localisation (Bonapriso, Douala)', 'Location (Bonapriso, Douala)')}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t(
                  'Quartier Bonapriso, Douala, Cameroun. En raison de la présence de deux libellés publics (Hôtel de l’air / Résidence Le Carat, BP 4601), veuillez confirmer l’itinéraire exact avec notre accueil avant tout déplacement.',
                  'Bonapriso district, Douala, Cameroon. Because two historical street descriptions exist publicly (Hôtel de l’air / Résidence Le Carat, PO Box 4601), please confirm directions with our reception prior to visiting.'
                )}
              </p>
            </div>
          </div>

          {/* Contact Form with EmailJS */}
          <div className="lg:col-span-7">
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 sm:p-8 space-y-6">
              <div className="space-y-1.5 border-b border-[var(--color-border)] pb-5">
                <h2 className="text-2xl font-bold text-slate-900">
                  {t('Formulaire de contact', 'Inquiry Form')}
                </h2>
                <p className="text-sm text-slate-600">
                  {t(
                    'Les champs suivis d’un astérisque (*) sont obligatoires.',
                    'Fields marked with an asterisk (*) are required.'
                  )}
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-lastname" className="block text-sm font-medium text-slate-800">
                      {t('Nom', 'Last Name')} *
                    </label>
                    <input
                      id="contact-lastname"
                      type="text"
                      value={values.lastName}
                      onChange={(e) => setValues((p) => ({ ...p, lastName: e.target.value }))}
                      className="w-full rounded-md border border-[var(--color-border)] bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[var(--color-primary)]"
                    />
                    {errors.lastName && (
                      <p className="text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.lastName}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-firstname" className="block text-sm font-medium text-slate-800">
                      {t('Prénom', 'First Name')} *
                    </label>
                    <input
                      id="contact-firstname"
                      type="text"
                      value={values.firstName}
                      onChange={(e) => setValues((p) => ({ ...p, firstName: e.target.value }))}
                      className="w-full rounded-md border border-[var(--color-border)] bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[var(--color-primary)]"
                    />
                    {errors.firstName && (
                      <p className="text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.firstName}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="block text-sm font-medium text-slate-800">
                      {t('E-mail professionnel', 'Work Email')} *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={values.email}
                      onChange={(e) => setValues((p) => ({ ...p, email: e.target.value }))}
                      className="w-full rounded-md border border-[var(--color-border)] bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[var(--color-primary)]"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-800">
                      {t('Téléphone', 'Phone')}
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={values.phone}
                      onChange={(e) => setValues((p) => ({ ...p, phone: e.target.value }))}
                      className="w-full rounded-md border border-[var(--color-border)] bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[var(--color-primary)]"
                      placeholder="+237 6XX XX XX XX"
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-org" className="block text-sm font-medium text-slate-800">
                      {t('Organisation / Institution', 'Organization / Institution')}
                    </label>
                    <input
                      id="contact-org"
                      type="text"
                      value={values.organization}
                      onChange={(e) => setValues((p) => ({ ...p, organization: e.target.value }))}
                      className="w-full rounded-md border border-[var(--color-border)] bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[var(--color-primary)]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-type" className="block text-sm font-medium text-slate-800">
                      {t('Type de demande', 'Inquiry Type')} *
                    </label>
                    <select
                      id="contact-type"
                      value={values.requestType}
                      onChange={(e) => setValues((p) => ({ ...p, requestType: e.target.value }))}
                      className="w-full rounded-md border border-[var(--color-border)] bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[var(--color-primary)]"
                    >
                      <option value="institutionnel">{t('Demande institutionnelle', 'Institutional Inquiry')}</option>
                      <option value="demonstration">{t('Demande de présentation / démo', 'Briefing / Demo Request')}</option>
                      <option value="support-technique">{t('Support technique centre agréé', 'Authorized Center Technical Support')}</option>
                      <option value="partenariat">{t('Partenariat', 'Partnership')}</option>
                      <option value="autre">{t('Autre demande', 'Other')}</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-solution" className="block text-sm font-medium text-slate-800">
                      {t('Solution concernée (optionnel)', 'Related Solution (optional)')}
                    </label>
                    <select
                      id="contact-solution"
                      value={values.solution}
                      onChange={(e) => setValues((p) => ({ ...p, solution: e.target.value }))}
                      className="w-full rounded-md border border-[var(--color-border)] bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[var(--color-primary)]"
                    >
                      <option value="">{t('Toutes / Générale', 'All / General')}</option>
                      <option value="DITROS-CT">DITROS-CT</option>
                      <option value="CT-VERIF">CT-VERIF</option>
                      <option value="DOSER">DOSER</option>
                      <option value="CertiDOCS / Code à Bulles">CertiDOCS CT / Code à Bulles®</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="block text-sm font-medium text-slate-800">
                      {t('Objet du message', 'Subject')} *
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={values.subject}
                      onChange={(e) => setValues((p) => ({ ...p, subject: e.target.value }))}
                      className="w-full rounded-md border border-[var(--color-border)] bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[var(--color-primary)]"
                    />
                    {errors.subject && (
                      <p className="text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="block text-sm font-medium text-slate-800">
                    {t('Message détaillé', 'Message')} *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={values.message}
                    onChange={(e) => setValues((p) => ({ ...p, message: e.target.value }))}
                    className="w-full rounded-md border border-[var(--color-border)] bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[var(--color-primary)]"
                    placeholder={t('Précisez votre besoin, votre structure et vos coordonnées...', 'Describe your inquiry, organization, and details...')}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {sendResult && (
                  <div
                    role="status"
                    className={`rounded-lg border p-4 flex items-start gap-3 text-sm ${
                      sendResult.ok
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                        : sendResult.reason === 'not_configured'
                        ? 'bg-amber-50 border-amber-200 text-amber-900'
                        : 'bg-red-50 border-red-200 text-red-900'
                    }`}
                  >
                    {sendResult.ok ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
                    ) : sendResult.reason === 'not_configured' ? (
                      <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-700 shrink-0 mt-0.5" aria-hidden="true" />
                    )}
                    <div className="space-y-1">
                      <p className="leading-relaxed">{sendResult.message}</p>
                      {!sendResult.ok && (
                        <p className="text-xs">
                          {t('Contact direct : ', 'Direct contact: ')}
                          <a href={SITE_CONFIG.contact.emailHref} className="underline font-semibold">
                            {SITE_CONFIG.contact.email}
                          </a>{' '}
                          · {SITE_CONFIG.contact.phoneDisplay}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-slate-500">
                    {t(
                      'Intégration EmailJS configurée via variables d’environnement Vite.',
                      'EmailJS integration driven by Vite environment variables.'
                    )}
                  </p>
                  <button
                    type="submit"
                    disabled={sending}
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-md bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] disabled:opacity-60 transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    <span>
                      {sending
                        ? t('Envoi en cours...', 'Sending...')
                        : t('Envoyer le message', 'Send Message')}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
