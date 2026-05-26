import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, reviews } from "@/data/mockData";
import styles from "./page.module.css";

interface Props { params: { id: string } }

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props) {
  const product = products.find((p) => p.id === params.id);
  return { title: product ? `${product.name} | Handcrafted Haven` : "Product Not Found" };
}

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.id === params.id);
  if (!product) notFound();
  const productReviews = reviews.filter((r) => r.productId === params.id);

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link> /{" "}
          <Link href="/products">Products</Link> /{" "}
          <span>{product.name}</span>
        </nav>

        <div className={styles.layout}>
          <div className={styles.gallery}>
            <div className={styles.mainImage}>
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.img}
              />
            </div>
          </div>

          <div className={styles.info}>
            <p className={styles.category}>{product.category}</p>
            <h1 className={styles.name}>{product.name}</h1>
            <p className={styles.seller}>
              By{" "}
              <Link href={`/sellers/${product.sellerId}`} className={styles.sellerLink}>
                {product.sellerName}
              </Link>
            </p>
            <div className={styles.ratingRow}>
              <span className={styles.stars} aria-label={`Rated ${product.rating} out of 5`}>
                {"★".repeat(Math.floor(product.rating))}{"☆".repeat(5 - Math.floor(product.rating))}
              </span>
              <span className={styles.ratingNum}>{product.rating}</span>
              <span className={styles.reviewCount}>({product.reviewCount} reviews)</span>
            </div>
            <p className={styles.price}>${product.price}</p>
            <p className={styles.desc}>{product.description}</p>
            <div className={styles.tags}>
              {product.tags.map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
            <div className={styles.actions}>
              <button className={styles.btnAdd} type="button">Add to Cart</button>
              <button className={styles.btnWish} type="button" aria-label="Add to wishlist">♡</button>
            </div>
            <p className={styles.shipping}>
              🌿 Ships in 3–5 business days &nbsp;·&nbsp; Free returns within 30 days
            </p>
          </div>
        </div>

        <section className={styles.reviewsSection} aria-labelledby="reviews-heading">
          <h2 id="reviews-heading" className={styles.reviewsTitle}>Customer Reviews</h2>
          {productReviews.length === 0 ? (
            <p className={styles.noReviews}>No reviews yet. Be the first!</p>
          ) : (
            <div className={styles.reviewsList}>
              {productReviews.map((r) => (
                <article key={r.id} className={styles.review}>
                  <div className={styles.reviewHeader}>
                    <strong className={styles.reviewUser}>{r.userName}</strong>
                    <span className={styles.reviewStars} aria-label={`${r.rating} stars`}>
                      {"★".repeat(r.rating)}
                    </span>
                    <time className={styles.reviewDate} dateTime={r.createdAt}>
                      {new Date(r.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <p className={styles.reviewText}>{r.comment}</p>
                </article>
              ))}
            </div>
          )}
          <div className={styles.reviewForm}>
            <h3 className={styles.reviewFormTitle}>Leave a Review</h3>
            <div className={styles.ratingSelect} aria-label="Select rating">
              {[1, 2, 3, 4, 5].map((s) => (
                <button key={s} type="button" className={styles.starBtn} aria-label={`${s} star`}>★</button>
              ))}
            </div>
            <textarea
              className={styles.reviewTextarea}
              rows={4}
              placeholder="Share your experience with this product…"
              aria-label="Review text"
            />
            <button type="button" className={styles.submitReview}>Submit Review</button>
          </div>
        </section>
      </div>
    </div>
  );
}
