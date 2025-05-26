import {
  HeaderContainer,
  Logo,
  CartContainer,
  FilterContainer,
  IconContainer,
  FilterBadge,
} from "./styles";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { GiShoppingCart } from "react-icons/gi";
import { CiFilter } from "react-icons/ci";
import { useFilter } from "../../context/FilterContext";

export function Header() {
  const { cartPets, openCart } = useShoppingCart();
  const { openFilter } = useFilter();
  return (
    <HeaderContainer>
      <Logo> rocketpets </Logo>
      <IconContainer>
        <FilterContainer onClick={openFilter}>
          <CiFilter />
          <FilterBadge></FilterBadge>
        </FilterContainer>
        <CartContainer onClick={openCart}>
          <GiShoppingCart />
          <p>{cartPets.length}</p>
        </CartContainer>
      </IconContainer>
    </HeaderContainer>
  );
}
