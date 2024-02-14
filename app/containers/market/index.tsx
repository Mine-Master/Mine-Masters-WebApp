import styled from "@emotion/styled";
import MarketplaceBGImage from "@/app/assets/marketplace.png";
import {
  COLUMN_ALIGN_CENTER__JUSTIFY_END,
  COLUMN_ALIGN_CENTER___JUSTIFY_START,
  COLUMN_ALIGN_START__JUSTIFY_START,
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
              <FeatureBox title="Purple Miner" icon={PurpleMinerPic.src} />
              <FeatureBox title="Pink Knife" icon={KnifePic.src} />
              <FeatureBoxStyled title="Spacy Food" icon={HamburgerPic.src} />
            </LeftButtons>
            <StyledPrimaryButton disabled>Coming soon</StyledPrimaryButton>
          </ButtonWrapper>
        </ContentContainer>
      </BackgroundImageContainer>
      <RocksLogoStyled src={RocksLogo} alt="Rocks" />
    </MarketplaceContainer>
  );
};

const MarketplaceContainer = styled("section")`
  width: 100%;
  height: 1100px;
  position: relative;
  ${COLUMN_ALIGN_CENTER___JUSTIFY_START}
`;

const BackgroundImageContainer = styled("div")`
  width: 90%;
  margin: auto;
  background-image: url(${MarketplaceBGImage.src});
  background-size: cover;
  background-position: center;
  ${COLUMN_ALIGN_CENTER__JUSTIFY_END}
  padding-bottom: 60px;
  height: 876px;
  border-radius: 48px;
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
`;

const MarketplaceLogoWrapper = styled("div")`
  ${COLUMN_ALIGN_CENTER___JUSTIFY_START}
`;

const CompanyName = styled("h1")`
  ${TEXT_48_700}
`;

const MarketplaceDescription = styled("span")`
  ${TEXT_24_400}
  text-align: left;
  line-height: 34px;
`;

const RocksLogoStyled = styled(Image)`
  margin-top: -100px;
  z-index: 1;
`;

const ButtonWrapper = styled("div")`
  ${ROW_ALIGN_CENTER__SPACE_B}
  width: 100%;
  ${ROW_ALIGN_END__SPACE_B}
`;

const LeftButtons = styled("div")`
  ${ROW_ALIGN_CENTER__JUSTIFY_START}
  gap: 24px;
`;

const FeatureBoxStyled = styled(FeatureBox)`
  img {
    top: -40px;
  }
`;

const StyledPrimaryButton = styled(PrimaryButton)`
  padding: 16px 54px;
`;
