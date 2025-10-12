import React from "react";
import styles from "./containerDescript.module.scss";

interface Description {
  title: string;
  text: string;
}

const descriptions: Description[] = [
  {
    title: "Polivalente",
    text: "He demostrado mi capacidad para trabajar en diferentes sectores y proyectos, utilizando diversos lenguajes y tecnologías. Esto muestra que soy una persona flexible, que aprende rápido y que se adapta a las necesidades y requerimientos de cada situación.",
  },
  {
    title: "Informática, mi pasión",
    text: "Me gusta estar al día de las últimas tendencias y novedades en el mundo de la informática y la tecnología, y aprender nuevos conocimientos y habilidades que me permitan mejorar como profesional.",
  },
];

const ContainerDescrip: React.FC = () => {
  return (
    <section className={styles.container} id="about" aria-labelledby="about-title">
      <h2 id="about-title" className={styles.sectionTitle}>
        Sobre mí
      </h2>

      <div className={styles.content}>
        {descriptions.map(({ title, text }, i) => (
          <article key={i} className={styles.data}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ContainerDescrip;