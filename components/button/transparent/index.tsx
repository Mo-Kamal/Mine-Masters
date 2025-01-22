import React, { FC, ReactNode } from "react";
import { BaseButtonProps } from "../base";
import { TransparentButtonStyled } from "./styles";

export interface TransparentProps extends BaseButtonProps {
  loading?: boolean;
  children: ReactNode;
}

export const TransparentButton: FC<TransparentProps> = ({
  children,
  ...props
}) => {
  return (
    <TransparentButtonStyled {...props}>{children}</TransparentButtonStyled>
  );
};
