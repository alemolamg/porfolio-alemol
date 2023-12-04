import SkillCard from "./skillCard";
import styles from "./skill.module.scss";

interface SkillsProps {}

export interface Skill {
  name: string;
  icon: string;
}

const skills: Skill[] = [
  { name: "python", icon: "/skill-icons/python_icon.svg" },
  { name: "kotlin", icon: "/skill-icons/Kotlin-Full-Color.svg" },
  { name: "sql", icon: "/skill-icons/kotlin_icon.svg" },
  // { name: "java", icon: "image" },
];

const SkillsContainer: React.FC<SkillsProps> = ({}) => {
  return (
    <div className={styles.skillContainer}>
      {skills.map((tecnologia, index) => (
        <SkillCard key={index} skill={tecnologia} />
      ))}
    </div>
  );
};

export default SkillsContainer;
