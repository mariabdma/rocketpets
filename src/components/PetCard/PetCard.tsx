import {
  CardContainer,
  PetImage,
  PetName,
  TraitsContainer,
  TraitTag,
  AddToCartButton,
  DetailsContainer,
} from "./styles";
import type { Pet } from "../../data/pets";

interface PetCardProps extends Pet {
  onAddToCart: () => void;
}

export function PetCard({
  name,
  image,
  ageInMonths,
  species,
  price,
  traits,
  onAddToCart,
}: PetCardProps) {
  return (
    <CardContainer>
      <PetName>{name} ✧</PetName>
      <PetImage src={image} alt={`Foto de ${name}`} />
      <DetailsContainer>
        <p>
          <strong>espécie:</strong> {species}
        </p>
        <p>
          <strong>idade:</strong> {ageInMonths} meses
        </p>
        <p>
          <strong>preço:</strong> R$ {price.toFixed(2)}
        </p>
      </DetailsContainer>
      <TraitsContainer>
        {traits?.map((trait) => (
          <TraitTag key={trait}>{trait}</TraitTag>
        ))}
      </TraitsContainer>
      <AddToCartButton onClick={onAddToCart}>
        adicionar ao carrinho
      </AddToCartButton>
    </CardContainer>
  );
}
