import React from "react";
import styles from "./footer.module.scss";
import LinkIcons from "../../app/utils/links";
import ScrollToTopButton from "./topButton";

const Footer: React.FC = () => {
  const myEmail = "hello@alemolamg.com";

  return (
    <footer className={styles.footer} id="footer" aria-label="Pie de página">
      <div className={styles.inner}>
        {/* Bloque principal */}
        <div className={styles.brand}>
          <p className={styles.goodbye}>
            Gracias por llegar hasta aquí. ¡Hablemos! ✌️
          </p>
          <a className={styles.mail} href={`mailto:${myEmail}`}>
            {myEmail}
          </a>
        </div>

        <nav className={styles.quick} aria-label="Secciones del sitio">
          <h4>Secciones</h4>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#about">Sobre mí</a></li>
            <li><a href="#skills">Conocimientos</a></li>
            <li><a href="#footer">Contacto</a></li>
          </ul>
        </nav>

        <div className={styles.social}>
          <h4>Redes</h4>
          <LinkIcons containerStyle={styles.links} iconStyle={styles.iconLg} />
        </div>
      </div>

      {/* Barra de créditos + año */}
      <div className={styles.legalBar}>
        <p>© 2025 Alejandro Molero Gómez. Todos los derechos reservados.</p>
        {/* <p>Está prohibido copiar o reproducir el contenido de este sitio sin permiso explícito.</p> */}
      </div>

      {/* Botón subir */}
      <ScrollToTopButton iconStyle={styles.topIcon} containerStyle={styles.topButton} />
    </footer>
  );
};

export default Footer;