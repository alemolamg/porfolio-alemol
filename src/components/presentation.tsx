/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./presentation.module.scss";
import NavBar from "@/components/navbar/navBar";
import clsx from "clsx";
import LinkIcons from "../app/utils/links";
import DownloadButton from "../app/utils/downloadPDF";

const Presentation: React.FC = () => {
  // IMAGEN DE LINKEDIN
  const linkedin_image =
    "https://media.licdn.com/dms/image/v2/D4D03AQHZ1f4ldpgxYA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1707758175616?e=1743638400&v=beta&t=ah4DYzF1o1vLFlh2JJZ11F7Yz3JrCF7c_3XGMunu8u0";
  const imageURL = "/image_alemol.jpg"; // Ruta de la imagen
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.head}>
        <div className={styles.firstBlock}>
          {/* <div className={styles.titleContainer}> */}
          <h1 className={styles.title}>Alejandro Molero Gómez</h1>
          {/* </div> */}
          <div className={styles.subtitle}>
            <DownloadButton />
            <LinkIcons iconStyle={styles.icon} />
          </div>
        </div>

        <img
          className={styles.image}
          // src={linkedin_image}
          src={imageURL}
          alt="Descripción de la imagen"
        />
      </div>
      <div className={styles.description} id="description">
        <div>
          <h3 className="mx-5 md:mx-20 text-2xl">Descripción profesional </h3>
          <p className={clsx("mx-5 md:mx-20 my-5")}>
            Soy un programador de backend con experiencia en diversos sectores y
            proyectos, utilizando lenguajes y herramientas como Kotlin, Java,
            PHP, C++, Python, Laravel, Docker, Kubernetes, Git y bases de datos
            SQL y No SQL. 
            Me adapto a diferentes entornos y tecnologías, y me gusta aprender y
            mejorar como profesional. Mi objetivo es seguir creciendo y
            aportando valor en el desarrollo web y la programación.
          </p>
          {/* </p> */}
          {/* <p className={clsx("mx-5 md:mx-20 my-5")}> */}
        </div>
        <img src="/gifs/codificacion.gif" alt="Animacion" className={styles.imageDesc} />
      </div>
    </div>
  );
};

export default Presentation;
