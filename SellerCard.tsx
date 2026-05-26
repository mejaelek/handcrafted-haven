import Link from "next/link";
import Image from "next/image";
import { Seller } from "@/types";
import styles from "./SellerCard.module.css";

export default function SellerCard({ seller }: { seller: Seller }) {
  return (
    <article className={styles.card}>
      <div className={styles.cover}>
        <Image src={seller.coverImage} alt="" fill sizes="400px" className={styles.coverImg} />
      </div>
      <div className={styles.body}>
        <div className={styles.avatarWrap}>
          <Image src={seller.avatar} alt={seller.name} width={72} height={72} className={styles.avatar} />
        </div>
        <Link href={`/sellers/${seller.id}`}>
          <h3 className={styles.name}>{seller.name}</h3>
        </Link>
        <p className={styles.specialty}>{seller.specialty}</p>
        <p className={styles.location}>📍 {seller.location}</p>
        <p className={styles.bio}>{seller.bio.slice(0, 100)}…</p>
        <div className={styles.stats}>
          <div className={styles.stat}><strong>{seller.productCount}</strong><span>Items</span></div>
          <div className={styles.stat}><strong>{seller.rating}</strong><span>Rating</span></div>
          <div className={styles.stat}><strong>{seller.reviewCount}</strong><span>Reviews</span></div>
        </div>
        <Link href={`/sellers/${seller.id}`} className={styles.cta}>View Shop</Link>
      </div>
    </article>
  );
}
