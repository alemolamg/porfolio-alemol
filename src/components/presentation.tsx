import React from "react";
import styles from "./presentation.module.scss";
import Navbar from "./navbar/navBar";
import LinkIcons from "../app/utils/links";
import DownloadButton from "../app/utils/downloadPDF";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiagramProject,
  faMicrochip,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

const highlights = [
  "5+ años de experiencia",
  "Responsable de IT",
  "Desarrollo full-stack",
  "Soporte IT y procesos",
];

const metrics = [
  { label: "Foco", value: "Sistemas claros" },
  { label: "Trabajo", value: "Procesos conectados" },
  { label: "Impacto", value: "Menos fricción" },
];

const capabilities = [
  {
    icon: faDiagramProject,
    title: "Orquestación",
    text: "Diseño flujos y conecto herramientas para que la operación avance con menos pasos manuales.",
  },
  {
    icon: faMicrochip,
    title: "Automatización aplicada",
    text: "Combino automatismos e IA cuando aportan contexto real, velocidad y menos carga operativa para el equipo.",
  },
  {
    icon: faShieldHalved,
    title: "Control operativo",
    text: "Priorizar trazabilidad, estabilidad y mantenimiento es clave cuando los procesos ya están en producción.",
  },
];

const Presentation: React.FC = () => {
  const imageURL = "/image_alemol.jpg";

  return (
    <div className={styles.container}>
      <Navbar />

      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.copy}>
          <div className={styles.kicker}>Portfolio profesional</div>
          <h1 id="hero-title" className={styles.title}>
            Conecto desarrollo, soporte IT y automatización para crear sistemas
            más útiles, claros y escalables.
          </h1>
          <p className={styles.lead}>
            Soy Alejandro Molero Gómez, Responsable de IT en Grupoasesores.
            Aporto criterio técnico para construir, integrar y automatizar
            procesos con una visión muy práctica: menos fricción, más control y
            mejor trazabilidad. Mi experiencia combina desarrollo web, cloud
            migration, ERP, soporte a equipos internos e IA aplicada cuando
            realmente ayuda al proceso.
          </p>

          <div className={styles.ctaRow}>
            <DownloadButton />
            <LinkIcons iconStyle={styles.socialIcon} />
          </div>

          <div className={styles.highlightRow} aria-label="Resumen profesional">
            {highlights.map((item) => (
              <span key={item} className={styles.highlight}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.profileCard}>
          <div className={styles.avatarWrap}>
            <Image
              className={styles.avatar}
              src={imageURL}
              alt="Retrato de Alejandro Molero Gómez"
              width={240}
              height={240}
              priority
              sizes="(max-width: 899px) 240px, 250px"
            />
          </div>

          <div className={styles.identity}>
            <p className={styles.name}>Alejandro Molero Gómez</p>
            <p className={styles.role}>Responsable de IT y desarrollo · Grupoasesores</p>
          </div>

          <div className={styles.metrics} aria-label="Indicadores del perfil">
            {metrics.map((metric) => (
              <div key={metric.label} className={styles.metric}>
                <span className={styles.metricLabel}>{metric.label}</span>
                <strong className={styles.metricValue}>{metric.value}</strong>
              </div>
            ))}
          </div>

          <div className={styles.capabilities}>
            {capabilities.map((item) => (
              <article key={item.title} className={styles.capability}>
                <FontAwesomeIcon className={styles.capabilityIcon} icon={item.icon} />
                <div>
                  <h2 className={styles.capabilityTitle}>{item.title}</h2>
                  <p className={styles.capabilityText}>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Presentation;
