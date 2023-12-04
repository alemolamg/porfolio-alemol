import React from "react";
import styles from "./skillCard.module.scss";

interface SkillProps {
  name: string;
}

const SkillCard: React.FC<SkillProps> = ({ name }) => {
  return (
    <div className={styles.container}>
      <h2>{name}</h2>
      <p>imagen</p>
    </div>
  );
};

export default SkillCard;
