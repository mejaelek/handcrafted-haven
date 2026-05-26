import Link from "next/link";
import styles from "../auth.module.css";

export const metadata = { title: "Create Account | Handcrafted Haven" };

export default function RegisterPage() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <span className={styles.logoMark}>⬡</span>
        <h1 className={styles.title}>Start Your Shop</h1>
        <p className={styles.sub}>Join hundreds of artisans on Handcrafted Haven</p>
        <form className={styles.form} aria-label="Registration form">
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="firstName" className={styles.label}>First name</label>
              <input
                id="firstName"
                type="text"
                className={styles.input}
                placeholder="Jane"
                required
                autoComplete="given-name"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="lastName" className={styles.label}>Last name</label>
              <input
                id="lastName"
                type="text"
                className={styles.input}
                placeholder="Doe"
                required
                autoComplete="family-name"
              />
            </div>
          </div>
          <div className={styles.field}>
            <label htmlFor="regEmail" className={styles.label}>Email address</label>
            <input
              id="regEmail"
              type="email"
              className={styles.input}
              placeholder="you@example.com"
              required
              autoComplete="email"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="regPassword" className={styles.label}>Password</label>
            <input
              id="regPassword"
              type="password"
              className={styles.input}
              placeholder="At least 8 characters"
              required
              autoComplete="new-password"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="role" className={styles.label}>I want to…</label>
            <select id="role" className={styles.select}>
              <option value="buyer">Shop for handcrafted items</option>
              <option value="seller">Sell my handcrafted items</option>
              <option value="both">Both</option>
            </select>
          </div>
          <button type="submit" className={styles.btnSubmit}>Create Account</button>
        </form>
        <p className={styles.switchText}>
          Already have an account?{" "}
          <Link href="/auth/login" className={styles.switchLink}>Sign in →</Link>
        </p>
      </div>
    </div>
  );
}
