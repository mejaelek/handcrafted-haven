export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  sellerId: string;
  sellerName: string;
  rating: number;
  reviewCount: number;
  tags: string[];
  inStock: boolean;
  createdAt: string;
}

export interface Seller {
  id: string;
  name: string;
  bio: string;
  location: string;
  avatar: string;
  coverImage: string;
  specialty: string;
  productCount: number;
  rating: number;
  reviewCount: number;
  joinedAt: string;
  socialLinks?: { instagram?: string; etsy?: string; website?: string };
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  productCount: number;
}
