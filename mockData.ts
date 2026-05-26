import { Product, Seller, Category, Review } from "@/types";

export const categories: Category[] = [
  { id: "1", name: "Ceramics & Pottery", slug: "ceramics", description: "Handthrown bowls, vases, mugs, and sculptural pieces", icon: "🏺", productCount: 124 },
  { id: "2", name: "Jewelry & Accessories", slug: "jewelry", description: "One-of-a-kind rings, necklaces, earrings and more", icon: "💍", productCount: 238 },
  { id: "3", name: "Textiles & Fiber", slug: "textiles", description: "Woven blankets, macramé, embroidery and knits", icon: "🧶", productCount: 189 },
  { id: "4", name: "Wood & Furniture", slug: "woodwork", description: "Hand-carved and joinery furniture, bowls, decor", icon: "🪵", productCount: 97 },
  { id: "5", name: "Leather Goods", slug: "leather", description: "Hand-stitched bags, wallets, belts and journals", icon: "👜", productCount: 76 },
  { id: "6", name: "Candles & Apothecary", slug: "candles", description: "Hand-poured candles, soaps, and botanical blends", icon: "🕯️", productCount: 152 },
];

export const sellers: Seller[] = [
  { id: "s1", name: "Maya Thornwood", bio: "I've been throwing pottery in my studio in Vermont for over 15 years. Each piece is hand-thrown on the wheel and wood-fired for a rustic, organic finish.", location: "Burlington, VT", avatar: "https://picsum.photos/seed/seller1/200/200", coverImage: "https://picsum.photos/seed/cover1/800/300", specialty: "Ceramics & Pottery", productCount: 34, rating: 4.9, reviewCount: 287, joinedAt: "2021-03-12", socialLinks: { instagram: "@mayaclays" } },
  { id: "s2", name: "James Holloway", bio: "Silversmith and metalworker based in New Mexico. I draw inspiration from Southwestern landscapes and ancient jewelry-making traditions.", location: "Santa Fe, NM", avatar: "https://picsum.photos/seed/seller2/200/200", coverImage: "https://picsum.photos/seed/cover2/800/300", specialty: "Jewelry & Accessories", productCount: 51, rating: 4.8, reviewCount: 412, joinedAt: "2020-08-05", socialLinks: { instagram: "@hollowaymetal", etsy: "JamesHolloway" } },
  { id: "s3", name: "Priya Desai", bio: "I weave using traditional Indian techniques passed down from my grandmother, blending heritage patterns with contemporary design sensibilities.", location: "Portland, OR", avatar: "https://picsum.photos/seed/seller3/200/200", coverImage: "https://picsum.photos/seed/cover3/800/300", specialty: "Textiles & Fiber", productCount: 28, rating: 4.7, reviewCount: 195, joinedAt: "2022-01-18" },
  { id: "s4", name: "Erik Sandström", bio: "Scandinavian woodworker living in Minnesota. I use only sustainably sourced local woods to craft heirloom-quality pieces.", location: "Minneapolis, MN", avatar: "https://picsum.photos/seed/seller4/200/200", coverImage: "https://picsum.photos/seed/cover4/800/300", specialty: "Wood & Furniture", productCount: 19, rating: 5.0, reviewCount: 143, joinedAt: "2021-11-30" },
];

export const products: Product[] = [
  { id: "p1", name: "Stoneware Mug — Ash Glaze", description: "Hand-thrown stoneware mug with a natural ash glaze. Holds 12oz, dishwasher safe. Each piece is unique with slight variations in glaze pattern.", price: 48, category: "ceramics", images: ["https://picsum.photos/seed/prod1/600/600"], sellerId: "s1", sellerName: "Maya Thornwood", rating: 4.9, reviewCount: 47, tags: ["mug", "pottery", "kitchen"], inStock: true, createdAt: "2024-01-15" },
  { id: "p2", name: "Silver Turquoise Ring", description: "Sterling silver band set with natural Sleeping Beauty turquoise. Hand-fabricated in Santa Fe.", price: 185, category: "jewelry", images: ["https://picsum.photos/seed/prod2/600/600"], sellerId: "s2", sellerName: "James Holloway", rating: 5.0, reviewCount: 32, tags: ["ring", "silver", "turquoise"], inStock: true, createdAt: "2024-02-08" },
  { id: "p3", name: "Hand-Woven Throw Blanket", description: "Woven on a floor loom using 100% merino wool. Warm, lightweight herringbone pattern in natural tones.", price: 240, category: "textiles", images: ["https://picsum.photos/seed/prod3/600/600"], sellerId: "s3", sellerName: "Priya Desai", rating: 4.8, reviewCount: 28, tags: ["blanket", "wool", "weaving"], inStock: true, createdAt: "2024-01-20" },
  { id: "p4", name: "Black Walnut Charcuterie Board", description: "End-grain charcuterie board crafted from locally-sourced black walnut. Finished with food-safe mineral oil.", price: 125, category: "woodwork", images: ["https://picsum.photos/seed/prod4/600/600"], sellerId: "s4", sellerName: "Erik Sandstrom", rating: 5.0, reviewCount: 19, tags: ["board", "walnut", "kitchen"], inStock: true, createdAt: "2024-03-01" },
  { id: "p5", name: "Soy Candle — Forest After Rain", description: "Hand-poured in small batches using 100% soy wax and a blend of cedarwood and green moss essential oils. Burns 50+ hours.", price: 38, category: "candles", images: ["https://picsum.photos/seed/prod5/600/600"], sellerId: "s1", sellerName: "Maya Thornwood", rating: 4.7, reviewCount: 64, tags: ["candle", "soy", "scented"], inStock: true, createdAt: "2024-02-14" },
  { id: "p6", name: "Leather Field Notes Cover", description: "Full-grain vegetable-tanned leather cover for Field Notes notebooks. Hand-stitched with waxed linen thread.", price: 75, category: "leather", images: ["https://picsum.photos/seed/prod6/600/600"], sellerId: "s2", sellerName: "James Holloway", rating: 4.9, reviewCount: 38, tags: ["leather", "journal", "notebook"], inStock: true, createdAt: "2024-01-30" },
];

export const reviews: Review[] = [
  { id: "r1", productId: "p1", userId: "u1", userName: "Sarah K.", rating: 5, comment: "Absolutely gorgeous mug. The glaze is stunning and the perfect weight in the hand. My morning coffee ritual is now elevated!", createdAt: "2024-03-10" },
  { id: "r2", productId: "p1", userId: "u2", userName: "Tom B.", rating: 5, comment: "Third mug I have ordered from Maya. Each one is uniquely beautiful. Fast shipping too.", createdAt: "2024-02-28" },
  { id: "r3", productId: "p2", userId: "u3", userName: "Linda M.", rating: 5, comment: "This ring is even more beautiful in person. The turquoise is the most vibrant blue-green I have seen. Worth every penny.", createdAt: "2024-03-05" },
];
