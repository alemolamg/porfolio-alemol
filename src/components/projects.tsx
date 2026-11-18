import type { SiteCopy } from "@/i18n/siteCopy";
import styles from "./projects.module.scss";

const projectUrls = {
  picker: "https://github.com/alemolamg/picker/commit/69b104a7ee858560eb3ed0be0c54e2a012dd22fc",
  portfolio: "https://github.com/alemolamg/porfolio-alemol",
};

export default function Projects({ copy }: { copy: SiteCopy["projects"] }) {
  return (
    <section id="projects" className={styles.projects} aria-labelledby="projects-title">
      <h2 id="projects-title">{copy.title}</h2>
      {copy.items.map((project) => (
        <article key={project.id} className={styles.project}>
          <div>
            <h3>{project.name}</h3>
            <p className={styles.stack}>{project.stack}</p>
          </div>
          <div className={styles.details}>
            <p>{project.description}</p>
            {project.nextStep && <p>{project.nextStep}</p>}
            <a href={projectUrls[project.id]}>{project.linkLabel} <span aria-hidden="true">→</span></a>
          </div>
        </article>
      ))}
    </section>
  );
}
