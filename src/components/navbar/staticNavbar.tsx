import React, { FC } from "react";
import styles from "./staticNavbar.module.scss";
import SmoothAnchor from "../../app/utils/smoothAnchor";

const StaticNav: FC = () => {
  return (
    <ul className={styles.navbar}>
      <li>
        <SmoothAnchor href="#main">Inicio</SmoothAnchor>
      </li>
      <li>
        <SmoothAnchor href="#about">Trayectoria</SmoothAnchor>
      </li>
      <li>
        <SmoothAnchor href="#skills">Capacidades</SmoothAnchor>
      </li>
      <li>
        <SmoothAnchor href="#footer">Contacto</SmoothAnchor>
      </li>
    </ul>
  );
};

export default StaticNav;
