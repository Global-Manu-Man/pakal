import Header from '../components/layout/Header';
import MainContent from '../components/layout/MainContent';
import Footer from '../components/layout/Footer';
import FloatingControls from '../components/layout/FloatingControls';

/**
 * Home — vista principal (landing).
 * Ensambla el layout completo: cabecera, contenido y pie, más los controles
 * flotantes de idioma/tema. Es la única vista de contenido del sitio.
 */
export default function Home() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
      <FloatingControls />
    </>
  );
}
