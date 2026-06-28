import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FloatingControls from '../components/layout/FloatingControls';
import { useLanguage } from '../context/LanguageContext';

export default function PrivacyPolicy() {
  const { t } = useLanguage();
  const p = t.privacy;

  return (
    <>
      <Header />
      <main id="main" className="py-24 max-[600px]:py-14">
        <div className="wrap max-w-[780px]">
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-1.5 text-sm text-ink/50 transition-colors hover:text-teal"
          >
            ← {t.notFound.cta}
          </Link>

          <h1 className="mb-3 mt-6 text-[clamp(32px,5vw,52px)] font-semibold leading-[1.08] tracking-[-0.03em]">
            {p.title}
          </h1>
          <p className="mb-14 text-sm text-ink/40">{p.updated}</p>

          <div className="flex flex-col gap-10">
            {p.sections.map((section) => (
              <section key={section.title}>
                <h2 className="mb-2.5 text-[18px] font-semibold tracking-[-0.01em]">
                  {section.title}
                </h2>
                <p className="leading-[1.75] text-ink/70">{section.body}</p>
              </section>
            ))}
          </div>

          <div className="mt-16 border-t border-ink/10 pt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm text-ink/50 transition-colors hover:text-teal"
            >
              ← {t.notFound.cta}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingControls />
    </>
  );
}
