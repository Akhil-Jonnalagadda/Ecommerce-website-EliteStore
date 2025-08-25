import { useState, useMemo } from "react";
import { Timer, Zap, Tag, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import ProductCard from "@/components/products/ProductCard";
import { saleProducts, mockProducts } from "@/data/mockProducts";
import { useCart } from "@/contexts/CartContext";

const Deals = () => {
  const [selectedDealType, setSelectedDealType] = useState<string>("all");
  const { addItem } = useCart();

  // Create deal categories
  const dealCategories = [
    { id: "all", name: "All Deals", icon: Tag },
    { id: "flash", name: "Flash Sales", icon: Zap },
    { id: "clearance", name: "Clearance", icon: TrendingDown },
    { id: "limited", name: "Limited Time", icon: Timer }
  ];

  // Mock flash deals with countdown timers
  const flashDeals = useMemo(() => {
    return saleProducts.slice(0, 4).map((product, index) => ({
      ...product,
      dealType: "flash",
      timeLeft: (index + 1) * 3600000, // Different countdown times
      originalStock: 100,
      soldCount: Math.floor(Math.random() * 60) + 20
    }));
  }, []);

  // Mock clearance items
  const clearanceDeals = useMemo(() => {
    return mockProducts.filter(p => p.price < 100).slice(0, 6).map(product => ({
      ...product,
      dealType: "clearance",
      originalPrice: product.price * 1.5,
      isOnSale: true
    }));
  }, []);

  // Mock limited time offers
  const limitedTimeDeals = useMemo(() => {
    return saleProducts.slice(2, 6).map(product => ({
      ...product,
      dealType: "limited",
      validUntil: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days from now
    }));
  }, []);

  // Filter deals based on selected type
  const filteredDeals = useMemo(() => {
    switch (selectedDealType) {
      case "flash":
        return flashDeals;
      case "clearance":
        return clearanceDeals;
      case "limited":
        return limitedTimeDeals;
      default:
        return [...flashDeals, ...clearanceDeals, ...limitedTimeDeals];
    }
  }, [selectedDealType, flashDeals, clearanceDeals, limitedTimeDeals]);

  // Format countdown timer
  const formatTimeLeft = (timeLeft: number) => {
    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="container-custom py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Special Deals & Offers
        </h1>
        <p className="text-lg text-muted-foreground">
          Don't miss out on these amazing limited-time offers and exclusive discounts
        </p>
      </div>

      {/* Deal Stats Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Flash Sales</p>
                <p className="text-2xl font-bold text-foreground">{flashDeals.length}</p>
              </div>
              <Zap className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Clearance Items</p>
                <p className="text-2xl font-bold text-foreground">{clearanceDeals.length}</p>
              </div>
              <TrendingDown className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Limited Time</p>
                <p className="text-2xl font-bold text-foreground">{limitedTimeDeals.length}</p>
              </div>
              <Timer className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Deal Category Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        {dealCategories.map((category) => {
          const Icon = category.icon;
          return (
            <Button
              key={category.id}
              variant={selectedDealType === category.id ? "default" : "outline"}
              onClick={() => setSelectedDealType(category.id)}
              className="flex items-center gap-2"
            >
              <Icon className="w-4 h-4" />
              {category.name}
            </Button>
          );
        })}
      </div>

      {/* Flash Deals Section */}
      {(selectedDealType === "all" || selectedDealType === "flash") && flashDeals.length > 0 && (
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-bold text-foreground">Flash Sales</h2>
            <Badge variant="destructive" className="animate-pulse">
              Limited Time
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {flashDeals.map((product) => (
              <Card key={product.id} className="relative overflow-hidden">
                <div className="absolute top-2 left-2 z-10">
                  <Badge variant="destructive" className="animate-pulse">
                    Flash Sale
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="mb-3">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-1">
                      <span>Sold: {product.soldCount}</span>
                      <span>{Math.round((product.soldCount / product.originalStock) * 100)}%</span>
                    </div>
                    <Progress value={(product.soldCount / product.originalStock) * 100} className="h-2" />
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-lg font-bold text-foreground">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through ml-2">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-red-500 font-mono">
                      {formatTimeLeft(product.timeLeft)}
                    </div>
                  </div>
                  <Button onClick={() => addItem(product)} className="w-full">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Regular Deals Grid */}
      {selectedDealType !== "flash" && (
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">
              {selectedDealType === "all" ? "All Deals" : 
               selectedDealType === "clearance" ? "Clearance Items" : "Limited Time Offers"}
            </h2>
            <p className="text-sm text-muted-foreground">
              {filteredDeals.length} deals available
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDeals.filter(deal => deal.dealType !== "flash").map((product) => (
              <div key={product.id} className="relative">
                {product.dealType === "clearance" && (
                  <div className="absolute top-2 left-2 z-10">
                    <Badge variant="secondary">
                      Clearance
                    </Badge>
                  </div>
                )}
                {product.dealType === "limited" && (
                  <div className="absolute top-2 left-2 z-10">
                    <Badge className="bg-blue-500 hover:bg-blue-600">
                      Limited Time
                    </Badge>
                  </div>
                )}
                <ProductCard
                  product={product}
                  onAddToCart={addItem}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Newsletter Signup */}
      <Card className="mt-16 bg-primary text-primary-foreground">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            Never Miss a Deal!
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-6 text-primary-foreground/90">
            Subscribe to our newsletter and be the first to know about exclusive offers and flash sales
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground bg-background border border-border focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <Button className="bg-secondary hover:bg-secondary-hover text-secondary-foreground">
              Subscribe
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Deals;