import { HomeContainer } from "./styles";
import { pets } from "../../data/pets";
import { PetCard } from "../../components";

export function Home() {
  return (
    <HomeContainer>
      {pets.map((pet) => (
        <PetCard
          key={pet.id}
          {...pet}
          onAddToCart={() => console.log(`Adicionado: ${pet.name}`)}
        />
      ))}
    </HomeContainer>
  );
}
