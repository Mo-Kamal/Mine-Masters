import { ROW_ALIGN_CENTER__SPACE_B } from "@/styles/global-styles";
import {
  TEXT_14_400,
  TEXT_18_400,
  TEXT_20_400,
  TEXT_24_400,
} from "@/styles/global-typography";
import { styled } from "@/lib/mui";
import { TransparentButton } from "@/components/button/transparent";
import { BREAKPOINTS } from "@/styles/mediaQueries";
import Link from "next/link";

export const NavbarContainer = styled("nav")`
  ${TEXT_24_400};
  ${ROW_ALIGN_CENTER__SPACE_B};
  @media (max-width: ${BREAKPOINTS.sm}px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const NavbarItem = styled(TransparentButton)`
  padding: 10px;
  @media (max-width: ${BREAKPOINTS.lg}px) {
    padding: 8px;
    ${TEXT_20_400}
    gap: 8px;
  }
  @media (max-width: ${BREAKPOINTS.md}px) {
    ${TEXT_18_400}
    padding: 7px;
  }
  // Special case just for this component
  @media (max-width: 866px) {
    ${TEXT_14_400}
    padding: 6px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding: 8px;
    color: var(--White);
    width: 100%;
    text-align: left;
    border-radius: 0;
    width: fit-content;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  @media (max-width: ${BREAKPOINTS.sm}px) {
    width: 100%;
    border-bottom: 2px solid var(--Primary);
    &:last-child {
      border-bottom: none;
    }
    &:hover {
      button {
        color: var(--Violet);
      }
    }
  }
`;
