import BlueSquare from "@/assets/introduction/Blue-Square.png";
import OrangeSquare from "@/assets/introduction/Orange-square.png";
import IntroLeftBgImage from "@/assets/introduction/Intro-Left-Bg.png";
import IntroRightBgImage from "@/assets/introduction/Intro-Right-Bg.png";
import {
  BlueSquareIcon,
  IntroductionContainer,
  IntroductionContent,
  IntroLeftBg,
  IntroRightBg,
  OrangeSquareIcon,
  TitleFirstLine,
  Description,
  TitleSecondLine,
  TwoLineTitleWrapper,
} from "./style";

export const Introduction = () => {
  return (
    <IntroductionContainer>
      <IntroductionContent>
        <TwoLineTitleWrapper>
          <TitleFirstLine>Dive into the thrilling realm of</TitleFirstLine>
          <TitleSecondLine> MineMasters Introduction</TitleSecondLine>
        </TwoLineTitleWrapper>
        <Description>
          Our game empowers you, promoting financial inclusivity and showcasing
          limitless innovation in the digital world. It provides immersive
          gameplay coupled with real-world value generation.
        </Description>
        <OrangeSquareIcon src={OrangeSquare} alt="Orange Square" />
        <BlueSquareIcon src={BlueSquare} alt="Blue Square" />
        <IntroLeftBg src={IntroLeftBgImage} alt="Intro Left Bg" />
        <IntroRightBg src={IntroRightBgImage} alt="Intro Right Bg" />
      </IntroductionContent>
    </IntroductionContainer>
  );
};
