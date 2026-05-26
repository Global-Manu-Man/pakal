import { lazy, Suspense } from 'react';
import Hero from '../sections/Hero';

/**
 * MainContent — orquesta las secciones de la landing dentro de <main>.
 *
 * Optimización de rendimiento (code splitting):
 *  - Hero se importa de forma estática porque está "above the fold" (primer
 *    contenido visible): debe pintarse de inmediato.
 *  - El resto de secciones se cargan con React.lazy, generando chunks separados
 *    que el navegador descarga bajo demanda, reduciendo el bundle inicial.
 *  - <Suspense> muestra un fallback accesible mientras llega cada chunk.
 */
const About = lazy(() => import('../sections/About'));
const Services = lazy(() => import('../sections/Services'));
const Process = lazy(() => import('../sections/Process'));
const Portfolio = lazy(() => import('../sections/Portfolio'));
const Mission = lazy(() => import('../sections/Mission'));
const Testimonials = lazy(() => import('../sections/Testimonials'));
const ClientFocus = lazy(() => import('../sections/ClientFocus'));
const Contact = lazy(() => import('../sections/Contact'));

/** Fallback discreto mientras se resuelven los chunks diferidos. */
function SectionFallback() {
  return (
    <div className="flex min-h-[200px] items-center justify-center" role="status" aria-live="polite">
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-ink/15 border-t-teal" />
      <span className="sr-only">Cargando…</span>
    </div>
  );
}

export default function MainContent() {
  return (
    <main id="main">
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <About />
        <Services />
        <Process />
        <Portfolio />
        <Mission />
        <Testimonials />
        <ClientFocus />
        <Contact />
      </Suspense>
    </main>
  );
}
