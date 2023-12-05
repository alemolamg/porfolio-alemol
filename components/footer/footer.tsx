import React from "react";
import styles from "./footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faApple,
  faApplePay,
  faCcApplePay,
  faGithub,
  faLinkedin,
  faTwitter,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export interface LinkIcons {
  enlace: string;
  icon: IconDefinition;
}

const linkList: LinkIcons[] = [
  { enlace: "https://www.linkedin.com/in/alemolamg/", icon: faLinkedin },
  { enlace: "https://github.com/alemolamg", icon: faGithub },
  { enlace: "https://x.com/alemolamg", icon: faXTwitter },
];

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      {/* <div>Contenido de Alemol</div> */}
      <div>
        <h4>@Alemol AMG</h4>
      </div>
      <div>
        enlaces:
        <div className={styles.links}>
          {linkList.map((link, index) => (
            <a
              key={index}
              href={link.enlace}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className={styles.icon} icon={link.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
