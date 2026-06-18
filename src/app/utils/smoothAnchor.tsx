"use client";
import { AnchorHTMLAttributes, MouseEvent } from "react";
import { scrollToHash } from "./smoothScroll";

interface SmoothAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  onNavigate?: () => void;
}

const SmoothAnchor = ({ href = "#", onNavigate, onClick, ...props }: SmoothAnchorProps) => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    if (typeof href === "string" && href.startsWith("#")) {
      event.preventDefault();
      scrollToHash(href);
      onNavigate?.();
    }
  };

  return <a href={href} onClick={handleClick} {...props} />;
};

export default SmoothAnchor;
