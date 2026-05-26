import Highlight from '../ui/Highlight';
import { useLanguage } from '../../context/LanguageContext';

/**
 * Mission — cita central de cierre emocional, con fondo de degradados radiales.
 */
export default function Mission() {
  const { t } = useLanguage();

  return (
    <section className="bg-[radial-gradient(circle_at_30%_20%,rgb(var(--c-teal)/0.08),transparent_50%),radial-gradient(circle_at_70%_80%,rgb(var(--c-cyan)/0.4),transparent_50%)] py-[120px] text-center max-[600px]:py-20">
      <div className="wrap">
        <figure className="mx-auto m-0 max-w-[920px]">
          <div className="mb-4 font-serif text-[80px] leading-[0.5] text-teal" aria-hidden="true">
            “
          </div>
          <blockquote className="m-0">
            <h2 className="m-0 text-balance text-[clamp(34px,4.4vw,60px)] font-medium leading-[1.15] tracking-[-0.03em] max-[600px]:text-[22px]">
              <Highlight text={t.mission.quote} emphasisClassName="italic text-teal-deep" />
            </h2>
          </blockquote>
          <figcaption className="mt-8 text-sm tracking-[0.04em] text-ink/60">
            {t.mission.signature}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
