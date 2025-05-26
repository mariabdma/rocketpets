import { HomeContainer, ConfirmationPopup } from "./styles";
import { useState } from "react";
import { pets } from "../../data/pets";
import { PetCard, CartModal, FilterModal } from "../../components";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useFilter } from "../../context/FilterContext";

export function Home() {
  const { isFilterOpen, selectedSpecies } = useFilter();
  const { isCartOpen } = useShoppingCart();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const visiblePets = pets.filter(
    (pet) =>
      selectedSpecies.length === 0 || selectedSpecies.includes(pet.species)
  );
  return (
    <HomeContainer>
      {visiblePets.map((pet) => (
        <PetCard key={pet.id} {...pet} />
      ))}
      {visiblePets.length === 0 && (
        <ConfirmationPopup>nenhum pet encontrado :c</ConfirmationPopup>
      )}
      {isCartOpen && <CartModal setShowConfirmation={setShowConfirmation} />}
      {isFilterOpen && <FilterModal />}
      {showConfirmation && (
        <ConfirmationPopup>compra finalizada! *-*</ConfirmationPopup>
      )}
    </HomeContainer>
  );
}
