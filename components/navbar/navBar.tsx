"use client";

import React, { FC, useState } from "react";
import styles from "./navMenu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import cx from "clsx";
import NavMenu from "./navMenu";
import "animate.css";

const MyComponent: FC = () => {

  return (
      <div className={styles.navbar}>
          <NavMenu/>
    </div>
  );
};

export default MyComponent;
