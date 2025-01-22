"use client";
import { ROW_ALIGN_CENTER__SPACE_B } from "@/styles/global-styles";
import {
  TEXT_14_500,
  TEXT_16_500,
  TEXT_20_500,
  TEXT_24_500,
} from "@/styles/global-typography";
import { BREAKPOINTS } from "@/styles/mediaQueries";
import { styled } from "@/lib/mui";

export const FeatureBoxContainer = styled("div")`
  width: 267px;
  height: 60px;
  ${ROW_ALIGN_CENTER__SPACE_B}
  padding: 16px;
  border: 1px solid var(--Violet);
  border-radius: 16px;
  backdrop-filter: blur(50px);
  position: relative;
  margin-top: 32px;

  @media (max-width: ${BREAKPOINTS.lg}px) {
    width: 240px;
    height: 60px;
    padding: 14px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    margin-top: 0px;
    width: 200px;
    height: 50px;
    padding: 12px;
  }

  @media (max-width: ${BREAKPOINTS.xs}px) {
    width: 148px;
    height: 40px;
    padding: 8px;
  }
`;

export const StyledImage = styled("img")`
  position: absolute;
  left: 0;
  top: -50px;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    top: -30px;
    width: 80px;
    height: 80px;
  }

  @media (max-width: ${BREAKPOINTS.xs}px) {
    top: -10px;
    width: 50px;
    height: 50px;
  }
`;

export const FeatureBoxTitle = styled("h3")`
  color: var(--Violet);
  ${TEXT_24_500};
  position: absolute;
  right: 16px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    ${TEXT_20_500}
    right: 25px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    ${TEXT_16_500}
    right: 20px;
  }

  @media (max-width: ${BREAKPOINTS.xs}px) {
    ${TEXT_14_500}
    right: 15px;
  }
`;
