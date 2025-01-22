"use client";
import {
  COLUMN_ALIGN_START__JUSTIFY_START,
  MAX_WIDTH_RESPONSIVENESS,
  ROW_ALIGN_CENTER__SPACE_B,
  TITLE_WITH_NUMBER,
} from "@/styles/global-styles";
import { styled } from "@/lib/mui";
import Image from "next/image";
import {
  TEXT_14_400,
  TEXT_16_400,
  TEXT_16_500,
  TEXT_20_500,
  TEXT_24_500,
  TEXT_28_500,
  TEXT_32_500,
} from "@/styles/global-typography";
import YellowBulletIcon from "@/assets/war-peace/Yellow-Bullet.png";
import BlueBulletIcon from "@/assets/war-peace/Blue-Bullet.png";
import { BREAKPOINTS } from "@/styles/mediaQueries";

export const WarPeaceContainer = styled("section")`
  width: 90%;
  ${MAX_WIDTH_RESPONSIVENESS}
  ${ROW_ALIGN_CENTER__SPACE_B}
  margin: 121px auto;
  gap: 70px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    gap: 48px;
    flex-direction: column-reverse;
    margin: 80px auto;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    gap: 32px;
    margin: 56px auto;
  }
`;

export const LeftSideWrapper = styled("div")``;

export const Title = styled("h1")`
  &::before {
    content: "3. ";
  }
  ${TITLE_WITH_NUMBER}
`;

export const ListItemWrapper = styled("div")`
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  gap: 8px;
  color: var(--Dark-Purple);
  position: relative;
  margin-left: 30px;

  :first-of-type::before {
    content: url(${YellowBulletIcon.src});
    position: absolute;
    left: -30px;
    top: 5px;
  }

  :nth-of-type(2)::before {
    content: url(${BlueBulletIcon.src});
    position: absolute;
    left: -30px;
    top: 5px;
  }
`;

export const ListItemTitle = styled("h2")`
  ${TEXT_32_500}

  @media (max-width: ${BREAKPOINTS.lg}px) {
    ${TEXT_28_500}
  }

  @media (max-width: ${BREAKPOINTS.md}px) {
    ${TEXT_24_500}
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    ${TEXT_20_500}
  }

  @media (max-width: ${BREAKPOINTS.xs}px) {
    ${TEXT_16_500}
  }
`;

export const ListItemDescription = styled("p")`
  ${TEXT_16_400}
  padding-right: 20px;

  @media (max-width: ${BREAKPOINTS.xs}px) {
    ${TEXT_14_400}
  }
`;

export const RightSideWrapper = styled("div")`
  width: 50%;
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  gap: 24px;

  @media (max-width: ${BREAKPOINTS.md}px) {
    width: 100%;
    margin-left: 30px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    gap: 16px;
  }

  @media (max-width: ${BREAKPOINTS.xs}px) {
    gap: 8px;
  }
`;

export const LeftSidePic = styled(Image)`
  width: 50%;
  height: auto;

  @media (max-width: ${BREAKPOINTS.md}px) {
    width: 70%;
  }
`;
