import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "./links.module.scss";
import cx from "clsx";

const linkList = [
  { href: "https://www.linkedin.com/in/alemolamg/", icon: faLinkedin, label: "LinkedIn" },
  { href: "https://github.com/alemolamg", icon: faGithub, label: "GitHub" },
];

interface LinkIconsProps {
  containerStyle?: string;
  iconStyle?: string;
}

const LinkIcons: FC<LinkIconsProps> = ({ containerStyle, iconStyle }) => (
  <div className={cx(styles.links, containerStyle)}>
    {linkList.map(({ href, icon, label }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        <FontAwesomeIcon className={cx(styles.icon, iconStyle)} icon={icon} />
      </a>
    ))}
  </div>
);

export default LinkIcons;