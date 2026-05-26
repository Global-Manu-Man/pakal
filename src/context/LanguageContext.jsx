import { createContext, useCallback, useContext, useEffect, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { translations } from '../i18n/translations';

/**
 * Contexto de idioma (es / en).
 *
 * Sustituye el sistema de intercambio por selectores del HTML original por un
 * diccionario tipado. Expone:
 *  - `lang`: idioma activo.
 *  - `t`: objeto de traducciones del idioma activo (acceso directo: t.hero.lead).
 *  - `toggleLang`: alterna entre es/en.
 * Persiste en localStorage ('pakal-lang') y refleja el idioma en <html lang>.
 */
const LanguageContext = createContext(undefined);

const SUPPORTED = ['es', 'en'];

export function LanguageProvider({ children }) {
  const [lang, setLang] = useLocalStorage('pakal-lang', 'es');
  const safeLang = SUPPORTED.includes(lang) ? lang : 'es';

  // Mantiene el atributo lang del documento en sintonía (SEO + accesibilidad).
  useEffect(() => {
    document.documentElement.setAttribute('lang', safeLang);
  }, [safeLang]);

  const toggleLang = useCallback(
    () => setLang(safeLang === 'es' ? 'en' : 'es'),
    [safeLang, setLang],
  );

  const value = useMemo(
    () => ({
      lang: safeLang,
      otherLang: safeLang === 'es' ? 'en' : 'es',
      t: translations[safeLang],
      toggleLang,
    }),
    [safeLang, toggleLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

/** Hook de acceso al idioma. Falla rápido si está fuera del provider. */
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (ctx === undefined) {
    throw new Error('useLanguage debe usarse dentro de <LanguageProvider>.');
  }
  return ctx;
}
