import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Handcrafted Haven | Unique Artisan Marketplace",
  description:
    "Discover and shop unique handcrafted items from talented artisans. Connect with creators, explore one-of-a-kind pieces, and support local craftsmanship.",
  keywords: "handcrafted, artisan, marketplace, handmade, unique, crafts",
  openGraph: {
    title: "Handcrafted Haven",
    description: "A marketplace for unique handcrafted treasures",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
