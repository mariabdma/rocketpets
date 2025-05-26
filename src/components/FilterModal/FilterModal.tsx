import { useEffect } from "react";
import {
  FilterContainer,
  CloseFilterButton,
  ToggleFilterButton,
  SpeciesButton,
  TextContainer,
  ClearFilterButton,
} from "./styles";
import { useFilter } from "../../context/FilterContext";

export function FilterModal() {
  const {
    applyFilters,
    draftSpecies,
    closeFilter,
    toggleDraftSpecies,
    emptyFilter,
  } = useFilter();
  const speciesOptions = [
    "gato",
    "cachorro",
    "coelho",
    "tartaruga",
    "peixe",
    "hamster",
    "furão",
  ];
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <FilterContainer>
        <TextContainer>
          <h1>filtro</h1>
          <CloseFilterButton onClick={closeFilter}>✖</CloseFilterButton>
        </TextContainer>
        {speciesOptions.map((species) => (
          <SpeciesButton
            selected={draftSpecies.includes(species)}
            onClick={() => toggleDraftSpecies(species)}
          >
            {" "}
            {species}{" "}
          </SpeciesButton>
        ))}
        <ToggleFilterButton onClick={applyFilters}>
          aplicar filtro
        </ToggleFilterButton>
        <ClearFilterButton onClick={emptyFilter}>
          limpar filtro ✖
        </ClearFilterButton>
      </FilterContainer>
    </>
  );
}
