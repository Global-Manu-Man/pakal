/**
 * Icon — registro central de iconos SVG.
 *
 * Mantener todos los SVG en un único lugar evita duplicarlos por todo el JSX
 * (el HTML original repetía el mismo `<svg>` decenas de veces). Los componentes
 * y los archivos de /data sólo referencian el icono por su `name`.
 *
 * Accesibilidad: por defecto el icono es decorativo (`aria-hidden`). Si se pasa
 * un `title`, se expone como `role="img"` con etiqueta accesible.
 *
 * @param {object} props
 * @param {string} props.name           Clave del icono en el registro.
 * @param {number} [props.size=24]      Tamaño en píxeles (ancho y alto).
 * @param {string} [props.className]    Clases utilitarias adicionales.
 * @param {string} [props.title]        Si se define, el icono deja de ser decorativo.
 */
const PATHS = {
  // Flecha diagonal (CTAs y tarjetas) — reescalada al viewBox 24x24 unificado
  arrow: <path d="M4 20L20 4M20 4H8M20 4V16" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />,
  // Servicios / etiquetas del hero
  monitor: <path d="M3 7h18v10H3zM7 21h10M12 17v4" strokeWidth="2" strokeLinecap="round" />,
  cloud: <path d="M3 15a4 4 0 014-4 6 6 0 0111.5 2A4.5 4.5 0 0118 21H7a4 4 0 01-4-4z" strokeWidth="2" strokeLinejoin="round" />,
  monitorAlt: (
    <>
      <path d="M3 5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" strokeWidth="2" />
      <path d="M8 21h8M12 17v4" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  terminal: <path d="M4 17l5-5-5-5M12 19h8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
  layers: (
    <>
      <path d="M8 7h8M8 12h8M8 17h5" strokeWidth="2" strokeLinecap="round" />
      <rect x="3" y="3" width="18" height="18" rx="3" strokeWidth="2" />
    </>
  ),
  migrate: <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
  shieldCheck: (
    <>
      <path d="M12 2l9 4v6c0 5-4 9-9 10C7 21 3 17 3 12V6l9-4z" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  clock: (
    <>
      <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" />
      <path d="M12 7v5l3 2" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  check: <path d="M5 12l5 5L20 7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />,
  // Contacto
  mail: <path d="M3 7l9 6 9-6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
  phone: <path d="M5 4h3l2 5-3 2a11 11 0 006 6l2-3 5 2v3a2 2 0 01-2 2A18 18 0 013 6a2 2 0 012-2z" strokeWidth="2" strokeLinejoin="round" />,
  pin: (
    <>
      <path d="M12 22s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12z" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" strokeWidth="2" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
    </>
  ),
  // Tema
  moon: <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </>
  ),
};

// Iconos con `fill` sólido (redes sociales) en lugar de `stroke`.
const FILLED = {
  twitter: <path d="M22 5.8a8.5 8.5 0 01-2.4.7 4.2 4.2 0 001.8-2.3 8.4 8.4 0 01-2.6 1A4.2 4.2 0 0011.5 9a12 12 0 01-8.7-4.4 4.2 4.2 0 001.3 5.6 4.1 4.1 0 01-1.9-.5v.1a4.2 4.2 0 003.4 4.1 4.2 4.2 0 01-1.9.1 4.2 4.2 0 003.9 2.9A8.4 8.4 0 012 18.5 12 12 0 008.4 20c7.7 0 12-6.4 12-12v-.5A8.5 8.5 0 0022 5.8z" />,
  linkedin: <path d="M4 4h4v4H4zM4 10h4v10H4zM10 10h4v2a4 4 0 014-2c3 0 4 2 4 5v5h-4v-4c0-2-1-3-2-3s-2 1-2 3v4h-4z" />,
  instagram: (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </g>
  ),
  dribbble: (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12c5 0 12 1 16 7M21 9c-5 1-13 1-18-3M9 3c3 5 5 12 4 18" />
    </g>
  ),
};

export default function Icon({ name, size = 24, className = '', title }) {
  const isFilled = name in FILLED;
  const body = isFilled ? FILLED[name] : PATHS[name];

  if (!body) return null;

  const a11y = title
    ? { role: 'img', 'aria-label': title }
    : { 'aria-hidden': 'true', focusable: 'false' };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill={isFilled ? 'currentColor' : 'none'}
      stroke={isFilled ? undefined : 'currentColor'}
      {...a11y}
    >
      {title && <title>{title}</title>}
      {body}
    </svg>
  );
}
