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
        "He ido evolucionando hacia un perfil híbrido donde conviven desarrollo, infraestructura y automatización. Mi recorrido incluye migración de ERP, cloud migration, soporte técnico y construcción de soluciones web que hagan que la tecnología trabaje con más orden, contexto y eficiencia.",
      timeline: [
        {
          period: "Etapa anterior",
          title: "Comaferr",
          text:
            "Una fase de consolidación técnica en la que lideré la migración y actualización completa del ERP, mejorando eficiencia operativa e integración con sistemas internos.",
        },
        {
          period: "Actualidad",
          title: "Grupoasesores",
          text:
            "Actualmente soy Responsable de IT, coordinando sistemas, soporte y evolución tecnológica con foco en estabilidad, escalabilidad y mejora continua.",
        },
        {
          period: "Línea de trabajo",
          title: "Automatización y mejora",
          text:
            "Trabajo con orquestadores, integración entre herramientas y apoyo de IA para reducir tareas repetitivas y ganar trazabilidad sin complicar la operación.",
        },
        {
          period: "Resultado",
          title: "Procesos más claros",
          text:
            "Mi objetivo es que cada mejora técnica se traduzca en menos fricción, más control operativo y una experiencia interna más ágil.",
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
        "My path has evolved into a hybrid profile where development, infrastructure and automation coexist. It includes ERP migration, cloud migration, technical support and building web solutions that help technology work with more order, context and efficiency.",
      timeline: [
        {
          period: "Previous stage",
          title: "Comaferr",
          text:
            "A technical consolidation phase where I led the migration and full upgrade of the ERP, improving operational efficiency and integration with internal systems.",
        },
        {
          period: "Current role",
          title: "Grupoasesores",
          text:
            "I currently serve as IT Lead, coordinating systems, support and technology evolution with a focus on stability, scalability and continuous improvement.",
        },
        {
          period: "Working line",
          title: "Automation and improvement",
          text:
            "I work with orchestrators, tool-to-tool integrations and AI support to reduce repetitive tasks and gain traceability without adding operational complexity.",
        },
        {
          period: "Outcome",
          title: "Clearer processes",
          text:
            "My goal is for each technical improvement to translate into less friction, more operational control and a faster internal experience.",
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