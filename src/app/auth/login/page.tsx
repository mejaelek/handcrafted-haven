import Link from "next/link";
import styles from "../auth.module.css";

export const metadata = { title: "Sign In | Handcrafted Haven" };

export default function LoginPage() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <span className={styles.logoMark}>⬡</span>
        <h1 className={styles.title}>Welcome Back</h1>
        <p className={styles.sub}>Sign in to your Handcrafted Haven account</p>
        <form className={styles.form} aria-label="Sign in form">
          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>Email address</label>
            <input
              id="email"
              type="email"
              className={styles.input}
              placeholder="you@example.com"
              required
              autoComplete="email"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input
              id="password"
              type="password"
              className={styles.input}
              placeholder="Your password"
              required
              autoComplete="current-password"
            />
          </div>
          <a href="#" className={styles.forgot}>Forgot password?</a>
          <button type="submit" className={styles.btnSubmit}>Sign In</button>
        </form>
        <p className={styles.switchText}>
          Don&apos;t have an account?{" "}
          <Link href="/auth/register" className={styles.switchLink}>Create one →</Link>
        </p>
      </div>
    </div>
  );
}
