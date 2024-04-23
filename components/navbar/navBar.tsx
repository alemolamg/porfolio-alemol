import React, { FC, useState } from "react";
import styles from "./navMenu.module.scss";
import "animate.css";
import StaticNav from "./staticNavbar";

const MyComponent: FC = () => {
  return (
    <div className={styles.navbar}>
      {/* <NavMenu /> */}
      <StaticNav />
    </div>
  );
};

export default MyComponent;
