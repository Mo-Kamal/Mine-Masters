import WarPeaceBg from "@/assets/war-peace/War-Peace.png";
import {
  LeftSidePic,
  ListItemDescription,
  ListItemTitle,
  ListItemWrapper,
  RightSideWrapper,
  Title,
  WarPeaceContainer,
} from "./styles";

const WarPeace = () => {
  return (
    <WarPeaceContainer>
      <LeftSidePic src={WarPeaceBg} alt="Land NFT" />
      <RightSideWrapper>
        <Title>War and Peace Dynamics </Title>
        <ListItemWrapper>
          <ListItemTitle>In war mode</ListItemTitle>
          <ListItemDescription>
            You can attack, capture tokens in miners and repair them after a
            successful attack, but being in war mode also makes miners
            susceptible to attacks.
          </ListItemDescription>
        </ListItemWrapper>
        <ListItemWrapper>
          <ListItemTitle>In peace mode</ListItemTitle>
          <ListItemDescription>
            In peace mode, You focus on resource management and development
            without the risk of attacks.
          </ListItemDescription>
        </ListItemWrapper>
        <ListItemWrapper>
          <ListItemTitle>Switch mode</ListItemTitle>
          <ListItemDescription>
            Changing between these modes requires a strategic assessment and
            incurs a significant cost of in-game tokens.
          </ListItemDescription>
        </ListItemWrapper>
      </RightSideWrapper>
    </WarPeaceContainer>
  );
};

export default WarPeace;
