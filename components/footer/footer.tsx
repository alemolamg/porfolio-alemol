import React from "react";
import styles from "./footer.module.scss";
import LinkIcons from "../utils/links";
import ScrollToTopButton from "./topButton";

const Footer: React.FC = () => {
  const myEmail = "hello@alemolamg.com";
  return (
    <footer className={styles.footer}>
      {/* <div>Contenido de Alemol</div> */}
      <div>
        {/* <h4>@Alemol AMG</h4> */}
        <p>
          <a href={`mailto:${myEmail}`}>{myEmail}</a>
        </p>
      </div>
      <div>
        enlaces:
        <LinkIcons containerStyle={styles.links} iconStyle={styles.icon} />
      </div>
      <div>
        <ScrollToTopButton />
      </div>
    </footer>
  );
};

export default Footer;
