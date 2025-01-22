import LandNftBGImage from "@/assets/land-nft/Land-Nft_Bg.png";
import TopImage from "@/assets/land-nft/Top-Pic.png";
import LeftImage from "@/assets/land-nft/Left-Pic.png";
import RightImage from "@/assets/land-nft/Right-Pic.png";
import BottomImage from "@/assets/land-nft/Bottom-Pic.png";
import {
  BackgroundCircle,
  CTAButtonsWrapper,
  Description,
  LandNftContainer,
  LeftSideWrapper,
  RightSideWrapper,
  StyledImage,
  StyledTopImage,
  Title,
} from "./styles";
import { LearnMoreButton } from "@/components/button/learn-more";
import { DisabledButton } from "@/components/button/disabled";

const LandNft = () => {
  return (
    <LandNftContainer>
      <LeftSideWrapper>
        <Title>Begin by acquiring land’s NFTs</Title>
        <Description>
          Cryptonite-rich planets attract explorers, mercenaries, and
          fortune-seekers, turning each into a battleground for MineMasters to
          navigate and stake their claim in the pursuit of wealth and control.
        </Description>
        <CTAButtonsWrapper>
          <DisabledButton>Coming soon</DisabledButton>
          <LearnMoreButton>Learn more</LearnMoreButton>
        </CTAButtonsWrapper>
      </LeftSideWrapper>
      <RightSideWrapper>
        <BackgroundCircle src={LandNftBGImage} alt="Land NFT" />
        <StyledTopImage position="top" src={TopImage} alt="Top" />
        <StyledImage position="right" src={LeftImage} alt="Right" />
        <StyledImage position="bottom" src={RightImage} alt="Bottom" />
        <StyledImage position="left" src={BottomImage} alt="Left" />
      </RightSideWrapper>
    </LandNftContainer>
  );
};

export default LandNft;
