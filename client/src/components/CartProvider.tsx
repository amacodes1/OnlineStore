import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { useRouter } from "next/router";

interface CartContextType {
  isCartOpen: boolean;
  toggleCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  toggleCart: () => {},
  closeCart: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  // Close cart when navigating to a new page
  useEffect(() => {
    const handleRouteChange = () => {
      closeCart();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  return (
    <CartContext.Provider value={{ isCartOpen, toggleCart, closeCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
