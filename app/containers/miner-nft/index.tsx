import { PrimaryButton } from "@/app/components/button/primary";
import {
  COLUMN_ALIGN_START__JUSTIFY_START,
  ROW_ALIGN_CENTER__JUSTIFY_START,
  ROW_ALIGN_CENTER__SPACE_B,
} from "@/app/styles/global-styles";
import styled from "@emotion/styled";
import MinerNftBg from "@/app/assets/Miner-Nft-Bg.png";
import {
  TEXT_16_500,
  TEXT_24_400,
  TEXT_48_700,
  TEXT_48_900,
} from "@/app/styles/global-typography";
import TokenLogo from "@/app/assets/Token-Logo.png";
import Image from "next/image";
import { bigShoulder } from "@/app/utils/font-loader";
import { SecondaryButton } from "@/app/components/button/secondary";
import { Crystals } from "./components/crystals";
import { mediaQueries } from "@/app/styles/mediaQueries";
import { Divider } from "@mui/material";

export const MinerNft = () => {
  return (
    <MinerNftContainer>
      <LeftSideWrapper>
        <Title>Purchase and deploy miner NFTs</Title>
        <Description>
          You must purchase and deploy miner NFTs on your lands to generate
          income. The efficiency of mining operations can be enhanced by
          acquiring and applying special NFTs, which are periodically released
          in the game.
        </Description>
        <CTAButtonsWrapper>
          <ComingSoonButton disabled>Coming soon</ComingSoonButton>
          <LearnMoreButton>Learn more</LearnMoreButton>
        </CTAButtonsWrapper>
        <TokenContainer>
          <TokenLogoStyled src={TokenLogo} alt="Token Logo" />
          <TokenTitle className={bigShoulder.className}>
            Cryptonite token XCN
          </TokenTitle>
        </TokenContainer>
      </LeftSideWrapper>
      <Crystals />
      <HorizontalDivider orientation="horizontal" flexItem />
    </MinerNftContainer>
  );
};

const MinerNftContainer = styled("section")`
  width: 100%;
  padding-top: 120px;
  padding-bottom: 373px;
  ${ROW_ALIGN_CENTER__SPACE_B}
  margin:0 auto;
  background: url(${MinerNftBg.src}) no-repeat;
  /* background-size: 100% 100%; */
  background-size: contain;
  background-position: bottom;
  position: relative;
  ${mediaQueries.lessThan("md")`
  flex-direction: column-reverse;
  `}
  ${mediaQueries.lessThan("sm")`
  padding-top: 80px;
  padding-bottom: 200px;
  `}
  ${mediaQueries.lessThan("xs")`
  padding-top: 40px;
  padding-bottom: 220px;
  `}
`;

const LeftSideWrapper = styled("div")`
  /* width: 50%; */
  width: 90%;
  margin-left: calc(5% + 50px);
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  gap: 32px;
  ${mediaQueries.lessThan("md")`
  margin-left: 30px;
  gap: 16px;
  `}
  ${mediaQueries.lessThan("sm")`
  gap: 8px;
  `}
`;

const Title = styled("h1")`
  color: var(--Primary);
  ${TEXT_48_700}
  line-height:55.15px;
  position: relative;
  &::before {
    position: absolute;
    content: "2. ";
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

const Description = styled("p")`
  color: var(--Dark-Purple);
  ${TEXT_24_400}
  max-width: 667px;
  margin-top: 16px;
  padding-right: 20px;
  ${mediaQueries.lessThan("md")`
  font-size: 20px;
  `}
  ${mediaQueries.lessThan("sm")`
  font-size: 16px;
  `}
  ${mediaQueries.lessThan("xs")`
  font-size: 14px;
  `}
`;

const CTAButtonsWrapper = styled("div")`
  ${ROW_ALIGN_CENTER__SPACE_B}
  gap: 16px;
  ${mediaQueries.lessThan("sm")`
  gap: 8px;
  `}
`;

const TokenContainer = styled("div")`
  padding: 0 118px 0 0;
  background: rgba(90, 24, 154, 0.1);
  /* Inner-shadow - Hover Primary BTN */
  box-shadow: inset 0px -4px 8px rgba(36, 0, 70, 0.34);
  border-radius: 24px;
  ${ROW_ALIGN_CENTER__JUSTIFY_START}
  margin-top: 28px;
  gap: 8px;
  ${mediaQueries.lessThan("sm")`
  padding: 0 64px 0 0;
  `}
  ${mediaQueries.lessThan("xs")`
  padding: 0 32px 0 0;
  `}
`;

const TokenLogoStyled = styled(Image)`
  ${mediaQueries.lessThan("md")`
  width: 94px;
  height: 94px;
  `}
  ${mediaQueries.lessThan("sm")`
  width: 60px;
  height: 60px;
  `}
  ${mediaQueries.lessThan("xs")`
  width: 40px;
  height: 40px;
  `}
`;

const TokenTitle = styled("h2")`
  ${TEXT_48_900}
  line-height: 57px;

  background: linear-gradient(92.74deg, #015cad 4.16%, #00d4bb 99.16%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  ${mediaQueries.lessThan("md")`
  font-size: 32px;
  line-height: 48px;
  `}
  ${mediaQueries.lessThan("sm")`
  font-size: 22px;
  line-height: 40px;
  `}
  ${mediaQueries.lessThan("xs")`
  font-size: 14px;
  line-height: 32px;
  `}
`;

const TokenDescription = styled("p")`
  color: var(--Light-Purple);
  ${TEXT_16_500};
`;

const ComingSoonButton = styled(PrimaryButton)`
  padding: 16px 56px;
  ${mediaQueries.lessThan("sm")`
  padding: 12px 48px;
  `}
  ${mediaQueries.lessThan("xs")`
  padding: 8px 32px;
  `}
`;

const LearnMoreButton = styled(SecondaryButton)`
  padding: 16px 56px;
  ${mediaQueries.lessThan("sm")`
  padding: 12px 48px;
  font-size: 16px;
  `}
  ${mediaQueries.lessThan("xs")`
  padding: 8px 32px;
  font-size: 14px;
  `}
`;

const HorizontalDivider = styled(Divider)`
  display: none;
  margin: 0 20px 30px 20px;
  height: 2px;
  /* height: 100px; */
  background: #5a189a1a;
  ${mediaQueries.lessThan("sm")`
    display:block;
    `}
`;
