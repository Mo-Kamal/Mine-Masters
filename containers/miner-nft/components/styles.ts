"use client";
import { styled } from "@/lib/mui";
import Image from "next/image";
import { BREAKPOINTS } from "@/styles/mediaQueries";
import { CrystalPosition } from "../types";
import { moveAnimation } from "../utils/float-animation-generator";

export const CrystalsContainer = styled("div")``;

export const CrystalFloatingImage = styled(Image)<{
  floatingranges: number;
  position: CrystalPosition;
}>`
  position: absolute;
  right: ${({ position }) => position.right};
  bottom: ${({ position }) => position.bottom};
  animation: ${({ floatingranges: changevalue }) => moveAnimation(changevalue)}
    5s infinite ease;

  @media (max-width: ${BREAKPOINTS.lg}px) {
    right: ${({ position }) => position.responsive.lg.right};
    bottom: ${({ position }) => position.responsive.lg.bottom};
    width: ${({ position }) => position.responsive.lg.width}px;
    height: ${({ position }) => position.responsive.lg.height}px;
  }

  @media (max-width: ${BREAKPOINTS.md}px) {
    right: ${({ position }) => position.responsive.md.right};
    bottom: ${({ position }) => position.responsive.md.bottom};
    width: ${({ position }) => position.responsive.md.width}px;
    height: ${({ position }) => position.responsive.md.height}px;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    right: ${({ position }) => position.responsive.sm.right};
    bottom: ${({ position }) => position.responsive.sm.bottom};
    width: ${({ position }) => position.responsive.sm.width}px;
    height: ${({ position }) => position.responsive.sm.height}px;
  }

  @media (max-width: ${BREAKPOINTS.xs}px) {
    right: ${({ position }) => position.responsive.xs.right};
    bottom: ${({ position }) => position.responsive.xs.bottom};
    width: ${({ position }) => position.responsive.xs.width}px;
    height: ${({ position }) => position.responsive.xs.height}px;
  }
`;
