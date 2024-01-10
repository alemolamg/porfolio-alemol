/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./presentation.module.scss";
import NavBar from "@/components/navbar/navBar";
import clsx from "clsx";
import LinkIcons from "./utils/links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

const Presentation: React.FC = () => {
  const curriculum_route = "/public/Curriculum_AlejandroMolero2023.pdf";

  const linkedin_image =
    "https://media.licdn.com/dms/image/C4E03AQFyWz4Hfu6YWQ/profile-displayphoto-shrink_800_800/0/1656794215383?e=1707350400&v=beta&t=OF2GgRv26NwArHiAq-8VoarPhKxSBTcT7ug62HBcHEY";
  // const imageURL = "/imagenAlemol.jpeg";
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.head}>
        <div className={styles.firstBlock}>
          {/* <div className={styles.titleContainer}> */}
          <h1 className={styles.title}>Alejandro Molero Gómez</h1>
          {/* </div> */}
          <div className={styles.subtitle}>
            <LinkIcons iconStyle={styles.icon} />
            <a
              href={curriculum_route}
              download
              className={styles.downloadButton}
            >
              <FontAwesomeIcon className={styles.icon} icon={faFileArrowDown} />
              <button>Descargar Currículum</button>
            </a>
          </div>
        </div>

        <img
          className={styles.image}
          src={linkedin_image}
          alt="Descripción de la imagen"
        />
      </div>
      <div className={styles.description} id="description">
        <h3 className="mx-5 md:mx-20 text-2xl">Descripción profesional </h3>
        <p className={clsx("mx-5 md:mx-20 my-5")}>
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
