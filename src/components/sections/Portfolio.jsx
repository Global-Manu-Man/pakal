import SectionTag from '../ui/SectionTag';
import Highlight from '../ui/Highlight';
import Icon from '../ui/Icon';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioMeta, techStack } from '../../data/portfolio';

/**
 * Portfolio — proyectos representativos.
 *
 * Compone tres bloques: la tira "Stack" (tecnologías), el encabezado con la
 * tarjeta-insignia giratoria, y la rejilla de proyectos. Cada proyecto usa un
 * "mockup" decorativo distinto según su variante (mobile / logo / brand).
 */
export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <section id="work" className="pb-[100px] max-[900px]:pb-16">
      <div className="wrap">
        {/* Tira de tecnologías */}
        <div className="mb-14 overflow-hidden border-y border-ink/[0.08] py-11">
          <div className="flex items-center gap-16">
            <span className="flex-shrink-0 border-r border-ink/[0.12] pr-8 text-[13px] uppercase tracking-[0.12em] text-ink/60">
              {t.portfolio.stackLabel}
            </span>
            <div className="flex flex-1 flex-wrap items-center justify-between gap-x-14 gap-y-4 text-[18px] font-medium tracking-[-0.02em] text-ink/60">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="opacity-60 transition-opacity duration-200 hover:text-ink hover:opacity-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Encabezado + badge */}
        <div className="mb-10 grid items-end gap-8 min-[701px]:grid-cols-[1fr_auto]">
          <div>
            <SectionTag>{t.portfolio.tag}</SectionTag>
            <h2 className="m-0 text-balance text-[clamp(34px,4vw,52px)] font-semibold leading-[1.08] tracking-[-0.03em]">
              <Highlight text={t.portfolio.title} />
            </h2>
          </div>
          <BadgeCard
            t1={t.portfolio.badge1Title}
            s1={t.portfolio.badge1Sub}
            t2={t.portfolio.badge2Title}
            s2={t.portfolio.badge2Sub}
          />
        </div>

        {/* Rejilla de proyectos */}
        <div className="grid grid-cols-[1.1fr_1fr_1fr] gap-4 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
          {portfolioMeta.map((meta, i) => (
            <WorkCard
              key={i}
              variant={meta.variant}
              tag={t.portfolio.items[i].tag}
              title={t.portfolio.items[i].title}
              sub={t.portfolio.items[i].sub}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Tarjeta-insignia con anillo giratorio. */
function BadgeCard({ t1, s1, t2, s2 }) {
  return (
    <div className="relative flex items-center gap-6 rounded-[20px] bg-ink px-7 py-6 text-surface dark:border dark:border-white/[0.06] max-[600px]:w-full max-[600px]:max-w-[360px]">
      <div className="grid h-[66px] w-[66px] flex-shrink-0 place-items-center rounded-full border-2 border-dashed border-teal motion-safe:animate-spin-slow">
        <span className="grid h-[46px] w-[46px] place-items-center rounded-full bg-teal text-sm font-bold text-ink motion-safe:animate-spin-slow-reverse">
          Pakal
        </span>
      </div>
      <div>
        <b className="block text-[28px] font-semibold leading-none tracking-[-0.02em]">{t1}</b>
        <span className="text-[13px] text-white/65">{s1}</span>
      </div>
      <div className="h-[38px] w-px bg-white/[0.18]" />
      <div>
        <b className="block text-[28px] font-semibold leading-none tracking-[-0.02em]">{t2}</b>
        <span className="text-[13px] text-white/65">{s2}</span>
      </div>
    </div>
  );
}

/** Tarjeta de proyecto con su mockup decorativo. */
function WorkCard({ variant, tag, title, sub }) {
  const VISUALS = {
    mobile: <MobileVisual />,
    logo: <LogoVisual />,
    brand: <BrandVisual />,
  };

  return (
    <article className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-brand transition-transform duration-300 hover:-translate-y-1">
      {VISUALS[variant]}

      <span className="absolute left-[18px] top-[18px] z-[2] rounded-pill bg-surface/90 px-3.5 py-[7px] text-xs font-medium backdrop-blur-[8px]">
        {tag}
      </span>

      <div className="absolute bottom-[18px] left-[18px] right-[18px] z-[2] flex items-end justify-between gap-3 text-surface">
        <div>
          <h4 className="m-0 text-[22px] font-medium leading-[1.1] tracking-[-0.02em]">{title}</h4>
          <span className="text-[13px] opacity-80">{sub}</span>
        </div>
        <span className="grid h-[38px] w-[38px] flex-shrink-0 place-items-center rounded-full bg-surface text-ink transition-colors duration-200 group-hover:bg-teal">
          <Icon name="arrow" size={14} />
        </span>
      </div>
    </article>
  );
}

/* ---- Visuales decorativos (aria-hidden por ser puramente estéticos) ---- */

function MobileVisual() {
  return (
    <div aria-hidden="true" className="grid h-full w-full place-items-center bg-gradient-to-br from-cyan to-teal p-10">
      <div className="relative aspect-[9/18] w-3/5 -rotate-6 rounded-[32px] bg-ink p-2 shadow-[0_30px_60px_-20px_rgba(28,32,35,0.4)]">
        <div className="flex h-full flex-col gap-2.5 rounded-[26px] bg-gradient-to-b from-surface to-cyan px-3.5 pb-3.5 pt-7">
          <b className="block h-1.5 w-3/5 rounded bg-ink" />
          <b className="block h-1 w-[90%] rounded bg-ink/30" />
          <b className="block h-1 w-[70%] rounded bg-ink/30" />
          <div className="mt-2 rounded-[10px] bg-teal p-3">
            <b className="block h-1.5 w-3/5 rounded bg-ink" />
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoVisual() {
  return (
    <div aria-hidden="true" className="grid h-full w-full place-items-center bg-cyan">
      <div className="badge-ring relative grid aspect-square w-[56%] place-items-center rounded-full border-[12px] border-ink bg-[radial-gradient(circle_at_30%_30%,rgb(var(--c-surface)),rgb(var(--c-cyan)))] text-[64px] font-bold tracking-[-0.04em] text-ink">
        R
      </div>
    </div>
  );
}

function BrandVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative grid h-full w-full place-items-center overflow-hidden bg-ink p-[30px] before:absolute before:left-1/2 before:top-1/2 before:aspect-square before:w-[70%] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-teal before:opacity-[0.14] before:blur-[40px] before:content-['']"
    >
      <div className="relative z-[2] flex w-full flex-col gap-2.5">
        <div className="flex aspect-[16/10] -rotate-3 items-center justify-between rounded-lg bg-surface p-3.5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
          <b className="flex items-center gap-1.5 text-lg font-bold tracking-[-0.04em] before:h-3.5 before:w-3.5 before:rounded-full before:bg-ink before:content-['']">
            Hidro-Electric
          </b>
        </div>
        <div className="ml-[18%] flex aspect-[16/10] -translate-y-7 rotate-3 items-center justify-between rounded-lg bg-teal p-3.5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
          <b className="flex items-center gap-1.5 text-lg font-bold tracking-[-0.04em] before:h-3.5 before:w-3.5 before:rounded-full before:bg-ink before:content-['']">
            Lentillas Co.
          </b>
        </div>
      </div>
    </div>
  );
}
