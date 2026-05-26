import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sellers, products } from "@/data/mockData";
import ProductCard from "@/components/ui/ProductCard";
import styles from "./page.module.css";

interface Props { params: { id: string } }

export async function generateStaticParams() {
  return sellers.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: Props) {
  const seller = sellers.find((s) => s.id === params.id);
  return {
    title: seller ? `${seller.name}'s Shop | Handcrafted Haven` : "Artisan Not Found",
  };
}

export default function SellerPage({ params }: Props) {
  const seller = sellers.find((s) => s.id === params.id);
  if (!seller) notFound();
  const sellerProducts = products.filter((p) => p.sellerId === params.id);

  return (
    <div className={styles.page}>
      <div className={styles.cover}>
        <Image src={seller.coverImage} alt="" fill sizes="100vw" className={styles.coverImg} />
        <div className={styles.coverOverlay} />
      </div>
      <div className={styles.inner}>
        <div className={styles.profile}>
          <Image
            src={seller.avatar}
            alt={seller.name}
            width={100}
            height={100}
            className={styles.avatar}
          />
          <div>
            <h1 className={styles.name}>{seller.name}</h1>
            <p className={styles.specialty}>{seller.specialty} · {seller.location}</p>
          </div>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}><strong>{seller.productCount}</strong><span>Products</span></div>
          <div className={styles.stat}><strong>{seller.rating}</strong><span>Avg Rating</span></div>
          <div className={styles.stat}><strong>{seller.reviewCount}</strong><span>Reviews</span></div>
          <div className={styles.stat}>
            <strong>{new Date(seller.joinedAt).getFullYear()}</strong>
            <span>Member Since</span>
          </div>
        </div>
        <p className={styles.bio}>{seller.bio}</p>
        <h2 className={styles.productsHeading}>Products by {seller.name}</h2>
        {sellerProducts.length === 0 ? (
          <p style={{ color: "var(--muted)" }}>No products listed yet.</p>
        ) : (
          <div className={styles.grid}>
            {sellerProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
