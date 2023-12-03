import React from "react";
import styles from "./card.module.scss";

interface TecnologiaProps {
  name: string;
}

const TecnoCard: React.FC<TecnologiaProps> = ({ name }) => {
  return (
    <div className={styles.container}>
      <h2>{name}</h2>
      <p>imagen</p>
    </div>
  );
};

export default TecnoCard;
