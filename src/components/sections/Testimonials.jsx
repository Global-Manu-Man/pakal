import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import { useLanguage } from '../../context/LanguageContext';

/**
 * Testimonials — opiniones de clientes en tarjetas.
 * Las tarjetas 1 y 5 se tiñen de acento (igual que el diseño original).
 */
export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="pb-[100px] pt-10 max-[900px]:pb-16">
      <div className="wrap">
        <SectionHeader
          tag={t.testimonials.tag}
          title={t.testimonials.title}
          subhead={t.testimonials.subhead}
        />

        <div className="grid grid-cols-3 gap-5 max-[980px]:grid-cols-2 max-[600px]:grid-cols-1">
          {t.testimonials.items.map((item, i) => {
            const tinted = i === 0 || i === 4; // 1ª y 5ª resaltadas
            return (
              <Card
                as="figure"
                key={i}
                interactive
                className={`m-0 flex flex-col !rounded-3xl !p-8 max-[600px]:!p-[26px] ${tinted ? '!bg-cyan' : ''}`}
              >
                <div className="mb-2 font-serif text-[64px] font-semibold leading-[0.7] text-teal" aria-hidden="true">
                  “
                </div>
                <blockquote className="m-0 mb-6 flex-1 text-[15px] leading-[1.6] text-ink/[0.65]">
                  {item.quote}
                </blockquote>
                <figcaption className="flex items-center gap-3 border-t border-ink/[0.08] pt-5">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-base font-semibold text-teal dark:bg-teal dark:text-surface">
                    {item.author.charAt(0)}
                  </span>
                  <span>
                    <b className="block text-sm font-semibold">{item.author}</b>
                    <span className="block text-xs text-ink/50">{item.role}</span>
                  </span>
                </figcaption>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
