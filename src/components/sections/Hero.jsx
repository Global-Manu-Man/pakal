import Button from '../ui/Button';
import HeroArt from './HeroArt';
import { useLanguage } from '../../context/LanguageContext';

/**
 * Hero — sección principal de apertura.
 *
 * Columna de texto (eyebrow, título con palabra subrayada, lead, CTAs y prueba
 * social) + ilustración animada. Mobile-first: una columna en móvil, dos en
 * escritorio.
 */
export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-[150px] max-[900px]:pt-[130px] max-[600px]:pb-8 max-[600px]:pt-[110px]">
      <div className="wrap grid items-center gap-14 md:grid-cols-[1.05fr_1fr]">
        {/* Copy */}
        <div className="min-w-0">
          <span className="mb-6 inline-flex items-center gap-2.5 rounded-pill bg-cyan px-4 py-2 text-[13px] font-medium text-teal-deep">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            {t.hero.eyebrow}
          </span>

          <h1 className="m-0 mb-6 text-balance text-[clamp(40px,5.2vw,68px)] font-semibold leading-[1.04] tracking-[-0.035em] max-[600px]:text-[38px] max-[380px]:text-[32px]">
            <span className="font-medium italic text-teal-deep">{t.hero.titleA}</span>{' '}
            {t.hero.titleB}{' '}
            <span className="relative inline-block after:absolute after:-bottom-1 after:left-0 after:right-0 after:-z-10 after:h-2.5 after:rounded after:bg-teal after:opacity-50 after:content-['']">
              {t.hero.titleC}
            </span>{' '}
            {t.hero.titleD}
          </h1>

          <p className="m-0 mb-8 max-w-[480px] text-[18px] leading-[1.55] text-ink/60 max-[600px]:text-[15px]">
            {t.hero.lead}
          </p>

          <div className="flex flex-wrap items-center gap-3.5 max-[600px]:flex-col max-[600px]:items-stretch">
            <Button href="#contact" variant="primary" withArrow data-cta="primary" className="max-[600px]:w-full max-[600px]:justify-center">
              {t.hero.ctaPrimary}
            </Button>
            <Button href="#work" variant="ghost" className="max-[600px]:w-full max-[600px]:justify-center">
              {t.hero.ctaSecondary}
            </Button>

            {/* Prueba social: avatares + métrica */}
            <div className="ml-2 flex items-center gap-3">
              <div className="flex" aria-hidden="true">
                <span className="-ml-2.5 h-9 w-9 rounded-full border-[2.5px] border-surface bg-gradient-to-br from-[#f5d4b5] to-[#e89c6b] first:ml-0" />
                <span className="-ml-2.5 h-9 w-9 rounded-full border-[2.5px] border-surface bg-gradient-to-br from-[#c5b6f0] to-[#7d6dd6]" />
                <span className="-ml-2.5 h-9 w-9 rounded-full border-[2.5px] border-surface bg-gradient-to-br from-[#ffe1a8] to-[#ec9d4a]" />
                <span className="-ml-2.5 grid h-9 w-9 place-items-center rounded-full border-[2.5px] border-surface bg-teal text-xs font-semibold text-ink">
                  +5k
                </span>
              </div>
              <p className="m-0 text-[13px] leading-[1.3] text-ink/60">
                <strong className="font-semibold text-ink">{t.hero.metaStrong}</strong>
                <br />
                {t.hero.metaRest}
              </p>
            </div>
          </div>
        </div>

        <HeroArt />
      </div>
    </section>
  );
}
