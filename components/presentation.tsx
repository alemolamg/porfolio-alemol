import React from "react";
import Image from "next/image";
import styles from "./presentation.module.scss";

const Presentation: React.FC = () => {
  const imageURL = "/public/imagenAlemol.jpeg";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Alejandro Molero Gómez</h1>
      <Image
        className={styles.image}
        src={"/imagenAlemol.jpeg"}
        alt="Error imagen"
        width={150}
        height={100}
        priority
      />
    </div>
  );
};

export default Presentation;
