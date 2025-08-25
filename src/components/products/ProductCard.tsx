import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  isNew?: boolean;
  isOnSale?: boolean;
  stock: number;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onToggleWishlist?: (productId: string) => void;
  isInWishlist?: boolean;
}

const ProductCard = ({ 
  product, 
  onAddToCart, 
  onToggleWishlist, 
  isInWishlist = false 
}: ProductCardProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="product-card group cursor-pointer">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          {/* Product Image */}
          <Link to={`/products/${product.id}`}>
            <div className="aspect-square bg-muted/30 relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className={`w-full h-full object-cover transition-smooth group-hover:scale-105 ${
                  isImageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setIsImageLoaded(true)}
                loading="lazy"
              />
              {!isImageLoaded && (
                <div className="absolute inset-0 bg-muted animate-pulse" />
              )}
            </div>
          </Link>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col space-y-1">
            {product.isNew && (
              <Badge className="badge-new">New</Badge>
            )}
            {product.isOnSale && discountPercentage > 0 && (
              <Badge className="badge-sale">-{discountPercentage}%</Badge>
            )}
          </div>

          {/* Wishlist Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`absolute top-3 right-3 w-8 h-8 bg-background/80 hover:bg-background transition-base ${
              isInWishlist ? 'text-red-500' : 'text-muted-foreground hover:text-red-500'
            }`}
            onClick={(e) => {
              e.preventDefault();
              onToggleWishlist?.(product.id);
            }}
          >
            <Heart className={`w-4 h-4 ${isInWishlist ? 'fill-current' : ''}`} />
          </Button>

          {/* Quick Add to Cart */}
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-base">
            <Button
              onClick={(e) => {
                e.preventDefault();
                onAddToCart?.(product);
              }}
              className="w-full bg-primary/90 hover:bg-primary text-primary-foreground"
              size="sm"
              disabled={product.stock === 0}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-2">
          <Link to={`/products/${product.id}`}>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                {product.category}
              </p>
              <h3 className="font-medium text-foreground leading-tight line-clamp-2 group-hover:text-primary transition-base">
                {product.name}
              </h3>
            </div>
          </Link>

          {/* Rating */}
          <div className="flex items-center space-x-1">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              {product.rating} ({product.reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-2">
            <span className="price-primary">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="price-secondary text-sm">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Stock Status */}
          {product.stock <= 5 && product.stock > 0 && (
            <p className="text-xs text-warning">
              Only {product.stock} left in stock
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;