import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Button from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';

/**
 * ContactForm — formulario de contacto con Formspree.
 *
 * Integración con Formspree para:
 *  - Envío de emails automático
 *  - Validación en servidor
 *  - Manejo de errores accesible
 *  - Estado de éxito mejorado
 *
 * IMPORTANTE: Reemplaza "YOUR_FORM_ID" con tu ID de Formspree
 * @see https://formspree.io/
 */

// ⚠️ REEMPLAZA CON TU FORM ID DE FORMSPREE
const FORMSPREE_FORM_ID = 'mwkawqzq';

export default function ContactForm() {
  const { t } = useLanguage();
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  // Pantalla de éxito después del envío
  if (state.succeeded) {
    return (
      <div className="grid gap-5 rounded-[28px] border border-ink/[0.08] bg-surface p-10 shadow-[0_30px_80px_-40px_rgba(28,32,35,0.18)] text-center max-[900px]:p-7 max-[600px]:p-[22px]">
        <div className="text-4xl mb-3">✓</div>
        <h3 className="text-xl font-semibold text-ink mb-2">{t.contact.successTitle || 'Thanks!'}</h3>
        <p className="text-ink/70">{t.contact.successMsg || 'Your message has been sent successfully.'}</p>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="grid grid-cols-2 gap-5 rounded-[28px] border border-ink/[0.08] bg-surface p-10 shadow-[0_30px_80px_-40px_rgba(28,32,35,0.18)] max-[900px]:p-7 max-[600px]:grid-cols-1 max-[600px]:p-[22px]"
    >
      <Field
        name="firstName"
        label={t.contact.labelFirst}
        placeholder={t.contact.phFirst}
        type="text"
      />
      <Field
        name="lastName"
        label={t.contact.labelLast}
        placeholder={t.contact.phLast}
        type="text"
      />
      <Field
        name="company"
        label={t.contact.labelCompany || 'Compañia'}
        placeholder={t.contact.phCompany || ' Nombre de la compañia'}
        type="text"
      />
      <Field
        name="phone"
        label={t.contact.labelPhone || 'Telefono'}
        placeholder={t.contact.phPhone || '+1 (555) 000-0000'}
        type="tel"
      />
      <Field
        name="email"
        label={t.contact.labelEmail}
        placeholder={t.contact.phEmail}
        type="email"
        full
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <Field
        name="subject"
        label={t.contact.labelSubject || 'Asunto'}
        placeholder={t.contact.phSubject || '¿Cual es tu asunto?'}
        type="text"
        full
      />
      <Field
        name="message"
        label={t.contact.labelMessage}
        placeholder={t.contact.phMessage}
        as="textarea"
        full
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <div className="col-span-2 mt-2 flex items-center justify-between gap-4 max-[600px]:flex-col max-[600px]:items-stretch max-[600px]:gap-3">
        <label className="flex cursor-pointer items-center gap-2 text-xs text-ink/60">
          <input
            type="checkbox"
            checked={privacyAccepted}
            onChange={e => setPrivacyAccepted(e.target.checked)}
            className="h-4 w-4 cursor-pointer accent-teal"
          />
          <span>
            {t.contact.checkboxPrivacyPre}{' '}
            <a
              href="/privacidad"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-teal"
              onClick={e => e.stopPropagation()}
            >
              {t.contact.checkboxPrivacyLink}
            </a>
          </span>
        </label>
        <Button
          type="submit"
          variant="primary"
          withArrow
          disabled={state.submitting || !privacyAccepted}
          className="max-[600px]:w-full max-[600px]:justify-center"
        >
          {state.submitting ? t.contact.sending || 'Sending...' : t.contact.submit}
        </Button>
      </div>
    </form>
  );
}

/**
 * Field — campo de formulario accesible (input o textarea).
 * Vincula label↔control por id.
 */
function Field({ name, label, type = 'text', as = 'input', placeholder, full = false }) {
  const id = `contact-${name}`;
  const Control = as;

  const controlClasses =
    'w-full border-0 border-b-[1.5px] bg-transparent py-3 font-sans text-base text-ink ' +
    'transition-colors duration-200 outline-none placeholder:text-ink/60 placeholder:opacity-60 ' +
    'border-ink/[0.12] focus:border-teal ' +
    (as === 'textarea' ? ' min-h-[110px] resize-none' : '');

  return (
    <div className={`${full ? 'col-span-2 max-[600px]:col-span-1' : ''}`}>
      <label htmlFor={id} className="mb-2 block text-[13px] font-medium text-ink">
        {label}
      </label>
      <Control
        id={id}
        name={name}
        type={as === 'input' ? type : undefined}
        placeholder={placeholder}
        className={controlClasses}
        required
      />
    </div>
  );
}
