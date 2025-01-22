"use client";
import { PrimaryButton } from "@/components/button/primary";
import {
  COLUMN_ALIGN_START__JUSTIFY_START,
  DARK_PURPLE_BOX_SHADOW,
  GRADIENT_TEXT,
  MAX_WIDTH_RESPONSIVENESS,
  PRIMARY_BG_OPACITY_10,
  ROW_ALIGN_CENTER__JUSTIFY_START,
  ROW_ALIGN_CENTER__SPACE_B,
  SECTION_BODY_SIZE,
  TITLE_WITH_NUMBER,
} from "@/styles/global-styles";
import { styled } from "@/lib/mui";
import MinerNftBg from "@/assets/miner-nft/Miner-Nft-Bg.png";
import {
  TEXT_14_900,
  TEXT_16_500,
  TEXT_24_900,
  TEXT_32_900,
  TEXT_48_900,
} from "@/styles/global-typography";
import Image from "next/image";
import { BREAKPOINTS } from "@/styles/mediaQueries";
import { MobileHorizontalDivider } from "@/components/divider";

export const MinerNftContainer = styled("section")`
  width: 100%;
  ${MAX_WIDTH_RESPONSIVENESS}
  padding-top: 120px;
  padding-bottom: 373px;
  ${ROW_ALIGN_CENTER__SPACE_B}
  margin: 0 auto;
  background: url(${MinerNftBg.src}) no-repeat;
  background-size: contain;
  background-position: bottom;
  position: relative;

  @media (max-width: ${BREAKPOINTS.md}px) {
    flex-direction: column-reverse;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding-top: 80px;
    padding-bottom: 200px;
  }

  @media (max-width: ${BREAKPOINTS.xs}px) {
    padding-top: 40px;
    padding-bottom: 220px;
  }

  @media (min-width: ${BREAKPOINTS.fhd}px) {
    background-size: cover;
  }
`;

export const LeftSideWrapper = styled("div")`
  width: 90%;
  margin-left: calc(5% + 50px);
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  margin-left: 50px;
  gap: 32px;
  padding-left: 50px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    margin-left: 30px;
    gap: 16px;
    padding-left: 0;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    margin-left: 24px;
    gap: 8px;
  }

  @media (max-width: ${BREAKPOINTS.xs}px) {
    margin-left: 16px;
  }
`;

export const Title = styled("h1")`
  &::before {
    content: "2. ";
  }
  ${TITLE_WITH_NUMBER}
`;

export const Description = styled("p")`
  color: var(--Dark-Purple);
  max-width: 667px;
  margin-top: 16px;
  padding-right: 20px;
  line-height: 33.6px;
  ${SECTION_BODY_SIZE}
`;

export const CTAButtonsWrapper = styled("div")`
  ${ROW_ALIGN_CENTER__SPACE_B}
  gap: 16px;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    gap: 8px;
  }
`;

export const TokenContainer = styled("div")`
  padding: 0 118px 0 0;
  ${PRIMARY_BG_OPACITY_10}
  ${DARK_PURPLE_BOX_SHADOW}
  border-radius: 24px;
  ${ROW_ALIGN_CENTER__JUSTIFY_START}
  margin-top: 28px;
  gap: 8px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    padding: 0 94px 0 0;
    border-radius: 16px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding: 0 64px 0 0;
    border-radius: 12px;
  }

  @media (max-width: ${BREAKPOINTS.xs}px) {
    position: absolute;
    padding: 0 32px 0 0;
    border-radius: 8px;
    bottom: 120px;
  }
`;

export const TokenLogoStyled = styled(Image)`
  @media (max-width: ${BREAKPOINTS.md}px) {
    width: 94px;
    height: 94px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: ${BREAKPOINTS.xs}px) {
    width: 40px;
    height: 40px;
  }
`;

export const TokenTitle = styled("h2")`
  ${TEXT_48_900}
  line-height: 57px;
  ${GRADIENT_TEXT}
  @media (max-width: ${BREAKPOINTS.md}px) {
    ${TEXT_32_900}
    line-height: 48px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    ${TEXT_24_900}
    line-height: 40px;
  }

  @media (max-width: ${BREAKPOINTS.xs}px) {
    ${TEXT_14_900}
    line-height: 32px;
  }
`;

export const TokenDescription = styled("p")`
  color: var(--Light-Purple);
  ${TEXT_16_500};
`;

export const HorizontalDivider = styled(MobileHorizontalDivider)`
  margin: 0 20px 30px 20px;
`;
