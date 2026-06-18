import React, { FC } from "react";
import styles from "./staticNavbar.module.scss";

const StaticNav: FC = () => {
  return (
    <ul className={styles.navbar}>
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
  );
};

export default StaticNav;
