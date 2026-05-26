import SectionTag from '../ui/SectionTag';
import Highlight from '../ui/Highlight';
import { useLanguage } from '../../context/LanguageContext';
import { stats } from '../../data/stats';

/**
 * Stats — bloque oscuro de métricas que diferencian a Pakal.
 * Cada métrica empareja su número (data/stats) con su etiqueta (translations).
 */
export default function Stats() {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden rounded-[32px] bg-ink px-14 py-[72px] text-surface before:absolute before:-right-[120px] before:-top-[120px] before:h-[360px] before:w-[360px] before:rounded-full before:bg-teal before:opacity-15 before:blur-[40px] before:content-[''] dark:border dark:border-white/[0.06] max-[900px]:px-7 max-[900px]:py-12 max-[600px]:rounded-3xl max-[600px]:px-5 max-[600px]:py-10">
      <div className="relative z-[2] mb-14 max-w-[600px]">
        <SectionTag className="text-teal">{t.stats.tag}</SectionTag>
        <h2 className="m-0 text-balance text-[clamp(34px,4vw,52px)] font-semibold leading-[1.08] tracking-[-0.03em] text-surface">
          <Highlight text={t.stats.title} emphasisClassName="italic font-medium text-teal" />
        </h2>
      </div>

      <dl className="relative z-[2] m-0 grid grid-cols-6 gap-3 max-[1200px]:grid-cols-3 max-[900px]:grid-cols-2 max-[600px]:gap-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="border-t border-white/[0.12] pt-[22px] transition-colors duration-200 hover:border-teal"
          >
            <dd className="m-0 mb-3 text-[42px] font-semibold leading-none tracking-[-0.03em] max-[600px]:text-4xl">
              {stat.num}
              {stat.accent && <span className="text-teal">{stat.accent}</span>}
            </dd>
            <dt className="text-[13.5px] leading-[1.35] text-white/65">{t.stats.labels[i]}</dt>
          </div>
        ))}
      </dl>
    </div>
  );
}
