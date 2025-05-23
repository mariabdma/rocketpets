import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  openCart: () => void;
  closeCart: () => void;
  cartPets: number[];
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartPets, setCartPets] = useState<number[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  function addToCart(id: number) {
    setCartPets((curr) => {
      if (curr.includes(id)) return curr;
      return [...curr, id];
    });
  }
  function removeFromCart(id: number) {
    setCartPets((curr) => curr.filter((petId) => petId !== id));
  }

  return (
    <ShoppingCartContext.Provider
      value={{ addToCart, removeFromCart, cartPets, openCart, closeCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
