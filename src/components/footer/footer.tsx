import React from "react";
import styles from "./footer.module.scss";
import LinkIcons from "../../app/utils/links";
import ScrollToTopButton from "./topButton";
import SmoothAnchor from "../../app/utils/smoothAnchor";
import type { SiteCopy } from "@/i18n/siteCopy";

interface FooterProps {
  copy: SiteCopy["footer"];
  common: SiteCopy["common"];
}

const Footer: React.FC<FooterProps> = ({ copy, common }) => {
  const myEmail = "hello@alemolamg.com";

  return (
    <footer className={styles.footer} id="footer" aria-label={copy.contactLabel}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.label}>{copy.contactLabel}</span>
          <p className={styles.goodbye}>{copy.goodbye}</p>
          <a className={styles.mail} href={`mailto:${myEmail}`}>
            {myEmail}
          </a>
        </div>

        <nav className={styles.quick} aria-label={copy.sectionsLabel}>
          <h4>{copy.sectionsLabel}</h4>
          <ul>
            {copy.items.map(({ href, label }) => (
              <li key={href}>
                <SmoothAnchor href={href}>{label}</SmoothAnchor>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.social}>
          <h4>{copy.socialLabel}</h4>
          <LinkIcons containerStyle={styles.links} iconStyle={styles.iconLg} />
        </div>
      </div>

      <div className={styles.legalBar}>
        <p>{copy.legal}</p>
      </div>

      <ScrollToTopButton iconStyle={styles.topIcon} containerStyle={styles.topButton} label={common.goToTop} />
    </footer>
  );
};

export default Footer;
