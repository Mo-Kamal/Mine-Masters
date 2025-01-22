"use client";
import { styled } from "@/lib/mui";
import { BaseButton } from "../base";
import { ROW_CENTER } from "@/styles/global-styles";
import { TEXT_24_400 } from "@/styles/global-typography";
import { css } from "@emotion/react";
import { BREAKPOINTS } from "@/styles/mediaQueries";
import { TransparentProps } from ".";

export const TransparentButtonStyled = styled(BaseButton)<TransparentProps>`
  ${ROW_CENTER};
  padding: 14px 24px 14px 16px;
  gap: 16px;
  height: 60px;
  ${TEXT_24_400}
  border: none;
  background: transparent;
  border-radius: 16px;
  color: var(--Primary);

  &:hover {
    color: var(--Dark-Purple);
    background: transparent;
  }

  // style when loading props is true
  ${(props) =>
    props.loading &&
    css`
      pointer-events: none;
      color: var(--Dark-Purple);
      ${ROW_CENTER}
    `}

  @media (max-width: ${BREAKPOINTS.md}px) {
    height: 50px;
  }
`;
