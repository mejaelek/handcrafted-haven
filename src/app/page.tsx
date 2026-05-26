import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ui/ProductCard";
import SellerCard from "@/components/ui/SellerCard";
import { products, sellers, categories } from "@/data/mockData";
import styles from "./page.module.css";

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);
  const featuredSellers = sellers.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>Est. 2024 — Artisan Marketplace</span>
          <h1 id="hero-heading" className={styles.heroTitle}>
            Where Every Object<br />
            <em>Tells a Story</em>
          </h1>
          <p className={styles.heroSub}>
            Discover handcrafted treasures from independent artisans around the world.
            Each piece made with intention, skill, and soul.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/products" className={styles.ctaPrimary}>Shop the Collection</Link>
            <Link href="/auth/register" className={styles.ctaSecondary}>Become a Seller →</Link>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}><strong>876+</strong><span>Artisans</span></div>
            <div className={styles.heroStat}><strong>12K+</strong><span>Products</span></div>
            <div className={styles.heroStat}><strong>48K+</strong><span>Happy Customers</span></div>
          </div>
        </div>
        <div className={styles.heroImages} aria-hidden="true">
          <div className={styles.heroImgLarge}>
            <Image src="https://picsum.photos/seed/hero1/500/640" alt="" fill sizes="500px" className={styles.heroImg} />
          </div>
          <div className={styles.heroImgStack}>
            <div className={styles.heroImgSm}>
              <Image src="https://picsum.photos/seed/hero2/240/240" alt="" fill sizes="240px" className={styles.heroImg} />
            </div>
            <div className={styles.heroImgSm}>
              <Image src="https://picsum.photos/seed/hero3/240/240" alt="" fill sizes="240px" className={styles.heroImg} />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className={styles.section} aria-labelledby="categories-heading">
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Browse by Craft</span>
            <h2 id="categories-heading" className={styles.sectionTitle}>Explore Categories</h2>
          </div>
          <div className={styles.categoriesGrid}>
            {categories.map((cat) => (
              <Link key={cat.id} href={`/products?category=${cat.slug}`} className={styles.categoryCard}>
                <span className={styles.catIcon} aria-hidden="true">{cat.icon}</span>
                <h3 className={styles.catName}>{cat.name}</h3>
                <p className={styles.catCount}>{cat.productCount} items</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="products-heading">
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Handpicked</span>
            <h2 id="products-heading" className={styles.sectionTitle}>Featured Products</h2>
            <Link href="/products" className={styles.sectionLink}>View all →</Link>
          </div>
          <div className={styles.productsGrid}>
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Story Banner */}
      <section className={styles.banner} aria-labelledby="story-heading">
        <div className={styles.bannerInner}>
          <span className={styles.sectionEyebrow} style={{ color: "var(--earth-light)" }}>
            Why Handcrafted Haven
          </span>
          <h2 id="story-heading" className={styles.bannerTitle}>
            Made by Human Hands,<br />Not Machines
          </h2>
          <p className={styles.bannerText}>
            We believe in the value of handmade. Every item in our marketplace is crafted
            by a real person with real skill — no mass production, no factories.
            When you buy here, you support an artisan, not a corporation.
          </p>
          <div className={styles.bannerFeatures}>
            {[
              { icon: "✦", title: "100% Handmade", desc: "Every item is verified as genuinely handcrafted." },
              { icon: "✦", title: "Direct from Artisan", desc: "Buy straight from the maker. No middlemen." },
              { icon: "✦", title: "Unique Pieces", desc: "Own something truly one-of-a-kind." },
            ].map((f) => (
              <div key={f.title} className={styles.bannerFeature}>
                <span className={styles.featureIcon} aria-hidden="true">{f.icon}</span>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Sellers */}
      <section className={styles.section} aria-labelledby="sellers-heading">
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Meet the Makers</span>
            <h2 id="sellers-heading" className={styles.sectionTitle}>Featured Artisans</h2>
            <Link href="/sellers" className={styles.sectionLink}>Meet all artisans →</Link>
          </div>
          <div className={styles.sellersGrid}>
            {featuredSellers.map((s) => (
              <SellerCard key={s.id} seller={s} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection} aria-labelledby="cta-heading">
        <div className={styles.ctaInner}>
          <span className={styles.sectionEyebrow} style={{ color: "var(--earth-light)" }}>For Artisans</span>
          <h2 id="cta-heading" className={styles.ctaTitle}>Ready to Share Your Craft?</h2>
          <p className={styles.ctaText}>
            Join hundreds of artisans already selling on Handcrafted Haven.
            Set up your shop in minutes — no technical skills required.
          </p>
          <Link href="/auth/register" className={styles.ctaPrimary}>Open Your Shop Today</Link>
        </div>
      </section>
    </>
  );
}
