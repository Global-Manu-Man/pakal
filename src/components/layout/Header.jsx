import Navbar from './Navbar';
import { useLanguage } from '../../context/LanguageContext';

/**
 * Header — envoltorio semántico del sitio.
 *
 * Separa la responsabilidad estructural (<header> + enlace de salto al
 * contenido para accesibilidad) de la lógica de navegación, que vive en Navbar.
 */
export default function Header() {
  const { t } = useLanguage();

  return (
    <header>
      {/* Enlace "skip link": visible sólo al tabular, lleva al <main>. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-pill focus:bg-ink focus:px-5 focus:py-3 focus:text-surface"
      >
        {t.a11y.skipToContent}
      </a>
      <Navbar />
    </header>
  );
}
