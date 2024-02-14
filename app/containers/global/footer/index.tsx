"use client";
import styled from "@emotion/styled";
import Logo from "@/app/assets/Logo.svg";
import Image from "next/image";
import {
  COLUMN_ALIGN_START__JUSTIFY_START,
  ROW_ALIGN_CENTER__JUSTIFY_START,
  ROW_ALIGN_START__JUSTIFY_END,
  ROW_ALIGN_START__JUSTIFY_START,
  ROW_ALIGN_START__SPACE_B,
} from "@/app/styles/global-styles";
import {
  TEXT_106_900,
  TEXT_16_500,
  TEXT_24_400,
  TEXT_24_500,
  TEXT_48_400,
  TEXT_48_900,
} from "@/app/styles/global-typography";
import FooterLogo from "@/app/assets/Footer-Logo.png";
import { ConnectButton } from "@/app/components/button/connect";
import { COMMINUTIES_ITEMS, FOOTER_MENU_ITEMS } from "../constants";
import { bigShoulder } from "@/app/utils/font-loader";
import DoubleBulletIcon from "@/app/assets/Double-Bullet.png";
import { SecondaryButton } from "@/app/components/button/secondary";

export const Footer = () => {
  return (
    <FooterContainer>
      <LeftSideWrapper>
        <StyledLogo src={FooterLogo} alt="logo" />
        <LeftSideContent>
          <TitleWrapper className={bigShoulder.className}>
            <TitleFirstRow>
              <LeftSideTopTitle>M </LeftSideTopTitle>
              <BlueCharacter> I </BlueCharacter>
              <LeftSideTopTitle>N </LeftSideTopTitle>
              <OrangeCharacter>E </OrangeCharacter>
            </TitleFirstRow>
            <LeftSideBottomTitle>Masters</LeftSideBottomTitle>
          </TitleWrapper>
          <LeftSideSubTitle>Accessible, Engaging, Rewarding</LeftSideSubTitle>
          <ConnectButton />
        </LeftSideContent>
      </LeftSideWrapper>
      <RightSideWrapper>
        <RightSideItem>
          <RightSideTite>Menu</RightSideTite>
          <HorizontalDivider />
          {FOOTER_MENU_ITEMS.map((item, index) => {
            return <ItemList key={index}>{item.title}</ItemList>;
          })}
        </RightSideItem>
        <RightSideItem>
          <RightSideTite>Communities</RightSideTite>
          <HorizontalDivider />
          {COMMINUTIES_ITEMS.map(
            (item: { title: string; icon: string }, index) => {
              return (
                <ItemWrapper key={index}>
                  {" "}
                  <Image src={item.icon} alt={item.title} />{" "}
                  <ItemList key={item.title}>{item.title}</ItemList>
                </ItemWrapper>
              );
            }
          )}
        </RightSideItem>
      </RightSideWrapper>
    </FooterContainer>
  );
};

export const FooterMargin = () => {
  return <div style={{ height: "154px" }}></div>;
};

const FooterContainer = styled("footer")`
  width: 90%;
  margin: auto;
  background: rgba(90, 24, 154, 0.1);
  backdrop-filter: blur(10px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 20px;
  ${ROW_ALIGN_START__SPACE_B}
  padding: 24px 0;
`;

const LeftSideWrapper = styled("div")`
  ${ROW_ALIGN_START__JUSTIFY_START};
  padding: 60px;
`;

const LeftSideContent = styled("div")`
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  gap:24px;
  max-width: 280px;
`;

const LeftSideTopTitle = styled("h3")`
  ${TEXT_106_900}
  letter-spacing: 0.15em;
`;
const LeftSideBottomTitle = styled("h3")`
  ${TEXT_48_900}
  letter-spacing: 0.33em;
  background: linear-gradient(92.74deg, #9d4edd 4.16%, #5a189a 99.16%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const LeftSideSubTitle = styled("h4")`
  ${TEXT_16_500}
  color: rgba(90, 24, 154, 0.5);
  position: relative;
  margin-left: 30px;
  &::before {
    position: absolute;
    content: url(${DoubleBulletIcon.src});
    left: -35px;
    top: -5px;
  }
`;

const RightSideWrapper = styled("div")`
  ${ROW_ALIGN_START__SPACE_B}
  gap:24px;
  width: 50%;
`;

const RightSideItem = styled("div")`
  ${COLUMN_ALIGN_START__JUSTIFY_START};
  gap: 24px;
  width: 320px;
`;

const RightSideTite = styled("h3")`
  color: var(--Primary);
  ${TEXT_24_500}
`;

const HorizontalDivider = styled("div")`
  width: 100%;
  height: 2px;
  background: linear-gradient(92.74deg, #9d4edd 4.16%, #5a189a 99.16%);
`;

const StyledLogo = styled(Image)`
  width: 203px;
  height: 228px;
`;

const ItemWrapper = styled("div")`
  ${ROW_ALIGN_CENTER__JUSTIFY_START}
`;
const ItemList = styled(SecondaryButton)`
  padding: 16px;
`;

const TitleWrapper = styled("div")`
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  text-transform: uppercase;
  color: var(--Primary);
  // make backgroudn color XOR

  /* border-image-source: linear-gradient(93.47deg, #9D4EDD 0%, #5A189A 52.7%, #10002B 112.04%); */
  /* background: linear-gradient(92.74deg, #9d4edd 4.16%, #5a189a 99.16%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
`;

const BlueCharacter = styled(LeftSideTopTitle)`
  color: var(--Pastal-Blue);
`;
const OrangeCharacter = styled(LeftSideTopTitle)`
  color: var(--Orange);
`;

const TitleFirstRow = styled("div")`
  ${ROW_ALIGN_START__JUSTIFY_START}
`;
