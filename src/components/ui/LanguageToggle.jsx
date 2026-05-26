import { useLanguage } from '../../context/LanguageContext';
import Icon from './Icon';

/**
 * LanguageToggle — botón flotante que alterna entre español e inglés.
 * Muestra el idioma actual resaltado y el alternativo atenuado.
 */
export default function LanguageToggle() {
  const { lang, otherLang, toggleLang, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={t.a11y.toggleLang}
      className="inline-flex h-[52px] items-center gap-2.5 rounded-pill border border-ink/[0.12] bg-ink px-[18px] text-[13px] font-semibold tracking-[0.04em] text-surface shadow-[0_12px_30px_-10px_rgba(0,0,0,0.3)] transition-transform duration-200 hover:-translate-y-0.5 dark:border-transparent dark:bg-teal dark:text-surface max-[600px]:h-[46px] max-[600px]:px-3.5 max-[600px]:text-xs"
    >
      <Icon name="globe" size={16} className="opacity-85 max-[600px]:hidden" />
      <span className="text-teal dark:text-surface">{lang.toUpperCase()}</span>
      <span className="opacity-35">/</span>
      <span className="opacity-55 dark:opacity-50">{otherLang.toUpperCase()}</span>
    </button>
  );
}
