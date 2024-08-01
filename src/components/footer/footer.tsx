import React from "react";
import styles from "./footer.module.scss";
import LinkIcons from "../../app/utils/links";
import ScrollToTopButton from "./topButton";

const Footer: React.FC = () => {
  const myEmail = "hello@alemolamg.com";
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container}>
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
      </div>

      {/* Botón de subir */}
        <ScrollToTopButton iconStyle={styles.icon} containerStyle={styles.topButton} />
    </footer>
  );
};

export default Footer;
