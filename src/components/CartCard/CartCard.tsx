import {
  CardContainer,
  PetImage,
  PetName,
  DetailsContainer,
  TextContainer,
  GenderTag,
  RemoveFromCartButton,
  FooterRow,
} from "./styles";
import type { Pet } from "../../data/pets";
import { formatAge } from "../../utils/formatAge";
import { useShoppingCart } from "../../context/ShoppingCartContext";

type CartCardProps = Pet;

export function CartCard({
  id,
  name,
  gender,
  image,
  ageInMonths,
  species,
  price,
}: CartCardProps) {
  const { removeFromCart } = useShoppingCart();
  return (
    <CardContainer>
      <PetName>
        {name}{" "}
        <GenderTag gender={gender}>{gender === "fêmea" ? "♀" : "♂"}</GenderTag>
      </PetName>
      <DetailsContainer>
        <PetImage
          src={image}
          alt={`foto de pet da espécie ${species} chamado/a ${name}`}
        />
        <TextContainer>
          <p>
            <strong>espécie:</strong> {species}
          </p>
          <p>
            <strong>idade:</strong> {formatAge(ageInMonths)}
          </p>
          <p>
            <strong>preço:</strong> R$ {price.toFixed(2)}
          </p>
        </TextContainer>
      </DetailsContainer>
      <FooterRow>
        <RemoveFromCartButton onClick={() => removeFromCart(id)}>
          remover do carrinho ✖
        </RemoveFromCartButton>
      </FooterRow>
    </CardContainer>
  );
}
