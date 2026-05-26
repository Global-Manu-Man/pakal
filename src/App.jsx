import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

/**
 * App — punto de entrada lógico de la aplicación.
 *
 * Responsabilidades:
 *  - Proveer contexto global (tema e idioma) a todo el árbol.
 *  - Configurar el enrutado con React Router (Home + 404).
 *  - Dividir cada vista en su propio chunk con React.lazy (code splitting por ruta).
 *
 * El orden de los providers es indistinto aquí, pero ambos deben envolver al
 * Router para que cualquier vista pueda consumir `useTheme`/`useLanguage`.
 */
const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));

/** Fallback a pantalla completa mientras carga la vista inicial. */
function RouteFallback() {
  return (
    <div className="grid min-h-screen place-items-center" role="status" aria-live="polite">
      <span className="h-10 w-10 animate-spin rounded-full border-2 border-ink/15 border-t-teal" />
      <span className="sr-only">Cargando…</span>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}
