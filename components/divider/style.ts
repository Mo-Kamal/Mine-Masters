"use client";
import { Divider } from "@/lib/mui";
import { styled } from "@/lib/mui";
import { PRIMARY_BG_OPACITY_10 } from "@/styles/global-styles";
import { BREAKPOINTS } from "@/styles/mediaQueries";

export const MobileHorizontalDividerStyled = styled(Divider)`
  display: none;
  height: 2px;
  ${PRIMARY_BG_OPACITY_10}
  @media (max-width: ${BREAKPOINTS.sm}px) {
    display: block;
  }
`;
