import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import FloatingControls from '../components/layout/FloatingControls';
import { useLanguage } from '../context/LanguageContext';
/**
 * NotFound — vista 404 para rutas inexistentes.
 * Demuestra el manejo de múltiples vistas con React Router.
 */
export default function NotFound() {
  const { t } = useLanguage();

  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <p className="m-0 text-[clamp(80px,18vw,180px)] font-semibold leading-none tracking-[-0.04em] text-teal">
          404
        </p>
        <h1 className="mb-3 mt-4 text-[clamp(24px,4vw,40px)] font-semibold tracking-[-0.02em]">
          {t.notFound.title}
        </h1>
        <p className="mx-auto mb-8 max-w-[420px] text-ink/60">{t.notFound.desc}</p>
        <Button as={Link} to="/" variant="primary" withArrow>
          {t.notFound.cta}
        </Button>
      </div>
      <FloatingControls />
    </main>
  );
}
