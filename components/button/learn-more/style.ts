import { styled } from "@/lib/mui";
import { TransparentButtonStyled } from "../transparent/styles";
import {
  TEXT_14_400,
  TEXT_16_400,
  TEXT_24_400,
} from "@/styles/global-typography";
import { BREAKPOINTS } from "@/styles/mediaQueries";

export const LearnMoreButtonStyled = styled(TransparentButtonStyled)`
  padding: 16px 56px;
  border: none;
  color: var(--Primary);
  ${TEXT_24_400}
  cursor: pointer;
  @media (max-width: ${BREAKPOINTS.sm}px) {
    padding: 12px 48px;
    ${TEXT_16_400}
  }
  @media (max-width: ${BREAKPOINTS.xs}px) {
    padding: 8px 32px;
    ${TEXT_14_400}
  }
`;
