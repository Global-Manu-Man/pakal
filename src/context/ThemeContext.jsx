import { createContext, useCallback, useContext, useEffect, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

/**
 * Contexto de tema (claro / oscuro).
 *
 * Sustituye al script imperativo del HTML original: el estado vive en React,
 * se persiste en localStorage ('pakal-theme') y se refleja en el atributo
 * `data-theme` del <html>, que es lo que consumen los tokens CSS y Tailwind.
 */
const ThemeContext = createContext(undefined);

/** @typedef {'light' | 'dark'} Theme */

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorage('pakal-theme', 'light');

  // Sincroniza el atributo del documento con el estado del tema.
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');
  }, [theme]);

  const toggleTheme = useCallback(
    () => setTheme(theme === 'dark' ? 'light' : 'dark'),
    [theme, setTheme],
  );

  const value = useMemo(
    () => ({ theme, isDark: theme === 'dark', toggleTheme }),
    [theme, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

/**
 * Hook de acceso al tema. Lanza un error si se usa fuera del provider,
 * lo que ayuda a detectar errores de composición durante el desarrollo.
 */
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (ctx === undefined) {
    throw new Error('useTheme debe usarse dentro de <ThemeProvider>.');
  }
  return ctx;
}
