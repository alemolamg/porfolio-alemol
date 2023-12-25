import React from "react";
import styles from "./footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkIcons from "../utils/links";

const Footer: React.FC = () => {
  const myEmail = "hello@alemolamg.com"
  return (
    <footer className={styles.footer}>
      {/* <div>Contenido de Alemol</div> */}
      <div>
        {/* <h4>@Alemol AMG</h4> */}
        <p><a href={`mailto:${myEmail}`}>{myEmail}</a></p>
      </div>
      <div>
        enlaces:
        <LinkIcons containerStyle={styles.links} iconStyle={styles.icon} />
      </div>
    </footer>
  );
};

export default Footer;
