import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import Icon from './Icon';

/**
 * ThemeToggle — botón flotante (esquina inferior derecha) que alterna el tema.
 * Muestra la luna en claro y el sol en oscuro. El estado vive en ThemeContext.
 */
export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t.a11y.toggleTheme}
      aria-pressed={isDark}
      className="grid h-[52px] w-[52px] place-items-center rounded-full border border-ink/[0.12] bg-ink text-surface shadow-[0_12px_30px_-10px_rgba(0,0,0,0.3)] transition-transform duration-200 hover:-translate-y-0.5 hover:-rotate-12 dark:border-transparent dark:bg-teal dark:text-surface max-[600px]:h-[46px] max-[600px]:w-[46px]"
    >
      <Icon name={isDark ? 'sun' : 'moon'} size={22} />
    </button>
  );
}
