import SellerCard from "@/components/ui/SellerCard";
import { sellers } from "@/data/mockData";
import styles from "./page.module.css";

export const metadata = { title: "Meet the Artisans | Handcrafted Haven" };

export default function SellersPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Meet the Makers</h1>
        <p className={styles.heroSub}>The passionate artisans behind every handcrafted treasure</p>
      </div>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {sellers.map((s) => (
            <SellerCard key={s.id} seller={s} />
          ))}
        </div>
      </div>
    </div>
  );
}
