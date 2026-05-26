import SectionHeader from '../ui/SectionHeader';
import Stats from './Stats';
import { useLanguage } from '../../context/LanguageContext';

/**
 * About — presentación de Pakal. Encabezado de sección + bloque de métricas.
 */
export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-[100px] max-[900px]:py-16">
      <div className="wrap">
        <SectionHeader tag={t.about.tag} title={t.about.title} subhead={t.about.subhead} />
        <Stats />
      </div>
    </section>
  );
}
