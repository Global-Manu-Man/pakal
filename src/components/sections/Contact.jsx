import SectionTag from '../ui/SectionTag';
import Highlight from '../ui/Highlight';
import Icon from '../ui/Icon';
import ContactForm from '../forms/ContactForm';
import { useLanguage } from '../../context/LanguageContext';
import { contactRows } from '../../data/contactInfo';

/**
 * Contact — sección de contacto.
 * Columna izquierda: intro + datos de contacto. Derecha: formulario.
 */
export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-[100px] max-[900px]:py-16">
      <div className="wrap grid items-start gap-16 md:grid-cols-[1fr_1.2fr]">
        {/* Intro + info */}
        <div>
          <SectionTag>{t.contact.tag}</SectionTag>
          <h2 className="m-0 text-balance text-[clamp(34px,4vw,52px)] font-semibold leading-[1.08] tracking-[-0.03em]">
            <Highlight text={t.contact.title} />
          </h2>
          <p className="my-6 max-w-[440px] text-[17px] leading-[1.6] text-ink/60">{t.contact.desc}</p>

          <ul className="m-0 mt-10 flex list-none flex-col gap-4 p-0">
            {contactRows.map((row) => (
              <li key={row.icon} className="flex items-center gap-3.5 text-[15px]">
                <span className="grid h-[42px] w-[42px] flex-shrink-0 place-items-center rounded-xl bg-cyan text-teal-deep dark:bg-teal/15 dark:text-teal">
                  <Icon name={row.icon} size={18} />
                </span>
                <span>
                  <b className="block font-medium">{t.contact[row.titleKey]}</b>
                  <span className="text-[13px] text-ink/60">{t.contact[row.subKey]}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
