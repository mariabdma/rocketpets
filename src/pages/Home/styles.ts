import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  padding: 2rem;
  padding-top: 16vh;
  gap: 2rem;
`;

export const ConfirmationPopup = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: #cceeff;
  padding: 1.2rem 2rem;
  border-radius: 20px;
  font-size: 1.1rem;
  font-weight: bold;
  z-index: 9999;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;
