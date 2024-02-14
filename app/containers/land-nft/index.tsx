import { PrimaryButton } from "@/app/components/button/primary";
import {
  BottomPosition,
  COLUMN_ALIGN_START__JUSTIFY_START,
  LeftPosition,
  ROW_ALIGN_CENTER__SPACE_B,
  RightPosition,
  TopPosition,
} from "@/app/styles/global-styles";
import styled from "@emotion/styled";
import LandNftBg from "@/app/assets/Land-Nft_Bg.png";
import Image from "next/image";
import TopPic from "@/app/assets/Top-Pic.png";
import LeftPic from "@/app/assets/Left-Pic.png";
import RightPic from "@/app/assets/Right-Pic.png";
import BottomPic from "@/app/assets/Bottom-Pic.png";
import { TEXT_24_400, TEXT_48_700 } from "@/app/styles/global-typography";
import { SecondaryButton } from "@/app/components/button/secondary";

export const LandNft = () => {
  return (
    <LandNftContainer>
      <LeftSideWrapper>
        <Title>Begin by acquiring land’s NFTs</Title>
        <Description>
          Cryptonite-rich planets attract explorers, mercenaries, and
          fortune-seekers, turning each into a battleground for MineMasters to
          navigate and stake their claim in the pursuit of wealth and control.
        </Description>
        <CTAButtonsWrapper>
          <ComingSoonButton disabled>Coming soon</ComingSoonButton>
          <LearnMoreButton>Learn more</LearnMoreButton>
        </CTAButtonsWrapper>
      </LeftSideWrapper>
      <RightSideWrapper>
        <BackgroundCircle src={LandNftBg} alt="Land NFT" />
        <TopPicStyled src={TopPic.src} alt="Top Pic" />
        <LeftPicStyled src={LeftPic} alt="Left Pic" />
        <RightPicStyled src={RightPic} alt="Right Pic" />
        <BottomPicStyled src={BottomPic} alt="Bottom Pic" />
      </RightSideWrapper>
    </LandNftContainer>
  );
};

const LandNftContainer = styled("section")`
  width: 90%;
  ${ROW_ALIGN_CENTER__SPACE_B}
  margin: auto;
`;

const LeftSideWrapper = styled("div")`
  width: 50%;
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  gap: 32px;
  margin-left: 50px;
`;

const Title = styled("h1")`
  color: var(--Primary);
  ${TEXT_48_700}
  position: relative;
  &::before {
    position: absolute;
    content: "1. ";
    color: var(--Primary);
    ${TEXT_48_700}
    left: -50px;
  }
`;

const Description = styled("p")`
  color: var(--Dark-Purple);
  ${TEXT_24_400}
`;

const CTAButtonsWrapper = styled("div")`
  ${ROW_ALIGN_CENTER__SPACE_B}
  gap: 16px;
`;

const RightSideWrapper = styled("div")`
  position: relative;
`;

const ComingSoonButton = styled(PrimaryButton)`
  padding: 16px 56px;
`;
const LearnMoreButton = styled(SecondaryButton)`
  padding: 16px 56px;
  border: none;
  color: var(--Primary);
  ${TEXT_24_400}
  cursor: pointer;
`;

const BackgroundCircle = styled(Image)``;

const TopPicStyled = styled("img")`
  position: absolute;
  ${TopPosition}
  @keyframes rotateImageTop {
    0%,
    15% {
      /* Initial position */
      ${TopPosition}
    }
    20%,
    35% {
      /* Move to next position */
      /* ${RightPosition} */
      right: 20px;
      top: calc(50% - 175px);
    }
    40%,
    55% {
      ${BottomPosition}
    }
    60%,
    75% {
      ${LeftPosition}
    }
    80%,
    95% {
      /* Back to initial position */
      ${TopPosition}
    }
    100% {
      /* Ensure it ends in the initial position */
      /* Back to initial position */
      ${TopPosition}
    }
  }
  animation: rotateImageTop 15s infinite;
`;

const LeftPicStyled = styled(Image)`
  position: absolute;
  ${LeftPosition}

  @keyframes rotateImageLeft {
    0%,
    15% {
      /* Initial position */
      ${LeftPosition}
    }
    20%,
    35% {
      /* Move to next position */
      ${TopPosition}
    }
    40%,
    55% {
      ${RightPosition}/* right: 20px;
      top: calc(50% - 115px); */
    }
    60%,
    75% {
      ${BottomPosition}
    }
    80%,
    95% {
      /* Back to initial position */
      ${LeftPosition}
    }
    100% {
      /* Ensure it ends in the initial position */
      /* Back to initial position */
      ${LeftPosition}
    }
  }
  animation: rotateImageLeft 15s infinite;
`;

const RightPicStyled = styled(Image)`
  position: absolute;
  ${RightPosition}
  @keyframes rotateImageRight {
    0%,
    15% {
      /* Initial position */
      ${RightPosition}
    }
    20%,
    35% {
      /* Move to next position */
      ${BottomPosition}
    }
    40%,
    55% {
      ${LeftPosition}
    }
    60%,
    75% {
      ${TopPosition}
    }
    80%,
    95% {
      /* Back to initial position */
      ${RightPosition}
    }
    100% {
      /* Ensure it ends in the initial position */
      /* Back to initial position */
      ${RightPosition}
    }
  }
  animation: rotateImageRight 15s infinite;
`;

const BottomPicStyled = styled(Image)`
  position: absolute;
  ${BottomPosition}
  @keyframes rotateImageBottom {
    0%,
    15% {
      /* Initial position */
      ${BottomPosition}
    }
    20%,
    35% {
      /* Move to next position */
      ${LeftPosition}
    }
    40%,
    55% {
      ${TopPosition}
    }
    60%,
    75% {
      ${RightPosition}
    }
    80%,
    95% {
      /* Back to initial position */
      ${BottomPosition}
    }
    100% {
      /* Ensure it ends in the initial position */
      /* Back to initial position */
      ${BottomPosition}
    }
  }
  animation: rotateImageBottom 15s infinite;
`;
