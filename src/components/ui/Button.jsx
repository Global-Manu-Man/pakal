import Icon from './Icon';

/**
 * Button — botón/enlace reutilizable de marca.
 *
 * Polimórfico: por defecto renderiza un <button>; con `href` renderiza un <a>;
 * y con `as` (p. ej. el `Link` de react-router) renderiza ese componente. Así
 * un mismo estilo sirve para acciones, anclas y navegación SPA sin duplicar CSS.
 *
 * @param {object} props
 * @param {'primary'|'ghost'} [props.variant='primary']
 * @param {React.ElementType} [props.as]     Componente a renderizar (p. ej. Link).
 * @param {string} [props.href]               Si se define (y no hay `as`), renderiza <a>.
 * @param {boolean} [props.withArrow=false]   Muestra la flecha circular animada.
 * @param {boolean} [props.fullWidth=false]   Ocupa todo el ancho (útil en móvil).
 * @param {string} [props.className]          Clases utilitarias extra.
 * @param {React.ReactNode} props.children    Etiqueta del botón.
 */
const BASE =
  'inline-flex items-center gap-2.5 font-medium text-[15px] px-[22px] py-[13px] rounded-pill ' +
  'whitespace-nowrap transition-[transform,background-color,color,box-shadow] duration-200 ' +
  'focus-visible:outline-none disabled:cursor-default';

const VARIANTS = {
  primary:
    'bg-ink text-surface hover:bg-teal hover:text-ink hover:-translate-y-px ' +
    'dark:bg-teal dark:text-surface dark:hover:bg-ink dark:hover:text-teal',
  ghost:
    'bg-transparent text-ink border-[1.5px] border-ink hover:bg-ink hover:text-surface',
};

export default function Button({
  variant = 'primary',
  as,
  href,
  withArrow = false,
  fullWidth = false,
  className = '',
  children,
  ...rest
}) {
  const classes = [
    BASE,
    VARIANTS[variant],
    fullWidth ? 'w-full justify-center' : '',
    withArrow ? 'group' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {children}
      {withArrow && (
        <span className="grid h-[26px] w-[26px] place-items-center rounded-full bg-teal text-ink transition-colors duration-200 group-hover:bg-ink group-hover:text-teal">
          <Icon name="arrow" size={12} />
        </span>
      )}
    </>
  );

  // Resolución del elemento: `as` > `href` (<a>) > <button>.
  const Tag = as || (href ? 'a' : 'button');
  const tagProps = href && !as ? { href } : {};

  return (
    <Tag className={classes} {...tagProps} {...rest}>
      {content}
    </Tag>
  );
}
