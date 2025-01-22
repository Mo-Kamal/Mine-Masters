import { Button, styled } from "@/lib/mui";
import { BaseButtonProps } from ".";
import { ubuntu } from "@/styles/fonts";
import {
  PRIMARY_BG_OPACITY_10,
  PRIMARY_COLOR_OPACITY_50,
} from "@/styles/global-styles";

export const BaseButtonStyled = styled(Button)<BaseButtonProps>`
  text-transform: capitalize;
  white-space: nowrap;
  // override default button font family
  ${ubuntu.style}

  // style disabled
  &[disabled] {
    pointer-events: none;
    ${PRIMARY_BG_OPACITY_10}
    img {
      opacity: 50%;
    }
    ${PRIMARY_COLOR_OPACITY_50}
    border: none !important;
    box-shadow: none;
  }
`;
