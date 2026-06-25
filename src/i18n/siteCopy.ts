import type { Locale } from "./locales";

export interface SiteCopy {
  metadata: {
    title: string;
    description: string;
    openGraphTitle: string;
    openGraphDescription: string;
    twitterTitle: string;
    twitterDescription: string;
    applicationName: string;
  };
  common: {
    skipToContent: string;
    goToTop: string;
  };
  navigation: {
    ariaLabel: string;
    brandMark: string;
    brandText: string;
    brandLabel: string;
    items: Array<{ href: string; label: string }>;
    openMenuLabel: string;
    closeMenuLabel: string;
    languageSwitcherLabel: string;
  };
  presentation: {
    kicker: string;
    title: string;
    lead: string;
    highlights: string[];
    metrics: Array<{ label: string; value: string }>;
    capabilities: Array<{ title: string; text: string }>;
    name: string;
    role: string;
    imageAlt: string;
    downloadCvLabel: string;
  };
  about: {
    badge: string;
    title: string;
    intro: string;
    timeline: Array<{
      period: string;
      title: string;
      text: string;
    }>;
  };
  skills: {
    badge: string;
    title: string;
    intro: string;
    groups: Array<{
      title: string;
      subtitle: string;
    }>;
  };
  footer: {
    contactLabel: string;
    goodbye: string;
    sectionsLabel: string;
    socialLabel: string;
    legal: string;
    items: Array<{ href: string; label: string }>;
  };
}

const copy: Record<Locale, SiteCopy> = {
  es: {
    metadata: {
      title: "Alejandro Molero Gómez | Responsable de IT y automatización",
      description:
        "Portfolio profesional de Alejandro Molero Gómez, Responsable de IT en Grupoasesores, con foco en desarrollo, automatización, integración de sistemas e inteligencia artificial.",
      openGraphTitle: "Alejandro Molero Gómez | Responsable de IT y automatización",
      openGraphDescription:
        "Portfolio profesional con enfoque en desarrollo full-stack, orquestación de procesos e inteligencia artificial aplicada.",
      twitterTitle: "Alejandro Molero Gómez | Responsable de IT y automatización",
      twitterDescription:
        "Portfolio profesional con foco en sistemas, automatización e IA aplicada.",
      applicationName: "Portfolio Alejandro Molero",
    },
    common: {
      skipToContent: "Saltar al contenido",
      goToTop: "Volver arriba",
    },
    navigation: {
      ariaLabel: "Principal",
      brandMark: "AMG",
      brandText: "Alejandro Molero Gómez",
      brandLabel: "Ir al inicio",
      items: [
        { href: "#main", label: "Inicio" },
        { href: "#about", label: "Trayectoria" },
        { href: "#skills", label: "Capacidades" },
        { href: "#footer", label: "Contacto" },
      ],
      openMenuLabel: "Abrir menú",
      closeMenuLabel: "Cerrar menú",
      languageSwitcherLabel: "Seleccionar idioma",
    },
    presentation: {
      kicker: "Portfolio profesional",
      title:
        "Conecto desarrollo, soporte IT y automatización para crear sistemas más útiles, claros y escalables.",
      lead:
        "Soy Alejandro Molero Gómez, Responsable de IT en Grupoasesores. Aporto criterio técnico para construir, integrar y automatizar procesos con una visión muy práctica: menos fricción, más control y mejor trazabilidad. Mi experiencia combina desarrollo web, cloud migration, ERP, soporte a equipos internos e IA aplicada cuando realmente ayuda al proceso.",
      highlights: [
        "5+ años de experiencia",
        "Responsable de IT",
        "Desarrollo full-stack",
        "Soporte IT y procesos",
      ],
      metrics: [
        { label: "Foco", value: "Sistemas claros" },
        { label: "Trabajo", value: "Procesos conectados" },
        { label: "Impacto", value: "Menos fricción" },
      ],
      capabilities: [
        {
          title: "Orquestación",
          text: "Diseño flujos y conecto herramientas para que la operación avance con menos pasos manuales.",
        },
        {
          title: "Automatización aplicada",
          text: "Combino automatismos e IA cuando aportan contexto real, velocidad y menos carga operativa para el equipo.",
        },
        {
          title: "Control operativo",
          text: "Priorizar trazabilidad, estabilidad y mantenimiento es clave cuando los procesos ya están en producción.",
        },
      ],
      name: "Alejandro Molero Gómez",
      role: "Responsable de IT y desarrollo · Grupoasesores",
      imageAlt: "Retrato de Alejandro Molero Gómez",
      downloadCvLabel: "Descargar CV",
    },
    about: {
      badge: "Trayectoria",
      title: "Un recorrido técnico orientado a negocio, operación e innovación útil.",
      intro:
        "He ido evolucionando hacia un perfil híbrido donde conviven desarrollo, infraestructura, soporte y automatización. Mi recorrido pasa por desarrollo full-stack, modernización de ERP, microservicios, cloud migration y mejora de operaciones internas con una idea constante: que la tecnología reduzca fricción y dé más contexto al negocio.",
      timeline: [
        {
          period: "Abril 2026 - Actual",
          title: "Grupoasesores · Responsable de IT",
          text:
            "Actualmente coordino sistemas, soporte y evolución tecnológica con foco en estabilidad, escalabilidad y mejora continua. Mi prioridad es que cada implementación aporte criterio técnico claro al negocio, menos pasos manuales y mayor trazabilidad en los procesos internos.",
        },
        {
          period: "2024 - Abril 2026",
          title: "Comaferr · Responsable técnico y evolución del ERP",
          text:
            "Lideré la migración y actualización completa del ERP empresarial, mejorando la eficiencia operativa y su integración con sistemas internos. También desarrollé aplicaciones clave con JavaScript y React, además de administrar la infraestructura tecnológica del departamento para garantizar estabilidad y rendimiento.",
        },
        {
          period: "2026",
          title: "Certificación · Partner KNX",
          text:
            "Certificación oficial Partner KNX en domótica e instalaciones inteligentes. 30 horas de formación (18 presenciales/prácticas, 12 online/teóricas) trabajando con ETS6 para programación y configuración de sistemas KNX, automatización de edificios y control de instalaciones.",
        },
        {
          period: "2022 - 2024",
          title: "Clickferry · Plataforma web y microservicios",
          text:
            "Trabajé en el desarrollo de microservicios con Kotlin y Java, integrando sistemas mediante SOAP y API REST, y participé en la nueva plataforma web con Next.js. Fue una etapa muy enfocada a escalabilidad, integración entre servicios y mejora real de la experiencia de usuario.",
        },
        {
          period: "2022",
          title: "Carrier · Soporte IT, reporting y migración cloud",
          text:
            "Combiné soporte técnico, gestión del ERP JDE Edwards y reporting con MyVision y Crystal Reports, además de participar en la migración de servidores locales a soluciones cloud con OneDrive y SharePoint. Ahí reforcé una base muy operativa, cercana al usuario y orientada a continuidad del servicio.",
        },
        {
          period: "Enfoque de trabajo",
          title: "Desarrollo, integración y automatización útil",
          text:
            "Hoy combino desarrollo full-stack, integración de sistemas, automatización y soporte operativo con una prioridad clara: que cada mejora técnica se traduzca en procesos más mantenibles, más trazabilidad y una operación interna más ágil.",
        },
      ],
    },
    skills: {
      badge: "Capacidades",
      title: "Tecnologías y herramientas que uso para construir y automatizar",
      intro:
        "Trabajo con un stack amplio, pero siempre con la misma prioridad: que la solución sea mantenible, útil y fácil de operar.",
      groups: [
        {
          title: "Desarrollo",
          subtitle: "Construcción de interfaces, servicios y aplicaciones orientadas a negocio.",
        },
        {
          title: "Soporte y automatización",
          subtitle: "Procesos conectados, soporte operativo y automatización útil.",
        },
        {
          title: "Infraestructura y datos",
          subtitle: "Bases técnicas para sistemas estables, escalables y trazables.",
        },
      ],
    },
    footer: {
      contactLabel: "Contacto",
      goodbye:
        "Si necesitas perfil técnico para ordenar procesos, integrar sistemas o llevar una idea a producción, hablemos.",
      sectionsLabel: "Secciones",
      socialLabel: "Redes",
      legal: "© 2026 Alejandro Molero Gómez. Todos los derechos reservados.",
      items: [
        { href: "#main", label: "Inicio" },
        { href: "#about", label: "Trayectoria" },
        { href: "#skills", label: "Capacidades" },
        { href: "#footer", label: "Contacto" },
      ],
    },
  },
  en: {
    metadata: {
      title: "Alejandro Molero Gómez | IT Lead and automation",
      description:
        "Professional portfolio of Alejandro Molero Gómez, IT Lead at Grupoasesores, focused on development, automation, systems integration and applied artificial intelligence.",
      openGraphTitle: "Alejandro Molero Gómez | IT Lead and automation",
      openGraphDescription:
        "Professional portfolio focused on full-stack development, process orchestration and applied artificial intelligence.",
      twitterTitle: "Alejandro Molero Gómez | IT Lead and automation",
      twitterDescription:
        "Professional portfolio focused on systems, automation and applied AI.",
      applicationName: "Alejandro Molero Portfolio",
    },
    common: {
      skipToContent: "Skip to content",
      goToTop: "Back to top",
    },
    navigation: {
      ariaLabel: "Main",
      brandMark: "AMG",
      brandText: "Alejandro Molero Gómez",
      brandLabel: "Go to home",
      items: [
        { href: "#main", label: "Home" },
        { href: "#about", label: "Background" },
        { href: "#skills", label: "Capabilities" },
        { href: "#footer", label: "Contact" },
      ],
      openMenuLabel: "Open menu",
      closeMenuLabel: "Close menu",
      languageSwitcherLabel: "Select language",
    },
    presentation: {
      kicker: "Professional portfolio",
      title:
        "I connect development, IT support and automation to build systems that are more useful, clearer and easier to scale.",
      lead:
        "I am Alejandro Molero Gómez, IT Lead at Grupoasesores. I bring technical judgment to build, integrate and automate processes with a practical mindset: less friction, more control and better traceability. My background combines web development, cloud migration, ERP, internal team support and applied AI whenever it truly helps the process.",
      highlights: [
        "5+ years of experience",
        "IT Lead",
        "Full-stack development",
        "IT support and processes",
      ],
      metrics: [
        { label: "Focus", value: "Clear systems" },
        { label: "Work", value: "Connected processes" },
        { label: "Impact", value: "Less friction" },
      ],
      capabilities: [
        {
          title: "Orchestration",
          text: "I design flows and connect tools so operations move forward with fewer manual steps.",
        },
        {
          title: "Applied automation",
          text: "I combine automation and AI when they add real context, speed and less operational load for the team.",
        },
        {
          title: "Operational control",
          text: "Traceability, stability and maintainability matter most once processes are already in production.",
        },
      ],
      name: "Alejandro Molero Gómez",
      role: "IT Lead and development · Grupoasesores",
      imageAlt: "Portrait of Alejandro Molero Gómez",
      downloadCvLabel: "Download CV",
    },
    about: {
      badge: "Background",
      title: "A technical path shaped around business, operations and useful innovation.",
      intro:
        "My path has evolved into a hybrid profile where development, infrastructure, support and automation coexist. It includes full-stack development, ERP modernization, microservices, cloud migration and improvement of internal operations, always with the same goal: reducing friction and giving the business clearer systems.",
      timeline: [
        {
          period: "April 2026 - Present",
          title: "Grupoasesores · IT Lead",
          text:
            "I currently coordinate systems, support and technology evolution with a focus on stability, scalability and continuous improvement. My priority is for each implementation to bring clear technical judgment to the business, fewer manual steps and better traceability across internal processes.",
        },
        {
          period: "2024 - April 2026",
          title: "Comaferr · ERP evolution and technical ownership",
          text:
            "I led the migration and full upgrade of the company's ERP, improving operational efficiency and integration with internal systems. I also built key business applications with JavaScript and React, while managing the department's IT infrastructure to ensure stability and performance.",
        },
        {
          period: "2026",
          title: "Certification · KNX Partner",
          text:
            "Official KNX Partner certification in home and building automation. 30-hour training program (18 in-person/practical, 12 online/theoretical) working with ETS6 for programming and configuring KNX systems, building automation and installation control.",
        },
        {
          period: "2022 - 2024",
          title: "Clickferry · Web platform and microservices",
          text:
            "I worked on microservices with Kotlin and Java, integrating systems through SOAP and REST APIs, and contributed to the new web platform built with Next.js. This stage was strongly focused on scalability, service integration and meaningful UX improvements.",
        },
        {
          period: "2022",
          title: "Carrier · IT support, reporting and cloud migration",
          text:
            "I combined user support, JDE Edwards ERP management and reporting with MyVision and Crystal Reports, while also helping migrate local servers to cloud solutions with OneDrive and SharePoint. It strengthened a practical, user-facing and service continuity mindset.",
        },
        {
          period: "Working approach",
          title: "Development, integration and useful automation",
          text:
            "Today I combine full-stack development, systems integration, automation and operational support with a clear priority: every technical improvement should produce more maintainable processes, stronger traceability and smoother internal operations.",
        },
      ],
    },
    skills: {
      badge: "Capabilities",
      title: "Technologies and tools I use to build and automate",
      intro:
        "I work with a broad stack, but the priority stays the same: the solution must be maintainable, useful and easy to operate.",
      groups: [
        {
          title: "Development",
          subtitle: "Building interfaces, services and business-oriented applications.",
        },
        {
          title: "Support and automation",
          subtitle: "Connected processes, operational support and useful automation.",
        },
        {
          title: "Infrastructure and data",
          subtitle: "Technical foundations for stable, scalable and traceable systems.",
        },
      ],
    },
    footer: {
      contactLabel: "Contact",
      goodbye:
        "If you need technical help to organize processes, integrate systems or take an idea into production, let's talk.",
      sectionsLabel: "Sections",
      socialLabel: "Social",
      legal: "© 2026 Alejandro Molero Gómez. All rights reserved.",
      items: [
        { href: "#main", label: "Home" },
        { href: "#about", label: "Background" },
        { href: "#skills", label: "Capabilities" },
        { href: "#footer", label: "Contact" },
      ],
    },
  },
};

export function getSiteCopy(locale: Locale) {
  return copy[locale];
}