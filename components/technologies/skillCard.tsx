import React from "react";
import styles from "./skill.module.scss";
import Image from "next/image";
import { Skill } from "./skillsContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

interface SkillProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillProps> = ({ skill }) => {

  const icon = typeof skill.icon === 'string' ? (
    <Image
      className={styles.icon}
      src={skill.icon}
      alt="Skill Icon"
      width={200}
      height={200}
    />
  ) : (
    <FontAwesomeIcon
      className={styles.iconFA}
      icon={skill.icon || faCode} // faCode es un ícono por defecto, puedes cambiarlo
    />
  );


  return (
    <div className={styles.card}>
      {icon}
      <h3 className="uppercase">{skill.name}</h3>
    </div>
  );
};

export default SkillCard;
