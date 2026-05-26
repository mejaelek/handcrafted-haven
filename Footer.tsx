import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logoMark}>⬡</span>
          <p className={styles.tagline}>A marketplace for unique,<br />handcrafted treasures.</p>
          <p className={styles.copy}>© {new Date().getFullYear()} Handcrafted Haven</p>
        </div>
        <nav className={styles.links} aria-label="Footer navigation">
          <div className={styles.col}>
            <h3 className={styles.colHead}>Shop</h3>
            <Link href="/products">Browse All</Link>
            <Link href="/products?category=ceramics">Ceramics</Link>
            <Link href="/products?category=jewelry">Jewelry</Link>
            <Link href="/products?category=textiles">Textiles</Link>
          </div>
          <div className={styles.col}>
            <h3 className={styles.colHead}>Sell</h3>
            <Link href="/auth/register">Open a Shop</Link>
            <Link href="/sellers">Find Artisans</Link>
            <Link href="/about">Our Story</Link>
          </div>
          <div className={styles.col}>
            <h3 className={styles.colHead}>Help</h3>
            <Link href="#">Shipping & Returns</Link>
            <Link href="#">Accessibility</Link>
            <Link href="#">Privacy Policy</Link>
          </div>
        </nav>
      </div>
    </footer>
  );
}
