/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import styles from "./presentation.module.scss";

const Presentation: React.FC = () => {
  const linkedin_image =
    "https://media.licdn.com/dms/image/C4E03AQFyWz4Hfu6YWQ/profile-displayphoto-shrink_800_800/0/1656794215383?e=1707350400&v=beta&t=OF2GgRv26NwArHiAq-8VoarPhKxSBTcT7ug62HBcHEY";
  const imageURL = "/imagenAlemol.jpeg";
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h1 className={styles.title}>Alejandro Molero Gómez</h1>
        {/* <Image
          className={styles.image}
          src={imageURL}
          alt="imagen de Alejandro Molero"
          width={200}
          height={200}
          priority
        /> */}
        {/* <div className={styles.imageContainer}> */}
        <img
          className={styles.image}
          src={linkedin_image}
          alt="Descripción de la imagen"
        />
        {/* </div> */}
      </div>
      <div className={styles.description}>
        <h3 className="mx-5 md:mx-16 text-2xl">Descripción profesional </h3>
        <p className="mx-5 md:mx-16 my-5 text-justify">
          Soy un programador de backend con experiencia en diversos sectores y
          proyectos, utilizando lenguajes y herramientas como Kotlin, Java, PHP,
          C++, Python, Laravel, Docker, Kubernetes, Git y bases de datos SQL y
          No SQL. Me adapto a diferentes entornos y tecnologías, y me gusta
          aprender y mejorar como profesional. Mi objetivo es seguir creciendo y
          aportando valor en el desarrollo web y la programación.
        </p>
      </div>
    </div>
  );
};

export default Presentation;
