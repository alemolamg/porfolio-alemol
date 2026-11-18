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
    brandText: string;
    brandLabel: string;
    items: Array<{ href: string; label: string }>;
    openMenuLabel: string;
    closeMenuLabel: string;
    languageSwitcherLabel: string;
  };
  presentation: {
    title: string;
    lead: string;
    name: string;
    role: string;
    imageAlt: string;
    downloadCvLabel: string;
    projectsLabel: string;
  };
  projects: {
    title: string;
    items: Array<{
      id: "picker" | "portfolio";
      name: string;
      stack: string;
      description: string;
      nextStep?: string;
      linkLabel: string;
    }>;
  };
  about: {
    title: string;
    intro: string;
    timeline: Array<{
      period: string;
      title: string;
      text: string;
    }>;
  };
  skills: {
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
      brandText: "Alejandro Molero Gómez",
      brandLabel: "Ir al inicio",
      items: [
        { href: "#projects", label: "Proyectos" },
        { href: "#about", label: "Trayectoria" },
        { href: "#skills", label: "Tecnologías" },
        { href: "#footer", label: "Contacto" },
      ],
      openMenuLabel: "Abrir menú",
      closeMenuLabel: "Cerrar menú",
      languageSwitcherLabel: "Seleccionar idioma",
    },
    presentation: {
      title:
        "Desarrollo soluciones, doy soporte técnico y busco maneras de facilitar el día a día del equipo.",
      lead:
        "En Grupoasesores me ocupo del día a día de IT. Desarrollo herramientas internas, conecto sistemas y automatizo tareas que el equipo repite a mano.",
      name: "Alejandro Molero Gómez",
      role: "Responsable de IT y desarrollo · Grupoasesores",
      imageAlt: "Retrato de Alejandro Molero Gómez",
      downloadCvLabel: "Descargar CV",
      projectsLabel: "Ver proyectos",
    },
    projects: {
      title: "Proyectos seleccionados",
      items: [
        {
          id: "picker",
          name: "Picker",
          stack: "Fork para macOS · SwiftUI · PhotoKit",
          description: "Amplié una app para revisar fotos similares. Mi fork permite seleccionar fotos sueltas o grupos completos y reunirlos en una cola antes de confirmar el borrado.",
          nextStep: "Estoy diseñando una revisión por tandas para cribar capturas y otras imágenes dudosas sin ir una a una.",
          linkLabel: "Ver mi aportación a Picker",
        },
        {
          id: "portfolio",
          name: "Este porfolio",
          stack: "Next.js · React · Vercel",
          description: "Mi web personal en español e inglés. Aquí reúno mi trayectoria y lo que voy construyendo. Los cambios se pueden probar en una vista previa antes de publicarlos.",
          linkLabel: "Ver el código del porfolio",
        },
      ],
    },
    about: {
      title: "Trayectoria",
      intro:
        "He trabajado en soporte técnico, desarrollo de aplicaciones, migraciones a la nube y modernización de ERP.",
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
      ],
    },
    skills: {
      title: "Tecnologías",
      intro:
        "Herramientas que uso en desarrollo, soporte e infraestructura.",
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
        { href: "#projects", label: "Proyectos" },
        { href: "#about", label: "Trayectoria" },
        { href: "#skills", label: "Tecnologías" },
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
      brandText: "Alejandro Molero Gómez",
      brandLabel: "Go to home",
      items: [
        { href: "#projects", label: "Projects" },
        { href: "#about", label: "Background" },
        { href: "#skills", label: "Technologies" },
        { href: "#footer", label: "Contact" },
      ],
      openMenuLabel: "Open menu",
      closeMenuLabel: "Close menu",
      languageSwitcherLabel: "Select language",
    },
    presentation: {
      title:
        "I build tools, troubleshoot technical issues, and look for ways to make day-to-day work easier for the team.",
      lead:
        "I look after day-to-day IT at Grupoasesores. I build internal tools, connect systems and automate tasks the team does by hand.",
      name: "Alejandro Molero Gómez",
      role: "IT and development lead · Grupoasesores",
      imageAlt: "Portrait of Alejandro Molero Gómez",
      downloadCvLabel: "Download CV",
      projectsLabel: "View projects",
    },
    projects: {
      title: "Selected projects",
      items: [
        {
          id: "picker",
          name: "Picker",
          stack: "macOS fork · SwiftUI · PhotoKit",
          description: "I extended an app for reviewing similar photos. My fork lets you select individual photos or entire groups and queue them for review before confirming deletion.",
          nextStep: "I’m designing a batch review flow for screenshots and other photos that might be worth removing.",
          linkLabel: "See my contribution to Picker",
        },
        {
          id: "portfolio",
          name: "This portfolio",
          stack: "Next.js · React · Vercel",
          description: "My personal site in Spanish and English. It brings together my work history and the projects I’m building. Changes can be tested in a preview before release.",
          linkLabel: "View the portfolio source",
        },
      ],
    },
    about: {
      title: "Work history",
      intro:
        "My background spans technical support, application development, cloud migrations and ERP upgrades.",
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
      ],
    },
    skills: {
      title: "Technologies",
      intro:
        "Tools I use across development, support and infrastructure.",
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
        { href: "#projects", label: "Projects" },
        { href: "#about", label: "Background" },
        { href: "#skills", label: "Technologies" },
        { href: "#footer", label: "Contact" },
      ],
    },
  },
};

export function getSiteCopy(locale: Locale) {
  return copy[locale];
}