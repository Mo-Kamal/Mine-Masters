"use client";
import { NAVBAR_ITEMS } from "../../constants";
import { useModal } from "@/hooks/useModal";
import { NavbarContainer, NavbarItem, StyledLink } from "./style";

export const NavbarMobile = () => {
  //@ts-ignore
  let { setIsDrawerOpen } = useModal();
  const handleItemClick = () => {
    setIsDrawerOpen(false);
  };
  return (
    <NavbarContainer>
      {NAVBAR_ITEMS.map((item, index) => (
        <StyledLink href={item.href} key={index} onClick={handleItemClick}>
          <NavbarItem>{item.title}</NavbarItem>
        </StyledLink>
      ))}
    </NavbarContainer>
  );
};
