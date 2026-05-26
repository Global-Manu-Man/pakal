/** @type {import('tailwindcss').Config} */

/**
 * TailwindCSS — configuración "premium".
 *
 * Estrategia de theming escalable:
 * - Los colores del sistema se exponen como variables CSS en `index.css`
 *   (`:root` para modo claro y `[data-theme="dark"]` para modo oscuro).
 * - Aquí mapeamos esos tokens a la paleta de Tailwind usando `rgb(var(--token))`,
 *   de modo que las clases utilitarias (`bg-surface`, `text-ink`, `text-teal`…)
 *   cambian automáticamente al alternar el tema, sin duplicar cada variante `dark:`.
 * - `darkMode: ['selector', ...]` mantiene el contrato original basado en
 *   el atributo `data-theme` del <html>.
 */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Tokens semánticos (canales RGB -> permiten /opacity en Tailwind)
        teal: 'rgb(var(--c-teal) / <alpha-value>)',
        'teal-deep': 'rgb(var(--c-teal-deep) / <alpha-value>)',
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        cyan: 'rgb(var(--c-cyan) / <alpha-value>)',
      },
      fontFamily: {
        // Fuente de marca: Outfit (cargada en index.html)
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        brand: '22px',
        'brand-sm': '14px',
        pill: '999px',
      },
      maxWidth: {
        wrap: '1240px',
      },
      boxShadow: {
        nav: '0 12px 40px -20px rgba(28, 32, 35, 0.18)',
        float: '0 20px 40px -15px rgba(28, 32, 35, 0.25)',
        card: '0 30px 60px -25px rgba(28, 32, 35, 0.3)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(var(--r, 0deg))' },
          '50%': { transform: 'translateY(-12px) rotate(var(--r, 0deg))' },
        },
        spin: {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 14s linear infinite',
        'spin-slow-reverse': 'spin 14s linear infinite reverse',
      },
    },
  },
  plugins: [],
};
