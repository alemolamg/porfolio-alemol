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
  faTypescript,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import {
  faComputer,
  faCubes,
  faDatabase,
  faNetworkWired,
  faRobot,
  faServer,
  faWandMagicSparkles,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";
import type { SiteCopy } from "@/i18n/siteCopy";

export interface Skill {
  name: string;
  icon: string | IconDefinition;
}

interface SkillGroup {
  title: string;
  subtitle: string;
  skills: Skill[];
}

interface SkillsContainerProps {
  copy: SiteCopy["skills"];
}

const groups: SkillGroup[] = [
  {
    title: "Desarrollo",
    subtitle: "Construcción de interfaces, servicios y aplicaciones orientadas a negocio.",
    skills: [
      { name: "TypeScript", icon: faTypescript },
      { name: "Next.js", icon: "/skill-icons/next.svg" },
      { name: "Java", icon: faJava },
      { name: "Kotlin", icon: "/skill-icons/Kotlin Monochrome Logo.svg" },
      { name: "PHP", icon: faPhp },
      { name: "Python", icon: faPython },
      { name: "Node.js", icon: faNode },
      { name: "React", icon: faReact },
      { name: "Angular", icon: faAngular },
      { name: "Spring Boot", icon: faJava },
      { name: "Django", icon: faPython },
    ],
  },
  {
    title: "Soporte y automatización",
    subtitle: "Procesos conectados, soporte operativo y automatización útil.",
    skills: [
      { name: "IA", icon: faRobot },
      { name: "Orquestación", icon: faWandMagicSparkles },
      { name: "Cloud Migration", icon: faServer },
      { name: "Git", icon: faGit },
      { name: "Docker", icon: faDocker },
      { name: "Kubernetes", icon: faCubes },
      { name: "Soporte", icon: faComputer },
    ],
  },
  {
    title: "Infraestructura y datos",
    subtitle: "Bases técnicas para sistemas estables, escalables y trazables.",
    skills: [
      { name: "SQL", icon: faDatabase },
      { name: "Redes", icon: faNetworkWired },
      { name: "Servidores", icon: faServer },
      // { name: "SharePoint", icon: faFloppyDisk },
      { name: "OneDrive", icon: faCloud },
    ],
  },
];

const SkillsContainer: React.FC<SkillsContainerProps> = ({ copy }) => {
  return (
    <section className={styles.container} id="skills" aria-labelledby="skills-title">
      <div className={styles.header}>
        <span className={styles.badge}>{copy.badge}</span>
        <h2 id="skills-title" className={styles.sectionTitle}>
          {copy.title}
        </h2>
        <p className={styles.intro}>{copy.intro}</p>
      </div>

      <div className={styles.groups}>
        {groups.map((group, index) => (
          <article key={group.title} className={styles.group}>
            <div className={styles.groupHeader}>
              <h3 className={styles.groupTitle}>{copy.groups[index].title}</h3>
              <p className={styles.groupSubtitle}>{copy.groups[index].subtitle}</p>
            </div>
            <div className={styles.grid}>
              {group.skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SkillsContainer;