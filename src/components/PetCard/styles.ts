import styled from "styled-components";

interface GenderTagProps {
  gender: string;
}

export const CardContainer = styled.div`
  background-color: #ffffff;
  width: 27vw;
  font-size: 0.9rem;
  padding: 1.2rem;
  border: 2px dashed #e6e6e6;
  border-radius: 12px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    border-color: #a3d5ff;
  }
  font-family: "RetroFont", sans-serif;
  @media (max-width: 1000px) {
    width: 40vw;
  }

  @media (max-width: 600px) {
    width: 90vw;
  }
`;

export const PetImage = styled.img`
  width: 80%;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-bottom: 0.5rem;
  align-self: center;
`;
export const PetName = styled.h2`
  font-family: Helvetica;
  font-size: 1.4rem;
  text-align: center;
  margin-bottom: 0.4rem;
  margin-top: 0.2rem;
`;

export const TraitsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  justify-content: center;
  font-size: 1.2rem;
  color: #4b2c2c;
`;

export const TraitTag = styled.span`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 0.3rem 0.6rem;
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
`;

export const AddToCartButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  font-size: 1rem;
  color: #0000ee;
  text-decoration: underline;
  cursor: pointer;
  font-family: inherit;

  &:hover {
    color: #551a8b;
  }
`;

export const RemoveFromCartButton = styled.button`
  background: none;
  border: none;
  padding: 0;
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
  flex-direction: column;
  gap: 0.2rem;
  font-size: 1.2rem;
  line-height: 1.4;
  padding: 0.2rem 0;
`;

export const GenderTag = styled.span<GenderTagProps>`
  font-weight: bold;
  color: ${({ gender }) => (gender === "fêmea" ? "#f4a9bb" : "#4682b4")};
`;
