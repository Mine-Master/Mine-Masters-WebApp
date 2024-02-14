import { PrimaryButton } from "@/app/components/button/primary";
import {
  COLUMN_ALIGN_START__JUSTIFY_START,
  ROW_ALIGN_CENTER__SPACE_B,
} from "@/app/styles/global-styles";
import styled from "@emotion/styled";
import WarPeaceBg from "@/app/assets/War-Peace.png";
import Image from "next/image";
import {
  TEXT_16_500,
  TEXT_24_400,
  TEXT_32_500,
  TEXT_48_700,
} from "@/app/styles/global-typography";
import YellowBulletIcon from "@/app/assets/Yellow-Bullet.png";
import BlueBulletIcon from "@/app/assets/Blue-Bullet.png";

export const WarPeace = () => {
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

const WarPeaceContainer = styled("section")`
  width: 90%;
  ${ROW_ALIGN_CENTER__SPACE_B}
  margin: 121px auto;
  gap: 70px;
`;

const LeftSideWrapper = styled("div")``;

const Title = styled("h1")`
  color: var(--Primary);
  ${TEXT_48_700}
  position: relative;
  &::before {
    position: absolute;
    content: "3. ";
    color: var(--Primary);
    ${TEXT_48_700}
    left: -50px;
  }
`;

const ListItemWrapper = styled("div")`
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  gap:8px;
  color: var(--Dark-Purple);
  position: relative;
  margin-left: 30px;
  :first-of-type::before {
    content: url(${YellowBulletIcon.src});
    position: absolute;
    left: -30px;
    top: 5px;
  }
  :nth-of-type(2)::before {
    content: url(${BlueBulletIcon.src});
    position: absolute;
    left: -30px;
    top: 5px;
  }
`;

const ListItemTitle = styled("h2")`
  ${TEXT_32_500}
`;

const ListItemDescription = styled("p")`
  ${TEXT_16_500}
`;

const RightSideWrapper = styled("div")`
  width: 50%;
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  gap: 24px;
`;

const LeftSidePic = styled(Image)`
  width: 50%;
`;
