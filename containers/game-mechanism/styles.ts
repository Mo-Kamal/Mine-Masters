"use client";
import { styled } from "@/lib/mui";
import GameMechanismsBgImage from "@/assets/game-mechanism/Game-Mechanics-Bg.png";
import {
  COLUMN_ALIGN_CENTER___JUSTIFY_START,
  DARK_PURPLE_TEXT_SHADOW,
} from "@/styles/global-styles";
import {
  TEXT_32_700,
  TEXT_40_700,
  TEXT_48_700,
  TEXT_64_700,
} from "@/styles/global-typography";
import { BREAKPOINTS } from "@/styles/mediaQueries";

export const GameMechanicsContainer = styled("section")`
  background-image: url(${GameMechanismsBgImage.src});
  background-size: cover;

  @media (max-width: ${BREAKPOINTS.lg}px) {
    background-repeat: no-repeat;
    background-position: center;
    height: 325px;
  }

  @media (max-width: ${BREAKPOINTS.md}px) {
    height: 290px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    height: 160px;
  }

  @media (max-width: ${BREAKPOINTS.xs}px) {
    height: 109px;
    margin-bottom: 23px;
  }
`;

export const GameMechanicsContent = styled("div")`
  ${COLUMN_ALIGN_CENTER___JUSTIFY_START};
  padding-top: 193px;
  padding-bottom: 114px;

  @media (max-width: ${BREAKPOINTS.lg}px) {
    padding-top: 130px;
  }

  @media (max-width: ${BREAKPOINTS.md}px) {
    padding-top: 110px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding-top: 110px;
  }

  @media (max-width: ${BREAKPOINTS.xs}px) {
    padding-top: 83px;
  }
`;

export const SectionTitle = styled("h1")`
  ${TEXT_64_700}
  color: var(--Dark-Purple);
  ${DARK_PURPLE_TEXT_SHADOW}

  @media (max-width: ${BREAKPOINTS.md}px) {
    ${TEXT_48_700}
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    ${TEXT_40_700}
  }

  @media (max-width: ${BREAKPOINTS.xs}px) {
    ${TEXT_32_700}
  }
`;
