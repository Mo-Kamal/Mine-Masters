"use client";
import { Navbar } from "./components/navbar";
import Logo from "@/assets/layout/Logo-Header.svg";
import Image from "next/image";
import { WhitePaperButton } from "@/components/button/whitepaper";
import useScrollingUp from "@/hooks/scroll";
import drag_handle from "@/assets/layout/drag-handle.svg";
import Times from "@/assets/layout/Times.svg";
import { COMMINUTIES_ITEMS, COMPANY_NAME_CHARACTERS } from "../constants";
import { NavbarMobile } from "./components/navbarMobile";
import { useModal } from "@/hooks/useModal";
import {
  Communities,
  CommunitiesTitle,
  CommunityIcon,
  CompanyNameCharacters,
  CompanyNameWrapper,
  ConnectButtonWrapper,
  DrawerStyles,
  DrawerWrapper,
  HeaderContainer,
  IconButtonStyle,
  IconStyle,
  IconStyleSmall,
  ImageWrapper,
  ItemWrapper,
  MobileHeader,
  NavbarLogoWrapper,
  StyledLogo,
  TimesSign,
} from "./style";
import { bigShouldersStencilText } from "@/styles/fonts";
import { scrollTop } from "@/utils/scroll-top";

export const Header = () => {
  const { scrollingUp, screenBegining } = useScrollingUp();

  //@ts-ignore
  let { isDrawerOpen, setIsDrawerOpen } = useModal();

  const handleDrawerOpenClose = () => {
    //@ts-ignore
    setIsDrawerOpen((prev) => !prev);
  };

  const handleSocialIconClick = (socialUrl: string) => {
    window.open(socialUrl, "_blank");
  };

  const handleLogoClick = () => {
    scrollTop();
  };

  return (
    <>
      {/* Desktop Header  */}
      <HeaderContainer
        scrollingUp={scrollingUp}
        screenBegining={screenBegining}
      >
        <NavbarLogoWrapper>
          <StyledLogo src={Logo} alt="Logo" onClick={handleLogoClick} />
          <Navbar />
          <WhitePaperButton />
        </NavbarLogoWrapper>
      </HeaderContainer>
      {/* Mobile Header */}
      <MobileHeader>
        <IconButtonStyle onClick={handleDrawerOpenClose}>
          <Image src={drag_handle} alt="Drag Handle" />
        </IconButtonStyle>
        <DrawerStyles
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          <DrawerWrapper>
            <TimesSign onClick={handleDrawerOpenClose}>
              <Image src={Times} alt="Times" width={32} height={32} />
            </TimesSign>
            <ImageWrapper>
              <Image src={Logo} alt="Logo" width={150} height={50} />
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
            </ImageWrapper>
            <NavbarMobile />
            <ConnectButtonWrapper>
              <WhitePaperButton primaryColorBackground={true} />
            </ConnectButtonWrapper>
            <Communities>
              <CommunitiesTitle>Communities</CommunitiesTitle>
              <IconStyleSmall>
                {COMMINUTIES_ITEMS.map((item, index) => {
                  return (
                    <ItemWrapper
                      onClick={() => handleSocialIconClick(item.url)}
                      key={index}
                    >
                      {" "}
                      <IconStyle>
                        <CommunityIcon src={item.icon} alt={item.title} />{" "}
                      </IconStyle>
                    </ItemWrapper>
                  );
                })}
              </IconStyleSmall>
            </Communities>
          </DrawerWrapper>
        </DrawerStyles>
      </MobileHeader>
    </>
  );
};
