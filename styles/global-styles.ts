"use client";
import { css, styled } from "@/lib/mui";
import { BREAKPOINTS } from "./mediaQueries";
import {
  TEXT_14_400,
  TEXT_16_400,
  TEXT_16_700,
  TEXT_20_400,
  TEXT_20_700,
  TEXT_24_400,
  TEXT_24_700,
  TEXT_32_700,
  TEXT_34_700,
  TEXT_40_700,
  TEXT_48_700,
} from "./global-typography";

export const ROW = css`
  display: flex;
  flex-direction: row;
`;
export const COLUMN = css`
  display: flex;
  flex-direction: column;
`;
export const CENTER = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const COLUMN_CENTER = css`
  ${CENTER}
  ${COLUMN}
`;
export const ROW_CENTER = css`
  ${CENTER}
  ${ROW}
`;
export const COLUMN_ALIGN_CENTER__JUSTIFY_END = css`
  ${COLUMN}
  justify-content: flex-end;
  align-items: center;
`;
export const COLUMN_ALIGN_CENTER___JUSTIFY_START = css`
  ${COLUMN}
  justify-content: flex-start;
  align-items: center;
`;
export const COLUMN_ALIGN_END__JUSTIFY_CENTER = css`
  ${COLUMN}
  justify-content: center;
  align-items: flex-end;
`;
export const COLUMN_ALIGN_START__JUSTIFY_CENTER = css`
  ${COLUMN}
  justify-content: center;
  align-items: flex-start;
`;
export const COLUMN_ALIGN_START__JUSTIFY_START = css`
  ${COLUMN}
  justify-content: flex-start;
  align-items: flex-start;
`;
export const COLUMN_ALIGN_END__JUSTIFY_END = css`
  ${COLUMN}
  justify-content: flex-end;
  align-items: flex-end;
`;
export const COLUMN_ALIGN_START__JUSTIFY_END = css`
  ${COLUMN}
  justify-content: flex-end;
  align-items: flex-start;
`;
export const COLUMN_ALIGN_END__JUSTIFY_START = css`
  ${COLUMN}
  justify-content: flex-start;
  align-items: flex-end;
`;
export const COLUMN_ALIGN_END__SPACE_B = css`
  ${COLUMN}
  justify-content:space-between;
  align-items: flex-end;
`;
export const COLUMN_ALIGN_START__SPACE_B = css`
  ${COLUMN}
  justify-content:space-between;
  align-items: flex-start;
`;
export const COLUMN_ALIGN_CENTER__SPACE_B = css`
  ${COLUMN}
  justify-content:space-between;
  align-items: center;
`;

// ROWS

export const ROW_ALIGN_CENTER__JUSTIFY_END = css`
  ${ROW}
  justify-content: flex-end;
  align-items: center;
`;
export const ROW_ALIGN_CENTER__JUSTIFY_START = css`
  ${ROW}
  justify-content: flex-start;
  align-items: center;
`;
export const ROW_ALIGN_END__JUSTIFY_CENTER = css`
  ${ROW}
  justify-content: center;
  align-items: flex-end;
`;
export const ROW_ALIGN_START__JUSTIFY_CENTER = css`
  ${ROW}
  justify-content: center;
  align-items: flex-start;
`;
export const ROW_ALIGN_START__JUSTIFY_START = css`
  ${ROW}
  justify-content: flex-start;
  align-items: flex-start;
`;
export const ROW_ALIGN_END__JUSTIFY_END = css`
  ${ROW}
  justify-content: flex-end;
  align-items: flex-end;
`;
export const ROW_ALIGN_START__JUSTIFY_END = css`
  ${ROW}
  justify-content: flex-end;
  align-items: flex-end;
`;
export const ROW_ALIGN_END__JUSTIFY_START = css`
  ${ROW}
  justify-content: flex-end;
  align-items: flex-end;
`;
export const ROW_ALIGN_END__SPACE_B = css`
  ${ROW}
  justify-content:space-between;
  align-items: flex-end;
`;
export const ROW_ALIGN_START__SPACE_B = css`
  ${ROW}
  justify-content:space-between;
  align-items: flex-start;
`;
export const ROW_ALIGN_CENTER__SPACE_B = css`
  ${ROW}
  justify-content:space-between;
  align-items: center;
`;
export const FULL_WIDTH = css`
  width: 100%;
`;
export const FULL_HEIGHT = css`
  height: 100%;
`;

export const LineBreak = styled("br")``;

export const TOP_POSITION = css`
  top: 70px;
  right: calc(50% - 191px);
`;

export const LEFT_POSITION = css`
  top: calc(50% - 210px);
  /* left: 80px; */
  right: calc(100% - 390px);
`;

export const RIGHT_POSITION = css`
  right: 20px;
  top: calc(50% - 235px);
`;

export const BOTTOM_POSITION = css`
  /* bottom: 100px; */
  top: calc(100% - 500px);
  right: calc(50% - 190px);
`;

export const MAX_WIDTH_RESPONSIVENESS = css`
  max-width: 1920px;
  margin: auto;
`;

export const TITLE_WITH_NUMBER = css`
  color: var(--Primary);
  ${TEXT_48_700}
  position: relative;

  &::before {
    position: absolute;
    color: var(--Primary);
    ${TEXT_48_700}
    left: -50px;
  }

  @media (max-width: ${BREAKPOINTS.md}px) {
    ${TEXT_40_700}
    &::before {
      ${TEXT_40_700}
      left: -40px;
    }
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    ${TEXT_32_700}
    &::before {
      ${TEXT_32_700}
      left: -32px;
    }
  }

  @media (max-width: ${BREAKPOINTS.xs}px) {
    ${TEXT_16_700}
    &::before {
      ${TEXT_16_700}
      left: -16px;
    }
  }
`;

export const HEAD_SECTION_TITLE = css`
  ${TEXT_48_700}
  color: var(--Primary);

  @media (max-width: ${BREAKPOINTS.xl}px) {
    ${TEXT_40_700}
  }

  @media (max-width: ${BREAKPOINTS.lg}px) {
    ${TEXT_34_700}
  }

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

export const SECTION_BODY_SIZE = css`
  ${TEXT_24_400}
  line-height: 33px !important;
  @media (max-width: ${BREAKPOINTS.md}px) {
    ${TEXT_20_400}
    margin-top: 8px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    ${TEXT_16_400}
    margin-top: 4px;
  }

  @media (max-width: ${BREAKPOINTS.xs}px) {
    ${TEXT_14_400}
    line-height: 16px;
  }
`;

export const LIGHT_PURPLE_TO_PRIMARY_GRADIENT = css`
  background: linear-gradient(
    92.74deg,
    var(--Light-Purple) 4.16%,
    var(--Primary) 99.16%
  );
`;

export const DARK_PURPLE_TEXT_SHADOW = css`
  text-shadow: 0px 4px 18px rgba(var(--Dark-Purple-rgb), 0.28);
`;

export const BLACKISH_BOX_SHADOW_50 = css`
  box-shadow: 0 8px 100px 30px rgba(var(--Blackish-rgb), 0.5);
`;

export const DARK_PURPLE_BOX_SHADOW = css`
  box-shadow: inset 0px -4px 8px rgba(var(--Dark-Purple-rgb), 0.34);
`;

export const WHITE_TEXT_GRADIENT_BG_BUTTON = css`
  ${LIGHT_PURPLE_TO_PRIMARY_GRADIENT}
  ${DARK_PURPLE_BOX_SHADOW}
  & > span {
    color: var(--Whitish);
  }
`;

export const GRADIENT_TEXT = css`
  ${LIGHT_PURPLE_TO_PRIMARY_GRADIENT}
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const PRIMARY_BG_OPACITY_10 = css`
  background: rgba(var(--Primary-rgb), 0.1);
`;

export const WHITISH_BG_OPACITY_16 = css`
  background: rgba(var(--Whitish-rgb), 0.16);
`;

export const PRIMARY_COLOR_OPACITY_50 = css`
  color: rgba(var(--Primary-rgb), 0.5);
`;
