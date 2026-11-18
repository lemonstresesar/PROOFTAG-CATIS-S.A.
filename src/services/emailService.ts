import emailjs from '@emailjs/browser';
import { isEmailJsConfigured, type ContactFormValues } from '../utils/validation';

export interface EmailSendResult {
  ok: boolean;
  reason: 'sent' | 'not_configured' | 'error';
  message: string;
}

export function getEmailJsConfig() {
  return {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  };
}

export async function sendContactEmail(
  values: ContactFormValues,
  lang: 'fr' | 'en'
): Promise<EmailSendResult> {
  const config = getEmailJsConfig();

  if (!isEmailJsConfigured(config)) {
    return {
      ok: false,
      reason: 'not_configured',
      message:
        lang === 'fr'
          ? 'Le service EmailJS n’est pas encore configuré dans cet environnement (variables VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY manquantes). Votre message n’a pas été transmis.'
          : 'EmailJS is not configured in this environment yet (missing VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY). Your message was not sent.',
    };
  }

  const templateParams = {
    sender_name: `${values.firstName.trim()} ${values.lastName.trim()}`,
    sender_email: values.email.trim(),
    sender_phone: values.phone.trim() || 'Non renseigné',
    organization: values.organization.trim() || 'Non renseignée',
    request_type: values.requestType,
    solution: values.solution || 'Non précisée',
    subject: values.subject.trim(),
    message: values.message.trim(),
    submitted_at: new Date().toISOString(),
  };

  try {
    await emailjs.send(config.serviceId, config.templateId, templateParams, {
      publicKey: config.publicKey,
    });
    return {
      ok: true,
      reason: 'sent',
      message:
        lang === 'fr'
          ? 'Votre message a bien été transmis à l’équipe PROOFTAG-CATIS S.A. (info@prooftagcatis.com).'
          : 'Your inquiry has been successfully sent to the PROOFTAG-CATIS S.A. team (info@prooftagcatis.com).',
    };
  } catch (err) {
    const detail = err instanceof Error ? err.message : String(err);
    return {
      ok: false,
      reason: 'error',
      message:
        lang === 'fr'
          ? `L’envoi de l’e-mail a échoué (${detail}). Vous pouvez nous joindre directement au +237 699 19 29 19 ou à info@prooftagcatis.com.`
          : `Email delivery failed (${detail}). Please contact us directly at +237 699 19 29 19 or info@prooftagcatis.com.`,
    };
  }
}
