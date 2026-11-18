"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import styles from "./navbar.module.scss";
import SmoothAnchor from "../../app/utils/smoothAnchor";
import type { SiteCopy } from "@/i18n/siteCopy";
import { localeLabels, locales, type Locale } from "@/i18n/locales";

interface NavBarProps {
  copy: SiteCopy["navigation"];
  locale: Locale;
}

const MenuLinks = ({
  items,
  onNavigate,
}: {
  items: SiteCopy["navigation"]["items"];
  onNavigate?: () => void;
}) => (
  <>
    {items.map((item) => (
      <li key={item.label}>
        <SmoothAnchor href={item.href} onNavigate={onNavigate}>
          {item.label}
        </SmoothAnchor>
      </li>
    ))}
  </>
);

const NavBar: FC<NavBarProps> = ({ copy, locale }) => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const handleLocaleChange = (nextLocale: Locale) => {
    if (nextLocale === locale) return;

    const { pathname, search, hash } = window.location;
    const [, ...segments] = pathname.split("/").filter(Boolean);
    const targetPath = [nextLocale, ...segments].join("/");
    // eslint-disable-next-line @next/next/no-location-assign-relative-destination -- The root layout must render again to update the document language.
    window.location.assign(`/${targetPath}${search}${hash}`);
  };

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
    <nav className={styles.navbar} aria-label={copy.ariaLabel}>
      <SmoothAnchor className={styles.brand} href="#main" aria-label={copy.brandLabel}>
        <span className={styles.brandText}>{copy.brandText}</span>
      </SmoothAnchor>

      <ul className={styles.inlineList}>
        <MenuLinks items={copy.items} />
      </ul>

      <div className={styles.actions}>
        <div className={styles.localeControl}>
          <label className={styles.localeLabel} htmlFor="locale-switcher">
            {copy.languageSwitcherLabel}
          </label>
          <select
            id="locale-switcher"
            className={styles.localeSelect}
            value={locale}
            onChange={(event) => handleLocaleChange(event.target.value as Locale)}
            aria-label={copy.languageSwitcherLabel}
          >
            {locales.map((localeCode) => (
              <option key={localeCode} value={localeCode}>
                {localeLabels[localeCode].flag} {localeLabels[localeCode].label}
              </option>
            ))}
          </select>
        </div>
        <button
          type="button"
          ref={triggerRef}
          className={styles.menuIcon}
          aria-label={open ? copy.closeMenuLabel : copy.openMenuLabel}
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
            className={styles.menuPanel}
            ref={panelRef}
          >
            <ul>
              <MenuLinks items={copy.items} onNavigate={() => setOpen(false)} />
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavBar;
