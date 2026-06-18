"use client";
import React, { useEffect, useRef } from "react";
import styles from "./containerDescript.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faBuilding,
  faRobot,
  faTimeline,
} from "@fortawesome/free-solid-svg-icons";

interface TimelineItem {
  period: string;
  title: string;
  text: string;
  icon: typeof faTimeline;
}

const timeline: TimelineItem[] = [
  {
    period: "Etapa anterior",
    title: "Comaferr",
    text:
      "Una fase de consolidación técnica en la que lideré la migración y actualización completa del ERP, mejorando eficiencia operativa e integración con sistemas internos.",
    icon: faBuilding,
  },
  {
    period: "Actualidad",
    title: "Grupoasesores",
    text:
      "Actualmente soy Responsable de IT, coordinando sistemas, soporte y evolución tecnológica con foco en estabilidad, escalabilidad y mejora continua.",
    icon: faTimeline,
  },
  {
    period: "Línea de trabajo",
    title: "Automatización e IA",
    text:
      "Trabajo con orquestadores, integración entre herramientas y soluciones basadas en IA para reducir tareas repetitivas y ganar trazabilidad.",
    icon: faRobot,
  },
  {
    period: "Resultado",
    title: "Procesos más claros",
    text:
      "Mi objetivo es que cada mejora técnica se traduzca en menos fricción, más control operativo y una experiencia interna más ágil.",
    icon: faArrowTrendUp,
  },
];

const ContainerDescrip: React.FC = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const items = Array.from(root.querySelectorAll<HTMLElement>(`.${styles.reveal}`));

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealVisible);
            obs.unobserve(entry.target);
          }
        });
      },
      { root: null, threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    items.forEach((el, i) => {
      el.style.setProperty("--reveal-delay", `${i * 90}ms`);
      obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <section
      className={styles.container}
      id="about"
      aria-labelledby="about-title"
      ref={rootRef}
    >
      <div className={styles.header}>
        <span className={`${styles.badge} ${styles.reveal}`}>Trayectoria</span>
        <h2 id="about-title" className={`${styles.sectionTitle} ${styles.reveal}`}>
          Un recorrido técnico orientado a negocio, operación e innovación útil.
        </h2>
        <p className={`${styles.intro} ${styles.reveal}`}>
          He ido evolucionando hacia un perfil híbrido donde conviven
          desarrollo, infraestructura y automatización. Mi recorrido incluye
          migración de ERP, cloud migration, soporte técnico y construcción de
          soluciones web que hagan que la tecnología trabaje con más orden,
          contexto y eficiencia.
        </p>
      </div>

      <div className={styles.timeline}>
        {timeline.map(({ period, title, text, icon }, i) => (
          <article key={title} className={`${styles.card} ${styles.reveal}`}>
            <div className={styles.cardHeader}>
              <span className={styles.period}>{period}</span>
              <FontAwesomeIcon className={styles.icon} icon={icon} />
            </div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardText}>{text}</p>
            <div className={styles.cardFoot}>0{i + 1}</div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ContainerDescrip;
