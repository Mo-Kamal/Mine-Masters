"use client";
import { styled } from "@/lib/mui";
import MarketplaceBGImage from "@/assets/market/marketplace.png";
import {
  COLUMN_ALIGN_CENTER__JUSTIFY_END,
  COLUMN_ALIGN_CENTER___JUSTIFY_START,
  COLUMN_ALIGN_START__JUSTIFY_START,
  MAX_WIDTH_RESPONSIVENESS,
  ROW_ALIGN_CENTER__JUSTIFY_START,
  ROW_ALIGN_CENTER__SPACE_B,
  ROW_ALIGN_END__SPACE_B,
  WHITISH_BG_OPACITY_16,
} from "@/styles/global-styles";
import {
  TEXT_14_400,
  TEXT_16_700,
  TEXT_18_400,
  TEXT_20_400,
  TEXT_24_400,
  TEXT_24_700,
  TEXT_34_700,
  TEXT_40_700,
  TEXT_48_700,
} from "@/styles/global-typography";
import { PrimaryButton } from "@/components/button/primary";
import { BREAKPOINTS } from "@/styles/mediaQueries";
import Image from "next/image";
import { FeatureBox } from "./components/feature-box";

export const MarketplaceContainer = styled("section")`
  width: 100%;
  ${MAX_WIDTH_RESPONSIVENESS}
  height: 1100px;
  position: relative;
  ${COLUMN_ALIGN_CENTER___JUSTIFY_START}
  @media (max-width: ${BREAKPOINTS.md}px) {
    height: 1000px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    height: 900px;
  }
  @media (max-width: ${BREAKPOINTS.xs}px) {
    height: 800px;
  }
`;

export const BackgroundImageContainer = styled("div")`
  width: 100%;
  margin: auto;
  background-image: url(${MarketplaceBGImage.src});
  background-size: cover;
  background-position: center;
  ${COLUMN_ALIGN_CENTER__JUSTIFY_END}
  padding-bottom: 60px;
  height: 876px;
  border-radius: 48px;
  @media (max-width: ${BREAKPOINTS.md}px) {
    width: 100%;
    height: 776px;
    border-radius: 0px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    height: 676px;
  }
  @media (max-width: ${BREAKPOINTS.xs}px) {
    height: 576px;
  }
`;

export const ContentContainer = styled("div")`
  width: 90%;
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  gap: 32px;
  padding: 60px;
  color: var(--Whitish);
  ${WHITISH_BG_OPACITY_16}
  border: 3px solid var(--Violet);
  backdrop-filter: blur(50px);
  border-radius: 48px;
  @media (max-width: ${BREAKPOINTS.lg}px) {
    padding: 40px;
    gap: 28px;
    position: relative;
    top: 50px;
    border-radius: 32px;
    backdrop-filter: blur(40px);
  }
  @media (max-width: ${BREAKPOINTS.md}px) {
    justify-content: space-between;
    gap: 24px;
    top: 260px;
    border-radius: 24px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    height: 350px;
    padding: 30px;
    gap: 16px;
    top: 190px;
    border-radius: 16px;
  }
  @media (max-width: ${BREAKPOINTS.xs}px) {
    height: 315px;
    padding: 16px;
    gap: 8px;
    top: 115px;
  }
`;

export const MarketplaceLogoWrapper = styled("div")`
  ${COLUMN_ALIGN_CENTER___JUSTIFY_START}
`;

export const CompanyName = styled("h1")`
  ${TEXT_48_700}
  @media (max-width: ${BREAKPOINTS.lg}px) {
    ${TEXT_40_700}
  }
  @media (max-width: ${BREAKPOINTS.md}px) {
    ${TEXT_34_700}
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    ${TEXT_24_700}
  }
  @media (max-width: ${BREAKPOINTS.xs}px) {
    ${TEXT_16_700}
  }
`;

export const MarketplaceDescription = styled("span")`
  ${TEXT_24_400}
  text-align: left;
  line-height: 34px;
  @media (max-width: ${BREAKPOINTS.md}px) {
    ${TEXT_20_400}
    line-height: 28px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    ${TEXT_18_400}
    line-height: 26px;
  }
  @media (max-width: ${BREAKPOINTS.xs}px) {
    ${TEXT_14_400}
    line-height: 22px;
  }
`;

export const RocksLogoBG = styled(Image)`
  margin-top: -100px;
  z-index: 1;
  @media (max-width: ${BREAKPOINTS.lg}px) {
    width: 1200px;
    height: 450px;
    margin-top: -60px;
  }
  @media (max-width: ${BREAKPOINTS.md}px) {
    width: 992px;
    margin-top: 140px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    height: 320px;
    width: 768px;
    margin-top: 285px;
    z-index: -1;
  }
  @media (max-width: ${BREAKPOINTS.xs}px) {
    margin-top: 150px;
    height: 109px;
    width: 578px;
  }
`;

export const ButtonWrapper = styled("div")`
  ${ROW_ALIGN_CENTER__SPACE_B}
  width: 100%;
  ${ROW_ALIGN_END__SPACE_B}
  @media (max-width: ${BREAKPOINTS.xxl}px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 24px;
  }
`;

export const LeftButtons = styled("div")`
  ${ROW_ALIGN_CENTER__JUSTIFY_START}
  gap: 24px;
  @media (max-width: ${BREAKPOINTS.md}px) {
    gap: 16px;
    flex-direction: column;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    position: absolute;
    top: 355px;
    gap: 12px;
  }
  @media (max-width: ${BREAKPOINTS.xs}px) {
    top: 309px;
    gap: 8px;
  }
`;

export const TwoLeftButtons = styled("div")`
  ${ROW_ALIGN_CENTER__JUSTIFY_START}
  gap: 24px;
  @media (max-width: ${BREAKPOINTS.md}px) {
    gap: 16px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    gap: 12px;
    margin-top: 19px;
  }
  @media (max-width: ${BREAKPOINTS.xs}px) {
    gap: 8px;
  }
`;

export const FeatureBoxStyled = styled(FeatureBox)`
  ${WHITISH_BG_OPACITY_16}
  backdrop-filter: blur(50px);
  img {
    top: -40px;
    @media (max-width: ${BREAKPOINTS.sm}px) {
      top: -30px;
    }
    @media (max-width: ${BREAKPOINTS.xs}px) {
      top: -10px;
      margin-top: 8px;
    }
  }
`;
