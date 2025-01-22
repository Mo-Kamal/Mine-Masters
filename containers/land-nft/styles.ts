"use client";
import { PrimaryButton } from "@/components/button/primary";
import {
  COLUMN_ALIGN_START__JUSTIFY_START,
  MAX_WIDTH_RESPONSIVENESS,
  ROW_ALIGN_CENTER__SPACE_B,
  SECTION_BODY_SIZE,
  TITLE_WITH_NUMBER,
} from "@/styles/global-styles";
import { styled } from "@/lib/mui";
import { BREAKPOINTS } from "@/styles/mediaQueries";
import Image from "next/image";
import { capitalizeString } from "@/utils/capitalize-string";
import { Position } from "./types";
import { BASE_IMAGE_SIZES, BREAKPOINT_SIZES } from "./constants";
import {
  generateKeyframes,
  generateResponsiveStyles,
} from "./utils/style-helpers";

// Styles for the LandNft components
export const LandNftContainer = styled("section")`
  width: 90%;
  ${MAX_WIDTH_RESPONSIVENESS}
  ${ROW_ALIGN_CENTER__SPACE_B}
  margin: auto;
  @media (max-width: ${BREAKPOINTS.md}px) {
    flex-direction: column-reverse;
  }
`;

export const LeftSideWrapper = styled("div")`
  width: 50%;
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  gap: 32px;
  margin-left: 50px;
  @media (max-width: ${BREAKPOINTS.md}px) {
    width: 100%;
    margin-left: 30px;
    gap: 16px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    gap: 8px;
  }
`;

export const Title = styled("h1")`
  &::before {
    content: "1. ";
  }
  ${TITLE_WITH_NUMBER}
`;

export const Description = styled("p")`
  color: var(--Dark-Purple);
  padding-right: 20px;
  line-height: 33.6px;
  ${SECTION_BODY_SIZE}
`;

export const CTAButtonsWrapper = styled("div")`
  ${ROW_ALIGN_CENTER__SPACE_B}
  gap: 16px;
  @media (max-width: ${BREAKPOINTS.sm}px) {
    gap: 8px;
  }
`;

export const RightSideWrapper = styled("div")`
  position: relative;
`;

// Right side images and their animations
export const BackgroundCircle = styled(Image)`
  @media (max-width: ${BREAKPOINTS.lg}px) {
    width: 910px;
    height: 910px;
  }
  @media (max-width: ${BREAKPOINTS.md}px) {
    width: 610px;
    height: 610px;
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    width: 430px;
    height: 430px;
  }
  @media (max-width: ${BREAKPOINTS.xs}px) {
    width: 313px;
    height: 313px;
  }
`;

// Styled component for the image
export const StyledImage = styled(Image)<{ position: Position }>`
  position: absolute;
  height: auto !important; // Ensure height is not constrained automatically
  animation: ${(props) => `rotateImage${capitalizeString(props.position)}`} 15s
    infinite; // Apply the animation based on position

  /* Base styles and animations */
  ${(props) => {
    const size = BASE_IMAGE_SIZES[props.position]; // Get base size for the position
    return `
      width: ${size.width}px;
      height: ${size.height}px;
      ${generateKeyframes(props.position, size)} // Generate keyframes for base size
    `;
  }}

  /* Responsive styles and animations */
  ${(props) => generateResponsiveStyles(props.position, BREAKPOINT_SIZES)}
`;

export const StyledTopImage = styled(StyledImage)`
  margin-top: 30px;
`;
