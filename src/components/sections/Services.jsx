import SectionHeader from '../ui/SectionHeader';
import Icon from '../ui/Icon';
import { useLanguage } from '../../context/LanguageContext';
import { serviceMeta } from '../../data/services';

/**
 * Services — rejilla de servicios (ciclo de vida del producto digital).
 *
 * Empareja `serviceMeta` (icono + destacado, estructural) con
 * `translations.services.items` (texto). La primera tarjeta es "insignia":
 * ocupa dos columnas y usa la paleta invertida.
 */
export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="pb-[100px] max-[900px]:pb-16">
      <div className="wrap">
        <SectionHeader tag={t.services.tag} title={t.services.title} subhead={t.services.subhead} />

        <div className="grid grid-cols-1 gap-3.5 min-[601px]:grid-cols-2 min-[1201px]:grid-cols-4">
          {serviceMeta.map((meta, i) => (
            <ServiceCard
              key={i}
              index={i}
              icon={meta.icon}
              featured={meta.featured}
              title={t.services.items[i].title}
              desc={t.services.items[i].desc}
              flagshipLabel={t.services.flagship}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Tarjeta individual de servicio. */
function ServiceCard({ index, icon, featured, title, desc, flagshipLabel }) {
  // El número de la primera tarjeta incluye la etiqueta "Insignia".
  const num = featured ? `01 / ${flagshipLabel}` : String(index + 1).padStart(2, '0');

  // Conjuntos de clases divergentes según sea destacada o normal, porque la
  // inversión de color en hover difiere entre ambas.
  const container = featured
    ? 'group min-[601px]:col-span-2 bg-teal text-ink border-transparent hover:bg-ink hover:text-surface'
    : 'group bg-surface text-ink border-ink/[0.08] hover:bg-ink hover:text-surface dark:hover:bg-teal dark:hover:text-surface';

  const numCls = featured
    ? 'text-ink/55 group-hover:text-teal'
    : 'text-ink/60 group-hover:text-teal dark:group-hover:text-surface/55';

  const iconCls = featured
    ? 'bg-ink text-teal group-hover:bg-teal group-hover:text-ink'
    : 'bg-cyan text-teal-deep group-hover:bg-teal group-hover:text-ink dark:bg-teal/15 dark:text-teal dark:group-hover:bg-surface';

  const descCls = featured
    ? 'text-ink/70 group-hover:text-white/65'
    : 'text-ink/60 group-hover:text-white/65 dark:group-hover:text-surface/70';

  return (
    <article
      className={`flex min-h-[240px] cursor-pointer flex-col justify-between overflow-hidden rounded-brand border p-7 transition-all duration-[250ms] hover:-translate-y-1 motion-safe:hover:shadow-card ${container} max-[600px]:px-[22px]`}
    >
      <div>
        <div className={`text-[13px] font-medium transition-colors duration-200 ${numCls}`}>
          {num}
        </div>
        <div
          className={`mb-6 mt-6 grid h-12 w-12 place-items-center rounded-[14px] transition-all duration-200 group-hover:-rotate-[8deg] ${iconCls}`}
        >
          <Icon name={icon} size={22} />
        </div>
      </div>
      <div>
        <h3 className="m-0 mb-3.5 text-[22px] font-medium leading-[1.15] tracking-[-0.02em]">
          {title}
        </h3>
        <p className={`m-0 text-sm leading-[1.5] transition-colors duration-200 ${descCls}`}>
          {desc}
        </p>
      </div>
    </article>
  );
}
