import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 14vh;
  display: flex;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.4rem;
  font-weight: bold;
  color: #2e2e2e;
  cursor: pointer;

  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  svg {
    font-size: 2rem;
  }
`;

export const Logo = styled.h1`
  font-size: 2.6rem;
`;
