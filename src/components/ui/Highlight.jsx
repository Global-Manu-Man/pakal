import { Fragment } from 'react';

/**
 * Highlight — renderiza texto con énfasis en los fragmentos marcados con {llaves}.
 *
 * En el diccionario, los títulos marcan las palabras a destacar entre llaves,
 * por ejemplo: "Tecnología {moderna}, proceso {claro}...". Este componente
 * sustituye cada `{fragmento}` por un <em> itálico en color de marca, sin usar
 * `dangerouslySetInnerHTML` (más seguro y semántico que el enfoque original).
 *
 * @param {object} props
 * @param {string} props.text                 Texto con marcadores {…}.
 * @param {string} [props.emphasisClassName]  Clases para los fragmentos resaltados.
 */
export default function Highlight({
  text,
  emphasisClassName = 'italic font-medium text-teal-deep',
}) {
  // Divide conservando los delimitadores: "a {b} c" -> ["a ", "{b}", " c"]
  const parts = text.split(/(\{[^}]+\})/g);

  return (
    <>
      {parts.map((part, i) => {
        const match = part.match(/^\{([^}]+)\}$/);
        if (match) {
          return (
            <em key={i} className={emphasisClassName}>
              {match[1]}
            </em>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
