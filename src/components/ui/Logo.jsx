/**
 * Logo — marca "Pakal.cloud" reutilizable en navbar y footer.
 *
 * @param {object} props
 * @param {string} [props.className]   Clases extra (tamaño/color contextual).
 */
const LOGO_IMG = 'https://pub-9d6440eb631049579a73b4dc7e7689b0.r2.dev/logo/icon-white.png';

export default function Logo({ className = '' }) {
  return (
    <a
      href="#home"
      className={`flex items-center gap-2.5 text-[19px] font-semibold tracking-[-0.02em] ${className}`}
    >
      <span className="relative grid h-8 w-8 place-items-center overflow-hidden rounded-lg bg-ink text-teal dark:bg-teal dark:text-surface">
        <img src={LOGO_IMG} alt="" className="h-[70%] w-[70%] object-contain" />
      </span>
      <span>
        Pakal<span className="text-teal">.</span>cloud
      </span>
    </a>
  );
}
