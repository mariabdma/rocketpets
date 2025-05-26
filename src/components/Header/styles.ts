import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

  width: 100%;
  height: 14vh;
  display: flex;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  padding: 0 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.4rem;
  font-weight: bold;
  font-family: "RetroFont", sans-serif;
  color: #0000ee;
  text-decoration: underline;
  cursor: pointer;

  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  svg {
    font-size: 2rem;
  }
`;

export const FilterContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.4rem;
  font-weight: bold;
  font-family: "RetroFont", sans-serif;
  color: #0000ee;
  text-decoration: underline;
  cursor: pointer;

  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  svg {
    font-size: 2rem;
  }
`;

export const FilterBadge = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 10px;
  height: 10px;
  background-color: #f77;
  border-radius: 50%;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const Logo = styled.h1`
  font-size: 2.6rem;
`;
