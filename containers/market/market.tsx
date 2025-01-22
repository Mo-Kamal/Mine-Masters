import RocksBGImage from "@/assets/market/Rocks.png";
import HamburgerIcon from "@/assets/market/Hamburger.svg";
import PurpleMinerIcon from "@/assets/market/Purple-Miner.svg";
import KnifeIcon from "@/assets/market/Knife.svg";
import {
  BackgroundImageContainer,
  ButtonWrapper,
  CompanyName,
  ContentContainer,
  FeatureBoxStyled,
  LeftButtons,
  MarketplaceContainer,
  MarketplaceDescription,
  MarketplaceLogoWrapper,
  RocksLogoBG,
  TwoLeftButtons,
} from "./styles";
import { FeatureBox } from "./components/feature-box";
import { DisabledButton } from "@/components/button/disabled";

const Marketplace = () => {
  return (
    <MarketplaceContainer id="Marketplace">
      <BackgroundImageContainer>
        <ContentContainer>
          <MarketplaceLogoWrapper>
            <CompanyName>4. NFT offerings & Marketplace</CompanyName>
          </MarketplaceLogoWrapper>
          <MarketplaceDescription>
            Our game's virtual world is linked to a separate Online Store and
            Marketplace, bridging the gap between the gaming experience and
            real-world trading. This integration allows you to buy, sell, and
            trade NFTs within the game, enhancing the overall player experience.
          </MarketplaceDescription>
          <ButtonWrapper>
            <LeftButtons>
              <TwoLeftButtons>
                <FeatureBox title="Purple Miner" icon={PurpleMinerIcon.src} />
                <FeatureBox title="Pink Knife" icon={KnifeIcon.src} />
              </TwoLeftButtons>
              <FeatureBoxStyled title="Spacy Food" icon={HamburgerIcon.src} />
            </LeftButtons>
            <DisabledButton>Coming soon</DisabledButton>
          </ButtonWrapper>
        </ContentContainer>
      </BackgroundImageContainer>
      <RocksLogoBG src={RocksBGImage} alt="Rocks" />
    </MarketplaceContainer>
  );
};

export default Marketplace;
