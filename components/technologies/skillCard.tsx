import React from "react";
import styles from "./skill.module.scss";
import Image from "next/image";
import { Skill } from "./skillsContainer";

interface SkillProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillProps> = ({ skill }) => {
  return (
    <div className={styles.card}>
      {/* <i className={styles.container}> */}
      <Image
        className={styles.icon}
        src={skill.icon}
        alt="Next.js Logo"
        width={200}
        height={200}
      />
      <h3 className="uppercase">{skill.name}</h3>
      {/* </i> */}
    </div>
  );
};

export default SkillCard;
