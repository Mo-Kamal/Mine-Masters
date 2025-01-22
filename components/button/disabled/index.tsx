import { FC } from "react";
import { DisabledButtonStyled } from "./style";
import { PrimaryProps } from "../primary";

export interface ComingSoonProps extends PrimaryProps {
  loading?: boolean;
  children: React.ReactNode;
}

export const DisabledButton: FC<ComingSoonProps> = ({ children, ...props }) => {
  return (
    <DisabledButtonStyled disabled {...props}>
      {children}
    </DisabledButtonStyled>
  );
};
