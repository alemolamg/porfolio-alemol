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
import {
  faComputer,
  faCubes,
  faCode,
  faDatabase,
  faNetworkWired,
  faRobot,
  faServer,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";

export interface Skill {
  name: string;
  icon: string | IconDefinition;
}

interface SkillGroup {
  title: string;
  subtitle: string;
  skills: Skill[];
}

const groups: SkillGroup[] = [
  {
    title: "Desarrollo",
    subtitle: "Construcción de interfaces, servicios y aplicaciones orientadas a negocio.",
    skills: [
      { name: "TypeScript", icon: faCode },
      { name: "Next.js", icon: faCode },
      { name: "Java", icon: faJava },
      { name: "Kotlin", icon: "/skill-icons/Kotlin Monochrome Logo.svg" },
      { name: "PHP", icon: faPhp },
      { name: "Python", icon: faPython },
      { name: "Node.js", icon: faCode },
      { name: "React", icon: faReact },
      { name: "Angular", icon: faAngular },
      { name: "Spring Boot", icon: faJava },
      { name: "Django", icon: faPython },
    ],
  },
  {
    title: "Automatización e IA",
    subtitle: "Flujos inteligentes, asistentes y orquestación de procesos.",
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
      { name: "SharePoint", icon: faCode },
      { name: "OneDrive", icon: faCode },
    ],
  },
];

const SkillsContainer: React.FC = () => {
  return (
    <section className={styles.container} id="skills" aria-labelledby="skills-title">
      <div className={styles.header}>
        <span className={styles.badge}>Capacidades</span>
        <h2 id="skills-title" className={styles.sectionTitle}>
          Tecnologías y herramientas que uso para construir y automatizar
        </h2>
        <p className={styles.intro}>
          Trabajo con un stack amplio, pero siempre con la misma prioridad: que
          la solución sea mantenible, útil y fácil de operar.
        </p>
      </div>

      <div className={styles.groups}>
        {groups.map((group) => (
          <article key={group.title} className={styles.group}>
            <div className={styles.groupHeader}>
              <h3 className={styles.groupTitle}>{group.title}</h3>
              <p className={styles.groupSubtitle}>{group.subtitle}</p>
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
