"use client";
import styled from "@emotion/styled";
import Image from "next/image";
import {
  COLUMN_ALIGN_START__JUSTIFY_START,
  MAX_WIDTH_RESPONSIVENESS,
  ROW_ALIGN_CENTER__JUSTIFY_START,
  ROW_ALIGN_START__JUSTIFY_START,
  ROW_ALIGN_START__SPACE_B,
} from "@/app/styles/global-styles";
import {
  TEXT_106_900,
  TEXT_16_500,
  TEXT_24_500,
  TEXT_48_900,
} from "@/app/styles/global-typography";
import FooterLogo from "@/app/assets/Footer-Logo.png";
import { WhiteListButton } from "@/app/components/button/connect";
import { COMMINUTIES_ITEMS, FOOTER_MENU_ITEMS } from "../constants";
import { bigShoulder } from "@/app/utils/font-loader";
import DoubleBulletIcon from "@/app/assets/Double-Bullet.png";
import { SecondaryButton } from "@/app/components/button/secondary";
import { mediaQueries } from "@/app/styles/mediaQueries";
import Link from "next/link";

export const Footer = () => {
  const handleSocialIconClick = (socialUrl: string) => {
    window.open(socialUrl, "_blank");
  };
  return (
    <FooterContainer id="Footer">
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
          <ConnectButtonStyleMd>
            <WhiteListButton />
          </ConnectButtonStyleMd>
          <ConnectButtonStyle>
            <WhiteListButton customStyles={true} />
          </ConnectButtonStyle>
        </LeftSideContent>
      </LeftSideWrapper>
      <RightSideWrapper>
        <RightSideItemOne>
          <RightSideTite>Menu</RightSideTite>
          <HorizontalDivider />
          {FOOTER_MENU_ITEMS.map((item, index) => {
            return (
              <StyledLink href={item.href} key={index}>
                <ItemList>{item.title}</ItemList>
              </StyledLink>
            );
          })}
        </RightSideItemOne>
        <RightSideItemTwo>
          <RightSideTite>Communities</RightSideTite>
          <HorizontalDivider />
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

export const FooterMargin = () => {
  return <div style={{ height: "154px" }}></div>;
};

const FooterContainer = styled("footer")`
  width: 90%;
  ${MAX_WIDTH_RESPONSIVENESS}
  background: rgba(90, 24, 154, 0.1);
  backdrop-filter: blur(10px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 20px;
  ${ROW_ALIGN_START__SPACE_B}
  padding: 24px 0;
  ${mediaQueries.lessThan("sm")`
    flex-direction: column-reverse;
    align-items: center;
    background: none;
  `}
`;

const LeftSideWrapper = styled("div")`
  ${ROW_ALIGN_START__JUSTIFY_START};
  padding: 60px;
  ${mediaQueries.lessThan("xl")`
    padding: 40px;
  `}
  ${mediaQueries.lessThan("lg")`
    padding-right: 10px;
  `}
  ${mediaQueries.lessThan("md")`
   flex-direction: column;
   align-items: center;
  `}
  ${mediaQueries.lessThan("sm")`
    padding: 40px;
  `}
`;

const LeftSideContent = styled("div")`
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  gap:24px;
  max-width: 280px;
  ${mediaQueries.lessThan("md")`
    align-items: center;
  `}
  ${mediaQueries.lessThan(`sm`)`
    gap:0;
  `}
`;

const LeftSideTopTitle = styled("h3")`
  ${TEXT_106_900}
  letter-spacing: 0.15em;
  ${mediaQueries.lessThan("xl")`
    font-size: 90px;
  `}
  ${mediaQueries.lessThan("lg")`
    font-size: 70px;
  `}
  ${mediaQueries.lessThan("md")`
    font-size: 60px;
  `}
  ${mediaQueries.lessThan("sm")`
    font-size: 50px;
  `}
  ${mediaQueries.lessThan("xs")`
    font-size: 32px;
  `}
`;
const LeftSideBottomTitle = styled("h3")`
  ${TEXT_48_900}
  letter-spacing: 0.33em;
  background: linear-gradient(92.74deg, #9d4edd 4.16%, #5a189a 99.16%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${mediaQueries.lessThan("md")`
    font-size: 40px;
  `}
  ${mediaQueries.lessThan("sm")`
    font-size: 50px;
    letter-spacing: 0.1em;
  `}
  ${mediaQueries.lessThan("xs")`
    font-size: 32px;
  `}
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
  ${mediaQueries.lessThan("sm")`
   text-align: center;
   white-space: nowrap;
   margin-bottom:24px;
    `}
`;

const RightSideWrapper = styled("div")`
  ${ROW_ALIGN_START__SPACE_B}
  gap:24px;
  width: 50%;
  overflow: hidden;
  padding: 20px;
  ${mediaQueries.lessThan("lg")`
gap: 16px;
padding-left: 0;
  `}
  ${mediaQueries.lessThan(`md`)`
    padding-left: 20px;
    justify-content: center;
  `}
  ${mediaQueries.lessThan("sm")`
    width: 100%;
    overflow: visible;
  `}
`;

const RightSideItemOne = styled("div")`
  ${COLUMN_ALIGN_START__JUSTIFY_START};
  gap: 24px;
  width: 320px;
  ${mediaQueries.lessThan("lg")`
  width: 250px;
  gap: 16px;
  `}
  ${mediaQueries.lessThan("md")`
  display: none;
  `}
`;
const RightSideItemTwo = styled("div")`
  ${COLUMN_ALIGN_START__JUSTIFY_START};
  gap: 24px;
  width: 320px;
  ${mediaQueries.lessThan("lg")`
  width: 250px;
  gap: 16px;
  `}
  ${mediaQueries.lessThan("md")`
  align-items: center;
  `}
  ${mediaQueries.lessThan("sm")`
  width: 100%;
  flex-direction: column;
align-items: flex-start;

  
  `}
`;
const RightSideTite = styled("h3")`
  color: var(--Primary);
  ${TEXT_24_500}
  ${mediaQueries.lessThan("lg")`
  font-size: 20px;
  `}
  ${mediaQueries.lessThan("md")`
  font-size: 16px;
  `}
`;

const HorizontalDivider = styled("div")`
  width: 100%;
  height: 2px;
  background: linear-gradient(92.74deg, #9d4edd 4.16%, #5a189a 99.16%);
  ${mediaQueries.lessThan("sm")`
  display: none;
  `}
`;

const StyledLogo = styled(Image)`
  width: 203px;
  height: 228px;
  ${mediaQueries.lessThan("lg")`
    width: 160px;
    height: 180px;
  `}
  ${mediaQueries.lessThan("md")`
    width: 140px;
    height: 160px;
  `}
  ${mediaQueries.lessThan("sm")`
    width: 120px;
    height: 140px;
  `}
  ${mediaQueries.lessThan("xs")`
    width: 81px;
    height: 90px;
  `}
`;

const ItemWrapper = styled("div")`
  ${ROW_ALIGN_CENTER__JUSTIFY_START}
  margin-bottom: 16px;
  cursor: pointer;
  ${mediaQueries.lessThan("sm")`
   margin-bottom:0;
   `}
`;
const ItemList = styled(SecondaryButton)`
  padding: 16px;
  ${mediaQueries.lessThan("lg")`
  font-size: 20px;
  `}
  ${mediaQueries.lessThan("md")`
  font-size: 16px;
  `}
  ${mediaQueries.lessThan("sm")`
  display: none;
  `}
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
  ${mediaQueries.lessThan("md")`
    align-items: center;
  `}
  ${mediaQueries.lessThan("sm")`
  flex-direction: row;
  gap: 8px;
  `}
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

const IconStyle = styled("div")`
  ${mediaQueries.lessThan("sm")`
display:flex;
flex-direction: row;
`}
`;

const IconStyleSmall = styled("div")`
  ${mediaQueries.lessThan("sm")`
  width: 100%;
display:flex;
flex-direction: row;
justify-content: space-between;
`}
`;

const CommunityIcon = styled(Image)`
  ${mediaQueries.lessThan("md")`

 `}
  ${mediaQueries.lessThan("sm")`
  width: 35px;
  height: 35px;
`}
`;

const ConnectButtonStyleMd = styled("div")`
  ${mediaQueries.lessThan("sm")`
  display: none;
`}
`;
const ConnectButtonStyle = styled("div")`
  display: none;
  ${mediaQueries.lessThan("sm")`
  display: block;
   padding:14px;
     .MuiButton-startIcon img {
    filter: brightness(0) invert(1);
  }
  span {
    color: white; 
  }
`}
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
