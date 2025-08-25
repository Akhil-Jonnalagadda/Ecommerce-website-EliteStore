import { Product } from "@/components/products/ProductCard";

// Generate 500 products programmatically
const generateProducts = (): Product[] => {
  const baseProducts = [
    {
      name: "Premium Wireless Headphones",
      description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
      basePrice: 299.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&crop=center",
      category: "Electronics"
    },
    {
      name: "Smart Fitness Watch",
      description: "Advanced fitness tracking with heart rate monitoring, GPS, and smartphone integration.",
      basePrice: 249.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
      category: "Wearables"
    },
    {
      name: "Minimalist Leather Wallet",
      description: "Handcrafted genuine leather wallet with RFID blocking and slim profile design.",
      basePrice: 79.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
      category: "Fashion"
    },
    {
      name: "Ceramic Coffee Mug Set",
      description: "Beautiful handmade ceramic mugs perfect for your morning coffee routine.",
      basePrice: 45.99,
      image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400&h=400&fit=crop&crop=center",
      category: "Home & Kitchen"
    },
    {
      name: "Professional Camera Lens",
      description: "High-performance 85mm f/1.8 lens for portrait and professional photography.",
      basePrice: 599.99,
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop&crop=center",
      category: "Photography"
    },
    {
      name: "Ergonomic Office Chair",
      description: "Comfortable ergonomic chair with lumbar support and adjustable height for long work sessions.",
      basePrice: 349.99,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
      category: "Furniture"
    },
    {
      name: "Wireless Charging Pad",
      description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
      basePrice: 39.99,
      image: "https://images.unsplash.com/photo-1609792858131-7a5c4b8b6ab4?w=400&h=400&fit=crop&crop=center",
      category: "Electronics"
    },
    {
      name: "Organic Cotton T-Shirt",
      description: "Soft, breathable organic cotton t-shirt in classic fit with sustainable production.",
      basePrice: 29.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center",
      category: "Fashion"
    },
    {
      name: "Bluetooth Speaker",
      description: "Portable waterproof Bluetooth speaker with 360-degree sound and 24-hour battery.",
      basePrice: 89.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop&crop=center",
      category: "Electronics"
    },
    {
      name: "Professional Gaming Mouse",
      description: "High-precision gaming mouse with RGB lighting and customizable buttons.",
      basePrice: 79.99,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop&crop=center",
      category: "Gaming"
    },
    {
      name: "Mechanical Gaming Keyboard",
      description: "RGB mechanical gaming keyboard with tactile switches and customizable lighting.",
      basePrice: 159.99,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop&crop=center",
      category: "Gaming"
    },
    {
      name: "Stainless Steel Water Bottle",
      description: "Insulated stainless steel water bottle that keeps drinks cold for 24h and hot for 12h.",
      basePrice: 34.99,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop&crop=center",
      category: "Sports & Outdoors"
    },
    {
      name: "Succulents Plant Set",
      description: "Collection of beautiful low-maintenance succulent plants perfect for home decoration.",
      basePrice: 24.99,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&crop=center",
      category: "Home & Garden"
    },
    {
      name: "Yoga Mat",
      description: "Non-slip eco-friendly yoga mat perfect for all types of exercises and meditation.",
      basePrice: 49.99,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop&crop=center",
      category: "Sports & Outdoors"
    },
    {
      name: "LED Desk Lamp",
      description: "Adjustable LED desk lamp with multiple brightness levels and USB charging port.",
      basePrice: 89.99,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center",
      category: "Home & Kitchen"
    }
  ];

  const variations = [
    "Pro", "Max", "Ultra", "Premium", "Elite", "Classic", "Modern", "Deluxe", 
    "Advanced", "Smart", "Wireless", "Bluetooth", "Digital", "HD", "4K", "RGB",
    "Eco-Friendly", "Sustainable", "Compact", "Portable", "Professional", "Studio",
    "Essential", "Basic", "Standard", "Plus", "Special Edition", "Limited", "V2", "Next-Gen"
  ];

  const colors = ["Black", "White", "Silver", "Gold", "Rose Gold", "Blue", "Red", "Green", "Purple", "Pink"];
  const sizes = ["Small", "Medium", "Large", "XL", "XXL"];

  const products: Product[] = [];

  for (let i = 0; i < 500; i++) {
    const baseProduct = baseProducts[i % baseProducts.length];
    const variation = variations[Math.floor(Math.random() * variations.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() > 0.7 ? ` - ${sizes[Math.floor(Math.random() * sizes.length)]}` : "";
    
    // Price variation up to $2000
    const priceMultiplier = Math.random() * 6 + 0.5; // 0.5x to 6.5x
    const price = Math.min(baseProduct.basePrice * priceMultiplier, 2000);
    
    const isOnSale = Math.random() > 0.7;
    const isNew = Math.random() > 0.85;
    
    products.push({
      id: (i + 1).toString(),
      name: `${variation} ${baseProduct.name} - ${color}${size}`,
      description: baseProduct.description,
      price: Math.round(price * 100) / 100,
      originalPrice: isOnSale ? Math.round(price * 1.3 * 100) / 100 : undefined,
      rating: Math.round((Math.random() * 2 + 3) * 10) / 10, // 3.0 to 5.0
      reviewCount: Math.floor(Math.random() * 2000) + 50,
      image: baseProduct.image,
      category: baseProduct.category,
      isOnSale,
      isNew,
      stock: Math.floor(Math.random() * 100) + 5
    });
  }

  return products;
};

export const mockProducts: Product[] = generateProducts();

export const featuredProducts = mockProducts.slice(0, 8);
export const saleProducts = mockProducts.filter(product => product.isOnSale);
export const newProducts = mockProducts.filter(product => product.isNew);