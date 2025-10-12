import SkillCard from "./skillCard";
import styles from "./skill.module.scss";
import {
  IconDefinition,
  faAngular,
  faDocker,
  faGit,
  faJava,
  faPhp,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faComputer, faCubes, faDatabase, faNetworkWired } from "@fortawesome/free-solid-svg-icons";

export interface Skill {
  name: string;
  icon: string | IconDefinition;
}

const skills: Skill[] = [
  { name: "Java", icon: faJava },
  { name: "Kotlin", icon: "/skill-icons/Kotlin Monochrome Logo.svg" },
  { name: "PHP", icon: faPhp },
  { name: "Docker", icon: faDocker },
  { name: "Kubernetes", icon: faCubes },
  { name: "Python", icon: faPython },
  { name: "SQL", icon: faDatabase },
  { name: "Angular", icon: faAngular },
  { name: "React", icon: faReact },
  { name: "Git", icon: faGit },
  { name: "Redes", icon: faNetworkWired },
  { name: "Soporte", icon: faComputer },
];

const SkillsContainer: React.FC = () => {
  return (
    <section className={styles.container} id="skills" aria-labelledby="skills-title">
      <h2 id="skills-title" className={styles.sectionTitle}>
        Tecnologías con las que trabajo
      </h2>

      <div className={styles.grid}>
        {skills.map((skill, i) => (
          <SkillCard key={i} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default SkillsContainer;