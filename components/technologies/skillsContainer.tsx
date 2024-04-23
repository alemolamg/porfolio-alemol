import SkillCard from "./skillCard";
import styles from "./skill.module.scss";
import { IconDefinition, faAngular, faDocker, faGit, faJava, faPhp, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { faComputer, faCubes, faDatabase, faNetworkWired } from "@fortawesome/free-solid-svg-icons";

interface SkillsProps {}

export interface Skill {
  name: string;
  icon: string | IconDefinition;
}

const skills: Skill[] = [
  { name: "java", icon: faJava },
  { name: "kotlin", icon: "/skill-icons/Kotlin Monochrome Logo.svg" },
  { name: "python", icon: faPython },
  { name: "docker", icon: faDocker },
  { name: "kubernetes", icon: faCubes },
  { name: "PHP", icon: faPhp },
  { name: "sql", icon: faDatabase },
  { name: "react", icon: faReact },
  { name: "angular", icon: faAngular },
  { name: "Git", icon: faGit },
  { name: "Redes", icon: faNetworkWired },
  { name: "Soporte", icon: faComputer },
  // { name: "Gradle", icon: fagra}
];

const SkillsContainer: React.FC<SkillsProps> = ({}) => {
  return (
    <div className={styles.container} id="skills">
      <h2 className="flex justify-center mb-5 text-xl">
      STACK TECNOLÓGICO
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
