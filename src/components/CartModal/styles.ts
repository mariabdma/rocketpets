import styled from "styled-components";

export const CartContainer = styled.div`
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

export const CloseCartButton = styled.button`
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

export const FinishOrderButton = styled.button`
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

export const CartTotalText = styled.p`
  align-self: flex-end;
  font-size: 1rem;
  font-family: "RetroFont", sans-serif;
`;
