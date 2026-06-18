import React from "react";
import styles from "./footer.module.scss";
import LinkIcons from "../../app/utils/links";
import ScrollToTopButton from "./topButton";

const Footer: React.FC = () => {
  const myEmail = "hello@alemolamg.com";

  return (
    <footer className={styles.footer} id="footer" aria-label="Pie de página">
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.label}>Contacto</span>
          <p className={styles.goodbye}>
            Si necesitas perfil técnico para ordenar procesos, integrar sistemas o llevar una idea a producción, hablemos.
          </p>
          <a className={styles.mail} href={`mailto:${myEmail}`}>
            {myEmail}
          </a>
        </div>

        <nav className={styles.quick} aria-label="Secciones del sitio">
          <h4>Secciones</h4>
          <ul>
            <li>
              <a href="#main">Inicio</a>
            </li>
            <li>
              <a href="#about">Trayectoria</a>
            </li>
            <li>
              <a href="#skills">Capacidades</a>
            </li>
            <li>
              <a href="#footer">Contacto</a>
            </li>
          </ul>
        </nav>

        <div className={styles.social}>
          <h4>Redes</h4>
          <LinkIcons containerStyle={styles.links} iconStyle={styles.iconLg} />
        </div>
      </div>

      <div className={styles.legalBar}>
        <p>© 2026 Alejandro Molero Gómez. Todos los derechos reservados.</p>
      </div>

      <ScrollToTopButton iconStyle={styles.topIcon} containerStyle={styles.topButton} />
    </footer>
  );
};

export default Footer;
