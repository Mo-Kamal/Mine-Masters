import { ButtonProps } from "@/lib/mui";
import { FC } from "react";
import { BaseButtonStyled } from "./styles";

export interface BaseButtonProps extends ButtonProps {
  disabled?: boolean;
}
export const BaseButton: FC<BaseButtonProps> = ({
  disabled = false,
  children,
  ...props
}) => {
  return (
    <BaseButtonStyled disabled={disabled} {...props}>
      {children}
    </BaseButtonStyled>
  );
};
