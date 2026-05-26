import { useEffect, useState } from 'react';

/**
 * useScrollSpy — devuelve el id de la sección actualmente "activa" según el scroll.
 *
 * Reemplaza el listener de scroll manual del HTML original. Usa un listener
 * pasivo con la misma heurística (offsetTop <= scrollY + offset) para máxima
 * compatibilidad con el comportamiento previo.
 *
 * @param {string[]} sectionIds  Ids de las secciones a observar, en orden.
 * @param {number} [offset=200]  Margen superior en píxeles antes de activar.
 * @returns {string} Id de la sección activa (la primera por defecto).
 */
export function useScrollSpy(sectionIds, offset = 200) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY + offset;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActiveId(current);
    };

    handleScroll(); // estado inicial correcto
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
