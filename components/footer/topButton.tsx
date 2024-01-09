"use client";
import cx from "clsx";
import styles from "./footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp, faSquareCaretUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Desplazamiento suave
    });
  };

  return (
    <button onClick={scrollToTop}>
      <FontAwesomeIcon className={cx(styles.icon)} icon={faCircleArrowUp} />
    </button>
  );
};

export default ScrollToTopButton;
