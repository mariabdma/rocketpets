import { useEffect } from "react";
import {
  CartContainer,
  CloseCartButton,
  TextContainer,
  FinishOrderButton,
  CartTotalText,
} from "./styles";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { CartCard } from "../CartCard";
import { pets } from "../../data/pets";

interface CartModalProps {
  setShowConfirmation: (value: boolean) => void;
}

export function CartModal({ setShowConfirmation }: CartModalProps) {
  const { cartPets, closeCart, emptyCart } = useShoppingCart();
  const cartItems = pets.filter((pet) => cartPets.includes(pet.id));
  function finishOrder() {
    emptyCart();
    closeCart();
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
  }
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <CartContainer>
        <TextContainer>
          <h1>
            {cartPets.length === 0
              ? "carrinho vazio"
              : `meu carrinho (${cartPets.length} ${
                  cartPets.length === 1 ? "pet" : "pets"
                })`}
          </h1>
          <CloseCartButton onClick={closeCart}>✖</CloseCartButton>
        </TextContainer>
        {cartItems.map((pet) => (
          <CartCard key={pet.id} {...pet} />
        ))}
        {cartPets.length > 0 && (
          <>
            <CartTotalText>
              total: R$
              {cartItems.reduce((sum, pet) => sum + pet.price, 0).toFixed(2)}
            </CartTotalText>
            <FinishOrderButton onClick={finishOrder}>
              finalizar compra
            </FinishOrderButton>
          </>
        )}
      </CartContainer>
    </>
  );
}
