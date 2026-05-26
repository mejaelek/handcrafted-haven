"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className={styles.header} role="banner">
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="Handcrafted Haven home">
          <span className={styles.logoMark}>⬡</span>
          <span className={styles.logoText}>Handcrafted<br /><em>Haven</em></span>
        </Link>
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`} aria-label="Main navigation">
          <Link href="/products" className={styles.navLink}>Browse</Link>
          <Link href="/sellers" className={styles.navLink}>Artisans</Link>
          <Link href="/about" className={styles.navLink}>Our Story</Link>
        </nav>
        <div className={styles.actions}>
          <Link href="/auth/login" className={styles.btnGhost}>Sign In</Link>
          <Link href="/auth/register" className={styles.btnPrimary}>Start Selling</Link>
          <button
            className={styles.burger}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
