import { NAVBAR_ITEMS } from "../../constants";
import { NavbarContainer, NavbarItem, StyledLink } from "./style";

export const Navbar = () => {
  return (
    <NavbarContainer>
      {NAVBAR_ITEMS.map((item, index) => (
        <StyledLink href={item.href} key={index}>
          <NavbarItem>{item.title}</NavbarItem>
        </StyledLink>
      ))}
    </NavbarContainer>
  );
};
