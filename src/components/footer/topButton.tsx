"use client";
import cx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";

interface ScrollToTopButtonProps {
  iconStyle?: string;
  containerStyle?: string;
}

const ScrollToTopButton: FC<ScrollToTopButtonProps> = ({ iconStyle, containerStyle }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Volver arriba"
      title="Volver arriba"
      className={containerStyle}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon className={cx(iconStyle)} icon={faCircleArrowUp} />
    </button>
  );
};

export default ScrollToTopButton;