import { LineBreak } from "@/styles/global-styles";
import HeroLogo from "@/assets/hero/Hero-Logo.webp";
import BlueSquareIcon from "@/assets/hero/Blue-Rect.png";
import OrangeSquareIcon from "@/assets/hero/Orange-Rect.png";
import { WhitePaperButton } from "@/components/button/whitepaper";
import {
  BlueFloatingIcons,
  CompanyNameCharacters,
  CompanyNameWrapper,
  MobileOnlyConnectButtonWrapper,
  ContentContainer,
  HeroContainer,
  HeroDescription,
  HeroLogoContainer,
  HeroLogoStyled,
  HeroLogoCompanyNameWrapper,
  OrangeFloatinIcons,
  HighlightedDescription,
} from "./style";
import { bigShouldersStencilText } from "@/styles/fonts";
import { COMPANY_NAME_CHARACTERS, FLOATIN_ICONS } from "./constant";

export const Hero = () => {
  return (
    <HeroContainer>
      <ContentContainer>
        <HeroLogoCompanyNameWrapper>
          <HeroLogoContainer>
            {FLOATIN_ICONS.map(
              (
                { verticalposition, lateralposition, size, rotation },
                index,
              ) => (
                <OrangeFloatinIcons
                  key={index}
                  src={OrangeSquareIcon}
                  rotation={rotation}
                  alt={"Image"}
                  verticalposition={verticalposition}
                  lateralposition={lateralposition}
                  size={size}
                />
              ),
            )}
            {FLOATIN_ICONS.map(
              (
                { verticalposition, lateralposition, size, rotation },
                index,
              ) => (
                <BlueFloatingIcons
                  key={index}
                  src={BlueSquareIcon}
                  rotation={rotation}
                  alt={"Image"}
                  verticalposition={verticalposition}
                  lateralposition={lateralposition}
                  size={size}
                />
              ),
            )}
            <HeroLogoStyled src={HeroLogo} alt="Logo" />
          </HeroLogoContainer>
          <CompanyNameWrapper>
            {COMPANY_NAME_CHARACTERS.map(({ char, color }, index) => (
              <CompanyNameCharacters
                key={index}
                color={color}
                className={bigShouldersStencilText.className}
              >
                {char}
              </CompanyNameCharacters>
            ))}
          </CompanyNameWrapper>
        </HeroLogoCompanyNameWrapper>
        <HeroDescription>
          Secure your land, deploy miner NFTs. <LineBreak />
          <HighlightedDescription color="var(--Pastal-Blue)">
            {" "}
            Opt for peaceful development{" "}
          </HighlightedDescription>
          or
          <HighlightedDescription color="var(--Orange)">
            {" "}
            Engage in exhilarating wars
          </HighlightedDescription>
        </HeroDescription>
        <MobileOnlyConnectButtonWrapper>
          <WhitePaperButton primaryColorBackground={true} />
        </MobileOnlyConnectButtonWrapper>
      </ContentContainer>
    </HeroContainer>
  );
};
