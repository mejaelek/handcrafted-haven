import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";
import styles from "./ProductCard.module.css";

interface Props { product: Product; }

function StarRating({ rating }: { rating: number }) {
  return (
    <span className={styles.stars} aria-label={`Rating: ${rating} out of 5`}>
      {"★".repeat(Math.floor(rating))}{"☆".repeat(5 - Math.floor(rating))}
    </span>
  );
}

export default function ProductCard({ product }: Props) {
  return (
    <article className={styles.card}>
      <Link href={`/products/${product.id}`} className={styles.imageWrap} aria-label={product.name}>
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={styles.image}
        />
        {!product.inStock && (
          <span className={styles.badge} aria-label="Out of stock">Sold Out</span>
        )}
      </Link>
      <div className={styles.body}>
        <p className={styles.sellerName}>{product.sellerName}</p>
        <Link href={`/products/${product.id}`}>
          <h3 className={styles.name}>{product.name}</h3>
        </Link>
        <div className={styles.meta}>
          <div className={styles.rating}>
            <StarRating rating={product.rating} />
            <span className={styles.reviewCount}>({product.reviewCount})</span>
          </div>
          <p className={styles.price}>${product.price}</p>
        </div>
      </div>
    </article>
  );
}
