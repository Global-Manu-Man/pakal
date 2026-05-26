import { render } from '@testing-library/react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

/**
 * renderWithProviders — envuelve el componente bajo prueba con los providers
 * de tema e idioma, evitando repetir el boilerplate en cada test.
 */
export function renderWithProviders(ui, options) {
  function Wrapper({ children }) {
    return (
      <ThemeProvider>
        <LanguageProvider>{children}</LanguageProvider>
      </ThemeProvider>
    );
  }
  return render(ui, { wrapper: Wrapper, ...options });
}

// Re-exporta utilidades de RTL para importarlas desde un único sitio.
export * from '@testing-library/react';
