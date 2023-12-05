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
  { name: "java", icon: "/skill-icons/java_icon.svg" },
];

const SkillsContainer: React.FC<SkillsProps> = ({}) => {
  return (
    <div className="w-full md:w-auto py-5">
      <h2 className="flex justify-center mb-5 text-xl">Tecnologías con las que trabajo</h2>
      <div className={styles.skillContainer}>
        {skills.map((tecnologia, index) => (
          <SkillCard key={index} skill={tecnologia} />
        ))}
      </div>
    </div>
  );
};

export default SkillsContainer;
