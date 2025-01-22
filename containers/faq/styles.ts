import {
  COLUMN_ALIGN_START__JUSTIFY_START,
  HEAD_SECTION_TITLE,
  MAX_WIDTH_RESPONSIVENESS,
  PRIMARY_BG_OPACITY_10,
  ROW_ALIGN_START__JUSTIFY_START,
} from "@/styles/global-styles";
import {
  TEXT_14_400,
  TEXT_16_400,
  TEXT_20_400,
  TEXT_24_400,
} from "@/styles/global-typography";
import Image from "next/image";
import { css, styled } from "@/lib/mui";
import { BREAKPOINTS } from "@/styles/mediaQueries"; // Ensure BREAKPOINTS is imported

// common styles
const TITLE_DESCRIPTION_SIZE = css`
  ${TEXT_24_400}

  @media (max-width: ${BREAKPOINTS.md}px) {
    ${TEXT_20_400}
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    ${TEXT_16_400}
  }

  @media (max-width: ${BREAKPOINTS.xs}px) {
    ${TEXT_14_400}
  }
`;

// Components Styles
export const FaqContainer = styled("section")`
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  gap: 48px;
  width: 90%;
  ${MAX_WIDTH_RESPONSIVENESS}
  margin-bottom: 120px;

  @media (max-width: ${BREAKPOINTS.lg}px) {
    gap: 36px;
    margin-bottom: 100px;
  }

  @media (max-width: ${BREAKPOINTS.md}px) {
    gap: 16px;
    margin-bottom: 80px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    gap: 12px;
    margin-bottom: 60px;
  }
`;

export const SectionTitle = styled("h1")`
  ${HEAD_SECTION_TITLE}
`;

export const FaqItem = styled("div")<{ selected: boolean }>`
  width: 100%;
  ${ROW_ALIGN_START__JUSTIFY_START}
  gap: 24px;
  ${PRIMARY_BG_OPACITY_10}
  border-radius: 24px;
  letter-spacing: 0.05em;
  padding: 24px;
  cursor: pointer;

  @media (max-width: ${BREAKPOINTS.md}px) {
    gap: 16px;
    padding: 16px;
    border-radius: 16px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    gap: 12px;
    padding: 12px;
    border-radius: 8px;
  }
`;

export const ItemTextWrapper = styled("div")`
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  gap: 42px;
  margin-top: 10px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    gap: 32px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    gap: 24px;
    margin-top: 5px;
  }

  @media (max-width: ${BREAKPOINTS.xs}px) {
    gap: 16px;
    margin-top: 0;
  }
`;

export const ItemTitle = styled("h2")<{ selected: boolean }>`
  ${TITLE_DESCRIPTION_SIZE}
  color: var(--Primary);
  ${({ selected }) =>
    selected &&
    css`
      color: var(--Blackish);
    `}
`;

export const ItemDescription = styled("p")<{ selected: boolean }>`
  display: none;
  ${TITLE_DESCRIPTION_SIZE}
  color: var(--Black);

  ${({ selected }) =>
    selected &&
    css`
      display: block;
    `}
`;

export const ItemLogo = styled(Image)<{ selected: boolean }>`
  transition: all 500ms ease-in-out;

  ${({ selected }) =>
    selected &&
    css`
      rotate: 180deg;
    `}

  @media (max-width: ${BREAKPOINTS.md}px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    width: 32px;
    height: 32px;
  }

  @media (max-width: ${BREAKPOINTS.xs}px) {
    width: 24px;
    height: 24px;
  }
`;
