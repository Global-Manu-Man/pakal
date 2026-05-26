import { useEffect, useRef, useState } from 'react';
import Logo from '../ui/Logo';
import Icon from '../ui/Icon';
import Button from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { navLinks } from '../../data/navigation';

const SECTION_IDS = navLinks.map((l) => l.id);

/**
 * Navbar — barra de navegación fija tipo "pill".
 *
 * Migra la lógica imperativa del HTML original a React:
 *  - `useScrollSpy` resalta el enlace de la sección visible.
 *  - `useState` controla la apertura del menú móvil.
 *  - `useEffect` cierra el menú al hacer clic fuera o pulsar Escape.
 *  - `useMediaQuery` lo cierra automáticamente al volver a escritorio.
 *
 * Accesibilidad: <nav> etiquetado, botón hamburguesa con `aria-expanded`,
 * y enlace de salto al contenido para usuarios de teclado/lector de pantalla.
 */
export default function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const activeId = useScrollSpy(SECTION_IDS);
  const isDesktop = useMediaQuery('(min-width: 901px)');

  // Cierra el menú al pasar a escritorio.
  useEffect(() => {
    if (isDesktop) setOpen(false);
  }, [isDesktop]);

  // Cierra al hacer clic fuera del nav o al pulsar Escape.
  useEffect(() => {
    if (!open) return undefined;
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const linkBase =
    'rounded-pill px-4 py-[9px] text-[14.5px] font-medium transition-colors duration-200 ' +
    'hover:bg-cyan hover:text-ink dark:hover:bg-teal/20 dark:hover:text-teal';
  const linkActive = 'bg-ink text-surface dark:bg-teal dark:text-surface';

  return (
    <nav
      ref={navRef}
      aria-label="Principal"
      className="fixed left-1/2 top-[18px] z-50 flex w-[calc(100%-48px)] max-w-wrap -translate-x-1/2 items-center justify-between rounded-pill border border-ink/[0.06] bg-surface/[0.78] py-3 pl-6 pr-3.5 shadow-nav backdrop-blur-[18px] backdrop-saturate-150 dark:border-white/[0.08] max-[600px]:top-3 max-[600px]:px-3.5"
    >
      <Logo />

      {/* Menú: fila en escritorio, desplegable absoluto en móvil */}
      <div
        className={
          'flex items-center gap-1 ' +
          'max-[900px]:absolute max-[900px]:left-0 max-[900px]:right-0 max-[900px]:top-[calc(100%+12px)] ' +
          'max-[900px]:flex-col max-[900px]:items-stretch max-[900px]:gap-1 max-[900px]:rounded-brand ' +
          'max-[900px]:border max-[900px]:border-ink/[0.06] max-[900px]:bg-surface/95 max-[900px]:p-3.5 ' +
          'max-[900px]:shadow-[0_24px_60px_-20px_rgba(28,32,35,0.25)] max-[900px]:backdrop-blur-[18px] ' +
          'max-[900px]:transition-all max-[900px]:duration-200 dark:max-[900px]:border-white/[0.08] ' +
          (open
            ? 'max-[900px]:pointer-events-auto max-[900px]:translate-y-0 max-[900px]:opacity-100'
            : 'max-[900px]:pointer-events-none max-[900px]:-translate-y-2 max-[900px]:opacity-0')
        }
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setOpen(false)}
            aria-current={activeId === link.id ? 'true' : undefined}
            className={`${linkBase} ${activeId === link.id ? linkActive : 'text-ink dark:text-ink/80'} max-[900px]:flex max-[900px]:items-center max-[900px]:justify-between max-[900px]:px-[18px] max-[900px]:py-3.5 max-[900px]:text-base`}
          >
            {t.nav[link.key]}
          </a>
        ))}

        {/* CTA visible sólo dentro del menú móvil */}
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="hidden items-center justify-center gap-2.5 rounded-[14px] bg-ink px-[18px] py-3.5 font-medium text-surface hover:bg-teal hover:text-ink dark:bg-teal dark:text-surface max-[900px]:mt-2.5 max-[900px]:flex"
        >
          {t.nav.cta}
          <Icon name="arrow" size={12} />
        </a>
      </div>

      {/* CTA de escritorio */}
      <Button
        href="#contact"
        variant="primary"
        withArrow
        className="!py-2.5 !pl-5 !pr-2 !text-sm max-[900px]:hidden"
        data-cta="primary"
      >
        {t.nav.cta}
      </Button>

      {/* Botón hamburguesa (sólo móvil) */}
      <button
        type="button"
        aria-label={t.a11y.toggleMenu}
        aria-expanded={open}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
        className="ml-2 hidden h-[42px] w-[42px] items-center justify-center rounded-full text-ink transition-colors hover:bg-cyan dark:text-ink dark:hover:bg-teal/20 max-[900px]:inline-flex"
      >
        <span className="relative block h-3.5 w-[18px]">
          <span
            className={`absolute left-0 right-0 block h-0.5 rounded bg-current transition-all duration-200 ${open ? 'top-1.5 rotate-45' : 'top-0'}`}
          />
          <span
            className={`absolute left-0 right-0 top-1.5 block h-0.5 rounded bg-current transition-all duration-200 ${open ? 'opacity-0' : 'opacity-100'}`}
          />
          <span
            className={`absolute left-0 right-0 block h-0.5 rounded bg-current transition-all duration-200 ${open ? 'top-1.5 -rotate-45' : 'top-3'}`}
          />
        </span>
      </button>
    </nav>
  );
}
