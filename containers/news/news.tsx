import MinersLogo from "@/assets/news/Miners.png";
import CryptoniteLogo from "@/assets/news/Cryptonite.png";
import {
  HorizontalDivider,
  ItemDescription,
  ItemPic,
  ItemsWrapper,
  ItemTitle,
  NewsContainer,
  NewsItem,
  SectionTitle,
} from "./styles";

const News = () => {
  return (
    <NewsContainer id="Events">
      <SectionTitle>News & Events</SectionTitle>
      <ItemsWrapper>
        <NewsItem>
          <ItemPic src={MinersLogo} alt="Miners" />
          <ItemTitle>Miners NFTs</ItemTitle>
          <ItemDescription>
            The first 1000 miners NFTs are now available for sale. Get yours
            today!
          </ItemDescription>
        </NewsItem>
        <NewsItem>
          <ItemPic src={CryptoniteLogo} alt="Cryptonite" />
          <ItemTitle>Cryptonite NFTs</ItemTitle>
          <ItemDescription>
            The first 1000 Cryptonite NFTs are now available for sale. Get yours
            today!
          </ItemDescription>
        </NewsItem>
      </ItemsWrapper>
      <HorizontalDivider />
    </NewsContainer>
  );
};

export default News;
