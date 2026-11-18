import Image from "next/image";
import Navbar from "./navbar/navBar";
import DownloadButton from "../app/utils/downloadPDF";
import SmoothAnchor from "../app/utils/smoothAnchor";
import styles from "./presentation.module.scss";
import type { SiteCopy } from "@/i18n/siteCopy";
import type { Locale } from "@/i18n/locales";

interface PresentationProps {
  copy: SiteCopy["presentation"];
  navigation: SiteCopy["navigation"];
  locale: Locale;
}

export default function Presentation({ copy, navigation, locale }: PresentationProps) {
  return (
    <>
      <Navbar copy={navigation} locale={locale} />
      <section className={styles.hero} aria-labelledby="hero-title">
        <div>
          <h1 id="hero-title" className={styles.title}>{copy.title}</h1>
          <p className={styles.lead}>{copy.lead}</p>
          <div className={styles.actions}>
            <SmoothAnchor className={styles.projectsLink} href="#projects">
              {copy.projectsLabel}
            </SmoothAnchor>
            <DownloadButton label={copy.downloadCvLabel} />
          </div>
        </div>
        <figure className={styles.profile}>
          <Image
            className={styles.portrait}
            src="/image_alemol.jpg"
            alt={copy.imageAlt}
            width={440}
            height={440}
            preload
            sizes="(min-width: 1440px) 440px, (min-width: 900px) 29vw, (min-width: 600px) 320px, 85vw"
          />
          <figcaption>
            <strong>{copy.name}</strong>
            <span>{copy.role}</span>
          </figcaption>
        </figure>
      </section>
    </>
  );
}
