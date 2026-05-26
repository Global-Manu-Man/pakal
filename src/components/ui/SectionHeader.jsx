import SectionTag from './SectionTag';
import Highlight from './Highlight';

/**
 * SectionHeader — encabezado estándar de las secciones de contenido.
 *
 * Reproduce el patrón `.section-head` del original: rejilla de dos columnas
 * (etiqueta + título a la izquierda, subtítulo a la derecha) que colapsa a una
 * sola columna en móvil. El título admite marcadores {…} para resaltar palabras.
 *
 * @param {object} props
 * @param {string} props.tag                Texto de la etiqueta superior.
 * @param {string} props.title              Título con marcadores {…} de énfasis.
 * @param {string} [props.subhead]          Párrafo descriptivo (opcional).
 * @param {boolean} [props.onDark=false]    Ajusta colores para fondos oscuros.
 */
export default function SectionHeader({ tag, title, subhead, onDark = false }) {
  return (
    <div className="mb-14 grid items-end gap-14 md:grid-cols-[1fr_1.2fr]">
      <div>
        <SectionTag className={onDark ? 'text-teal' : ''}>{tag}</SectionTag>
        <h2
          className={`m-0 text-balance text-[clamp(34px,4vw,52px)] font-semibold leading-[1.08] tracking-[-0.03em] ${
            onDark ? 'text-surface' : 'text-ink'
          }`}
        >
          <Highlight
            text={title}
            emphasisClassName={`italic font-medium ${onDark ? 'text-teal' : 'text-teal-deep'}`}
          />
        </h2>
      </div>
      {subhead && (
        <p className="m-0 max-w-[520px] text-[17px] leading-[1.55] text-ink/60">{subhead}</p>
      )}
    </div>
  );
}
