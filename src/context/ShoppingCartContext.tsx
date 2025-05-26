import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  openCart: () => void;
  closeCart: () => void;
  isCartOpen: boolean;
  cartPets: number[];
  emptyCart: () => void;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartPets, setCartPets] = useState<number[]>(() => {
    const saved = localStorage.getItem("rocketpets-cart");
    return saved ? JSON.parse(saved) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const emptyCart = () => setCartPets([]);
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  useEffect(() => {
    localStorage.setItem("rocketpets-cart", JSON.stringify(cartPets));
  }, [cartPets]);
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
      value={{
        addToCart,
        removeFromCart,
        cartPets,
        isCartOpen,
        openCart,
        closeCart,
        emptyCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
