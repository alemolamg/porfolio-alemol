import SkillCard from "./skillCard";
import styles from "./skill.module.scss";
import { IconDefinition, faDocker, faGit, faPhp, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { faCubes, faDatabase, faNetworkWired } from "@fortawesome/free-solid-svg-icons";

interface SkillsProps {}

export interface Skill {
  name: string;
  icon: string | IconDefinition;
}

const skills: Skill[] = [
  { name: "kotlin", icon: "/skill-icons/Kotlin-Full-Color.svg" },
  { name: "java", icon: "/skill-icons/java_icon.svg" },
  { name: "PHP", icon: faPhp },
  { name: "python", icon: faPython },
  { name: "docker", icon: faDocker },
  { name: "kubernetes", icon: faCubes },
  { name: "sql", icon: faDatabase },
  { name: "react", icon: faReact },
  { name: "Git", icon: faGit },
  { name: "Redes", icon: faNetworkWired },
];

const SkillsContainer: React.FC<SkillsProps> = ({}) => {
  return (
    <div className="w-full md:w-auto py-5 bg-white">
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
