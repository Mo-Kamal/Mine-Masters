"use client";
import { styled } from "@/lib/mui";
import { BREAKPOINTS } from "@/styles/mediaQueries";
import { PrimaryButtonStyled } from "@/components/button/primary/styles";

export const DisabledButtonStyled = styled(PrimaryButtonStyled)`
  padding: 16px 56px;
  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding: 12px 48px;
    border-radius: 8px;
  }
  @media (max-width: ${BREAKPOINTS.xs}px) {
    padding: 8px 32px;
  }
`;
