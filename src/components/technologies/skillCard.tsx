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
  const icon =
    typeof skill.icon === "string" ? (
      <Image
        className={styles.iconImg}
        src={skill.icon}
        alt={skill.name}
        width={160}
        height={160}
        unoptimized
      />
    ) : (
      <FontAwesomeIcon
        className={styles.iconFA}
        icon={skill.icon || faCode}
        aria-hidden={false}
        title={skill.name}
      />
    );

  return (
    <article className={styles.card} role="listitem">
      <div className={styles.iconWrap} aria-hidden>
        {icon}
      </div>
      <h3 className={styles.cardTitle}>{skill.name}</h3>
    </article>
  );
};

export default SkillCard;