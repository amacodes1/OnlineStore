"use client";

import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  name: string;
  current_price: number;
  photos: string;
  color: string;
  quantity: number;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  isCartOpen: boolean;
  toggleCart: () => void;
  closeCart: () => void;
  cart: CartItem[];
  // addToCart: (id: Product) => void;
  // removeFromCart: (id: string) => void;
  // incrementQuantity: (id: string) => void;
  // decrementQuantity: (id: string) => void;
  // clearCart: () => void;
  // getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  toggleCart: () => {},
  closeCart: () => {},
  cart: [],
});

//   addToCart: () => {},
//   removeFromCart: () => {},
//   incrementQuantity: () => {},
//   decrementQuantity: () => {},
//   clearCart: () => {},
//   getTotalPrice: () => 0,

const CartReducer = (state: Product[], action: any) => {
  //   switch (action.type) {
  //     case "ADD_TO_CART":
  //       const existingProductIndex = state.findIndex(
  //         (product) => product.id === action.payload.id
  //       );
  //       if (existingProductIndex !== -1) {
  //         const updatedCart = [...state];
  //         updatedCart[existingProductIndex].quantity += 1;
  //         return updatedCart;
  //       }
  //       return [...state, { ...action.payload, quantity: 1 }];
  //     case "REMOVE_FROM_CART":
  //       return state.filter((product) => product.id !== action.payload.id);
  //     case "INCREMENT":
  //       return state.map((product) =>
  //         product.id === action.payload.id
  //           ? { ...product, quantity: product.quantity + 1 }
  //           : product
  //       );
  //     case "DECREMENT":
  //       return state.map((product) =>
  //         product.id === action.payload.id && product.quantity > 1
  //           ? { ...product, quantity: product.quantity - 1 }
  //           : product
  //       );
  //     case "CLEAR_CART":
  //       return [];
  //     default:
  //       return state;
  //   }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart] = useState<CartItem[]>([]);
  const router = useRouter();

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  // Close cart when navigating to a new page
  // useEffect(() => {
  //   const handleRouteChange = () => {
  //     closeCart();
  //   };

  //   router.events.on("routeChangeStart", handleRouteChange);

  //   return () => {
  //     router.events.off("routeChangeStart", handleRouteChange);
  //   };
  // }, [router]);

  // eslint-disable-next-line react-hooks/exhaustive-deps

  // const addToCart = (product: Product) => {
  //   dispatch({ type: "ADD_TO_CART", payload: product });
  // };

  // const removeFromCart = (productId: string) => {
  //   dispatch({ type: "REMOVE_FROM_CART", payload: { id: productId } });
  // };

  // const incrementQuantity = (productId: string) => {
  //   dispatch({ type: "INCREMENT", payload: { id: productId } });
  // };

  // const decrementQuantity = (productId: string) => {
  //   dispatch({ type: "DECREMENT", payload: { id: productId } });
  // };

  // const clearCart = () => {
  //   dispatch({ type: "CLEAR_CART" });
  // };

  // const getTotalPrice = () => {
  //   return cart.reduce(
  //     (total, product) => total + product.price * product.quantity,
  //     0
  //   );
  // };

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        toggleCart,
        closeCart,
        cart,
        // addToCart,
        // removeFromCart,
        // incrementQuantity,
        // decrementQuantity,
        // clearCart,
        // getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
