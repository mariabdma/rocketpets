import {
  CardContainer,
  PetImage,
  PetName,
  TraitsContainer,
  TraitTag,
  AddToCartButton,
  DetailsContainer,
  GenderTag,
  RemoveFromCartButton,
} from "./styles";
import { GiShoppingCart } from "react-icons/gi";
import type { Pet } from "../../data/pets";
import { formatAge } from "../../utils/formatAge";
import { useShoppingCart } from "../../context/ShoppingCartContext"; // adjust path as needed

type PetCardProps = Pet;

export function PetCard({
  id,
  name,
  gender,
  image,
  ageInMonths,
  species,
  price,
  traits,
}: PetCardProps) {
  const { addToCart, removeFromCart, cartPets } = useShoppingCart();
  const isInCart = cartPets.includes(id);
  return (
    <CardContainer>
      <PetName>{name} ✧</PetName>
      <PetImage
        src={image}
        alt={`foto de pet da espécie ${species} chamado/a ${name}`}
      />
      <DetailsContainer>
        <GenderTag gender={gender}>
          {gender === "fêmea" ? "♀ fêmea" : "♂ macho"}
        </GenderTag>
        <p>
          <strong>espécie:</strong> {species}
        </p>
        <p>
          <strong>idade:</strong> {formatAge(ageInMonths)}
        </p>
        <p>
          <strong>preço:</strong> R$ {price.toFixed(2)}
        </p>
      </DetailsContainer>
      <TraitsContainer>
        {traits?.map((trait, index) => (
          <TraitTag key={`${trait}-${index}`}>{trait}</TraitTag>
        ))}
      </TraitsContainer>
      {isInCart ? (
        <RemoveFromCartButton onClick={() => removeFromCart(id)}>
          remover do carrinho ✖
        </RemoveFromCartButton>
      ) : (
        <AddToCartButton onClick={() => addToCart(id)}>
          adicionar ao carrinho
          <GiShoppingCart></GiShoppingCart>
        </AddToCartButton>
      )}
    </CardContainer>
  );
}
