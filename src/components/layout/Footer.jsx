import Logo from '../ui/Logo';
import Icon from '../ui/Icon';
import { useLanguage } from '../../context/LanguageContext';
import { navLinks } from '../../data/navigation';
import { socials } from '../../data/socials';

/**
 * Footer — pie de página.
 * Columnas: marca + redes, navegación, servicios y contacto; marca gigante con
 * degradado recortado; y barra inferior con derechos y enlaces legales.
 */
export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-20 bg-ink pb-8 pt-20 text-surface dark:bg-[#0a0c0e]">
      <div className="wrap">
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 border-b border-white/10 pb-14 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
          {/* Marca + descripción + redes */}
          <div>
            <Logo className="!text-[22px] text-surface" />
            <p className="my-5 mb-6 max-w-[320px] text-[14.5px] leading-[1.6] text-white/60">
              {t.footer.about}
            </p>
            <div className="flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-[38px] w-[38px] place-items-center rounded-full bg-white/[0.08] transition-colors duration-200 hover:bg-teal hover:text-ink"
                >
                  <Icon name={s.icon} size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navegación */}
          <FooterColumn title={t.footer.navTitle}>
            {navLinks.map((link) => (
              <FooterLink key={link.id} href={`#${link.id}`}>
                {t.nav[link.key]}
              </FooterLink>
            ))}
          </FooterColumn>

          {/* Servicios */}
          <FooterColumn title={t.footer.servicesTitle}>
            {t.footer.servicesLinks.map((label) => (
              <FooterLink key={label} href="#services">
                {label}
              </FooterLink>
            ))}
          </FooterColumn>

          {/* Contacto */}
          <FooterColumn title={t.footer.contactTitle}>
            <FooterLink href="mailto:hola@pakal.cloud">{t.contact.infoEmail}</FooterLink>
            <FooterLink href="https://pakal.cloud">pakal.cloud</FooterLink>
            <FooterLink href="#contact">{t.footer.ctaLink}</FooterLink>
          </FooterColumn>
        </div>

        {/* Marca gigante */}
        <div className="big-brand pt-14 text-center text-[clamp(80px,16vw,220px)] font-semibold leading-[0.85] tracking-[-0.06em]">
          PAKAL.CLOUD
        </div>

        {/* Barra inferior */}
        <div className="flex items-center justify-between pt-7 text-[13px] text-white/50 max-[600px]:flex-col max-[600px]:gap-3.5 max-[600px]:text-center">
          <div>{t.footer.rights}</div>
          <div className="flex gap-6">
            {t.footer.legal.map((label) => (
              <a key={label} href="#" className="transition-colors hover:text-teal">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/** Columna de enlaces del footer con título. */
function FooterColumn({ title, children }) {
  return (
    <div>
      <h5 className="m-0 mb-[18px] text-sm font-semibold uppercase tracking-[0.06em] text-teal">
        {title}
      </h5>
      <ul className="m-0 flex list-none flex-col gap-2.5 p-0">{children}</ul>
    </div>
  );
}

/** Enlace individual del footer. */
function FooterLink({ href, children }) {
  return (
    <li>
      <a href={href} className="text-[14.5px] text-white/70 transition-colors duration-200 hover:text-teal">
        {children}
      </a>
    </li>
  );
}
