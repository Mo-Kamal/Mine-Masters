"use client";

import FooterLogo from "@/assets/layout/Footer-Logo.png";
import { WhitePaperButton } from "@/components/button/whitepaper";
import {
  COMMINUTIES_ITEMS,
  COMPANY_NAME_CHARACTERS_FIRST_PART,
  NAVBAR_ITEMS,
} from "../constants";
import {
  CommunityIcon,
  ConnectButtonWrapper,
  ConnectButtonStyleMd,
  FooterContainer,
  GradientHorizontalDivider,
  IconStyle,
  IconStyleSmall,
  ItemList,
  ItemWrapper,
  LeftSideBottomTitle,
  LeftSideContent,
  LeftSideSubTitle,
  LeftSideWrapper,
  RightSideItemOne,
  RightSideItemTwo,
  RightSideTite,
  RightSideWrapper,
  StyledLink,
  StyledLogo,
  TitleFirstRow,
  TitleWrapper,
  LeftSideTopTitleChar,
} from "./styles";
import { bigShouldersStencilText } from "@/styles/fonts";

export const Footer = () => {
  const handleSocialIconClick = (socialUrl: string) => {
    window.open(socialUrl, "_blank");
  };

  return (
    <FooterContainer id="Footer">
      <LeftSideWrapper>
        <StyledLogo src={FooterLogo} alt="logo" />
        <LeftSideContent>
          <TitleWrapper className={bigShouldersStencilText.className}>
            <TitleFirstRow>
              {COMPANY_NAME_CHARACTERS_FIRST_PART.map(
                ({ char, color }, index) => (
                  <LeftSideTopTitleChar
                    key={index}
                    color={color}
                    className={bigShouldersStencilText.className}
                  >
                    {char}
                  </LeftSideTopTitleChar>
                ),
              )}
            </TitleFirstRow>
            <LeftSideBottomTitle>Masters</LeftSideBottomTitle>
          </TitleWrapper>
          <LeftSideSubTitle>Accessible, Engaging, Rewarding</LeftSideSubTitle>
          <ConnectButtonStyleMd>
            <WhitePaperButton />
          </ConnectButtonStyleMd>
          <ConnectButtonWrapper>
            <WhitePaperButton primaryColorBackground={true} />
          </ConnectButtonWrapper>
        </LeftSideContent>
      </LeftSideWrapper>
      <RightSideWrapper>
        <RightSideItemOne>
          <RightSideTite>Menu</RightSideTite>
          <GradientHorizontalDivider />
          {NAVBAR_ITEMS.map((item, index) => {
            return (
              <StyledLink href={item.href} key={index}>
                <ItemList>{item.title}</ItemList>
              </StyledLink>
            );
          })}
        </RightSideItemOne>
        <RightSideItemTwo>
          <RightSideTite>Communities</RightSideTite>
          <GradientHorizontalDivider />
          <IconStyleSmall>
            {COMMINUTIES_ITEMS.map((item, index) => {
              return (
                <ItemWrapper
                  key={index}
                  onClick={() => handleSocialIconClick(item.url)}
                >
                  {" "}
                  <IconStyle>
                    <CommunityIcon src={item.icon} alt={item.title} />{" "}
                  </IconStyle>
                  <ItemList key={item.title}>{item.title}</ItemList>
                </ItemWrapper>
              );
            })}
          </IconStyleSmall>
        </RightSideItemTwo>
      </RightSideWrapper>
    </FooterContainer>
  );
};
