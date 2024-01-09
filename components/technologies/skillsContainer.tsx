import SkillCard from "./skillCard";
import styles from "./skill.module.scss";
import { IconDefinition, faAngular, faDocker, faGit, faJava, faPhp, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { faCubes, faDatabase, faNetworkWired } from "@fortawesome/free-solid-svg-icons";

interface SkillsProps {}

export interface Skill {
  name: string;
  icon: string | IconDefinition;
}

const skills: Skill[] = [
  { name: "java", icon: faJava },
  { name: "kotlin", icon: "/skill-icons/Kotlin Monochrome Logo.svg" },
  { name: "PHP", icon: faPhp },
  { name: "docker", icon: faDocker },
  { name: "kubernetes", icon: faCubes },
  { name: "python", icon: faPython },
  { name: "sql", icon: faDatabase },
  { name: "angular", icon: faAngular },
  { name: "react", icon: faReact },
  { name: "Git", icon: faGit },
  { name: "Redes", icon: faNetworkWired },
];

const SkillsContainer: React.FC<SkillsProps> = ({}) => {
  return (
    <div className={styles.container} id="skills">
      <h2 className="flex justify-center mb-5 text-xl">
        Tecnologías con las que trabajo
      </h2>
      <div className={styles.skillContainer}>
        {skills.map((tecnologia, index) => (
          <SkillCard key={index} skill={tecnologia} />
        ))}
      </div>
    </div>
  );
};

export default SkillsContainer;
