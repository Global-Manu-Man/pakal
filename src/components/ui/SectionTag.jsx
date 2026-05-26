/**
 * SectionTag — pequeña etiqueta de sección con un guion decorativo delante.
 * Reemplaza la pseudo-regla `.section-tag::before` del CSS original.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children  Texto de la etiqueta.
 * @param {string} [props.className]        Clases extra (p. ej. variante en fondos oscuros).
 */
export default function SectionTag({ children, className = '' }) {
  return (
    <span
      className={`mb-[18px] inline-flex items-center gap-2 text-[13px] font-medium text-teal-deep before:h-[1.5px] before:w-6 before:bg-current before:content-[''] ${className}`}
    >
      {children}
    </span>
  );
}
