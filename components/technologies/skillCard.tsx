import React from "react";
import styles from "./skillCard.module.scss";
import { Skill } from "@/app/page";
import Image from "next/image";

interface SkillProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillProps> = ({ skill }) => {
  return (
    <div className={styles.container}>
      {/* <i className={styles.container}> */}
      <Image
        className={styles.icon}
        src={skill.icon}
        alt="Next.js Logo"
        width={200}
        height={200}
      />
      {/* <h3>{skill.name}</h3> */}
      {/* </i> */}
    </div>
  );
};

export default SkillCard;
