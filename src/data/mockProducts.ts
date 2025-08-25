import { Product } from "@/components/products/ProductCard";

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviewCount: 1247,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&crop=center",
    category: "Electronics",
    isOnSale: true,
    stock: 15
  },
  {
    id: "2", 
    name: "Smart Fitness Watch",
    description: "Advanced fitness tracking with heart rate monitoring, GPS, and smartphone integration.",
    price: 249.99,
    rating: 4.6,
    reviewCount: 892,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
    category: "Wearables",
    isNew: true,
    stock: 23
  },
  {
    id: "3",
    name: "Minimalist Leather Wallet",
    description: "Handcrafted genuine leather wallet with RFID blocking and slim profile design.",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.9,
    reviewCount: 445,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
    category: "Fashion",
    isOnSale: true,
    stock: 8
  },
  {
    id: "4",
    name: "Ceramic Coffee Mug Set",
    description: "Beautiful handmade ceramic mugs perfect for your morning coffee routine.",
    price: 45.99,
    rating: 4.4,
    reviewCount: 234,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400&h=400&fit=crop&crop=center",
    category: "Home & Kitchen",
    stock: 32
  },
  {
    id: "5",
    name: "Professional Camera Lens",
    description: "High-performance 85mm f/1.8 lens for portrait and professional photography.",
    price: 599.99,
    rating: 4.7,
    reviewCount: 178,
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop&crop=center",
    category: "Photography",
    isNew: true,
    stock: 5
  },
  {
    id: "6",
    name: "Ergonomic Office Chair",
    description: "Comfortable ergonomic chair with lumbar support and adjustable height for long work sessions.",
    price: 349.99,
    originalPrice: 449.99,
    rating: 4.5,
    reviewCount: 567,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
    category: "Furniture",
    isOnSale: true,
    stock: 12
  },
  {
    id: "7",
    name: "Wireless Charging Pad",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
    price: 39.99,
    rating: 4.3,
    reviewCount: 321,
    image: "https://images.unsplash.com/photo-1609792858131-7a5c4b8b6ab4?w=400&h=400&fit=crop&crop=center",
    category: "Electronics",
    stock: 45
  },
  {
    id: "8",
    name: "Organic Cotton T-Shirt",
    description: "Soft, breathable organic cotton t-shirt in classic fit with sustainable production.",
    price: 29.99,
    rating: 4.6,
    reviewCount: 689,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center",
    category: "Fashion",
    stock: 28
  },
  {
    id: "9",
    name: "Bluetooth Speaker",
    description: "Portable waterproof Bluetooth speaker with 360-degree sound and 24-hour battery.",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.4,
    reviewCount: 756,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop&crop=center",
    category: "Electronics",
    isOnSale: true,
    stock: 19
  },
  {
    id: "10",
    name: "Succulents Plant Set",
    description: "Collection of beautiful low-maintenance succulent plants perfect for home decoration.",
    price: 24.99,
    rating: 4.8,
    reviewCount: 423,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&crop=center",
    category: "Home & Garden",
    isNew: true,
    stock: 41
  },
  {
    id: "11",
    name: "Stainless Steel Water Bottle",
    description: "Insulated stainless steel water bottle that keeps drinks cold for 24h and hot for 12h.",
    price: 34.99,
    rating: 4.7,
    reviewCount: 892,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop&crop=center",
    category: "Sports & Outdoors",
    stock: 67
  },
  {
    id: "12",
    name: "Mechanical Gaming Keyboard",
    description: "RGB mechanical gaming keyboard with tactile switches and customizable lighting.",
    price: 159.99,
    originalPrice: 199.99,
    rating: 4.6,
    reviewCount: 1034,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop&crop=center",
    category: "Gaming",
    isOnSale: true,
    stock: 14
  }
];

export const featuredProducts = mockProducts.slice(0, 8);
export const saleProducts = mockProducts.filter(product => product.isOnSale);
export const newProducts = mockProducts.filter(product => product.isNew);