/**
 * Diccionario de traducciones (única fuente de verdad del copy).
 *
 * Estructura: { es: {...}, en: {...} } con la misma forma en ambos idiomas.
 * Los datos puramente estructurales (iconos, ids, enlaces) viven en /data;
 * aquí sólo está el texto visible al usuario.
 */
export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      process: 'Proceso',
      work: 'Portafolio',
      testimonials: 'Testimonios',
      contact: 'Contacto',
      cta: 'Solicitar cotización',
    },
    hero: {
      eyebrow: 'Soluciones Tecnológicas Globales · pakal.cloud',
      titleA: 'Soluciones',
      titleB: 'tecnológicas',
      titleC: 'a medida',
      titleD: 'para hacer crecer tu negocio.',
      lead: 'Contáctanos para crear una solución a medida que se adapte perfectamente a tus necesidades específicas — desarrollo web, nube AWS, integraciones y soporte continuo.',
      ctaPrimary: 'Solicitar cotización',
      ctaSecondary: 'Ve nuestro trabajo.',
      metaStrong: '4.1K+ clientes felices',
      metaRest: 'en 28 países',
      tag1Title: 'Desarrollo Web',
      tag1Sub: 'Sitios y apps a medida',
      tag2Title: 'Nube AWS',
      tag2Sub: 'Escalable, segura, optimizada',
    },
    about: {
      tag: 'Sobre Pakal',
      title: 'Acompañamos a tu negocio desde la {idea} hasta el {lanzamiento} y el mantenimiento continuo.',
      subhead:
        'Ofrecemos soluciones tecnológicas integrales adaptadas a las necesidades específicas de tu negocio. Utilizamos las herramientas más avanzadas para crear soluciones de vanguardia, escalables, seguras y orientadas a la experiencia del usuario.',
    },
    stats: {
      tag: 'Lo que nos diferencia',
      title: 'Tecnología {moderna}, proceso {claro} y trato {cercano}.',
      labels: [
        'Soluciones a medida',
        'Pérdida de datos en migraciones',
        'Respaldos programados',
        'Etapas de proceso',
        'Despliegue continuo',
        'Infraestructura en la nube',
      ],
    },
    services: {
      tag: '¿Cómo te ayudamos?',
      title: 'Servicios {integrales} para todo el ciclo de vida de tu producto digital.',
      subhead:
        'Desde el primer prototipo hasta el monitoreo posterior al lanzamiento. Plug-and-play con tu equipo — elige lo que necesitas y nos integramos sin fricción.',
      flagship: 'Insignia',
      items: [
        {
          title: 'Desarrollo web a medida',
          desc: 'Sitios y aplicaciones web construidos con las últimas tecnologías, optimizados para rendimiento, accesibilidad y SEO, con foco en la experiencia de usuario.',
        },
        {
          title: 'Servicios en la nube (AWS)',
          desc: 'Implementación de servicios en Amazon Web Services para escalabilidad, seguridad y rendimiento óptimos.',
        },
        {
          title: 'CI/CD & servidores',
          desc: 'Servidores optimizados con integración y despliegue continuo para mantener tu sitio siempre actualizado.',
        },
        {
          title: 'Integraciones',
          desc: 'Conectamos tu sitio con los sistemas que ya utilizas para maximizar la eficiencia de tu negocio.',
        },
        {
          title: 'Migraciones',
          desc: 'Trasladamos tu sitio actual a la infraestructura de Pakal con cero pérdida de datos y tiempo mínimo de inactividad.',
        },
        {
          title: 'Respaldos programados',
          desc: 'Sistemas de respaldo automáticos que garantizan la seguridad de tu información en todo momento.',
        },
        {
          title: 'Soporte continuo',
          desc: 'Asistencia continua para resolver cualquier problema y mantener tu sitio funcionando perfectamente.',
        },
      ],
    },
    process: {
      tag: 'Proceso de trabajo',
      title: 'Cuatro etapas que {reducen riesgos} y aseguran calidad.',
      subhead:
        'Nuestro proceso de trabajo garantiza resultados excepcionales. Desde la planificación hasta el monitoreo posterior al lanzamiento, cada etapa tiene objetivos claros y entregables definidos.',
      items: [
        {
          title: 'Planificación',
          desc: 'Establecemos las bases del proyecto, definiendo claramente los objetivos, el alcance y las expectativas para garantizar una visión compartida con el cliente.',
          list: ['Workshops de descubrimiento', 'Definición de alcance', 'Roadmap y entregables'],
        },
        {
          title: 'Desarrollo',
          desc: 'Transformamos los diseños en código funcional, implementando todas las características y asegurando una experiencia de usuario óptima.',
          list: ['UI/UX y prototipos', 'Stack moderno (AWS, CI/CD)', 'Sprints semanales'],
        },
        {
          title: 'Pruebas y lanzamiento',
          desc: 'Realizamos pruebas exhaustivas para garantizar que todo funcione correctamente antes del lanzamiento, asegurando una transición sin problemas.',
          list: ['QA técnico y funcional', 'Despliegue sin downtime', 'Capacitación del equipo'],
        },
        {
          title: 'Monitoreo y mejora',
          desc: 'Monitoreamos el rendimiento del sitio y recopilamos retroalimentación para implementar mejoras continuas que maximicen el retorno de inversión (ROI).',
          list: ['Métricas de rendimiento', 'Iteraciones basadas en datos', 'Soporte y mantenimiento'],
        },
      ],
    },
    portfolio: {
      stackLabel: 'Stack',
      tag: 'Portafolio',
      title: 'Proyectos que reflejan nuestra {versatilidad}.',
      badge1Title: 'Soluciones',
      badge1Sub: 'tecnológicas globales',
      badge2Title: 'End-to-end',
      badge2Sub: 'De la idea al deploy',
      items: [
        { tag: 'E-commerce', title: 'Plataforma e-commerce', sub: 'Catálogo · Pagos · Inventario' },
        { tag: 'Reservaciones', title: 'Reservaciones online', sub: 'Plataforma interactiva' },
        {
          tag: 'Sitio institucional',
          title: 'Hidro-Electric & Lentillas',
          sub: 'Sitios y tiendas en línea',
        },
      ],
    },
    mission: {
      quote:
        'Contáctanos para crear una solución a medida que se adapte {perfectamente} a tus necesidades específicas.',
      signature: '— EL EQUIPO DE PAKAL',
    },
    testimonials: {
      tag: 'Testimonios',
      title: 'Lo que dicen nuestros {clientes}.',
      subhead:
        'La experiencia de quienes han trabajado con nosotros: profesionalidad, atención al detalle y cumplimiento en tiempo y forma.',
      items: [
        {
          quote:
            'Excelente servicio, me apoyaron desarrollando la página web de mi negocio. Muy buena atención, servicio y en tiempo.',
          author: 'María L.',
          role: 'Negocio local',
        },
        {
          quote:
            'Lo recomiendo ampliamente porque son muy profesionales en su trabajo, cumplieron todas nuestras expectativas en tiempo y forma sobre la página web de nuestra empresa.',
          author: 'Carlos R.',
          role: 'Empresa',
        },
        {
          quote:
            'El trato con Emmanuel ha sido muy cordial y me ha explicado en detalle el alcance del proyecto. El sitio fue entregado en los plazos acordados y se ve bien en todos los dispositivos.',
          author: 'Andrea P.',
          role: 'Cliente',
        },
        {
          quote:
            'El servicio fue muy atento en todo momento, resolvieron mis dudas y también me dieron sugerencias para que mi sitio web estuviera perfecto. Servicio recomendado.',
          author: 'Diego S.',
          role: 'Emprendedor',
        },
        {
          quote:
            'Muy recomendables. Hubo un retraso mínimo en la entrega del sitio pero hicieron exactamente lo que acordamos.',
          author: 'Laura V.',
          role: 'Negocio',
        },
      ],
    },
    focus: {
      tag: 'Compromiso',
      title: 'Nuestro compromiso es {contigo} y con tu negocio.',
      desc: 'Cada negocio es diferente — las soluciones genéricas no funcionan. Empezamos escuchando, y luego adaptamos cada recomendación, cada interacción y cada línea de código a tus objetivos, audiencia y restricciones específicas.',
      list: [
        'Soluciones a medida para tu negocio',
        'Soluciones escalables que crecen contigo',
        'Migraciones con cero pérdida de datos',
        'Asistencia continua post-lanzamiento',
      ],
      cta: 'Solicitar cotización',
      pills: ['Planificación', 'Desarrollo', 'Pruebas y lanzamiento', 'Monitoreo y mejora'],
    },
    contact: {
      tag: 'Contacto',
      title: 'Empecemos a construir {tu próximo proyecto}.',
      desc: 'Completa los siguientes datos y nos pondremos en contacto a la brevedad. Contáctanos para crear una solución a medida que se adapte perfectamente a tus necesidades específicas.',
      infoEmail: 'hola@pakal.cloud',
      infoSite: 'pakal.cloud',
      infoEmailSub: 'Para consultas y cotizaciones',
      infoSiteSub: 'Sitio web oficial',
      infoGlobalTitle: 'Soluciones globales',
      infoGlobalSub: 'Trabajamos con equipos en todo el mundo',
      labelFirst: 'Nombre',
      labelLast: 'Apellido',
      labelEmail: 'Correo electrónico',
      labelMessage: 'Mensaje',
      phFirst: 'Tu nombre',
      phLast: 'Tu apellido',
      phEmail: 'tu@empresa.com',
      phMessage: 'Cuéntanos sobre tu proyecto — objetivos, plazos, lo que sea útil.',
      checkboxPrivacyPre: 'Acepto la',
      checkboxPrivacyLink: 'política de privacidad',
      submit: 'Solicitar cotización',
      sent: 'Enviado ✓',
      errRequired: 'Este campo es obligatorio.',
      errEmail: 'Introduce un correo válido.',
    },
    footer: {
      about:
        'Soluciones tecnológicas globales — desarrollo web a medida, servicios en la nube e integraciones para negocios de cualquier tamaño. Te acompañamos desde la idea hasta el mantenimiento continuo.',
      navTitle: 'Navegación',
      servicesTitle: 'Servicios',
      servicesLinks: [
        'Desarrollo web',
        'Servicios AWS',
        'CI/CD & servidores',
        'Integraciones',
        'Migraciones',
        'Soporte continuo',
      ],
      contactTitle: 'Contáctanos',
      ctaLink: 'Solicitar cotización →',
      rights: '© 2026 Pakal. Todos los derechos reservados.',
      legal: ['Privacidad', 'Términos', 'Cookies'],
    },
    a11y: {
      toggleMenu: 'Abrir o cerrar menú',
      toggleTheme: 'Cambiar modo claro/oscuro',
      toggleLang: 'Cambiar idioma',
      skipToContent: 'Saltar al contenido principal',
    },
    notFound: {
      title: 'Página no encontrada',
      desc: 'La página que buscas no existe o fue movida.',
      cta: 'Volver al inicio',
    },
    privacy: {
      title: 'Política de Privacidad',
      updated: 'Última actualización: 28 de junio de 2026',
      sections: [
        {
          title: '¿Quiénes somos?',
          body: 'Pakal (pakal.cloud) es una empresa de soluciones tecnológicas que ofrece desarrollo web a medida, servicios en la nube e integraciones para negocios de cualquier tamaño.',
        },
        {
          title: 'Datos que recopilamos',
          body: 'Recopilamos únicamente los datos que tú nos proporcionas a través del formulario de contacto: nombre, apellido, correo electrónico, número de teléfono, empresa y el contenido de tu mensaje. No recopilamos datos de navegación ni usamos cookies de rastreo.',
        },
        {
          title: 'Cómo usamos tus datos',
          body: 'Los datos recibidos se utilizan exclusivamente para responder a tu consulta o solicitud de cotización. No vendemos, compartimos ni cedemos tu información a terceros con fines comerciales.',
        },
        {
          title: 'Cookies',
          body: 'Este sitio no utiliza cookies de rastreo ni publicitarias. Solo pueden emplearse cookies técnicas esenciales para el funcionamiento de la página.',
        },
        {
          title: 'Servicios de terceros',
          body: 'El formulario de contacto utiliza Formspree (formspree.io) para el envío y gestión de mensajes. Formspree puede procesar temporalmente tu información de acuerdo con sus propios términos de servicio.',
        },
        {
          title: 'Tus derechos',
          body: 'Tienes derecho a acceder, rectificar o eliminar los datos que nos hayas proporcionado. Para ejercer cualquiera de estos derechos, escríbenos a hola@pakal.cloud.',
        },
        {
          title: 'Cambios a esta política',
          body: 'Nos reservamos el derecho de actualizar esta política en cualquier momento. La fecha de última actualización se indica al inicio de esta página.',
        },
        {
          title: 'Contacto',
          body: 'Si tienes dudas sobre esta política de privacidad, escríbenos a hola@pakal.cloud.',
        },
      ],
    },
  },

  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      process: 'Process',
      work: 'Portfolio',
      testimonials: 'Testimonials',
      contact: 'Contact',
      cta: 'Request a quote',
    },
    hero: {
      eyebrow: 'Global Tech Solutions · pakal.cloud',
      titleA: 'Tailored',
      titleB: 'tech solutions',
      titleC: 'to grow',
      titleD: 'your business.',
      lead: "Get in touch and let's build a solution that fits your specific needs — web development, AWS cloud, integrations and continuous support.",
      ctaPrimary: 'Request a quote',
      ctaSecondary: 'See our work.',
      metaStrong: '4.1K+ happy clients',
      metaRest: 'across 28 countries',
      tag1Title: 'Web Development',
      tag1Sub: 'Custom sites & apps',
      tag2Title: 'AWS Cloud',
      tag2Sub: 'Scalable, secure, optimized',
    },
    about: {
      tag: 'About Pakal',
      title: 'We accompany your business from {idea} to {launch} and ongoing maintenance.',
      subhead:
        'We offer comprehensive tech solutions tailored to your specific business needs. We use the most advanced tools to create cutting-edge solutions — scalable, secure and user-experience focused.',
    },
    stats: {
      tag: 'What sets us apart',
      title: '{Modern} tech, {clear} process and {close} communication.',
      labels: [
        'Tailored solutions',
        'Data loss in migrations',
        'Scheduled backups',
        'Process stages',
        'Continuous deployment',
        'Cloud infrastructure',
      ],
    },
    services: {
      tag: 'How can we help?',
      title: 'End-to-end services for {every stage} of your digital product.',
      subhead:
        "From the first prototype to post-launch monitoring. Plug-and-play with your team — pick what you need and we'll integrate seamlessly.",
      flagship: 'Flagship',
      items: [
        {
          title: 'Custom web development',
          desc: 'Sites and web apps built with the latest technologies, optimized for performance, accessibility and SEO, with a focus on user experience.',
        },
        {
          title: 'Cloud services (AWS)',
          desc: 'Implementation of Amazon Web Services for optimal scalability, security and performance.',
        },
        {
          title: 'CI/CD & servers',
          desc: 'Optimized servers with continuous integration and deployment to keep your site always up to date.',
        },
        {
          title: 'Integrations',
          desc: 'We connect your site with the systems you already use to maximize business efficiency.',
        },
        {
          title: 'Migrations',
          desc: 'We move your current site to Pakal infrastructure with zero data loss and minimum downtime.',
        },
        {
          title: 'Scheduled backups',
          desc: 'Automatic backup systems that ensure your information is safe at all times.',
        },
        {
          title: 'Continuous support',
          desc: 'Ongoing assistance to solve any issue and keep your site running perfectly.',
        },
      ],
    },
    process: {
      tag: 'Our process',
      title: 'Four stages that {reduce risk} and ensure quality.',
      subhead:
        'Our work process guarantees exceptional results. From planning to post-launch monitoring, every stage has clear objectives and defined deliverables.',
      items: [
        {
          title: 'Planning',
          desc: 'We lay the foundations of the project, clearly defining objectives, scope and expectations to ensure a shared vision with the client.',
          list: ['Discovery workshops', 'Scope definition', 'Roadmap & deliverables'],
        },
        {
          title: 'Development',
          desc: 'We turn designs into functional code, implementing every feature and ensuring an optimal user experience.',
          list: ['UI/UX & prototypes', 'Modern stack (AWS, CI/CD)', 'Weekly sprints'],
        },
        {
          title: 'Testing & launch',
          desc: 'We run thorough tests to make sure everything works correctly before launch, ensuring a smooth transition.',
          list: ['Technical & functional QA', 'Zero-downtime deploy', 'Team training'],
        },
        {
          title: 'Monitoring & improvement',
          desc: 'We monitor site performance and gather feedback to drive continuous improvements that maximize your return on investment (ROI).',
          list: ['Performance metrics', 'Data-driven iterations', 'Support & maintenance'],
        },
      ],
    },
    portfolio: {
      stackLabel: 'Stack',
      tag: 'Portfolio',
      title: 'Projects that reflect our {versatility}.',
      badge1Title: 'Solutions',
      badge1Sub: 'global tech',
      badge2Title: 'End-to-end',
      badge2Sub: 'From idea to deploy',
      items: [
        { tag: 'E-commerce', title: 'E-commerce platform', sub: 'Catalog · Payments · Inventory' },
        { tag: 'Reservations', title: 'Online reservations', sub: 'Interactive platform' },
        {
          tag: 'Institutional site',
          title: 'Hidro-Electric & Lentillas',
          sub: 'Sites and online stores',
        },
      ],
    },
    mission: {
      quote:
        "Get in touch and we'll create a tailored solution that fits your specific needs {perfectly}.",
      signature: '— THE PAKAL TEAM',
    },
    testimonials: {
      tag: 'Testimonials',
      title: 'What our {clients} say.',
      subhead:
        'The experience of those who have worked with us: professionalism, attention to detail and on-time delivery.',
      items: [
        {
          quote:
            'Excellent service — they helped me develop the website for my business. Great support, great service and on time.',
          author: 'María L.',
          role: 'Local business',
        },
        {
          quote:
            'I highly recommend them — they are very professional, they exceeded all our expectations on time and to spec for our company website.',
          author: 'Carlos R.',
          role: 'Company',
        },
        {
          quote:
            'Working with Emmanuel was very pleasant; he explained the scope of the project in detail. The site was delivered on schedule and looks great on every device.',
          author: 'Andrea P.',
          role: 'Client',
        },
        {
          quote:
            'The service was attentive throughout, they answered all my questions and made suggestions to make sure my site was perfect. Recommended.',
          author: 'Diego S.',
          role: 'Founder',
        },
        {
          quote:
            'Highly recommended. There was a small delay in delivery but they delivered exactly what we agreed.',
          author: 'Laura V.',
          role: 'Business',
        },
      ],
    },
    focus: {
      tag: 'Our commitment',
      title: 'Our commitment is to {you} and your business.',
      desc: "Every business is different — generic solutions don't work. We start by listening, then tailor every recommendation, every interaction and every line of code to your unique goals, audience and constraints.",
      list: [
        'Tailored solutions for your business',
        'Scalable solutions that grow with you',
        'Migrations with zero data loss',
        'Continuous post-launch support',
      ],
      cta: 'Request a quote',
      pills: ['Planning', 'Development', 'Testing & launch', 'Monitoring & improvement'],
    },
    contact: {
      tag: 'Contact',
      title: "Let's start building {your next project}.",
      desc: "Fill in your details and we'll get back to you shortly. Get in touch and we'll create a tailored solution that fits your specific needs.",
      infoEmail: 'hello@pakal.cloud',
      infoSite: 'pakal.cloud',
      infoEmailSub: 'For inquiries and quotes',
      infoSiteSub: 'Official website',
      infoGlobalTitle: 'Global solutions',
      infoGlobalSub: 'Working with teams worldwide',
      labelFirst: 'First name',
      labelLast: 'Last name',
      labelEmail: 'Email',
      labelMessage: 'Message',
      phFirst: 'Your first name',
      phLast: 'Your last name',
      phEmail: 'you@company.com',
      phMessage: 'Tell us about your project — goals, timeline, anything useful.',
      checkboxPrivacyPre: 'I agree to the',
      checkboxPrivacyLink: 'privacy policy',
      submit: 'Request a quote',
      sent: 'Sent ✓',
      errRequired: 'This field is required.',
      errEmail: 'Enter a valid email.',
    },
    footer: {
      about:
        'Global tech solutions — custom web development, cloud services and integrations for businesses of any size. We accompany you from idea to ongoing maintenance.',
      navTitle: 'Navigation',
      servicesTitle: 'Services',
      servicesLinks: [
        'Web development',
        'AWS services',
        'CI/CD & servers',
        'Integrations',
        'Migrations',
        'Continuous support',
      ],
      contactTitle: 'Get in touch',
      ctaLink: 'Request a quote →',
      rights: '© 2026 Pakal. All rights reserved.',
      legal: ['Privacy', 'Terms', 'Cookies'],
    },
    a11y: {
      toggleMenu: 'Open or close menu',
      toggleTheme: 'Toggle light/dark mode',
      toggleLang: 'Change language',
      skipToContent: 'Skip to main content',
    },
    notFound: {
      title: 'Page not found',
      desc: 'The page you are looking for does not exist or was moved.',
      cta: 'Back to home',
    },
    privacy: {
      title: 'Privacy Policy',
      updated: 'Last updated: June 28, 2026',
      sections: [
        {
          title: 'Who we are',
          body: 'Pakal (pakal.cloud) is a technology solutions company offering custom web development, cloud services and integrations for businesses of all sizes.',
        },
        {
          title: 'Data we collect',
          body: 'We only collect data you provide through the contact form: first name, last name, email address, phone number, company name and your message. We do not collect browsing data or use tracking cookies.',
        },
        {
          title: 'How we use your data',
          body: 'Information received is used solely to respond to your inquiry or quote request. We do not sell, share or transfer your data to third parties for commercial purposes.',
        },
        {
          title: 'Cookies',
          body: 'This website does not use tracking or advertising cookies. Only essential technical cookies necessary for the site to function may be used.',
        },
        {
          title: 'Third-party services',
          body: 'The contact form uses Formspree (formspree.io) for message delivery and management. Formspree may temporarily process your information in accordance with their own terms of service.',
        },
        {
          title: 'Your rights',
          body: 'You have the right to access, correct or delete any data you have provided to us. To exercise any of these rights, contact us at hello@pakal.cloud.',
        },
        {
          title: 'Changes to this policy',
          body: 'We reserve the right to update this policy at any time. The date of the most recent update is indicated at the top of this page.',
        },
        {
          title: 'Contact',
          body: 'If you have questions about this privacy policy, reach us at hello@pakal.cloud.',
        },
      ],
    },
  },
};
