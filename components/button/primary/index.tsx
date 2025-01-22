import { FC } from "react";
import { BaseButtonProps } from "../base";
import { PrimaryButtonStyled } from "./styles";

export interface PrimaryProps extends BaseButtonProps {
  loading?: boolean;
}

export const PrimaryButton: FC<BaseButtonProps> = ({ children, ...props }) => {
  return <PrimaryButtonStyled {...props}>{children}</PrimaryButtonStyled>;
};
