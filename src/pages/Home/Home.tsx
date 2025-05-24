import { HomeContainer, ConfirmationPopup } from "./styles";
import { useState } from "react";
import { pets } from "../../data/pets";
import { PetCard, CartModal } from "../../components";
import { useShoppingCart } from "../../context/ShoppingCartContext";

export function Home() {
  const { isCartOpen } = useShoppingCart();
  const [showConfirmation, setShowConfirmation] = useState(false);
  return (
    <HomeContainer>
      {pets.map((pet) => (
        <PetCard key={pet.id} {...pet} />
      ))}
      {isCartOpen && <CartModal setShowConfirmation={setShowConfirmation} />}
      {showConfirmation && (
        <ConfirmationPopup>compra finalizada! *-*</ConfirmationPopup>
      )}
    </HomeContainer>
  );
}
