import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import { useLanguage } from '../../context/LanguageContext';

/**
 * Process — las cuatro etapas de trabajo, cada una con sus entregables.
 * El contenido (título, descripción y lista) vive en translations.process.items.
 */
export default function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="pb-[100px] max-[900px]:pb-16">
      <div className="wrap">
        <SectionHeader tag={t.process.tag} title={t.process.title} subhead={t.process.subhead} />

        <div className="grid grid-cols-4 gap-6 max-[980px]:grid-cols-2 max-[600px]:grid-cols-1">
          {t.process.items.map((step, i) => (
            <Card
              as="article"
              key={i}
              interactive
              className="!rounded-3xl !p-8 hover:bg-cyan max-[600px]:!p-[26px]"
            >
              <div className="mb-6 text-[44px] font-semibold leading-none tracking-[-0.02em] text-teal">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="mb-3 text-[22px] font-semibold tracking-[-0.015em]">{step.title}</h3>
              <p className="mb-4 text-sm leading-[1.6] text-ink/[0.65]">{step.desc}</p>
              <ul className="m-0 list-none border-t border-ink/[0.08] p-0 pt-4">
                {step.list.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-2 py-1.5 text-[13px] text-ink/[0.65] before:font-semibold before:text-teal before:content-['—']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
