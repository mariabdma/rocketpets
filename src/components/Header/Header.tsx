import { HeaderContainer, Logo, CartContainer } from "./styles";
import { GiShoppingCart } from "react-icons/gi";

interface Props {
  cartItemCount: number;
  onCartClick: () => void;
}

export function Header({ cartItemCount, onCartClick }: Props) {
  return (
    <HeaderContainer>
      <Logo> rocketpets </Logo>
      <CartContainer onClick={onCartClick}>
        <GiShoppingCart />
        <p>{cartItemCount}</p>
      </CartContainer>
    </HeaderContainer>
  );
}
