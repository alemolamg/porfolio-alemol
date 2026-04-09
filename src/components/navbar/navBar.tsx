"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import styles from "./navbar.module.scss";

const Navbar: FC = () => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  // Cierra el panel al pulsar Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Cierra si haces click fuera del panel
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

  const MenuLinks = ({ onNavigate }: { onNavigate?: () => void }) => (
    <>
      <li><a href="#" onClick={onNavigate}>Inicio</a></li>
      <li><a href="#description" onClick={onNavigate}>Acerca de mi</a></li>
      <li><a href="#skills" onClick={onNavigate}>Conocimientos</a></li>
      <li><a href="#footer" onClick={onNavigate}>Contacto</a></li>
    </>
  );

  return (
    <nav className={styles.navbar} aria-label="Principal">
      {/* Botón hamburguesa (visible en móvil por estilos) */}
      <button
        type="button"
        ref={triggerRef}
        className={styles.menuIcon}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        {/* Puedes cambiar por un icono SVG */}
        <span aria-hidden>☰</span>
      </button>

      {/* Lista inline para desktop (estilos la mostrarán solo en md+) */}
      <ul className={styles.inlineList} role="menubar">
        <MenuLinks />
      </ul>

      {/* Panel móvil deslizante / overlay */}
      {open && (
        <>
          <div className={styles.backdrop} onClick={() => setOpen(false)} aria-hidden />
          <div
            id="mobile-menu"
            className={styles.menuPanel}
            ref={panelRef}
            role="dialog"
            aria-modal="true"
          >
            <ul>
              <MenuLinks onNavigate={() => setOpen(false)} />
            </ul>
            <div className={styles.links}>{/* redes */}</div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
