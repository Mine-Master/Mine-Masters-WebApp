import styled from "@emotion/styled";
import MarketplaceBGImage from "@/app/assets/marketplace.png";
import {
  COLUMN_ALIGN_CENTER__JUSTIFY_END,
  COLUMN_ALIGN_CENTER___JUSTIFY_START,
  COLUMN_ALIGN_START__JUSTIFY_START,
  MAX_WIDTH_RESPONSIVENESS,
  ROW_ALIGN_CENTER__JUSTIFY_START,
  ROW_ALIGN_CENTER__SPACE_B,
  ROW_ALIGN_END__SPACE_B,
} from "@/app/styles/global-styles";
import { TEXT_24_400, TEXT_48_700 } from "@/app/styles/global-typography";
import RocksLogo from "@/app/assets/Rocks.png";
import Image from "next/image";
import { FeatureBox } from "./components/feature-box";
import { PrimaryButton } from "@/app/components/button/primary";
// import HamburgerPic from "@/app/assets/Hamburger.png";
// import PurpleMinerPic from "@/app/assets/Purple-Miner.png";
// import KnifePic from "@/app/assets/Knife.png";
import HamburgerPic from "@/app/assets/Hamburger.svg";
import PurpleMinerPic from "@/app/assets/Purple-Miner.svg";
import KnifePic from "@/app/assets/Knife.svg";
import { mediaQueries } from "@/app/styles/mediaQueries";

export const Marketplace = () => {
  return (
    <MarketplaceContainer>
      <BackgroundImageContainer>
        <ContentContainer>
          <MarketplaceLogoWrapper>
            {/* <MarketplaceLogoStyled src={MarketplaceLogo} alt="Logo" /> */}
            <CompanyName>4. NFT offerings & Marketplace</CompanyName>
          </MarketplaceLogoWrapper>
          <MarketplaceDescription>
            {`${`Our game's virtual world is linked to a separate Online Store and
            Marketplace, bridging the gap between the gaming experience and
            real-world trading. This integration allows you to buy, sell, and
            trade NFTs within the game, enhancing the overall player experience.`}`}
          </MarketplaceDescription>
          <ButtonWrapper>
            <LeftButtons>
              <TwoLeftButtons>
                <FeatureBox title="Purple Miner" icon={PurpleMinerPic.src} />
                <FeatureBox title="Pink Knife" icon={KnifePic.src} />
              </TwoLeftButtons>
              <FeatureBoxStyled title="Spacy Food" icon={HamburgerPic.src} />
            </LeftButtons>
            <StyledPrimaryButton disabled>Coming soon</StyledPrimaryButton>
          </ButtonWrapper>
          <StyledPrimaryButtonSmall disabled>
            Coming soon
          </StyledPrimaryButtonSmall>
        </ContentContainer>
      </BackgroundImageContainer>
      <RocksLogoStyled src={RocksLogo} alt="Rocks" />
    </MarketplaceContainer>
  );
};

const MarketplaceContainer = styled("section")`
  width: 100%;
  ${MAX_WIDTH_RESPONSIVENESS}
  height: 1100px;
  position: relative;
  ${COLUMN_ALIGN_CENTER___JUSTIFY_START}
  ${mediaQueries.lessThan("md")`
    height: 1000px;
  `}
  ${mediaQueries.lessThan("sm")`
    height: 900px;
  `}
  ${mediaQueries.lessThan("xs")`
    height: 800px;
    `}
`;

const BackgroundImageContainer = styled("div")`
  width: 100%;
  margin: auto;
  background-image: url(${MarketplaceBGImage.src});
  background-size: cover;
  background-position: center;
  ${COLUMN_ALIGN_CENTER__JUSTIFY_END}
  padding-bottom: 60px;
  height: 876px;
  border-radius: 48px;
  ${mediaQueries.lessThan("md")`
    width: 100%;
    height: 776px;
    border-radius: 0px;
  `}
  ${mediaQueries.lessThan("sm")`
    height: 676px;
  `}
  ${mediaQueries.lessThan("xs")`
    height: 576px;
  `}
`;

const ContentContainer = styled("div")`
  width: 90%;
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  gap: 32px;
  padding: 60px;
  color: var(--Whitish);

  background: rgba(254, 247, 255, 0.16);
  border: 3px solid #c77dff;
  backdrop-filter: blur(50px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 48px;
  ${mediaQueries.lessThan("lg")`
    padding: 40px;
    gap: 28px;
    position: relative;
    top: 50px;
  `}
  ${mediaQueries.lessThan("md")`
  justify-content: space-around;
    gap: 24px;
    top: 260px;
  `}
  ${mediaQueries.lessThan("sm")`
  height: 350px;
    padding: 30px;
    gap: 15px;
    top: 190px;
  `}
  ${mediaQueries.lessThan("xs")`
  height:315px;
    padding: 15px;
    gap: 10px;
    top: 115px;
  
  `}
`;

const MarketplaceLogoWrapper = styled("div")`
  ${COLUMN_ALIGN_CENTER___JUSTIFY_START}
`;

const CompanyName = styled("h1")`
  ${TEXT_48_700}
  ${mediaQueries.lessThan("lg")`
  font-size: 40px;
  `}
  ${mediaQueries.lessThan("md")`
  font-size: 34px;
  `}
  ${mediaQueries.lessThan("sm")`
  font-size: 24px;
  `}
  ${mediaQueries.lessThan("xs")`
  font-size: 16px;
  `}
`;

const MarketplaceDescription = styled("span")`
  ${TEXT_24_400}
  text-align: left;
  line-height: 34px;
  ${mediaQueries.lessThan("md")`
  font-size: 20px;
  line-height: 28px;
  `}
  ${mediaQueries.lessThan("sm")`
  font-size: 18px;
  line-height: 26px;
  `}
  ${mediaQueries.lessThan("xs")`
  font-size: 14px;
  line-height: 22px;
  `}
`;

const RocksLogoStyled = styled(Image)`
  margin-top: -100px;
  z-index: 1;
  ${mediaQueries.lessThan("lg")`
  width: 1200px;
  height: 450px;
     margin-top: -60px;
  `}
  ${mediaQueries.lessThan("md")`
  width: 992px;
    margin-top: 140px;
  `}
  ${mediaQueries.lessThan("sm")`
    height: 320px;
    width: 768px;
    margin-top: 285px;
    z-index: -1;
  `}
  ${mediaQueries.lessThan("xs")`
      margin-top: 170px;
    height: 200px;
  `}
`;

const ButtonWrapper = styled("div")`
  ${ROW_ALIGN_CENTER__SPACE_B}
  width: 100%;
  ${ROW_ALIGN_END__SPACE_B}
  ${mediaQueries.lessThan("xxl")`
   flex-direction:column-reverse;
   align-items:center;
   gap:24px;
`}
`;

const LeftButtons = styled("div")`
  ${ROW_ALIGN_CENTER__JUSTIFY_START}
  gap: 24px;
  ${mediaQueries.lessThan("md")`
    gap: 16px;
  flex-direction: column;
  `}
  ${mediaQueries.lessThan("sm")`
  position: absolute;
  top:355px;
  gap: 12px;
  `}
  ${mediaQueries.lessThan("xs")`
  top: 309px;
  gap: 8px;
  `}
`;

const TwoLeftButtons = styled("div")`
  ${ROW_ALIGN_CENTER__JUSTIFY_START}
  gap: 24px;
  ${mediaQueries.lessThan("md")`
    gap: 16px;
  `}
  ${mediaQueries.lessThan("sm")`
  gap: 12px;
  `}
  ${mediaQueries.lessThan("xs")`
  gap: 8px;
  `}
`;

const FeatureBoxStyled = styled(FeatureBox)`
  img {
    top: -40px;
    ${mediaQueries.lessThan("sm")`
    top: -30px;
   `}
    ${mediaQueries.lessThan("xs")`
   top: -10px;
   `}
  }
`;

const StyledPrimaryButton = styled(PrimaryButton)`
  padding: 16px 56px;
  ${mediaQueries.lessThan("sm")`
display: none;
  padding: 12px 48px;
  `}
  ${mediaQueries.lessThan("xs")`
  padding: 8px 32px;
  `}
`;
const StyledPrimaryButtonSmall = styled(PrimaryButton)`
  display: none;
  padding: 16px 56px;
  ${mediaQueries.lessThan("sm")`
  display: block;
  padding: 12px 48px;
  `}
  ${mediaQueries.lessThan("xs")`
  padding: 8px 32px;
  `}
`;
