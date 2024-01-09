import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./links.module.scss";
import cx from "clsx";
import {
  IconDefinition,
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export interface LinkIcons {
  enlace: string;
  icon: IconDefinition;
}

const linkList: LinkIcons[] = [
  { enlace: "https://www.linkedin.com/in/alemolamg/", icon: faLinkedin },
  { enlace: "https://github.com/alemolamg", icon: faGithub },
  // { enlace: "https://x.com/alemolamg", icon: faXTwitter },
];

interface LinkIconsProps {
  containerStyle?: string;
  iconStyle?: string;
}

const LinkIcons: FC<LinkIconsProps> = (propStyle) => {
  return (
    <div className={cx(propStyle.containerStyle, styles.links)}>
      {linkList.map((link, index) => (
        <a
          key={index}
          href={link.enlace}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className={cx(propStyle.iconStyle, styles.icon)}
            icon={link.icon}
          />
        </a>
      ))}
    </div>
  );
};

export default LinkIcons;
