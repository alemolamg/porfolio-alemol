"use client";
import cx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";

interface ScrollToTopButtonProps {
  iconStyle?: string;
  containerStyle?: string;
}


const ScrollToTopButton: FC<ScrollToTopButtonProps> = (props) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Desplazamiento suave
    });
  };

  return (
    <button className={props.containerStyle} onClick={scrollToTop}>
      <FontAwesomeIcon className={cx(props.iconStyle)} icon={faCircleArrowUp} />
    </button>
  );
};

export default ScrollToTopButton;
