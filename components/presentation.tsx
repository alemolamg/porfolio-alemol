import React from "react";
import Image from "next/image";
import styles from "./presentation.module.scss";

const Presentation: React.FC = () => {
  const imageURL = "/imagenAlemol.jpeg";
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h1 className={styles.title}>Alejandro Molero Gómez</h1>
        <Image
          className={styles.image}
          src={imageURL}
          alt="imagen de Alejandro Molero"
          width={200}
          height={200}
          priority
        />
      </div>
      <div className="justify-center bg-blue-800">
        <h3 className="mx-10 text-2xl">Descripción profesional </h3>
        <p className="mx-10 my-5">
          Soy un programador de backend con más de dos años de experiencia en el
          desarrollo de servicios web y aplicaciones informáticas. Me considero
          una persona versátil y con capacidad de adaptación a diferentes
          entornos y tecnologías. He trabajado en diversos proyectos
          relacionados con el sector turístico, la industria y la construcción,
          utilizando lenguajes como Kotlin, Java, PHP, C++ y Python, y
          herramientas como Laravel, Docker, Kubernetes, Git y bases de datos
          SQL y No SQL. Me gusta estar al día de las últimas tendencias y
          novedades en el mundo de la informática y la tecnología, y aprender
          nuevos conocimientos y habilidades que me permitan mejorar como
          profesional. Mi objetivo es seguir creciendo y aportando valor en el
          ámbito del desarrollo web y la programación.
        </p>
      </div>
    </div>
  );
};

export default Presentation;
