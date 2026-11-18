export interface ContactFormValues {
  firstName: string;
  lastName: string;
  organization: string;
  email: string;
  phone: string;
  requestType: string;
  solution: string;
  subject: string;
  message: string;
}

export interface CareerApplicationValues {
  fullName: string;
  email: string;
  phone: string;
  applicationType: string;
  targetRole: string;
  coverLetter: string;
  cvFile: { name: string; size: number; type: string } | null;
}

export type ValidationErrors<T> = Partial<Record<keyof T, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+\d][\d\s().-]{6,20}$/;

export function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email.trim());
}

export function isValidPhone(phone: string): boolean {
  if (!phone.trim()) return true; // optional unless required
  return PHONE_REGEX.test(phone.trim());
}

export function validateContactForm(
  values: ContactFormValues,
  lang: 'fr' | 'en'
): ValidationErrors<ContactFormValues> {
  const errors: ValidationErrors<ContactFormValues> = {};
  const isFr = lang === 'fr';

  if (!values.lastName.trim()) {
    errors.lastName = isFr ? 'Le nom est requis.' : 'Last name is required.';
  }
  if (!values.firstName.trim()) {
    errors.firstName = isFr ? 'Le prénom est requis.' : 'First name is required.';
  }
  if (!values.email.trim()) {
    errors.email = isFr ? 'L’adresse e-mail est requise.' : 'Email address is required.';
  } else if (!isValidEmail(values.email)) {
    errors.email = isFr ? 'Veuillez saisir une adresse e-mail valide.' : 'Please enter a valid email address.';
  }
  if (values.phone.trim() && !isValidPhone(values.phone)) {
    errors.phone = isFr ? 'Format de téléphone invalide.' : 'Invalid phone number format.';
  }
  if (!values.requestType.trim()) {
    errors.requestType = isFr ? 'Veuillez sélectionner un type de demande.' : 'Please select an inquiry type.';
  }
  if (!values.subject.trim()) {
    errors.subject = isFr ? 'Le sujet est requis.' : 'Subject is required.';
  }
  if (!values.message.trim() || values.message.trim().length < 15) {
    errors.message = isFr
      ? 'Veuillez détailler votre message (au moins 15 caractères).'
      : 'Please provide a message of at least 15 characters.';
  }

  return errors;
}

export const MAX_CV_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB

export function validateCareerApplication(
  values: CareerApplicationValues,
  lang: 'fr' | 'en'
): ValidationErrors<CareerApplicationValues> {
  const errors: ValidationErrors<CareerApplicationValues> = {};
  const isFr = lang === 'fr';

  if (!values.fullName.trim()) {
    errors.fullName = isFr ? 'Le nom complet est requis.' : 'Full name is required.';
  }
  if (!values.email.trim() || !isValidEmail(values.email)) {
    errors.email = isFr ? 'Une adresse e-mail valide est requise.' : 'A valid email address is required.';
  }
  if (!values.phone.trim() || !isValidPhone(values.phone)) {
    errors.phone = isFr ? 'Un numéro de téléphone valide est requis.' : 'A valid phone number is required.';
  }
  if (!values.applicationType.trim()) {
    errors.applicationType = isFr ? 'Sélectionnez le type de candidature.' : 'Select an application type.';
  }
  if (!values.targetRole.trim()) {
    errors.targetRole = isFr ? 'Indiquez le poste ou domaine souhaité.' : 'Specify the desired role or field.';
  }
  if (!values.coverLetter.trim() || values.coverLetter.trim().length < 25) {
    errors.coverLetter = isFr
      ? 'Votre lettre de motivation doit comporter au moins 25 caractères.'
      : 'Your cover letter must be at least 25 characters.';
  }
  if (!values.cvFile) {
    errors.cvFile = isFr ? 'Veuillez joindre votre CV au format PDF.' : 'Please attach your CV in PDF format.';
  } else {
    const isPdfMime = values.cvFile.type === 'application/pdf';
    const isPdfExt = values.cvFile.name.toLowerCase().endsWith('.pdf');
    if (!isPdfMime && !isPdfExt) {
      errors.cvFile = isFr
        ? 'Seuls les fichiers PDF (.pdf) sont acceptés pour des raisons de sécurité.'
        : 'Only PDF files (.pdf) are accepted for security reasons.';
    } else if (values.cvFile.size > MAX_CV_SIZE_BYTES) {
      errors.cvFile = isFr
        ? 'La taille du fichier PDF ne doit pas dépasser 5 Mo.'
        : 'PDF file size must not exceed 5 MB.';
    } else if (values.cvFile.size === 0) {
      errors.cvFile = isFr ? 'Le fichier sélectionné est vide.' : 'The selected file is empty.';
    }
  }

  return errors;
}

export interface EmailJsEnvConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

export function isEmailJsConfigured(env: Partial<EmailJsEnvConfig>): env is EmailJsEnvConfig {
  return Boolean(
    env.serviceId?.trim() &&
    env.templateId?.trim() &&
    env.publicKey?.trim()
  );
}
