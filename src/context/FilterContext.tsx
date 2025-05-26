import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

type FilterProviderProps = {
  children: ReactNode;
};

type FilterContext = {
  toggleDraftSpecies: (species: string) => void;
  applyFilters: () => void;
  resetDraft: () => void;
  openFilter: () => void;
  closeFilter: () => void;
  emptyFilter: () => void;
  selectedSpecies: string[];
  draftSpecies: string[];
  isFilterOpen: boolean;
};

const FilterContext = createContext({} as FilterContext);

export function useFilter() {
  return useContext(FilterContext);
}

export function FilterProvider({ children }: FilterProviderProps) {
  const [selectedSpecies, setSelectedSpecies] = useState<string[]>(() => {
    const saved = localStorage.getItem("rocketpets-filter");
    return saved ? JSON.parse(saved) : [];
  });
  const [draftSpecies, setDraftSpecies] = useState<string[]>(() => {
    const saved = localStorage.getItem("rocketpets-filter");
    return saved ? JSON.parse(saved) : [];
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  function emptyFilter() {
    setSelectedSpecies([]);
    setDraftSpecies([]);
    closeFilter();
  }
  const openFilter = () => setIsFilterOpen(true);
  const closeFilter = () => setIsFilterOpen(false);
  useEffect(() => {
    localStorage.setItem("rocketpets-filter", JSON.stringify(selectedSpecies));
  }, [selectedSpecies]);
  function toggleDraftSpecies(species: string) {
    setDraftSpecies((curr) =>
      curr.includes(species)
        ? curr.filter((s) => s !== species)
        : [...curr, species]
    );
  }
  function applyFilters() {
    setSelectedSpecies(draftSpecies);
    closeFilter();
  }
  function resetDraft() {
    setDraftSpecies(selectedSpecies);
  }

  return (
    <FilterContext.Provider
      value={{
        toggleDraftSpecies,
        applyFilters,
        resetDraft,
        openFilter,
        closeFilter,
        emptyFilter,
        selectedSpecies,
        draftSpecies,
        isFilterOpen,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
