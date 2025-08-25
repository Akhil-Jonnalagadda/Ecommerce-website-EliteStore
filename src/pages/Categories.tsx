import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Grid, List, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/products/ProductCard";
import { mockProducts } from "@/data/mockProducts";
import { useCart } from "@/contexts/CartContext";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const { addItem } = useCart();

  // Get categories with product counts
  const categoriesWithCounts = useMemo(() => {
    const categoryMap = new Map();
    
    mockProducts.forEach(product => {
      const count = categoryMap.get(product.category) || 0;
      categoryMap.set(product.category, count + 1);
    });

    return Array.from(categoryMap.entries()).map(([category, count]) => ({
      name: category,
      count,
      image: mockProducts.find(p => p.category === category)?.image || ""
    }));
  }, []);

  // Filter products by selected category
  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return [];
    return mockProducts.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  // Category images mapping for better visuals
  const categoryIcons: { [key: string]: string } = {
    "Electronics": "📱",
    "Wearables": "⌚",
    "Fashion": "👕",
    "Home & Kitchen": "🏠",
    "Photography": "📷",
    "Furniture": "🪑",
    "Sports & Outdoors": "⚽",
    "Gaming": "🎮",
    "Home & Garden": "🌱"
  };

  return (
    <div className="container-custom py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {selectedCategory ? selectedCategory : "Product Categories"}
        </h1>
        <p className="text-lg text-muted-foreground">
          {selectedCategory ? 
            `Browse ${filteredProducts.length} products in ${selectedCategory}` :
            "Explore our product categories and find exactly what you're looking for"
          }
        </p>
        {selectedCategory && (
          <Button 
            variant="outline" 
            onClick={() => setSelectedCategory(null)}
            className="mt-4"
          >
            ← Back to Categories
          </Button>
        )}
      </div>

      {!selectedCategory ? (
        /* Categories Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoriesWithCounts.map((category) => (
            <Card 
              key={category.name} 
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50"
              onClick={() => setSelectedCategory(category.name)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">
                    {categoryIcons[category.name] || "📦"}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {category.count} items
                  </Badge>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4">
                  Discover {category.count} amazing products in {category.name.toLowerCase()}
                </p>
                
                <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                  <span className="text-sm font-medium">Browse Category</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        /* Selected Category Products */
        <div>
          {/* View Controls */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                {filteredProducts.length} products found
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className={`grid gap-6 ${
              viewMode === "grid" 
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
                : "grid-cols-1"
            }`}>
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addItem}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">
                No products found in this category.
              </p>
              <Button onClick={() => setSelectedCategory(null)}>
                Browse All Categories
              </Button>
            </div>
          )}

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Explore More Categories
            </h3>
            <div className="flex flex-wrap gap-2">
              {categoriesWithCounts
                .filter(cat => cat.name !== selectedCategory)
                .slice(0, 6)
                .map((category) => (
                <Button
                  key={category.name}
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedCategory(category.name)}
                >
                  {categoryIcons[category.name]} {category.name}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <Card className="bg-muted/30 border-0">
          <CardContent className="py-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Browse our complete product catalog or use our search feature to find specific items
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/products">
                  View All Products
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/deals">
                  Special Offers
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Categories;