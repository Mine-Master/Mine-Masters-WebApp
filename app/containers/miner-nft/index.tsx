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
  TEXT_48_400,
  TEXT_48_700,
  TEXT_48_900,
} from "@/app/styles/global-typography";
import TokenLogo from "@/app/assets/Token-Logo.png";
import Image from "next/image";
import { bigShoulder } from "@/app/utils/font-loader";
import { SecondaryButton } from "@/app/components/button/secondary";

export const MinerNft = () => {
  return (
    <MinerNftContainer>
      <div>
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
      </div>
    </MinerNftContainer>
  );
};

const MinerNftContainer = styled("section")`
  width: 100%;
  padding-top: 120px;
  padding-bottom: 373px;
  ${ROW_ALIGN_CENTER__SPACE_B}
  margin: auto;
  background: url(${MinerNftBg.src}) no-repeat;
  background-size: 100% 100%;
`;

const LeftSideWrapper = styled("div")`
  /* width: 50%; */
  margin-left: calc(5% + 50px);
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  gap: 32px;
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
`;

const Description = styled("p")`
  color: var(--Dark-Purple);
  ${TEXT_24_400}
  max-width: 667px;
  margin-top: 16px;
`;

const CTAButtonsWrapper = styled("div")`
  ${ROW_ALIGN_CENTER__SPACE_B}
  gap: 16px;
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
`;

const TokenLogoStyled = styled(Image)``;

const TokenTitle = styled("h2")`
  ${TEXT_48_900}
  line-height: 57px;

  background: linear-gradient(92.74deg, #015cad 4.16%, #00d4bb 99.16%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const TokenDescription = styled("p")`
  color: var(--Light-Purple);
  ${TEXT_16_500};
`;

const ComingSoonButton = styled(PrimaryButton)`
  padding: 16px 56px;
`;

const LearnMoreButton = styled(SecondaryButton)`
  padding: 16px 56px;
`;
