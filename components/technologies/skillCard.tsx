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
      <h2>{skill.name}</h2>
      <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src={skill.icon}
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      {/* <img src={skill.icon} alt={skill.name} /> */}
    </div>
  );
};

export default SkillCard;
