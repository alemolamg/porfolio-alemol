"use client";

import React, { FC, useState } from "react";
import styles from "./navMenu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import cx from "clsx";
import "animate.css";
import Links from "../../app/utils/links";

const MyComponent: FC = () => {
  const [open, setOpen] = useState(false); 

  const handleClick = () => {
    setOpen(!open);

  };

  const iconbutton = !open ? (
    <FontAwesomeIcon className={styles.icon} icon={faBars} />
  ) : (
    <FontAwesomeIcon className={styles.icon} icon={faXmark} />
  );

  return (
    <div className={styles.navbar}>
      <div
        className={styles.menuIcon}
        onClick={handleClick}
        style={{ color: open ? "white" : "black" }}
      >
        {iconbutton}
      </div>
      {open && (
        <div
          className={cx(
            styles.menuPanel,
            "animate__animated ", open ? "animate__fadeInRight" : " animate__fadeOutRight"
          )}
        >
          <ul>
            <li><a href="">Inicio</a></li>
            <li><a href="#description">Acerca de mi </a></li>
            <li><a href="#skills">Conocimientos</a></li>
            <li>Contacto</li>
          </ul>
          <div className={styles.socialMedia}>
            <p>enlaces:</p>
            <Links iconStyle={styles.icon} />
          </div>
        </div>
      )}

    </div>
  );
};

export default MyComponent;
