import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useCart } from "@/contexts/CartContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { itemCount } = useCart();

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemsCount={itemCount} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;