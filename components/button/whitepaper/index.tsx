"use client";
import { PrimaryProps } from "../primary";
import ConnectIcon from "@/assets/common/Whitelist.svg";
import LoadingIcon from "@/assets/common/Loading.svg";
import { WHITE_LIST_URL } from "@/constants";
import { WhitePaperButtonStyled, StyledStartImage } from "./styles";

interface WhitePaperProps extends PrimaryProps {
  primaryColorBackground?: boolean;
}

export const WhitePaperButton: React.FC<WhitePaperProps> = ({
  loading = false,
  primaryColorBackground = false,
  ...props
}) => {
  const buttonIcon = loading ? LoadingIcon : ConnectIcon;
  const buttonText = loading ? "Loading..." : "White Paper";

  const handleButtonClick = () => {
    window.open(WHITE_LIST_URL, "_blank");
  };

  return (
    <WhitePaperButtonStyled
      startIcon={<StyledStartImage src={buttonIcon} alt="White Paper" />}
      loading={loading || undefined}
      primaryColorBackground={primaryColorBackground}
      onClick={handleButtonClick}
      {...props}
    >
      <span>{buttonText}</span>
    </WhitePaperButtonStyled>
  );
};
