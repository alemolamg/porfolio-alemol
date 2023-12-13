import React from "react";
import styles from "./footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkIcons from "../utils/links";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      {/* <div>Contenido de Alemol</div> */}
      <div>
        <h4>@Alemol AMG</h4>
      </div>
      <div>
        enlaces:
        <LinkIcons containerStyle={styles.links} iconStyle={styles.icon} />
      </div>
    </footer>
  );
};

export default Footer;
