import { create } from "zustand";

interface Product {
  id: number;
  name: string;
  description: string;
  photos: string;
  current_price: number;
  rating: number;
  categories: string[];
  quantity: number;
}

interface CartState {
  productList: Product[];
  cart: CartItem[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
  clearCart: () => void;
}

interface CartItem extends Product {
  quantity: number;
}

export const useCartStore = create<CartState>((set) => ({
  productList: [],
  cart: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  addToCart: (product) =>
    set((state) => {
      const itemInCart = state.productList.find(
        (item) => item.id === product.id
      );
      if (itemInCart) {
        itemInCart.quantity += 1;
      } else {
        state.productList.push({ ...product, quantity: 1 });
      }
      return {
        productList: state.productList,
        cartTotalQuantity: state.cartTotalQuantity + 1,
        cartTotalAmount: state.cartTotalAmount + product.current_price,
      };
    }),
  removeFromCart: (id) =>
    set((state) => {
      const updatedProductList = state.productList.filter(
        (item) => item.id !== id
      );
      const removedItem = state.productList.find((item) => item.id === id);
      return {
        productList: updatedProductList,
        cartTotalQuantity:
          state.cartTotalQuantity - (removedItem?.quantity || 0),
        cartTotalAmount:
          state.cartTotalAmount -
          (removedItem?.current_price || 0) * (removedItem?.quantity || 0),
      };
    }),
  incrementQuantity: (id) =>
    set((state) => {
      const item = state.productList.find((item) => item.id === id);
      if (item) {
        item.quantity += 1;
        return {
          productList: state.productList,
          cartTotalQuantity: state.cartTotalQuantity + 1,
          cartTotalAmount: state.cartTotalAmount + item.current_price,
        };
      }
      return state;
    }),
  decrementQuantity: (id) =>
    set((state) => {
      const item = state.productList.find((item) => item.id === id);
      if (item) {
        if (item.quantity === 1) {
          const updatedProductList = state.productList.filter(
            (item) => item.id !== id
          );
          return {
            productList: updatedProductList,
            cartTotalQuantity: state.cartTotalQuantity - 1,
            cartTotalAmount: state.cartTotalAmount - item.current_price,
          };
        } else {
          item.quantity -= 1;
          return {
            productList: state.productList,
            cartTotalQuantity: state.cartTotalQuantity - 1,
            cartTotalAmount: state.cartTotalAmount - item.current_price,
          };
        }
      }
      return state;
    }),
  clearCart: () =>
    set(() => ({
      productList: [],
      cartTotalQuantity: 0,
      cartTotalAmount: 0,
    })),
}));
