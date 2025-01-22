"use client";
import { styled } from "@/lib/mui";
import HeroBGImage from "@/assets/hero/Hero.webp";
import {
  BLACKISH_BOX_SHADOW_50,
  COLUMN_ALIGN_CENTER___JUSTIFY_START,
  MAX_WIDTH_RESPONSIVENESS,
  PRIMARY_BG_OPACITY_10,
  ROW_ALIGN_START__JUSTIFY_START,
} from "@/styles/global-styles";
import Image from "next/image";
import {
  TEXT_14_400,
  TEXT_24_400,
  TEXT_28_400,
  TEXT_32_400,
  TEXT_32_900,
  TEXT_48_900,
  TEXT_56_900,
  TEXT_64_900,
} from "@/styles/global-typography";
import { keyframes } from "@/lib/mui";
import { BREAKPOINTS } from "@/styles/mediaQueries";

// Common styles
export const FloatinIcons = styled(Image)<{
  verticalposition: number;
  rotation: number;
  size: number;
}>`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  bottom: ${(props) => props.verticalposition}%;
  transform: rotate(${(props) => props.rotation}deg);

  @media (max-width: ${BREAKPOINTS.sm}px) {
    width: 10px;
    height: 10px;
  }
`;

// The Animation Keyframes
const moveAnimationBlue = keyframes`
  0% { transform: translate(0, 0); }
  50% { transform: translate(-200%, -200%); }
  100% { transform: translate(0, 0); }
`;

const moveAnimationOrange = keyframes`
  0% { transform: translate(0, 0); }
  50% { transform: translate(200%, -200%); }
  100% { transform: translate(0, 0); }
`;

// Floating Icons styled components
export const OrangeFloatinIcons = styled(FloatinIcons)<{
  lateralposition: number;
}>`
  right: ${(props) => props.lateralposition}%;
  animation: ${moveAnimationOrange} 5s infinite ease;
`;

export const BlueFloatingIcons = styled(FloatinIcons)<{
  lateralposition: number;
}>`
  left: ${(props) => props.lateralposition}%;
  animation: ${moveAnimationBlue} 5s infinite ease;
`;

// The Styled Components
export const HeroContainer = styled("section")`
  background-image: url(${HeroBGImage.src});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 1100px;
  position: relative;
  @media (max-width: ${BREAKPOINTS.md}px) {
    height: 1000px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    height: 800px;
  }

  @media (max-width: ${BREAKPOINTS.xs}px) {
    height: 516px;
  }
`;

export const MobileOnlyConnectButtonWrapper = styled("div")`
  display: none;
  z-index: 1;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    display: block;
    padding: 14px;
  }
`;

export const ContentContainer = styled("div")`
  ${MAX_WIDTH_RESPONSIVENESS}
  position: absolute;
  bottom: 10%;
  left: 5%;
  width: 90%;
  margin: auto;
  ${PRIMARY_BG_OPACITY_10}
  ${BLACKISH_BOX_SHADOW_50}
  backdrop-filter: blur(10px);
  border-radius: 32px;
  ${COLUMN_ALIGN_CENTER___JUSTIFY_START}
  gap: 32px;
  padding-bottom: 58px;
  color: var(--Whitish);

  @media (max-width: ${BREAKPOINTS.md}px) {
    padding-bottom: 48px;
    gap: 24px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding-bottom: 32px;
    gap: 16px;
  }

  @media (max-width: ${BREAKPOINTS.xs}px) {
    padding-bottom: 16px;
    gap: 8px;
  }

  @media (min-width: ${BREAKPOINTS.fhd}px) {
    left: calc(calc(100% - 1920px) / 2);
  }
`;

export const HeroLogoCompanyNameWrapper = styled("div")`
  ${COLUMN_ALIGN_CENTER___JUSTIFY_START}
  margin-top: -100px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    margin-top: -80px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    margin-top: -60px;
  }

  @media (max-width: ${BREAKPOINTS.xs}px) {
    margin-top: -40px;
  }
`;

export const HeroLogoContainer = styled("div")`
  position: relative;
`;

export const HeroLogoStyled = styled(Image)`
  width: 445px;
  height: 272px;
  position: relative;
  z-index: 1;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    width: 300px;
    height: 184px;
  }

  @media (max-width: ${BREAKPOINTS.xs}px) {
    width: 196px;
    height: 106px;
  }
`;

export const CompanyNameWrapper = styled("div")`
  ${ROW_ALIGN_START__JUSTIFY_START}
`;

export const CompanyNameCharacters = styled("h1")<{ color?: string }>`
  color: ${(props) => props.color || "inherit"};
  ${TEXT_64_900}

  @media (max-width: ${BREAKPOINTS.md}px) {
    ${TEXT_56_900}
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    ${TEXT_48_900}
  }

  @media (max-width: ${BREAKPOINTS.xs}px) {
    ${TEXT_32_900}
  }
`;

export const HeroDescription = styled("span")`
  ${TEXT_32_400}
  text-align: center;
  line-height: 37px;
  @media (max-width: ${BREAKPOINTS.md}px) {
    ${TEXT_28_400}
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    ${TEXT_24_400}
  }

  @media (max-width: ${BREAKPOINTS.xs}px) {
    ${TEXT_14_400}
  }
`;

export const HighlightedDescription = styled("span")<{ color: string }>`
  color: ${(props) => props.color};
`;
