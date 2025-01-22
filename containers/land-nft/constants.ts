import { BREAKPOINTS } from "@/styles/mediaQueries";
import { BreakpointSizes, ImageSize, Position } from "./types";

export const BASE_IMAGE_SIZES: Record<Position, ImageSize> = {
  top: { width: 420, height: 300 },
  right: { width: 333, height: 360 },
  bottom: { width: 362, height: 370 },
  left: { width: 313, height: 330 },
};

export const BREAKPOINT_SIZES: BreakpointSizes = {
  lg: { width: 300, height: 290 },
  md: { width: 220, height: 235 },
  sm: { width: 150, height: 185 },
  xs: { width: 100, height: 110 },
};

export const ROATION_ORDER: Position[] = ["top", "right", "bottom", "left"];

export const BREAKPOINT_QUERIES = {
  lg: `@media (max-width: ${BREAKPOINTS.lg}px)`,
  md: `@media (max-width: ${BREAKPOINTS.md}px)`,
  sm: `@media (max-width: ${BREAKPOINTS.sm}px)`,
  xs: `@media (max-width: ${BREAKPOINTS.xs}px)`,
};
