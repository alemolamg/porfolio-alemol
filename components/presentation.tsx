import React from "react";
import Image from "next/image";
import styles from "./presentation.module.scss";

const Presentation: React.FC = () => {
  const imageURL = "/imagenAlemol.jpeg";
  return (
    <div className={styles.container} >
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
      <p className="flex justify-center text-xl bg-blue-800">texto descriptivo</p>
    </div>
  );
};

export default Presentation;
