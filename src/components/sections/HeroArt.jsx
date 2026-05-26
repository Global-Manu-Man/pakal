import Icon from '../ui/Icon';
import { useLanguage } from '../../context/LanguageContext';

/**
 * HeroArt — ilustración decorativa del hero.
 *
 * Reconstruye fielmente el "mockup" del HTML original: blob de fondo, maqueta
 * de laptop y de teléfono y dos chips flotantes, todos con animación `float`.
 * Es puramente decorativo, por lo que se marca con `aria-hidden`.
 *
 * Nota de rendimiento: el movimiento se desactiva vía `prefers-reduced-motion`
 * (regla global en index.css), respetando las preferencias del usuario.
 */
export default function HeroArt() {
  const { t } = useLanguage();

  return (
    <div
      aria-hidden="true"
      className="relative aspect-square w-full min-w-0 max-w-[560px] justify-self-end max-[900px]:mx-auto max-[900px]:max-w-[420px] max-[600px]:max-w-[320px]"
    >
      <div className="hero-blob" />

      {/* Chip flotante 1 (superior izquierda) */}
      <FloatingTag
        className="left-0 top-[14%]"
        icon="monitor"
        title={t.hero.tag1Title}
        sub={t.hero.tag1Sub}
        duration="7s"
      />

      {/* Maqueta de teléfono */}
      <div
        className="absolute right-[4%] top-[8%] z-[3] w-[30%] motion-safe:animate-float rot-pos"
        style={{ animationDuration: '5s', animationDirection: 'reverse' }}
      >
        <div className="relative rounded-[28px] bg-ink p-2 shadow-[0_25px_50px_-15px_rgba(28,32,35,0.4)]">
          <div className="relative flex aspect-[9/19] flex-col gap-2.5 overflow-hidden rounded-[22px] bg-gradient-to-b from-cyan to-surface px-3 pb-3 pt-4 before:absolute before:left-1/2 before:top-2 before:h-3.5 before:w-[36%] before:-translate-x-1/2 before:rounded-pill before:bg-ink before:content-['']">
            <div className="mt-3.5 flex justify-between px-1 text-[9px] font-semibold text-ink">
              <span>9:41</span>
              <span>●●●</span>
            </div>
            <div className="flex flex-col gap-1 rounded-[14px] bg-ink p-2.5 text-surface">
              <span className="block h-1 w-1/2 rounded bg-teal" />
              <span className="block h-[3px] w-4/5 rounded bg-white/25" />
              <span className="block h-[3px] w-3/5 rounded bg-white/25" />
            </div>
            <PhoneRow solid={[false, true]} />
            <PhoneRow solid={[true, false]} />
          </div>
        </div>
      </div>

      {/* Maqueta de laptop */}
      <div className="absolute bottom-[14%] left-[6%] z-[2] w-[78%] motion-safe:animate-float rot-neg">
        <div className="rounded-[14px_14px_4px_4px] bg-ink p-2 shadow-[0_30px_60px_-20px_rgba(28,32,35,0.35)]">
          <div className="flex aspect-[16/10] flex-col gap-2.5 overflow-hidden rounded-lg bg-surface p-3.5">
            <div className="flex items-center gap-1.5 border-b border-ink/[0.08] pb-2">
              <i className="block h-2 w-2 rounded-full bg-[#ff5f57]" />
              <i className="block h-2 w-2 rounded-full bg-[#febc2e]" />
              <i className="block h-2 w-2 rounded-full bg-[#28c840]" />
            </div>
            <div className="grid flex-1 grid-cols-[1fr_1.4fr] gap-2.5">
              <div className="flex flex-col gap-1.5 rounded-md bg-cyan p-2">
                <b className="block h-1.5 w-3/5 rounded bg-teal-deep" />
                <b className="block h-1.5 w-4/5 rounded bg-ink/20" />
                <b className="block h-1.5 w-1/2 rounded bg-ink/20" />
              </div>
              <div className="flex flex-col gap-1.5 rounded-md bg-ink p-2.5">
                <b className="block h-2 w-4/5 rounded bg-teal" />
                <b className="block h-1.5 w-3/5 rounded bg-white/20" />
                <b className="block h-1.5 w-[90%] rounded bg-white/20" />
                <div className="laptop-chart" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative mx-[-2%] h-3 rounded-b-2xl bg-gradient-to-b from-[#2a3035] to-ink" />
      </div>

      {/* Chip flotante 2 (inferior derecha) */}
      <FloatingTag
        className="bottom-[12%] right-0"
        icon="cloud"
        iconDark
        title={t.hero.tag2Title}
        sub={t.hero.tag2Sub}
        duration="7s"
        reverse
      />
    </div>
  );
}

/** Chip flotante con icono, título y subtítulo. */
function FloatingTag({ className, icon, iconDark = false, title, sub, duration, reverse = false }) {
  return (
    <div
      className={`absolute z-[4] flex items-center gap-3 whitespace-nowrap rounded-[14px] border border-ink/[0.08] bg-surface px-4 py-3 shadow-float motion-safe:animate-float ${className}`}
      style={{ animationDuration: duration, animationDirection: reverse ? 'reverse' : 'normal' }}
    >
      <span
        className={`grid h-9 w-9 place-items-center rounded-[10px] ${
          iconDark ? 'bg-ink text-teal' : 'bg-cyan text-teal-deep'
        }`}
      >
        <Icon name={icon} size={18} />
      </span>
      <div>
        <b className="block text-sm font-semibold leading-tight">{title}</b>
        <span className="text-xs text-ink/60">{sub}</span>
      </div>
    </div>
  );
}

/** Fila de dos "tiles" de la maqueta de teléfono. */
function PhoneRow({ solid }) {
  return (
    <div className="flex gap-1.5">
      {solid.map((isSolid, i) => (
        <div
          key={i}
          className={`flex aspect-square flex-1 flex-col justify-between rounded-[10px] p-1.5 shadow-[0_4px_10px_-4px_rgba(28,32,35,0.1)] ${
            isSolid ? 'bg-teal' : 'bg-surface'
          }`}
        >
          <i className={`block h-4 w-4 rounded-[5px] ${isSolid ? 'bg-ink' : 'bg-cyan'}`} />
          <b className={`block h-[3px] w-[70%] rounded ${isSolid ? 'bg-ink/80' : 'bg-ink/80'}`} />
        </div>
      ))}
    </div>
  );
}
