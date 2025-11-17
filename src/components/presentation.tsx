import React from "react";
import styles from "./presentation.module.scss";
import Navbar from "./navbar/navBar";
import clsx from "clsx";
import LinkIcons from "../app/utils/links";
import DownloadButton from "../app/utils/downloadPDF";
import Image from "next/image";

const Presentation: React.FC = () => {
  const imageURL = "/image_alemol.jpg";

  return (
    <div className={styles.container}>
      <Navbar />

      {/* Nuevo bloque hero con estructura moderna */}
      <section className={styles.hero}>
        <div className={styles.profileCard}>
          <div className={styles.avatarWrap}>
            <Image
              className={styles.avatar}
              src={imageURL}
              alt="Retrato de Alejandro Molero Gómez"
              width={220}
              height={220}
              priority
            />
          </div>

          <h1 className={styles.name}>Alejandro Molero Gómez</h1>
          <p className={styles.role}>Full‑Stack Developer & IT Administrator</p>

          <div className={styles.actions}>
            <DownloadButton />
            <LinkIcons iconStyle={styles.icon} />
          </div>
        </div>

        <div className={styles.heroText}>
          <h2 className={styles.claim}>Transformo ideas en sistemas eficientes y escalables</h2>
          <p className={styles.subClaim}>
            Experiencia en desarrollo frontend y  backend, automatización y optimización de procesos empresariales.
          </p>
        </div>
      </section>

      {/* Descripción profesional */}
      <section className={styles.description} id="description" aria-labelledby="desc-title">
        <div className={styles.descriptionContent}>
          <h2 id="desc-title" className={styles.descriptionTitle}>
            Descripción profesional
          </h2>
          <p className={styles.descriptionText}>
            Soy un programador web tanto frontend como backend con experiencia en diversos sectores y proyectos,
            utilizando herramientas como Node.js, Next.js, PHP, Python, Java, Springboot, Docker, Redis y MSSQL.
            Me adapto a diferentes entornos y tecnologías, con un enfoque en rendimiento,
            escalabilidad y fiabilidad. Mi objetivo es seguir creciendo como profesional
            y aportar soluciones que impulsen la eficiencia y digitalización empresarial.
          </p>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/gifs/codificacion.gif"
            alt="Animación de codificación"
            className={styles.imageDesc}
            width={400}
            height={300}
            unoptimized
            sizes="(max-width: 768px) 0px, 22vw"
          />
        </div>
      </section>
    </div>
  );
};

export default Presentation;