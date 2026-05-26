import { useState } from 'react';
import Button from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';

/**
 * ContactForm — formulario de contacto controlado.
 *
 * Mejora el formulario del HTML original (que sólo hacía preventDefault) con:
 *  - Estado controlado por campo (useState).
 *  - Validación de obligatorios y formato de correo.
 *  - Mensajes de error accesibles (aria-invalid + aria-describedby + role=alert).
 *  - Estado de éxito que cambia el botón a "Enviado ✓".
 *
 * Nota: no realiza envío real a un backend; expone `onSubmitSuccess` para que
 * el contenedor decida la integración (API, email, etc.).
 *
 * @param {object} props
 * @param {(data: object) => void} [props.onSubmitSuccess]
 */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMPTY = { firstName: '', lastName: '', email: '', message: '' };

export default function ContactForm({ onSubmitSuccess }) {
  const { t } = useLanguage();
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  /** Valida todos los campos y devuelve un objeto de errores. */
  const validate = (data) => {
    const next = {};
    if (!data.firstName.trim()) next.firstName = t.contact.errRequired;
    if (!data.lastName.trim()) next.lastName = t.contact.errRequired;
    if (!data.email.trim()) next.email = t.contact.errRequired;
    else if (!EMAIL_RE.test(data.email)) next.email = t.contact.errEmail;
    if (!data.message.trim()) next.message = t.contact.errRequired;
    return next;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Limpia el error del campo en cuanto el usuario lo corrige.
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      return;
    }
    setErrors({});
    setSent(true);
    onSubmitSuccess?.(values);
  };

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
        value={values.firstName}
        error={errors.firstName}
        onChange={handleChange}
      />
      <Field
        name="lastName"
        label={t.contact.labelLast}
        placeholder={t.contact.phLast}
        value={values.lastName}
        error={errors.lastName}
        onChange={handleChange}
      />
      <Field
        name="email"
        type="email"
        label={t.contact.labelEmail}
        placeholder={t.contact.phEmail}
        value={values.email}
        error={errors.email}
        onChange={handleChange}
        full
      />
      <Field
        name="message"
        as="textarea"
        label={t.contact.labelMessage}
        placeholder={t.contact.phMessage}
        value={values.message}
        error={errors.message}
        onChange={handleChange}
        full
      />

      <div className="col-span-2 mt-2 flex items-center justify-between max-[600px]:flex-col max-[600px]:items-stretch max-[600px]:gap-3">
        <small className="text-xs text-ink/60">{t.contact.disclaimer}</small>
        <Button type="submit" variant="primary" withArrow={!sent} disabled={sent} className="max-[600px]:w-full max-[600px]:justify-center">
          {sent ? t.contact.sent : t.contact.submit}
        </Button>
      </div>
    </form>
  );
}

/**
 * Field — campo de formulario accesible (input o textarea).
 * Vincula label↔control por id y expone errores con aria-describedby + role=alert.
 */
function Field({ name, label, type = 'text', as = 'input', placeholder, value, error, onChange, full = false }) {
  const id = `contact-${name}`;
  const errorId = `${id}-error`;
  const Control = as;

  const controlClasses =
    'w-full border-0 border-b-[1.5px] bg-transparent py-3 font-sans text-base text-ink ' +
    'transition-colors duration-200 outline-none placeholder:text-ink/60 placeholder:opacity-60 ' +
    (error ? 'border-red-500' : 'border-ink/[0.12] focus:border-teal') +
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
        value={value}
        onChange={onChange}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? errorId : undefined}
        className={controlClasses}
      />
      {error && (
        <p id={errorId} role="alert" className="mt-1.5 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
