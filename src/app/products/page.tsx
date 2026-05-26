import ProductCard from "@/components/ui/ProductCard";
import { products, categories } from "@/data/mockData";
import styles from "./page.module.css";

export const metadata = { title: "Browse Products | Handcrafted Haven" };

export default function ProductsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <aside className={styles.sidebar} aria-label="Filter products">
          <h2 className={styles.filterTitle}>Filter</h2>
          <div className={styles.filterGroup}>
            <h3 className={styles.filterLabel}>Category</h3>
            <ul className={styles.filterList}>
              <li>
                <label>
                  <input type="radio" name="cat" defaultChecked /> All Categories
                </label>
              </li>
              {categories.map((c) => (
                <li key={c.id}>
                  <label>
                    <input type="radio" name="cat" value={c.slug} /> {c.name}{" "}
                    <span className={styles.count}>{c.productCount}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.filterGroup}>
            <h3 className={styles.filterLabel}>Price Range</h3>
            <div className={styles.priceInputs}>
              <input type="number" placeholder="Min" className={styles.priceInput} aria-label="Minimum price" />
              <span>—</span>
              <input type="number" placeholder="Max" className={styles.priceInput} aria-label="Maximum price" />
            </div>
          </div>
          <div className={styles.filterGroup}>
            <h3 className={styles.filterLabel}>Rating</h3>
            <ul className={styles.filterList}>
              {[5, 4, 3].map((r) => (
                <li key={r}>
                  <label>
                    <input type="radio" name="rating" /> {"★".repeat(r)} &amp; up
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <main>
          <div className={styles.topBar}>
            <p className={styles.resultCount}>{products.length} items found</p>
            <select className={styles.sortSelect} aria-label="Sort products">
              <option>Sort: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Highest Rated</option>
              <option>Newest</option>
            </select>
          </div>
          <div className={styles.grid}>
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
