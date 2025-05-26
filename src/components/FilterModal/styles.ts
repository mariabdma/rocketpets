import styled from "styled-components";

export const FilterContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 320px;
  height: 100vh;
  background-color: white;
  box-shadow: -2px 0 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  z-index: 1000;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CloseFilterButton = styled.button`
  background: none;
  font-size: 1.2rem;
  border: none;
  color: rgb(255, 0, 0);
  cursor: pointer;
  font-family: inherit;

  &:hover {
    color: #551a8b;
  }
`;

export const ClearFilterButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  color: rgb(255, 0, 0);
  text-decoration: underline;
  cursor: pointer;
  font-family: "RetroFont", sans-serif;

  &:hover {
    color: #551a8b;
  }
`;

export const ToggleFilterButton = styled.button`
  background: none;
  font-size: 1.2rem;
  border: none;
  color: #2e2e2e;
  cursor: pointer;
  font-family: "RetroFont", sans-serif;
  text-decoration: underline;

  &:hover {
    color: #551a8b;
  }
`;

interface SpeciesButtonProps {
  selected: boolean;
}

export const SpeciesButton = styled.button<SpeciesButtonProps>`
  padding: 0.5rem 1rem;
  margin: 0.3rem;
  border-radius: 12px;
  background-color: ${({ selected }) => (selected ? "#add8e6" : "#f2f2f2")};
  color: #2e2e2e;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  font-family: "RetroFont", sans-serif;

  &:hover {
    background-color: ${({ selected }) => (selected ? "#90cce0" : "#e0e0e0")};
  }
`;
