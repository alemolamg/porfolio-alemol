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
import type { SiteCopy } from "@/i18n/siteCopy";
import type { Locale } from "@/i18n/locales";

interface PresentationProps {
  copy: SiteCopy["presentation"];
  navigation: SiteCopy["navigation"];
  locale: Locale;
}

const capabilityIcons = [faDiagramProject, faMicrochip, faShieldHalved];

const Presentation: React.FC<PresentationProps> = ({ copy, navigation, locale }) => {
  const imageURL = "/image_alemol.jpg";

  return (
    <div className={styles.container}>
      <Navbar copy={navigation} locale={locale} />

      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.copy}>
          <div className={styles.kicker}>{copy.kicker}</div>
          <h1 id="hero-title" className={styles.title}>{copy.title}</h1>
          <p className={styles.lead}>{copy.lead}</p>

          <div className={styles.ctaRow}>
            <DownloadButton label={copy.downloadCvLabel} />
            <LinkIcons iconStyle={styles.socialIcon} />
          </div>

          <div className={styles.highlightRow} aria-label="Resumen profesional">
            {copy.highlights.map((item) => (
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
              alt={copy.imageAlt}
              width={240}
              height={240}
              priority
              sizes="(max-width: 899px) 240px, 250px"
            />
          </div>

          <div className={styles.identity}>
            <p className={styles.name}>{copy.name}</p>
            <p className={styles.role}>{copy.role}</p>
          </div>

          <div className={styles.metrics} aria-label="Indicadores del perfil">
            {copy.metrics.map((metric) => (
              <div key={metric.label} className={styles.metric}>
                <span className={styles.metricLabel}>{metric.label}</span>
                <strong className={styles.metricValue}>{metric.value}</strong>
              </div>
            ))}
          </div>

          <div className={styles.capabilities}>
            {copy.capabilities.map((item, index) => (
              <article key={item.title} className={styles.capability}>
                <FontAwesomeIcon className={styles.capabilityIcon} icon={capabilityIcons[index]} />
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
