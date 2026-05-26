import SectionTag from '../ui/SectionTag';
import Highlight from '../ui/Highlight';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import { useLanguage } from '../../context/LanguageContext';

/**
 * ClientFocus — bloque oscuro de compromiso (split 50/50).
 * Izquierda: mensaje + lista de beneficios + CTA. Derecha: arte con píldoras
 * flotantes que nombran las etapas del proceso.
 */
export default function ClientFocus() {
  const { t } = useLanguage();

  // Posiciones de las píldoras flotantes (decorativas).
  const pillPos = [
    'left-[14%] top-[14%]',
    'right-[12%] top-[38%]',
    'bottom-[32%] left-[20%]',
    'bottom-[14%] right-[18%]',
  ];

  return (
    <section className="pt-10">
      <div className="wrap">
        <div className="grid overflow-hidden rounded-[32px] bg-ink dark:bg-surface text-surface dark:text-ink dark:border dark:border-white/[0.06] md:grid-cols-2 max-[600px]:rounded-3xl">
          {/* Contenido */}
          <div className="px-14 py-[72px] max-[900px]:px-7 max-[900px]:py-12 max-[600px]:px-[22px] max-[600px]:py-9">
            <SectionTag className="text-teal">{t.focus.tag}</SectionTag>
            <h2 className="m-0 text-balance text-[clamp(34px,4vw,52px)] font-semibold leading-[1.08] tracking-[-0.03em] text-surface dark:text-ink">
              <Highlight text={t.focus.title} emphasisClassName="italic text-teal" />
            </h2>
            <p className="my-6 max-w-[460px] text-base leading-[1.6] text-white/65 dark:text-ink/70">{t.focus.desc}</p>

            <ul className="m-0 mb-9 flex list-none flex-col gap-3.5 p-0">
              {t.focus.list.map((item, i) => (
                <li key={i} className="flex items-center gap-3.5 text-[15px] text-white/85 dark:text-ink/85">
                  <Icon name="check" size={18} className="flex-shrink-0 text-teal" />
                  {item}
                </li>
              ))}
            </ul>

            <Button
              href="#contact"
              withArrow
              className="!bg-teal !text-ink hover:!bg-surface"
            >
              {t.focus.cta}
            </Button>
          </div>

          {/* Arte decorativo */}
          <div
            aria-hidden="true"
            className="relative min-h-[480px] overflow-hidden bg-gradient-to-br from-[#2a3035] to-ink dark:from-cyan dark:to-cyan/80 after:absolute after:left-[40%] after:top-[30%] after:h-[320px] after:w-[320px] after:rounded-full after:bg-teal after:opacity-25 after:blur-[80px] after:content-[''] max-[600px]:min-h-[320px]"
          >
            <span className="absolute inset-0 grid place-items-center text-[220px] font-semibold leading-none tracking-[-0.06em] text-teal opacity-[0.12] dark:opacity-[0.08] max-[600px]:text-[64px]">
              P
            </span>
            {t.focus.pills.map((pill, i) => (
              <span
                key={i}
                className={`absolute flex items-center gap-2.5 rounded-pill border border-white/[0.14] dark:border-ink/[0.14] bg-white/[0.08] dark:bg-ink/[0.08] px-[22px] py-3.5 text-sm font-medium text-surface dark:text-ink backdrop-blur-[20px] motion-safe:animate-float max-[600px]:px-3.5 max-[600px]:py-2 max-[600px]:text-xs ${pillPos[i]}`}
                style={{ animationDelay: `${-i * 1.5}s` }}
              >
                <i className="h-2 w-2 rounded-full bg-teal" />
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
