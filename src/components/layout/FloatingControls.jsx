import ThemeToggle from '../ui/ThemeToggle';
import LanguageToggle from '../ui/LanguageToggle';

/**
 * FloatingControls — agrupa los botones flotantes (idioma + tema) en la
 * esquina inferior derecha. Se mantienen accesibles en todo el scroll.
 */
export default function FloatingControls() {
  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3 max-[600px]:bottom-4 max-[600px]:right-4">
      <LanguageToggle />
      <ThemeToggle />
    </div>
  );
}
