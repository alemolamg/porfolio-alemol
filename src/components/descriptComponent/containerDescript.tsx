"use client";
import React, { useEffect, useRef } from "react";
import styles from "./containerDescript.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faBuilding,
  faRobot,
  faTimeline,
} from "@fortawesome/free-solid-svg-icons";
import type { SiteCopy } from "@/i18n/siteCopy";

interface ContainerDescripProps {
  copy: SiteCopy["about"];
}

const timelineIcons = [faBuilding, faTimeline, faRobot, faArrowTrendUp];

const ContainerDescrip: React.FC<ContainerDescripProps> = ({ copy }) => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const items = Array.from(root.querySelectorAll<HTMLElement>(`.${styles.reveal}`));

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealVisible);
            obs.unobserve(entry.target);
          }
        });
      },
      { root: null, threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    items.forEach((el, i) => {
      el.style.setProperty("--reveal-delay", `${i * 90}ms`);
      obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <section
      className={styles.container}
      id="about"
      aria-labelledby="about-title"
      ref={rootRef}
    >
      <div className={styles.header}>
        <span className={`${styles.badge} ${styles.reveal}`}>{copy.badge}</span>
        <h2 id="about-title" className={`${styles.sectionTitle} ${styles.reveal}`}>
          {copy.title}
        </h2>
        <p className={`${styles.intro} ${styles.reveal}`}>
          {copy.intro}
        </p>
      </div>

      <div className={styles.timeline}>
        {copy.timeline.map(({ period, title, text }, i) => (
          <article key={title} className={`${styles.card} ${styles.reveal}`}>
            <div className={styles.cardHeader}>
              <span className={styles.period}>{period}</span>
              <FontAwesomeIcon className={styles.icon} icon={timelineIcons[i]} />
            </div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardText}>{text}</p>
            <div className={styles.cardFoot}>0{i + 1}</div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ContainerDescrip;
