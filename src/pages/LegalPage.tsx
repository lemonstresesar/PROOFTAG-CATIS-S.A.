import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../config/siteConfig';
import { useLanguage } from '../hooks/useLanguage';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { BreadcrumbHeader } from '../components/BreadcrumbHeader';

interface LegalPageProps {
  mode: 'legal' | 'privacy';
}

export function LegalPage({ mode }: LegalPageProps) {
  const { t } = useLanguage();
  const isLegal = mode === 'legal';

  useDocumentTitle(
    isLegal
      ? t('Mentions légales', 'Legal Notice')
      : t('Politique de confidentialité', 'Privacy Policy')
  );

  return (
    <div>
      <BreadcrumbHeader
        title={
          isLegal
            ? t('Mentions légales', 'Legal Notice')
            : t('Politique de confidentialité', 'Privacy Policy')
        }
        subtitle={
          isLegal
            ? t(
                'Informations réglementaires et identification de l’éditeur du site PROOFTAG-CATIS S.A.',
                'Regulatory disclosures and publisher identification for PROOFTAG-CATIS S.A.'
              )
            : t(
                'Principes de protection et d’utilisation des données collectées via les formulaires de ce site.',
                'Data protection and processing principles for information submitted through this website.'
              )
        }
        breadcrumbs={[
          {
            label: isLegal
              ? t('Mentions légales', 'Legal Notice')
              : t('Confidentialité', 'Privacy Policy'),
          },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10 text-slate-700 leading-relaxed">
          {isLegal ? (
            <>
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900">
                  {t('1. Éditeur du site', '1. Site Publisher')}
                </h2>
                <p className="text-sm">
                  <strong>{SITE_CONFIG.company.legalName}</strong> ({SITE_CONFIG.company.acronymMeaningFr})
                  <br />
                  {t('Siège social : ', 'Registered Office: ')}
                  {SITE_CONFIG.contact.addressPrimary}
                  <br />
                  {t('Adresse historique complémentaire : ', 'Alternative Historical Address: ')}
                  {SITE_CONFIG.contact.addressSecondaryLegacy}
                  <br />
                  {t('Téléphone : ', 'Phone: ')}
                  {SITE_CONFIG.contact.phoneDisplay}
                  <br />
                  {t('E-mail : ', 'Email: ')}
                  {SITE_CONFIG.contact.email}
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900">
                  {t('2. Propriété intellectuelle & marques', '2. Intellectual Property & Trademarks')}
                </h2>
                <p className="text-sm">
                  {t(
                    'L’ensemble des éléments graphiques, logos (PROOFTAG-CATIS S.A., DITROS-CT, CT-VERIF, DOSER), textes et visuels présentés sur ce site sont la propriété de PROOFTAG-CATIS S.A. ou de ses partenaires technologiques (dont PROOFTAG SAS pour les marques Code à Bulles®, Bubble Tag®, Scellé à Bulles® et CertiDOCS®). Toute reproduction non autorisée est interdite.',
                    'All graphic elements, logos (PROOFTAG-CATIS S.A., DITROS-CT, CT-VERIF, DOSER), texts, and visuals presented on this website are the property of PROOFTAG-CATIS S.A. or its technology partners (including PROOFTAG SAS for Bubble Tag® and CertiDOCS® trademarks). Unauthorized reproduction is prohibited.'
                  )}
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900">
                  {t('3. Portails externes', '3. External Portals')}
                </h2>
                <p className="text-sm">
                  {t(
                    'Les liens dirigeant vers mintct.cm (CT-VERIF) et doser.ditros.org (DOSER) donnent accès aux plateformes institutionnelles officielles dédiées aux services publics correspondants.',
                    'External links to mintct.cm (CT-VERIF) and doser.ditros.org (DOSER) redirect users to the official operational portals for those public services.'
                  )}
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900">
                  {t('1. Finalité de la collecte', '1. Purpose of Collection')}
                </h2>
                <p className="text-sm">
                  {t(
                    'Les informations saisies dans le formulaire de contact sont exclusivement destinées au traitement de votre demande par les équipes habilitées de PROOFTAG-CATIS S.A. Aucune donnée personnelle n’est cédée ou vendue à des tiers.',
                    'Information entered into the contact form is used solely by authorized PROOFTAG-CATIS S.A. staff to respond to your inquiry. No personal data is sold or transferred to third parties.'
                  )}
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900">
                  {t('2. Candidatures & fichiers PDF', '2. Applications & PDF Files')}
                </h2>
                <p className="text-sm">
                  {t(
                    'Le formulaire de candidature vérifie localement la conformité du fichier PDF (format et taille maximale de 5 Mo) avant envoi volontaire par courrier électronique à l’adresse officielle de recrutement.',
                    'The career form checks PDF compliance locally (format and 5 MB maximum size) before voluntary email submission to our official address.'
                  )}
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900">
                  {t('3. Vos droits', '3. Your Rights')}
                </h2>
                <p className="text-sm">
                  {t(
                    'Pour toute demande d’accès, de rectification ou de suppression de vos coordonnées transmises via ce site, contactez ',
                    'To request access, correction, or deletion of personal contact details sent via this site, please contact '
                  )}
                  <a href={SITE_CONFIG.contact.emailHref} className="text-[var(--color-primary)] underline">
                    {SITE_CONFIG.contact.email}
                  </a>
                  .
                </p>
              </div>
            </>
          )}

          <div className="pt-6 border-t border-[var(--color-border)] flex flex-wrap gap-4 text-sm">
            <Link to="/contact" className="text-[var(--color-primary)] font-semibold hover:underline">
              {t('Contacter PROOFTAG-CATIS S.A.', 'Contact PROOFTAG-CATIS S.A.')}
            </Link>
            <Link to="/" className="text-slate-600 hover:text-slate-900">
              {t('Retour à l’accueil', 'Back to Home')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
