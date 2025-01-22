"use client";
import { FC } from "react";
import { LearnMoreButtonStyled } from "./style";
import { TransparentProps } from "@/components/button/transparent";

export interface LearnMoreProps extends TransparentProps {
  loading?: boolean;
}

export const LearnMoreButton: FC<LearnMoreProps> = ({ children, ...props }) => {
  return <LearnMoreButtonStyled {...props}>{children}</LearnMoreButtonStyled>;
};
