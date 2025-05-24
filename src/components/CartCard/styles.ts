import styled from "styled-components";

interface GenderTagProps {
  gender: string;
}

export const CardContainer = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 20vh;
  min-height: 20vh;
  font-size: 0.9rem;
  font-family: "RetroFont", sans-serif;
  border-bottom: 1px dashed #add8e6;
`;

export const PetImage = styled.img`
  width: 30%;
`;

export const PetName = styled.h2`
  font-family: Helvetica;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 0.4rem;
  margin-top: 0.2rem;
`;

export const RemoveFromCartButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  color: rgb(255, 0, 0);
  text-decoration: underline;
  cursor: pointer;
  font-family: inherit;

  &:hover {
    color: #551a8b;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  font-size: 1rem;
  line-height: 1.4;
  padding: 0.2rem 0;
`;

export const GenderTag = styled.span<GenderTagProps>`
  font-weight: bold;
  color: ${({ gender }) => (gender === "fêmea" ? "#f4a9bb" : "#4682b4")};
`;

export const FooterRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
`;
