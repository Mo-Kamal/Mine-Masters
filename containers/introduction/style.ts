"use client";
import { COLUMN_ALIGN_START__JUSTIFY_START } from "@/styles/global-styles";
import {
  TEXT_14_400,
  TEXT_16_400,
  TEXT_18_400,
  TEXT_20_400,
  TEXT_22_400,
  TEXT_24_400,
  TEXT_24_700,
  TEXT_32_400,
  TEXT_32_700,
  TEXT_40_700,
  TEXT_48_700,
} from "@/styles/global-typography";
import { styled } from "@/lib/mui";
import Image from "next/image";
import { BREAKPOINTS } from "@/styles/mediaQueries";

export const IntroductionContainer = styled("section")`
  background-color: var(--Purple);
`;

export const IntroductionContent = styled("div")`
  ${COLUMN_ALIGN_START__JUSTIFY_START};
  position: relative;
  gap: 24px;
  width: 90%;
  max-width: 850px;
  margin: auto;
  padding-top: 132px;
  padding-bottom: 111px;
  color: var(--Whitish);
  @media (max-width: ${BREAKPOINTS.md}px) {
    padding-top: 96px;
    padding-bottom: 80px;
    max-width: 768px;
    gap: 20px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding-top: 64px;
    padding-bottom: 56px;
    gap: 16px;
  }
  @media (max-width: ${BREAKPOINTS.xs}px) {
    padding-top: 37px;
    padding-bottom: 37px;
  }
`;

export const TwoLineTitleWrapper = styled("div")`
  @media (max-width: ${BREAKPOINTS.xs}px) {
    line-height: 18.38px;
  }
`;

export const TitleFirstLine = styled("h2")`
  ${TEXT_32_400}
  z-index: 1;
  @media (max-width: ${BREAKPOINTS.md}px) {
    ${TEXT_24_400}
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    ${TEXT_20_400}
  }
  @media (max-width: ${BREAKPOINTS.xs}px) {
    ${TEXT_16_400}
  }
`;

export const Description = styled("h2")`
  ${TEXT_32_400}
  z-index: 1;
  @media (max-width: ${BREAKPOINTS.md}px) {
    ${TEXT_22_400}
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    ${TEXT_18_400}
  }
  @media (max-width: ${BREAKPOINTS.xs}px) {
    ${TEXT_14_400}
    line-height: 16px;
  }
`;

export const TitleSecondLine = styled("h1")`
  ${TEXT_48_700}
  z-index: 1;
  @media (max-width: ${BREAKPOINTS.md}px) {
    ${TEXT_40_700}
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    ${TEXT_32_700}
  }
  @media (max-width: ${BREAKPOINTS.xs}px) {
    ${TEXT_24_700}
  }
`;

export const BlueSquareIcon = styled(Image)`
  position: absolute;
  top: 0;
  left: -290px;
  z-index: 1;
  @media (max-width: ${BREAKPOINTS.lg}px) {
    width: 250px;
    height: 250px;
    left: -220px;
  }
  @media (max-width: ${BREAKPOINTS.md}px) {
    width: 200px;
    height: 200px;
    left: -30px;
    top: -80px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    width: 150px;
    height: 150px;
    left: -20px;
    top: -65px;
  }
  @media (max-width: ${BREAKPOINTS.xs}px) {
    width: 57px;
    height: 57px;
    left: -10px;
    top: -15px;
  }
`;

export const OrangeSquareIcon = styled(Image)`
  position: absolute;
  bottom: 0;
  right: -200px;
  z-index: 1;
  @media (max-width: ${BREAKPOINTS.lg}px) {
    width: 200px;
    height: 200px;
    right: -150px;
  }
  @media (max-width: ${BREAKPOINTS.md}px) {
    width: 150px;
    height: 150px;
    right: -50px;
    top: 70px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    width: 120px;
    height: 120px;
    right: 0px;
    top: 30px;
  }
  @media (max-width: ${BREAKPOINTS.xs}px) {
    width: 50px;
    height: 50px;
    right: 5px;
    top: 20px;
  }
`;

export const IntroLeftBg = styled(Image)`
  position: absolute;
  top: 0;
  left: -200px;
  @media (max-width: ${BREAKPOINTS.md}px) {
    width: 380px;
    height: 215px;
    left: -60px;
    top: -50px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    width: 430px;
    height: 165px;
    left: -100px;
  }
  @media (max-width: ${BREAKPOINTS.xs}px) {
    width: 145px;
    height: 75px;
    left: -35px;
    top: -22px;
  }
`;

export const IntroRightBg = styled(Image)`
  position: absolute;
  bottom: 104px;
  right: -447px;
  @media (max-width: ${BREAKPOINTS.md}px) {
    width: 350px;
    height: 170px;
    right: -127px;
    top: -50px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    width: 180px;
    height: 100px;
    right: -20px;
    top: -40px;
  }
  @media (max-width: ${BREAKPOINTS.xs}px) {
    width: 150px;
    height: 56px;
    right: -45px;
    top: -25px;
  }
`;
