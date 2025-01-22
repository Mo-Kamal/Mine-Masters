"use client";
import {
  COLUMN_ALIGN_START__JUSTIFY_START,
  COLUMN_ALIGN_START__SPACE_B,
  HEAD_SECTION_TITLE,
  MAX_WIDTH_RESPONSIVENESS,
  PRIMARY_COLOR_OPACITY_50,
  ROW_ALIGN_START__JUSTIFY_START,
} from "@/styles/global-styles";
import Image from "next/image";
import { BREAKPOINTS } from "@/styles/mediaQueries";
import {
  TEXT_14_400,
  TEXT_14_500,
  TEXT_16_400,
  TEXT_16_500,
  TEXT_20_400,
  TEXT_20_500,
  TEXT_24_400,
  TEXT_24_500,
  TEXT_28_400,
  TEXT_28_500,
  TEXT_32_500,
} from "@/styles/global-typography";
import { styled } from "@/lib/mui";
import { MobileHorizontalDivider } from "@/components/divider";

export const NewsContainer = styled("section")`
  width: 90%;
  ${MAX_WIDTH_RESPONSIVENESS}
  ${COLUMN_ALIGN_START__SPACE_B}
  gap: 46px;
  margin: 0 auto 160px;

  @media (max-width: ${BREAKPOINTS.xl}px) {
    gap: 36px;
    margin-bottom: 120px;
  }

  @media (max-width: ${BREAKPOINTS.lg}px) {
    gap: 26px;
    margin-bottom: 100px;
  }

  @media (max-width: ${BREAKPOINTS.md}px) {
    gap: 16px;
    margin-bottom: 80px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    gap: 32px;
    margin-bottom: 60px;
  }
`;

export const SectionTitle = styled("h1")`
  ${HEAD_SECTION_TITLE}
`;

export const ItemsWrapper = styled("div")`
  ${ROW_ALIGN_START__JUSTIFY_START}
  width: 100%;
  gap: 24px;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    width: 100%;
    flex-direction: column;
    gap: 16px;
  }
`;

export const NewsItem = styled("div")`
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  width: calc(50% - 8px);
  gap: 8px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    width: 100%;
  }
`;

export const ItemPic = styled(Image)`
  height: auto;
  width: 100%;
`;

export const ItemTitle = styled("h2")`
  ${TEXT_32_500}
  color: var(--Primary);

  @media (max-width: ${BREAKPOINTS.xl}px) {
    ${TEXT_28_500}
  }

  @media (max-width: ${BREAKPOINTS.lg}px) {
    ${TEXT_24_500}
  }

  @media (max-width: ${BREAKPOINTS.md}px) {
    ${TEXT_20_500}
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    ${TEXT_16_500}
    margin-top: 16px;
    margin-bottom: 8px;
  }

  @media (max-width: ${BREAKPOINTS.xs}px) {
    ${TEXT_14_500}
  }
`;

export const ItemDescription = styled("p")`
  ${TEXT_24_400}
  ${PRIMARY_COLOR_OPACITY_50};
  line-height: 33px;

  @media (max-width: ${BREAKPOINTS.xl}px) {
    ${TEXT_28_400}
  }

  @media (max-width: ${BREAKPOINTS.lg}px) {
    ${TEXT_24_400}
  }

  @media (max-width: ${BREAKPOINTS.md}px) {
    ${TEXT_20_400}
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    ${TEXT_16_400}
  }

  @media (max-width: ${BREAKPOINTS.xs}px) {
    ${TEXT_14_400}
    line-height: 16px;
  }
`;

export const HorizontalDivider = styled(MobileHorizontalDivider)`
  width: 90%;
  margin: 30px 20px 30px 20px;
`;
