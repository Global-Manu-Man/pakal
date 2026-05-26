import { useEffect, useState } from 'react';

/**
 * useMediaQuery — evalúa una media query y se re-renderiza al cambiar.
 *
 * Útil para lógica condicional por viewport (p. ej. cerrar el menú móvil
 * automáticamente al pasar a escritorio).
 *
 * @param {string} query  Media query CSS, p. ej. '(min-width: 900px)'.
 * @returns {boolean}     `true` si la query coincide actualmente.
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const mql = window.matchMedia(query);
    const handler = (event) => setMatches(event.matches);

    setMatches(mql.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [query]);

  return matches;
}
