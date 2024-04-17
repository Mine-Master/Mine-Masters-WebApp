import { PrimaryButton } from "@/app/components/button/primary";
import {
  COLUMN_ALIGN_START__JUSTIFY_START,
  MAX_WIDTH_RESPONSIVENESS,
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
import { mediaQueries } from "@/app/styles/mediaQueries";

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
  ${MAX_WIDTH_RESPONSIVENESS}
  ${ROW_ALIGN_CENTER__SPACE_B}
  margin: 121px auto;
  gap: 70px;
  ${mediaQueries.lessThan("md")`
    gap: 48px;
    flex-direction: column-reverse;
    margin: 80px auto;
    `}
  ${mediaQueries.lessThan("sm")`
    gap: 32px;
    margin: 56px auto;
    `}
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
  ${mediaQueries.lessThan("md")`
  font-size: 40px;
  &::before {
    font-size: 40px;
    left: -40px;
  }
  `}
  ${mediaQueries.lessThan("sm")`
  font-size: 32px;
  &::before {
    font-size: 32px;
    left: -32px;
  }
  `}
  ${mediaQueries.lessThan("xs")`
  font-size: 16px;
  &::before {
    font-size: 16px;
    left: -16px;
  }
  `}
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
  ${mediaQueries.lessThan("lg")`
    font-size: 28px;
    `}
  ${mediaQueries.lessThan("md")`
    font-size: 24px;
    `}
  ${mediaQueries.lessThan("sm")`
    font-size: 20px;
    `}
    ${mediaQueries.lessThan("xs")`
    font-size: 16px;
    `}
`;

const ListItemDescription = styled("p")`
  ${TEXT_16_500}
  padding-right: 20px;
  ${mediaQueries.lessThan("xs")`
    font-size: 14px;
    `}
`;

const RightSideWrapper = styled("div")`
  width: 50%;
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  gap: 24px;
  ${mediaQueries.lessThan("md")`
    width: 100%;
    margin-left: 30px;
    `}
  ${mediaQueries.lessThan("sm")`
    gap: 16px; 
    `}
    ${mediaQueries.lessThan("xs")`
    gap: 8px;
    `}
`;

const LeftSidePic = styled(Image)`
  width: 50%;
  height: auto;
  ${mediaQueries.lessThan("md")`
    width: 70%;
    `}
`;
