"use client";
import {
  COLUMN_ALIGN_CENTER___JUSTIFY_START,
  COLUMN_ALIGN_START__JUSTIFY_START,
  DARK_PURPLE_BOX_SHADOW,
  DARK_PURPLE_TEXT_SHADOW,
  MAX_WIDTH_RESPONSIVENESS,
  PRIMARY_BG_OPACITY_10,
  ROW_ALIGN_CENTER__JUSTIFY_START,
  WHITISH_BG_OPACITY_16,
} from "@/styles/global-styles";
import {
  TEXT_14_400,
  TEXT_16_400,
  TEXT_16_700,
  TEXT_20_400,
  TEXT_20_700,
  TEXT_24_400,
  TEXT_24_700,
  TEXT_32_700,
  TEXT_32_900,
  TEXT_48_900,
  TEXT_64_900,
} from "@/styles/global-typography";
import { styled } from "@/lib/mui";
import { Divider } from "@/lib/mui";
import { BREAKPOINTS } from "@/styles/mediaQueries";

export const StartMineMastersContainer = styled("section")`
  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding-top: 37px;
  }

  ${MAX_WIDTH_RESPONSIVENESS}
`;

export const StartMineMastersContent = styled("div")`
  ${ROW_ALIGN_CENTER__JUSTIFY_START}
  gap: 32px;
  margin: auto;
  padding: 32px;
  ${WHITISH_BG_OPACITY_16}
  ${DARK_PURPLE_BOX_SHADOW}
  border-radius: 32px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    padding: 24px;
    gap: 24px;
    border-radius: 24px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding: 16px;
    gap: 16px;
    border-radius: 16px;
    flex-direction: column-reverse;
  }

  @media (max-width: ${BREAKPOINTS.xs}px) {
    padding: 8px;
    gap: 8px;
  }

  @media (max-width: ${BREAKPOINTS.fhd}px) {
    width: 90%;
  }
`;

export const LeftSideWrapper = styled("div")`
  ${COLUMN_ALIGN_CENTER___JUSTIFY_START}
  gap: 24px;
  margin-right: 40px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    margin-right: 0;
    padding: 0 16px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    width: 100%;
    flex-direction: row;
    gap: 16px;
    justify-content: space-between;
  }

  @media (max-width: ${BREAKPOINTS.xs}px) {
    gap: 8px;
  }
`;

export const LeftSideTitle = styled("h1")`
  color: var(--Primary);
  ${DARK_PURPLE_TEXT_SHADOW}
  ${TEXT_64_900}

  @media (max-width: ${BREAKPOINTS.md}px) {
    ${TEXT_48_900}
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    ${TEXT_32_900}
  }
`;

export const VerticalDivider = styled(Divider)`
  width: 2px;
  ${PRIMARY_BG_OPACITY_10}
  @media (max-width: ${BREAKPOINTS.sm}px) {
    display: none;
  }
`;

export const RightSideWrapper = styled("div")`
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  gap: 24px;
  max-width: 900px;
  padding: 20px;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    gap: 16px;
  }
`;

export const RightSideTitle = styled("h1")`
  ${TEXT_32_700}
  color: var(--Primary);

  @media (max-width: ${BREAKPOINTS.md}px) {
    ${TEXT_24_700}
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    ${TEXT_20_700}
  }

  @media (max-width: ${BREAKPOINTS.xs}px) {
    ${TEXT_16_700}
  }
`;

export const RightSideDescription = styled("p")`
  ${TEXT_24_400}
  color: var(--Dark-Purple);
  line-height: 33.6px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    ${TEXT_20_400}
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    ${TEXT_16_400}
  }

  @media (max-width: ${BREAKPOINTS.xs}px) {
    ${TEXT_14_400}
    line-height: 16.09px;
  }
`;
