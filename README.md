# Pakal · Soluciones Tecnológicas Globales — Frontend en React

Migración de la landing page original (un único `index.html` con CSS y JS embebidos)
a una **arquitectura modular en React + Vite + TailwindCSS**, preservando el diseño,
el modo claro/oscuro y el sistema bilingüe ES/EN del original.

---

## ✨ Características

- **Microcomponentes reutilizables**: `Button`, `Card`, `Icon`, `SectionHeader`, `Logo`, etc.
- **TailwindCSS** con tokens de diseño y tema configurado (paleta, tipografía, animaciones).
- **Modo claro/oscuro** vía `ThemeContext` (persistido en `localStorage`, sin parpadeo/FOUC).
- **Bilingüe ES/EN** vía `LanguageContext` + diccionario tipado en `i18n/translations.js`.
- **React Router** con vista principal y página 404.
- **React Hooks** propios: `useLocalStorage`, `useMediaQuery`, `useScrollSpy`.
- **Lazy loading + code splitting**: cada sección y cada ruta se cargan en su propio chunk.
- **Accesibilidad**: HTML semántico, `aria-*`, foco visible, skip link y `prefers-reduced-motion`.
- **Mobile-first** y totalmente responsive (breakpoints 380 / 600 / 900 / 980 / 1200 px).
- **Pruebas unitarias** con Jest + React Testing Library.

---

## 🚀 Puesta en marcha

```bash
npm install        # instalar dependencias
npm run dev        # servidor de desarrollo (Vite) -> http://localhost:5173
npm run build      # build de producción en /dist
npm run preview    # previsualizar el build
npm test           # ejecutar la suite de pruebas
npm run test:coverage  # pruebas con reporte de cobertura
```

> Requiere Node.js 18+.

---

## 🧱 Estructura del proyecto

```
src/
├── main.jsx                  # Punto de entrada: monta <App> en el DOM
├── App.jsx                   # Providers globales + React Router (rutas lazy)
├── index.css                 # Directivas Tailwind + tokens de diseño + capa de ilustraciones
│
├── context/                  # Estado global (Context API)
│   ├── ThemeContext.jsx      # Modo claro/oscuro
│   └── LanguageContext.jsx   # Idioma ES/EN
│
├── hooks/                    # Hooks reutilizables
│   ├── useLocalStorage.js
│   ├── useMediaQuery.js
│   └── useScrollSpy.js
│
├── i18n/
│   └── translations.js       # Diccionario ES/EN (única fuente de verdad del copy)
│
├── data/                     # Datos estructurales (no traducibles)
│   ├── navigation.js · socials.js · services.js
│   ├── stats.js · portfolio.js · contactInfo.js
│
├── components/
│   ├── ui/                   # Microcomponentes de presentación
│   │   ├── Button.jsx · Card.jsx · Icon.jsx · Logo.jsx
│   │   ├── Highlight.jsx · SectionTag.jsx · SectionHeader.jsx
│   │   └── ThemeToggle.jsx · LanguageToggle.jsx
│   ├── layout/               # Estructura de página
│   │   ├── Header.jsx · Navbar.jsx · Footer.jsx
│   │   ├── MainContent.jsx · FloatingControls.jsx
│   ├── sections/             # Secciones de la landing (lazy)
│   │   ├── Hero.jsx · HeroArt.jsx · About.jsx · Stats.jsx
│   │   ├── Services.jsx · Process.jsx · Portfolio.jsx
│   │   ├── Mission.jsx · Testimonials.jsx · ClientFocus.jsx · Contact.jsx
│   └── forms/
│       └── ContactForm.jsx   # Formulario controlado con validación
│
└── pages/
    ├── Home.jsx              # Vista principal (Header + MainContent + Footer)
    └── NotFound.jsx          # Vista 404
```

---

## 🎨 Sistema de estilos (theming escalable)

El reto principal de la migración fue conservar el modo oscuro del original sin
duplicar una variante `dark:` por cada utilidad. La solución:

1. Los colores se definen como **variables CSS en canales RGB** en `index.css`
   (`:root` para claro, `[data-theme="dark"]` para oscuro).
2. `tailwind.config.js` los mapea a la paleta con `rgb(var(--token) / <alpha-value>)`,
   de modo que `bg-surface`, `text-ink`, `text-teal` o `text-ink/60` **cambian solas**
   al alternar el tema.
3. El layout, espaciado, tipografía y color viven como utilidades Tailwind en el JSX.
   La capa `@layer components` queda reservada **solo** para las ilustraciones
   decorativas (maquetas de laptop/teléfono, mockups del portafolio), que serían
   ilegibles como decenas de clases sueltas.

---

## 🌐 Internacionalización

- `i18n/translations.js` contiene el objeto `{ es, en }` con todo el texto.
- `useLanguage()` expone `lang`, `t` (traducciones del idioma activo) y `toggleLang()`.
- Los títulos marcan las palabras a resaltar entre llaves (`"Tecnología {moderna}…"`);
  el componente `<Highlight>` las convierte en `<em>` sin usar `dangerouslySetInnerHTML`.

---

## ♿ Accesibilidad

- Estructura semántica: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`, `<figure>`.
- Skip link "Saltar al contenido" para navegación por teclado.
- Botones con `aria-label` / `aria-expanded`; enlaces activos con `aria-current`.
- Formulario con `label↔control`, `aria-invalid`, `aria-describedby` y errores con `role="alert"`.
- Iconos decorativos con `aria-hidden`; respeto de `prefers-reduced-motion`.

---

## ⚡ Rendimiento

- **Code splitting por ruta**: `Home` y `NotFound` se cargan con `React.lazy`.
- **Code splitting por sección**: todo lo "below the fold" se difiere; el `Hero` se
  importa de forma estática para pintar de inmediato.
- `manualChunks` separa el vendor de React y el router para mejor cacheo.

---

## 🧪 Pruebas

Cobertura representativa con Jest + React Testing Library:

| Suite | Qué verifica |
|-------|--------------|
| `Button.test.jsx` | Polimorfismo (`button`/`a`/`as`), variantes, flecha, `onClick` |
| `Card.test.jsx` | Render de hijos, prop `as`, clases interactivas |
| `ContactForm.test.jsx` | Validación de obligatorios y correo, envío y callback |
| `ThemeContext.test.jsx` | Alternancia de tema, `data-theme`, persistencia, guardas del hook |
| `Navbar.test.jsx` | Enlaces, menú móvil (`aria-expanded`), enlace activo |

```bash
npm test
# Test Suites: 5 passed · Tests: 18 passed
```

---

## 🛠️ Stack

React 18 · Vite 5 · React Router 6 · TailwindCSS 3 · Jest 29 · React Testing Library

---

© 2026 Pakal. Migración a arquitectura modular React.
# pakal
