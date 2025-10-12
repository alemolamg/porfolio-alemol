"use client";
import React, { useEffect, useRef } from "react";
import styles from "./containerDescript.module.scss";

interface Description {
  title: string;
  text: string;
}

const descriptions: Description[] = [
  {
    title: "Polivalente",
    text:
      "He demostrado mi capacidad para trabajar en diferentes sectores y proyectos, utilizando diversos lenguajes y tecnologías. Esto muestra que soy una persona flexible, que aprende rápido y que se adapta a las necesidades y requerimientos de cada situación.",
  },
  {
    title: "Informática, mi pasión",
    text:
      "Me gusta estar al día de las últimas tendencias y novedades en el mundo de la informática y la tecnología, y aprender nuevos conocimientos y habilidades que me permitan mejorar como profesional.",
  },
];

const ContainerDescrip: React.FC = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // Respeta reduced-motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const items = Array.from(
      root.querySelectorAll<HTMLElement>(`.${styles.reveal}`)
    );

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealVisible);
            obs.unobserve(entry.target);
          }
        });
      },
      { root: null, threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    items.forEach((el, i) => {
      el.style.setProperty("--reveal-delay", `${i * 80}ms`); // pequeño stagger
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
      <h2 id="about-title" className={`${styles.sectionTitle} ${styles.reveal}`}>
        Sobre mí
      </h2>

      <div className={styles.content}>
        {descriptions.map(({ title, text }, i) => (
          <article key={i} className={`${styles.data} ${styles.reveal}`}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ContainerDescrip;