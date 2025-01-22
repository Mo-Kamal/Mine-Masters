import TokenLogo from "@/assets/miner-nft/Token-Logo.png";
import { Crystals } from "./components/crystals";
import {
  CTAButtonsWrapper,
  Description,
  HorizontalDivider,
  LeftSideWrapper,
  MinerNftContainer,
  Title,
  TokenContainer,
  TokenLogoStyled,
  TokenTitle,
} from "./styles";
import { bigShouldersStencilText } from "@/styles/fonts";
import { LearnMoreButton } from "@/components/button/learn-more";
import { DisabledButton } from "@/components/button/disabled";

const MinerNft = () => {
  return (
    <MinerNftContainer>
      <LeftSideWrapper>
        <Title>Purchase and deploy miner NFTs</Title>
        <Description>
          You must purchase and deploy miner NFTs on your lands to generate
          income. The efficiency of mining operations can be enhanced by
          acquiring and applying special NFTs, which are periodically released
          in the game.
        </Description>
        <CTAButtonsWrapper>
          <DisabledButton>Coming soon</DisabledButton>
          <LearnMoreButton>Learn more</LearnMoreButton>
        </CTAButtonsWrapper>
        <TokenContainer>
          <TokenLogoStyled src={TokenLogo} alt="Token Logo" />
          <TokenTitle className={bigShouldersStencilText.className}>
            Cryptonite token XCN
          </TokenTitle>
        </TokenContainer>
      </LeftSideWrapper>
      <Crystals />
      <HorizontalDivider />
    </MinerNftContainer>
  );
};

export default MinerNft;
