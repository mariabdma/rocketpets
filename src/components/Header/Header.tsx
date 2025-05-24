import { HeaderContainer, Logo, CartContainer } from "./styles";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { GiShoppingCart } from "react-icons/gi";

export function Header() {
  const { cartPets, openCart } = useShoppingCart();

  return (
    <HeaderContainer>
      <Logo> rocketpets </Logo>
      <CartContainer onClick={openCart}>
        <GiShoppingCart />
        <p>{cartPets.length}</p>
      </CartContainer>
    </HeaderContainer>
  );
}
