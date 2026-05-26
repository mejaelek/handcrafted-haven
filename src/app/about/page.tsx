import styles from "./page.module.css";

export const metadata = { title: "Our Story | Handcrafted Haven" };

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Our Story</h1>
        <p className={styles.sub}>
          Built by makers, for makers — and the people who love what they create.
        </p>
      </section>
      <div className={styles.inner}>
        <article className={styles.prose}>
          <h2>Why We Built This</h2>
          <p>
            Handcrafted Haven was born from a simple frustration: the best handmade goods were
            hidden away at local markets and word-of-mouth. Great artisans with extraordinary
            skills had no platform that truly honored their craft.
          </p>
          <p>
            We set out to change that — building a marketplace that puts the artisan at the
            center, connecting them directly with customers who understand the difference between
            mass-produced and handmade.
          </p>
          <h2>Our Values</h2>
          <ul>
            <li><strong>Authentic craftsmanship</strong> — Every seller is verified. Every product is genuinely handmade.</li>
            <li><strong>Community first</strong> — We reinvest in artisan education, sustainability programs, and craft preservation.</li>
            <li><strong>Transparency</strong> — Sellers set their own prices. We take a small, flat commission. Nothing hidden.</li>
            <li><strong>Sustainability</strong> — We encourage eco-friendly materials and packaging across the platform.</li>
          </ul>
          <h2>Accessibility Commitment</h2>
          <p>
            Handcrafted Haven is committed to WCAG 2.1 Level AA compliance. We believe everyone
            deserves access to beautiful, handcrafted goods regardless of ability or assistive
            technology used.
          </p>
        </article>
      </div>
    </div>
  );
}
