"use client";
import { WhitePaperButton } from "@/components/button/whitepaper";
import {
  LeftSideTitle,
  LeftSideWrapper,
  RightSideDescription,
  RightSideTitle,
  RightSideWrapper,
  StartMineMastersContainer,
  StartMineMastersContent,
  VerticalDivider,
} from "./styles";
import { bigShouldersStencilText } from "@/styles/fonts";
import { useScreenSize } from "@/hooks/useScreenSize";
import { MobileHorizontalDivider } from "@/components/divider";

const StartMineMasters = () => {
  const { isMobile } = useScreenSize();
  return (
    <StartMineMastersContainer>
      <StartMineMastersContent>
        <LeftSideWrapper>
          <LeftSideTitle className={bigShouldersStencilText.className}>
            Start
          </LeftSideTitle>
          <WhitePaperButton primaryColorBackground={!!isMobile} />
        </LeftSideWrapper>
        <VerticalDivider orientation="vertical" flexItem />
        <MobileHorizontalDivider />
        <RightSideWrapper>
          <RightSideTitle>
            The Saga of MineMasters : The Shattered Realms
          </RightSideTitle>
          <RightSideDescription>
            In the distant future, humanity masters interstellar travel,
            unveiling the secrets of the cosmos. Among the stars, they find
            Cryptonite-rich planets, igniting a new era of exploration and
            conquest by MineMasters seeking fortune.
          </RightSideDescription>
        </RightSideWrapper>
      </StartMineMastersContent>
    </StartMineMastersContainer>
  );
};

export default StartMineMasters;
