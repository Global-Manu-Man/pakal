import { useCallback, useEffect, useState } from 'react';

/**
 * useLocalStorage — estado de React persistido en localStorage.
 *
 * Encapsula el patrón useState + useEffect para leer/escribir una clave,
 * tolerando entornos sin almacenamiento (SSR, modo privado) sin romper.
 *
 * @template T
 * @param {string} key            Clave bajo la que se guarda el valor.
 * @param {T} initialValue        Valor por defecto si no hay nada guardado.
 * @returns {[T, (value: T) => void]} Tupla [valor, setter] al estilo useState.
 */
export function useLocalStorage(key, initialValue) {
  // Inicialización perezosa: sólo lee de localStorage en el primer render.
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  // Persiste cada vez que cambia el valor.
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* almacenamiento no disponible: ignoramos en silencio */
    }
  }, [key, value]);

  const set = useCallback((next) => setValue(next), []);

  return [value, set];
}
