import { HeaderContainer, Logo, CartContainer } from "./styles";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

interface Props {
  cartItemCount: number;
  onCartClick: () => void;
}

export function Header({ cartItemCount, onCartClick }: Props) {
  return (
    <HeaderContainer>
      <Logo> rocketpets </Logo>
      <CartContainer onClick={onCartClick}>
        <PiShoppingCartSimpleBold />
        <p>{cartItemCount}</p>
      </CartContainer>
    </HeaderContainer>
  );
}
