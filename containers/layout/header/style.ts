import { css, styled } from "@/lib/mui";
import {
  BLACKISH_BOX_SHADOW_50,
  ROW_ALIGN_CENTER__JUSTIFY_START,
  ROW_ALIGN_CENTER__SPACE_B,
  ROW_ALIGN_START__JUSTIFY_START,
} from "@/styles/global-styles";
import { Drawer, IconButton } from "@/lib/mui";
import {
  TEXT_16_500,
  TEXT_24_900,
  TEXT_64_900,
} from "@/styles/global-typography";
import Image from "next/image";
import { BREAKPOINTS } from "@/styles/mediaQueries"; // Ensure BREAKPOINTS is imported

export const DrawerStyles = styled(Drawer)`
  && {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    background: none;
    color: var(--White);
    z-index: 10000;
    border-radius: 20px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
    display: ${(props) => (props.open ? "block" : "none")};
    width: 100vw;
    max-width: 300px;
    height: 704px;
    ${BLACKISH_BOX_SHADOW_50}

    .MuiDrawer-paper {
      width: 100%;
      background-color: var(--Blackish);
    }

    @media (max-width: ${BREAKPOINTS.sm}px) {
      display: block;
    }
    @media (min-width: ${BREAKPOINTS.sm + 1}px) {
      display: none;
    }

    animation: ${(props) => (props.open ? "slideUp" : "slideDown")} 0.5s ease
      forwards;
    ${({ open }) =>
      open &&
      `
        transform: translate(-50%, -50%) scale(1);
      `}
  }

  @keyframes slideUp {
    0% {
      transform: translate(-50%, -50%) scale(0);
      top: 20px;
      left: 20px;
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
    }
  }
  @keyframes slideDown {
    0% {
      transform: translate(-50%, -50%) scale(1);
    }
    15% {
      transform: translate(-50%, -50%) scale(0.8);
    }
    30% {
      transform: translate(-50%, -50%) scale(0.5);
      top: 25px;
      left: 25px;
    }
    100% {
      transform: translate(-50%, -50%) scale(0);
      top: 20px;
      left: 20px;
    }
  }
`;

export const ImageWrapper = styled("div")`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;

  img {
    @media (max-width: ${BREAKPOINTS.sm}px) {
      width: 36px;
      height: 40px;
    }
  }
`;

export const MobileHeader = styled("div")`
  display: block;
  position: relative;

  @media (min-width: ${BREAKPOINTS.sm + 1}px) {
    display: none;
  }
`;

export const IconButtonStyle = styled(IconButton)`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 10;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  color: var(--White);
  background: var(--Primary);

  img {
    filter: brightness(0) invert(1);
  }
`;

export const DrawerWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 20px;
  backdrop-filter: blur(20px);
  ${BLACKISH_BOX_SHADOW_50}
  border: 1px solid;
  border-image: linear-gradient(to right, var(--Light-Purple), var(--Blackish));
  color: var(--White);
  height: 100%;
  width: 100%;
`;

export const HeaderContainer = styled("header")<{
  scrollingUp: boolean;
  screenBegining: boolean;
}>`
  position: fixed;
  top: 0;
  margin: 0 auto;
  width: 100%;
  padding: 30px 0;
  z-index: 10000;

  ${(props) =>
    !props.scrollingUp
      ? css`
          visibility: hidden;
          transition:
            visibility 0.3s linear,
            opacity 0.3s linear;
          opacity: 0;
        `
      : css`
          visibility: visible;
          opacity: 1;
          transition:
            visibility 0.3s linear,
            opacity 0.3s linear;
        `}

  @media (max-width: ${BREAKPOINTS.lg}px) {
    max-width: 1200px;
  }

  @media (max-width: ${BREAKPOINTS.md}px) {
    padding: 20px 0;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    display: none;
  }

  @media (min-width: ${BREAKPOINTS.fhd + 1}px) {
    width: 1920px;
    left: calc(calc(100% - 1920px) / 2);
  }
`;

export const ConnectButtonWrapper = styled("div")`
  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding-top: 8px;
    margin-bottom: 20px;
  }
`;

export const NavbarLogoWrapper = styled("div")`
  width: 92%;
  margin: 0 auto;
  padding: 20px;
  ${ROW_ALIGN_CENTER__SPACE_B};
  overflow: hidden;
  background: rgba(var(--Whitish-rgb), 0.5);
  backdrop-filter: blur(120px);
  border-radius: 24px;
  position: relative;
  z-index: 1;

  @media (max-width: ${BREAKPOINTS.lg}px) {
    padding: 15px;
    & > img {
      width: 61px;
      height: 70px;
    }
  }
  @media (max-width: ${BREAKPOINTS.md}px) {
    padding: 10px;
    & > img {
      width: 41px;
      height: 50px;
    }
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding: 10px;
  }
  @media (min-width: ${BREAKPOINTS.fhd + 1}px) {
    width: 100%;
  }
`;

export const CompanyNameCharacters = styled("h1")<{ color?: string }>`
  color: ${(props) => props.color || "inherit"};
  ${TEXT_64_900}
  @media (max-width: ${BREAKPOINTS.sm}px) {
    ${TEXT_24_900}
    line-height: 77px;
  }
`;

export const CompanyNameWrapper = styled("div")`
  ${ROW_ALIGN_START__JUSTIFY_START}
`;

export const TimesSign = styled("div")`
  width: 32px;
  height: 32px;
  cursor: pointer;

  &:hover img {
    opacity: 0.5;
  }
`;

export const Communities = styled("div")``;
export const CommunitiesTitle = styled("p")`
  margin-bottom: 10px;
  ${TEXT_16_500}
  color: var(--Whitish);
  opacity: 0.25;
`;

export const IconStyleSmall = styled("div")`
  ${ROW_ALIGN_CENTER__JUSTIFY_START}
  justify-content: space-between;
`;
export const ItemWrapper = styled("div")`
  cursor: pointer;
`;
export const IconStyle = styled("div")``;
export const CommunityIcon = styled(Image)`
  width: 35px;
  height: 35px;
`;

export const StyledLogo = styled(Image)`
  cursor: pointer;
`;
