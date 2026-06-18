"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import styles from "./navbar.module.scss";
import LinkIcons from "../../app/utils/links";
import clsx from "clsx";

const menuItems = [
  { href: "#main", label: "Inicio" },
  { href: "#about", label: "Trayectoria" },
  { href: "#skills", label: "Capacidades" },
  { href: "#footer", label: "Contacto" },
];

const MenuLinks = ({ onNavigate }: { onNavigate?: () => void }) => (
  <>
    {menuItems.map((item) => (
      <li key={item.label}>
        <a href={item.href} onClick={onNavigate}>
          {item.label}
        </a>
      </li>
    ))}
  </>
);

const NavBar: FC = () => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      const clickedOutsidePanel = panelRef.current && !panelRef.current.contains(target);
      const clickedOutsideTrigger = triggerRef.current && !triggerRef.current.contains(target);

      if (open && clickedOutsidePanel && clickedOutsideTrigger) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <nav className={styles.navbar} aria-label="Principal">
      <a className={styles.brand} href="#main" aria-label="Ir al inicio">
        <span className={styles.brandMark}>AMG</span>
        <span className={styles.brandText}>Alejandro Molero Gómez</span>
      </a>

      <ul className={styles.inlineList} role="menubar">
        <MenuLinks />
      </ul>

      <div className={styles.actions}>
        <LinkIcons iconStyle={styles.socialIcon} />
        <button
          type="button"
          ref={triggerRef}
          className={styles.menuIcon}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden>☰</span>
        </button>
      </div>

      {open && (
        <>
          <div className={styles.backdrop} onClick={() => setOpen(false)} aria-hidden />
          <div
            id="mobile-menu"
            className={clsx(styles.menuPanel, styles.menuPanelOpen)}
            ref={panelRef}
            role="dialog"
            aria-modal="true"
          >
            <ul>
              <MenuLinks onNavigate={() => setOpen(false)} />
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavBar;
