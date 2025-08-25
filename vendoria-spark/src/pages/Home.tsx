import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowRight, Star, Truck, Shield, RefreshCw, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductCard from "@/components/products/ProductCard";
import { featuredProducts, saleProducts, newProducts } from "@/data/mockProducts";
import { useCart } from "@/contexts/CartContext";
import heroImage from "@/assets/hero-banner.jpg";

const Home = () => {
  const [showQuote, setShowQuote] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowQuote(true), 5000);
    return () => clearTimeout(timer);
  }, []);
  const { addItem } = useCart();

  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Free shipping on orders over $50"
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "256-bit SSL security encryption"
    },
    {
      icon: RefreshCw,
      title: "Easy Returns",
      description: "30-day return policy"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Dedicated customer service"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="EliteStore Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Discover Premium
            <span className="block gradient-hero bg-clip-text text-transparent">
              Quality Products
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Shop the latest collection of carefully curated products designed to elevate your lifestyle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-foreground hover:bg-white/90" asChild>
              <Link to="/products">
          {/* EliteStore Quote Graphic */}
          {showQuote && (
            <div className="mt-12 flex flex-col items-center animate-fade-in">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="55" stroke="#635bff" strokeWidth="6" fill="#fff" />
                <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="22" fontWeight="bold" fill="#635bff">E</text>
              </svg>
              <blockquote className="mt-6 text-xl font-semibold text-primary text-center max-w-xl">
                "EliteStore: Excellence in Every Purchase."
              </blockquote>
            </div>
          )}
                Shop Now <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/deals">
                View Deals
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 bg-background/50">
                <CardContent className="pt-6 pb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our hand-picked selection of premium products that combine quality, style, and functionality
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addItem}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/products">
                View All Products <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sale Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Special Offers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Limited time deals on your favorite products. Don't miss out on these amazing savings!
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {saleProducts.slice(0, 6).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addItem}
              />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              New Arrivals
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Be the first to discover our latest products and stay ahead of the trends
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addItem}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Community
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Get exclusive access to new products, special offers, and insider updates
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
        </div>
      </section>
    </div>
  );
};

export default Home;