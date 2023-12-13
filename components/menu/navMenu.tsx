'use client'

import React, { FC, useState } from 'react';
import styles from "./menu.module.scss";
// import Page from 'next/page';

const MyComponent: FC = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(!open);
    };

    return (
      <div className={styles.navbar}>
        <div className={styles.menuIcon} onClick={handleClick}>
          ☰
        </div>
        {open && (
          <div className={styles.menuPanel}>
            <ul>
              <li>Inicio</li>
              <li>Acerca de</li>
              <li>Contacto</li>
            </ul>
            <div className={styles.socialMedia}>
              {/* Agrega enlaces a tus redes sociales aquí */}
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        )}
      </div>
    );
};

export default (MyComponent);