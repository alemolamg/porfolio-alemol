import React, { FC } from "react";
import styles from "./staticNavbar.module.scss";

const StaticNav: FC = () => {
  return (
      <ul className={styles.navbar}>
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#description">Acerca de mi</a>
        </li>
        <li>
          <a href="#skills">Conocimientos</a>
        </li>
        <li>Contacto</li>
      </ul>
  );
};

export default StaticNav;
