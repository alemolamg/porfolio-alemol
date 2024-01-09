import React, { FC, useState } from "react";
import styles from "./navMenu.module.scss";
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
