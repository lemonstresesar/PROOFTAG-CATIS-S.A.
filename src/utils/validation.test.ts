import test from 'node:test';
import assert from 'node:assert/strict';
import {
  isValidEmail,
  isValidPhone,
  validateContactForm,
  validateCareerApplication,
  isEmailJsConfigured,
  MAX_CV_SIZE_BYTES,
  type ContactFormValues,
  type CareerApplicationValues,
} from './validation';

const validContact: ContactFormValues = {
  firstName: 'Jean',
  lastName: 'Mbarga',
  organization: 'Centre de Contrôle Technique',
  email: 'jean.mbarga@example.cm',
  phone: '+237 699 00 11 22',
  requestType: 'solution-demo',
  solution: 'DITROS-CT',
  subject: 'Demande de renseignements DITROS-CT',
  message: 'Nous souhaitons obtenir une documentation technique complète concernant l’interconnexion.',
};

test('isValidEmail accepts standard emails and rejects malformed ones', () => {
  assert.equal(isValidEmail('info@prooftagcatis.com'), true);
  assert.equal(isValidEmail('invalid-email'), false);
  assert.equal(isValidEmail('user@domain'), false);
});

test('isValidPhone validates international and local formats while allowing blank optional phone', () => {
  assert.equal(isValidPhone('+237 699 19 29 19'), true);
  assert.equal(isValidPhone(''), true);
  assert.equal(isValidPhone('abc'), false);
});

test('validateContactForm returns no errors for valid payload and flags missing fields', () => {
  assert.deepEqual(validateContactForm(validContact, 'fr'), {});

  const invalid = validateContactForm(
    { ...validContact, email: 'bad', message: 'court', lastName: '' },
    'fr'
  );
  assert.ok(invalid.lastName);
  assert.ok(invalid.email);
  assert.ok(invalid.message);
});

const validCareer: CareerApplicationValues = {
  fullName: 'Aminatou Bello',
  email: 'aminatou@example.cm',
  phone: '+237 677 12 34 56',
  applicationType: 'stage-academique',
  targetRole: 'Développement Logiciel & Systèmes',
  coverLetter: 'Je souhaite rejoindre PROOFTAG-CATIS S.A. pour mon stage de fin d’études en systèmes d’information.',
  cvFile: { name: 'cv-aminatou.pdf', size: 245000, type: 'application/pdf' },
};

test('validateCareerApplication enforces PDF-only and max 5MB security constraints', () => {
  assert.deepEqual(validateCareerApplication(validCareer, 'fr'), {});

  const nonPdf = validateCareerApplication(
    { ...validCareer, cvFile: { name: 'cv.exe', size: 1024, type: 'application/x-msdownload' } },
    'fr'
  );
  assert.ok(nonPdf.cvFile);

  const oversized = validateCareerApplication(
    { ...validCareer, cvFile: { name: 'cv.pdf', size: MAX_CV_SIZE_BYTES + 1, type: 'application/pdf' } },
    'en'
  );
  assert.ok(oversized.cvFile);
});

test('isEmailJsConfigured returns true only when all three EmailJS identifiers are non-empty', () => {
  assert.equal(
    isEmailJsConfigured({ serviceId: 'svc_1', templateId: 'tpl_1', publicKey: 'pk_1' }),
    true
  );
  assert.equal(
    isEmailJsConfigured({ serviceId: 'svc_1', templateId: '', publicKey: 'pk_1' }),
    false
  );
  assert.equal(isEmailJsConfigured({}), false);
});
