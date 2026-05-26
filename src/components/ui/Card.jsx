/**
 * Card — contenedor base reutilizable.
 *
 * Encapsula el patrón superficie + borde + radio que repiten las tarjetas de
 * servicios, proceso y testimonios. Las secciones lo componen y añaden su
 * contenido específico, evitando reescribir el "chrome" en cada una.
 *
 * @param {object} props
 * @param {React.ElementType} [props.as='div']  Etiqueta/elemento a renderizar (semántica).
 * @param {boolean} [props.interactive=false]   Activa elevación al pasar el cursor.
 * @param {string} [props.className]            Clases utilitarias extra.
 * @param {React.ReactNode} props.children
 */
const BASE =
  'rounded-brand border border-ink/[0.08] bg-surface p-7 transition-all duration-300';

const INTERACTIVE =
  'hover:-translate-y-1 hover:border-teal motion-safe:hover:shadow-card';

export default function Card({
  as: Tag = 'div',
  interactive = false,
  className = '',
  children,
  ...rest
}) {
  const classes = [BASE, interactive ? INTERACTIVE : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}
