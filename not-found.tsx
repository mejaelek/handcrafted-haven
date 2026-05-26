import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem", padding: "2rem", textAlign: "center" }}>
      <span style={{ fontSize: "4rem" }}>🏺</span>
      <h1 style={{ fontSize: "2rem", color: "var(--ink)" }}>Page Not Found</h1>
      <p style={{ color: "var(--muted)", maxWidth: "400px" }}>This page seems to have wandered off. Let&apos;s get you back to something beautiful.</p>
      <Link href="/" style={{ marginTop: "0.5rem", padding: "0.75rem 2rem", background: "var(--earth)", color: "var(--cream)", borderRadius: "var(--radius-sm)", fontWeight: 600, fontSize: "0.9rem" }}>
        Return Home
      </Link>
    </div>
  );
}
