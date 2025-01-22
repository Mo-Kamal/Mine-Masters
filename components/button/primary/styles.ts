"use client";
import { BaseButton } from "../base";
import {
  WHITE_TEXT_GRADIENT_BG_BUTTON,
  ROW_ALIGN_CENTER__SPACE_B,
  ROW_CENTER,
  WHITISH_BG_OPACITY_16,
} from "@/styles/global-styles";
import {
  TEXT_14_400,
  TEXT_16_400,
  TEXT_24_400,
} from "@/styles/global-typography";
import { css, styled } from "@/lib/mui";
import { BREAKPOINTS } from "@/styles/mediaQueries";
import { PrimaryProps } from ".";
export const PrimaryButtonStyled = styled(BaseButton)<PrimaryProps>`
  ${ROW_ALIGN_CENTER__SPACE_B};
  position: relative; /* Required for pseudo-element positioning */
  padding: 14px 24px 14px 16px;
  gap: 16px;
  height: 60px;
  ${TEXT_24_400}
  ${WHITISH_BG_OPACITY_16}
  box-shadow: 0px 4px 18px rgba(var(--Dark-Purple-rgb), 0.34);
  border-radius: 16px;
  border: 2.5px solid var(--Primary);
  overflow: hidden; /* Prevent pseudo-element overflow */
  z-index: 1; /* Ensure content is on top */
  transition: all 0.3s ease;

  & > span {
    color: var(--Primary);
    transition: color 0.3s ease;
    z-index: 2; /* Explicitly set the text on top of the ::before */
    position: relative; /* Ensure stacking context above ::before */
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    ${WHITE_TEXT_GRADIENT_BG_BUTTON};
    z-index: 0; /* So the button text appear on top of the before color */
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    &::before {
      opacity: 1;
    }
    & > span {
      color: var(--Whitish);
    }
  }

  ${(props) =>
    props.loading &&
    css`
      pointer-events: none;
      color: var(--Whitish);
      ${ROW_CENTER}
    `}

  @media (max-width: ${BREAKPOINTS.md}px) {
    height: 55px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding: 12px 16px 12px 12px;
    height: 48px;
    ${TEXT_16_400}
  }

  @media (max-width: ${BREAKPOINTS.xs}px) {
    padding: 8px 12px 8px 8px;
    height: 40px;
    ${TEXT_14_400}
  }
`;
