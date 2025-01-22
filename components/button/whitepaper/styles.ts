"use client";
import Image from "next/image";
import {
  TEXT_14_400,
  TEXT_18_400,
  TEXT_24_400,
} from "@/styles/global-typography";
import { css, styled } from "@/lib/mui";
import {
  WHITE_TEXT_GRADIENT_BG_BUTTON,
  ROW_CENTER,
  WHITISH_BG_OPACITY_16,
} from "@/styles/global-styles";
import { BREAKPOINTS } from "@/styles/mediaQueries";
import { PrimaryButton } from "../primary";

export const WhitePaperButtonStyled = styled(PrimaryButton, {
  shouldForwardProp: (prop: string) =>
    !["primaryColorBackground", "loading"].includes(prop),
})<{
  loading?: boolean;
  primaryColorBackground?: boolean;
}>`
  gap: 8px;
  ${TEXT_24_400}
  ${ROW_CENTER}
  width: 268px;
  min-width: 150px;
  padding: 14px 24px 14px 16px;
  overflow: hidden;

  // whitepaper button image color change
  :hover {
    img {
      filter: brightness(0) invert(1);
    }
  }

  // primaryColorBackground styles
  ${(props) =>
    props.primaryColorBackground &&
    css`
      ${WHITE_TEXT_GRADIENT_BG_BUTTON}
      img {
        filter: brightness(0) invert(1);
      }

      // primaryColorBackground hover styles
      &::before {
        ${WHITISH_BG_OPACITY_16}
        box-shadow: 0px 4px 18px rgba(var(--Dark-Purple-rgb), 0.28);
      }
      &:hover {
        ${WHITISH_BG_OPACITY_16}
        &::before {
          opacity: 1;
        }

        & > span {
          color: var(--Primary);
        }
        img {
          filter: brightness(1) invert(0);
        }
      }
    `}

  @media (max-width: ${BREAKPOINTS.lg}px) {
    width: 200px;
    padding: 5px 10px;
    align-items: center;
    & > span {
      ${TEXT_18_400}
    }
  }

  @media (max-width: ${BREAKPOINTS.md}px) {
    padding: 5px 10px;
    .MuiButton-startIcon {
      margin-right: 0;
    }
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding: 10px 12px;
    & > span {
      ${TEXT_18_400}
    }
    .MuiButton-startIcon {
      & > img {
        width: 24px;
        height: 24px;
      }
    }
  }

  @media (max-width: ${BREAKPOINTS.xs}px) {
    width: 160px;
    height: 45px;
    padding: 14px;
    & > span {
      ${TEXT_14_400}
    }
  }
`;

export const StyledStartImage = styled(Image)`
  width: 32px;
  height: 32px;

  @media (max-width: ${BREAKPOINTS.lg}px) {
    width: 26px;
    height: 26px;
  }
`;
