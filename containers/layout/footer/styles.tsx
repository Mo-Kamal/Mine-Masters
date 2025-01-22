"use client";
import { styled } from "@/lib/mui";
import Image from "next/image";
import {
  COLUMN_ALIGN_START__JUSTIFY_START,
  GRADIENT_TEXT,
  LIGHT_PURPLE_TO_PRIMARY_GRADIENT,
  MAX_WIDTH_RESPONSIVENESS,
  PRIMARY_BG_OPACITY_10,
  PRIMARY_COLOR_OPACITY_50,
  ROW_ALIGN_CENTER__JUSTIFY_START,
  ROW_ALIGN_START__JUSTIFY_START,
  ROW_ALIGN_START__SPACE_B,
} from "@/styles/global-styles";
import {
  TEXT_106_900,
  TEXT_16_400,
  TEXT_16_500,
  TEXT_20_400,
  TEXT_20_500,
  TEXT_24_500,
  TEXT_32_900,
  TEXT_40_900,
  TEXT_48_900,
  TEXT_50_900,
  TEXT_60_900,
  TEXT_70_900,
  TEXT_90_900,
} from "@/styles/global-typography";
import DoubleBulletIcon from "@/assets/layout/Double-Bullet.png";
import { TransparentButton } from "@/components/button/transparent";
import { BREAKPOINTS } from "@/styles/mediaQueries";
import Link from "next/link";

export const FooterContainer = styled("footer")`
  width: 90%;
  ${MAX_WIDTH_RESPONSIVENESS}
  ${PRIMARY_BG_OPACITY_10}
  backdrop-filter: blur(10px);
  border-radius: 20px;
  ${ROW_ALIGN_START__SPACE_B}
  padding: 24px 0;
  margin-bottom: 154px;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    flex-direction: column-reverse;
    align-items: center;
    background: none;
  }
`;

export const LeftSideWrapper = styled("div")`
  ${ROW_ALIGN_START__JUSTIFY_START};
  padding: 60px;

  @media (max-width: ${BREAKPOINTS.xl}px) {
    padding: 40px;
  }

  @media (max-width: ${BREAKPOINTS.lg}px) {
    padding-right: 10px;
  }

  @media (max-width: ${BREAKPOINTS.md}px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding: 40px;
  }
`;

export const LeftSideContent = styled("div")`
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  gap: 24px;
  max-width: 280px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    align-items: center;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    gap: 0;
  }
`;

export const LeftSideBottomTitle = styled("h3")`
  ${TEXT_48_900}
  letter-spacing: 0.33em;
  ${GRADIENT_TEXT}
  @media (max-width: ${BREAKPOINTS.md}px) {
    ${TEXT_40_900}
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    ${TEXT_50_900}
    letter-spacing: 0.1em;
  }

  @media (max-width: ${BREAKPOINTS.xs}px) {
    ${TEXT_32_900}
  }
`;

export const LeftSideSubTitle = styled("h4")`
  ${TEXT_16_500}
  ${PRIMARY_COLOR_OPACITY_50}
  position: relative;
  margin-left: 30px;

  &::before {
    position: absolute;
    content: url(${DoubleBulletIcon.src});
    left: -35px;
    top: -5px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    text-align: center;
    white-space: nowrap;
    margin-bottom: 24px;
  }
`;

export const RightSideWrapper = styled("div")`
  ${ROW_ALIGN_START__SPACE_B}
  gap: 24px;
  width: 50%;
  overflow: hidden;
  padding: 20px;

  @media (max-width: ${BREAKPOINTS.lg}px) {
    gap: 16px;
    padding-left: 0;
  }

  @media (max-width: ${BREAKPOINTS.md}px) {
    padding-left: 20px;
    justify-content: center;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    width: 100%;
    overflow: visible;
  }
`;

export const RightSideItemOne = styled("div")`
  ${COLUMN_ALIGN_START__JUSTIFY_START};
  gap: 24px;
  width: 320px;

  @media (max-width: ${BREAKPOINTS.lg}px) {
    width: 250px;
    gap: 16px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    display: none;
  }
`;

export const RightSideItemTwo = styled("div")`
  ${COLUMN_ALIGN_START__JUSTIFY_START};
  gap: 24px;
  width: 320px;

  @media (max-width: ${BREAKPOINTS.lg}px) {
    width: 250px;
    gap: 16px;
  }

  @media (max-width: ${BREAKPOINTS.md}px) {
    align-items: center;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const RightSideTite = styled("h3")`
  color: var(--Primary);
  ${TEXT_24_500}

  @media (max-width: ${BREAKPOINTS.lg}px) {
    ${TEXT_20_500}
  }

  @media (max-width: ${BREAKPOINTS.md}px) {
    ${TEXT_16_500}
  }
`;

export const GradientHorizontalDivider = styled("div")`
  width: 100%;
  height: 2px;
  ${LIGHT_PURPLE_TO_PRIMARY_GRADIENT}

  @media (max-width: ${BREAKPOINTS.sm}px) {
    display: none;
  }
`;

export const StyledLogo = styled(Image)`
  width: 203px;
  height: 228px;

  @media (max-width: ${BREAKPOINTS.lg}px) {
    width: 160px;
    height: 180px;
  }

  @media (max-width: ${BREAKPOINTS.md}px) {
    width: 140px;
    height: 160px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    width: 120px;
    height: 140px;
  }

  @media (max-width: ${BREAKPOINTS.xs}px) {
    width: 81px;
    height: 90px;
  }
`;

export const ItemWrapper = styled("div")`
  ${ROW_ALIGN_CENTER__JUSTIFY_START}
  margin-bottom: 16px;
  cursor: pointer;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    margin-bottom: 0;
  }
`;

export const ItemList = styled(TransparentButton)`
  padding: 16px;
  @media (max-width: ${BREAKPOINTS.lg}px) {
    ${TEXT_20_400}
  }

  @media (max-width: ${BREAKPOINTS.md}px) {
    ${TEXT_16_400}
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    display: none;
  }
`;

export const TitleWrapper = styled("div")`
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  text-transform: uppercase;
  color: var(--Primary);

  @media (max-width: ${BREAKPOINTS.md}px) {
    align-items: center;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    flex-direction: row;
    gap: 8px;
  }
`;

export const TitleFirstRow = styled("div")`
  ${ROW_ALIGN_START__JUSTIFY_START}
`;

export const IconStyle = styled("div")`
  @media (max-width: ${BREAKPOINTS.sm}px) {
    display: flex;
    flex-direction: row;
  }
`;

export const IconStyleSmall = styled("div")`
  @media (max-width: ${BREAKPOINTS.sm}px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const CommunityIcon = styled(Image)`
  @media (max-width: ${BREAKPOINTS.sm}px) {
    width: 35px;
    height: 35px;
  }
`;

export const ConnectButtonStyleMd = styled("div")`
  @media (max-width: ${BREAKPOINTS.sm}px) {
    display: none;
  }
`;

export const ConnectButtonWrapper = styled("div")`
  display: none;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    display: block;
    padding: 14px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const LeftSideTopTitleChar = styled("h3")<{ color?: string }>`
  color: ${(props) => props.color || "inherit"};
  ${TEXT_106_900}
  letter-spacing: 0.15em;

  @media (max-width: ${BREAKPOINTS.xl}px) {
    ${TEXT_90_900}
  }

  @media (max-width: ${BREAKPOINTS.lg}px) {
    ${TEXT_70_900}
  }

  @media (max-width: ${BREAKPOINTS.md}px) {
    ${TEXT_60_900}
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    ${TEXT_50_900}
  }

  @media (max-width: ${BREAKPOINTS.xs}px) {
    ${TEXT_32_900}
  }

  @media (max-width: ${BREAKPOINTS.xl}px) {
    line-height: 106px;
  }
`;
