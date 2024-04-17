import { PrimaryButton } from "@/app/components/button/primary";
import {
  BottomPosition,
  COLUMN_ALIGN_START__JUSTIFY_START,
  LeftPosition,
  MAX_WIDTH_RESPONSIVENESS,
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
import { mediaQueries } from "@/app/styles/mediaQueries";

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
  ${MAX_WIDTH_RESPONSIVENESS}
  ${ROW_ALIGN_CENTER__SPACE_B}
  margin: auto;
  ${mediaQueries.lessThan("md")`
  flex-direction: column-reverse;
  `}
`;

const LeftSideWrapper = styled("div")`
  width: 50%;
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  gap: 32px;
  margin-left: 50px;
  ${mediaQueries.lessThan("md")`
  width: 100%;
  margin-left: 30px;
  gap: 16px;
  `}
  ${mediaQueries.lessThan(`sm`)`
    gap:8px;
  `}
`;

const Title = styled("h1")`
  color: var(--Primary);
  ${TEXT_48_700}
  line-height:55.15px;
  position: relative;
  &::before {
    position: absolute;
    content: "1. ";
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
  line-height: 48px;
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
  padding-right: 20px;
  line-height: 33.6px;
  ${mediaQueries.lessThan("md")`
  font-size: 20px;
  `}
  ${mediaQueries.lessThan("sm")`
  font-size: 16px;
  `}
  ${mediaQueries.lessThan("xs")`
  font-size: 14px;
  line-height:16.09px;
  `}
`;

const CTAButtonsWrapper = styled("div")`
  ${ROW_ALIGN_CENTER__SPACE_B}
  gap: 16px;
  ${mediaQueries.lessThan("sm")`
  gap: 8px;
  `}
`;

const RightSideWrapper = styled("div")`
  position: relative;
`;

const ComingSoonButton = styled(PrimaryButton)`
  padding: 16px 56px;
  ${mediaQueries.lessThan("sm")`
  padding: 12px 48px;
  border-radius: 8px;
  `}
  ${mediaQueries.lessThan("xs")`
  padding: 8px 32px;
  `}
`;
const LearnMoreButton = styled(SecondaryButton)`
  padding: 16px 56px;
  border: none;
  color: var(--Primary);
  ${TEXT_24_400}
  cursor: pointer;
  ${mediaQueries.lessThan("sm")`
  padding: 12px 48px;
  font-size: 16px;
  `}
  ${mediaQueries.lessThan("xs")`
  padding: 8px 32px;
  font-size: 14px;
  `}
`;

const BackgroundCircle = styled(Image)`
  ${mediaQueries.lessThan("lg")`
  width:910px;
  height:910px;
  `}
  ${mediaQueries.lessThan("md")`
  width:610px;
  height:610px;
  `}
  ${mediaQueries.lessThan("sm")`
  width:430px;
  height:430px;
  `}
  ${mediaQueries.lessThan("xs")`
  width:313px;
  height:313px;
  `}
`;

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
  ${mediaQueries.lessThan("lg")`
  width: 300px;
  height: 290px;
   @keyframes rotateImageTop {
    0%,
    15% {
      /* Initial position */  
       top: 50px;
      right: calc(50% - 150px);
    }
    20%,
    35% {
      /* Move to next position */
      
      right: 20px;
      top: calc(50% - 175px);
    }
    40%,
    55% {
       top: calc(100% - 450px);
      right: calc(50% - 150px);
    }
    60%,
    75% {
      top: calc(50% - 210px);
       right: calc(100% - 320px);
    }
    80%,
    95% {
      /* Back to initial position */
     top: 50px;
      right: calc(50% - 150px);
    }
    100% {
      /* Ensure it ends in the initial position */
      /* Back to initial position */
      top: 50px;
      right: calc(50% - 150px);
    }
  }
  `}
  ${mediaQueries.lessThan("md")`
  width: 250px;
  height: 235px;
   @keyframes rotateImageTop {
    0%,
    15% {
      /* Initial position */  
       top: 0px;
      right: calc(50% - 125px);
    }
    20%,
    35% {
      /* Move to next position */
      
      right: -10px;
      top: calc(50% - 155px);
    }
    40%,
    55% {
       top: calc(100% - 320px);
      right: calc(50% - 125px);
    }
    60%,
    75% {
      top: calc(50% - 170px);
       right: calc(100% - 260px);
    }
    80%,
    95% {
      /* Back to initial position */
     top: 0px;
      right: calc(50% - 125px);
    }
    100% {
      /* Ensure it ends in the initial position */
      /* Back to initial position */
     top: 0px;
      right: calc(50% - 125px);
    }
  }
  `}
  ${mediaQueries.lessThan("sm")`
  width: 200px;
  height: 185px;
  @keyframes rotateImageTop {
    0%,
    15% {
      /* Initial position */  
       top: 0px;
      right: calc(50% - 100px);
    }
    20%,
    35% {
      /* Move to next position */ 
      right: -20px;
      top: calc(50% - 115px);
    }
    40%,
    55% {
       top: calc(100% - 230px);
      right: calc(50% - 95px);
    }
    60%,
    75% {
      top: calc(50% - 100px);
       right: calc(100% - 170px);
    }
    80%,
    95% {
      /* Back to initial position */
      top: 0px;
      right: calc(50% - 100px);
    }
    100% {
      /* Ensure it ends in the initial position */
      /* Back to initial position */
       top: 0px;
      right: calc(50% - 100px);
    }
  }
  `}
  ${mediaQueries.lessThan("xs")`
  width: 150px;
  height: 110px;
  @keyframes rotateImageTop {
    0%,
    15% {
      /* Initial position */  
       top: 10px;
      right: calc(50% - 70px);
    }
    20%,
    35% {
      /* Move to next position */ 
      right: -20px;
      top: calc(50% - 80px);
    }
    40%,
    55% {
       top: calc(100% - 150px);
      right: calc(50% - 80px);
    }
    60%,
    75% {
      top: calc(50% - 70px);
       right: calc(100% - 140px);
    }
    80%,
    95% {
      /* Back to initial position */
      top: 10px;
      right: calc(50% - 70px);
    }
    100% {
      /* Ensure it ends in the initial position */
      /* Back to initial position */
       top: 10px;
      right: calc(50% - 70px);
    }
  }
  `}
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
  ${mediaQueries.lessThan("lg")`
  width: 400px;
  height: 290px;
  @keyframes rotateImageLeft {
    0%,
    15% {
      /* Initial position */  
      top: calc(50% - 180px);
      right: calc(100% - 400px);
    }
    20%,
    35% {
      /* Move to next position */
      top: 50px;
      right: calc(50% - 180px);
    }
    40%,
    55% {
      right: 20px;
      top: calc(50% - 175px);
    }
    60%,
    75% {
      top: calc(100% - 400px);
    right: calc(50% - 180px);
    }
    80%,
    95% {
      /* Back to initial position */
        top: calc(50% - 180px);
      right: calc(100% - 400px);
    }
    100% {
      /* Ensure it ends in the initial position */
      /* Back to initial position */
          top: calc(50% - 180px);
      right: calc(100% - 400px);
    }
  }
   
  `}
  ${mediaQueries.lessThan("md")`
  width: 250px;
  height: 235px;
   @keyframes rotateImageLeft {
    0%,
    15% {
      /* Initial position */  
       top: calc(50% - 155px);
       right: calc(100% - 240px);
      
    }
    20%,
    35% {
      /* Move to next position */
       top: 0px;
      right: calc(50% - 130px);
     
    }
    40%,
    55% {
       right: -20px;
       top: calc(50% - 180px);
    }
    60%,
    75% {
      
      top: calc(100% - 330px);
     right: calc(50% - 130px);
    }
    80%,
    95% {
      /* Back to initial position */
      top: calc(50% - 155px);
       right: calc(100% - 240px);
    }
    100% {
      /* Ensure it ends in the initial position */
      /* Back to initial position */
     top: calc(50% - 155px);
       right: calc(100% - 240px);
    }
  }
  `}
  ${mediaQueries.lessThan("sm")`
  width: 190px;
  height: 180px;
   @keyframes rotateImageLeft {
    0%,
    15% {
      /* Initial position */  
       top: calc(50% - 120px);
       right: calc(100% - 170px);
    }
    20%,
    35% {
      /* Move to next position */ 
        top: 0px;
      right: calc(50% - 100px);
    
    }
    40%,
    55% {
        right: -20px;
      top: calc(50% - 120px);
      
    }
    60%,
    75% {
      top: calc(100% - 220px);
      right: calc(50% - 105px);
    }
    80%,
    95% {
      /* Back to initial position */
       top: calc(50% - 120px);
       right: calc(100% - 170px);
    }
    100% {
      /* Ensure it ends in the initial position */
      /* Back to initial position */
        top: calc(50% - 120px);
        right: calc(100% - 170px);
    }
  }
  `}
  ${mediaQueries.lessThan("xs")`
  width: 150px;
  height: 110px;
    @keyframes rotateImageLeft {
      0%,
      15% {
        /* Initial position */  
        top: calc(50% - 70px);
        right: calc(100% - 125px);
      }
      20%,
      35% {
        /* Move to next position */ 
          top: 5px;
        right: calc(50% - 70px);
      
      }
      40%,
      55% {
          right: -20px;
        top: calc(50% - 80px);
        
      }
      60%,
      75% {
        top: calc(100% - 150px);
        right: calc(50% - 80px);
      }
      80%,
      95% {
        /* Back to initial position */
        top: calc(50% - 70px);
        right: calc(100% - 125px);
      }
      100% {
        /* Ensure it ends in the initial position */
        /* Back to initial position */
        top: calc(50% - 70px);
        right: calc(100% - 125px);
      }
    }
  `}
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
  ${mediaQueries.lessThan("lg")`
  width: 400px;
  height: 290px;
  @keyframes rotateImageRight {
    0%,
    15% {
      /* Initial position */  
       right: 20px;
      top: calc(50% - 175px);
    }
    20%,
    35% {
      /* Move to next position */
       top: calc(100% - 400px);
      right: calc(50% - 180px);
     
    }
    40%,
    55% {
       top: calc(50% - 180px);
       right: calc(100% - 400px);
    }
    60%,
    75% {
      top: 50px;
      right: calc(50% - 180px);
    }
    80%,
    95% {
      /* Back to initial position */
    right: 20px;
      top: calc(50% - 175px);
    }
    100% {
      /* Ensure it ends in the initial position */
      /* Back to initial position */
        right: 20px;
      top: calc(50% - 175px);
    }
  }
  `}
  ${mediaQueries.lessThan("md")`
  width: 250px;
  height: 230px;
   @keyframes rotateImageRight {
    0%,
    15% {
      /* Initial position */  
        right: -20px;
      top: calc(50% - 110px);
    }
    20%,
    35% {
      /* Move to next position */
      
      top: calc(100% - 290px);
     right: calc(50% - 130px);
    
    }
    40%,
    55% {
      top: calc(50% - 120px);
       right: calc(100% - 250px);
    }
    60%,
    75% {
      top: 40px;
       right: calc(50% - 120px);
    }
    80%,
    95% {
      /* Back to initial position */
          right: -20px;
      top: calc(50% - 110px);
    }
    100% {
      /* Ensure it ends in the initial position */
      /* Back to initial position */
        right: -20px;
      top: calc(50% - 110px);
    }
  }
  `}
  ${mediaQueries.lessThan("sm")`
  width: 200px;
  height: 180px;
  @keyframes rotateImageRight {
    0%,
    15% {
      /* Initial position */  
      right: -20px;
      top: calc(50% - 90px);
    }
    20%,
    35% {
      /* Move to next position */ 
      top: calc(100% - 210px);
     right: calc(50% - 100px);
    }
    40%,
    55% {
      top: calc(50% - 80px);
       right: calc(100% - 190px);
    }
    60%,
    75% {
      top: 0px;
      right: calc(50% - 100px);
    }
    80%,
    95% {
      /* Back to initial position */
       right: -20px;
      top: calc(50% - 90px);
    }
    100% {
      /* Ensure it ends in the initial position */
      /* Back to initial position */
      right: -20px;
      top: calc(50% - 90px);
    }
  }
  `}
  ${mediaQueries.lessThan("xs")`
  width: 150px;
  height: 118px;
  @keyframes rotateImageRight {
    0%,
    15% {
      /* Initial position */  
      right: -20px;
      top: calc(50% - 60px);
    }
    20%,
    35% {
      /* Move to next position */ 
      top: calc(100% - 140px);
     right: calc(50% - 70px);
    }
    40%,
    55% {
      top: calc(50% - 55px);
       right: calc(100% - 140px);
    }
    60%,
    75% {
      top: 10px;
      right: calc(50% - 80px);
    }
    80%,
    95% {
      /* Back to initial position */
      right: -20px;
      top: calc(50% - 60px);
    }
    100% {
      /* Ensure it ends in the initial position */
      /* Back to initial position */
      right: -20px;
      top: calc(50% - 60px);
    }
  }
  `}
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
  ${mediaQueries.lessThan("lg")`
  width: 400px;
  height: 290px;
   @keyframes rotateImageBottom {
    0%,
    15% {
      /* Initial position */  
     
       top: calc(100% - 400px);
      right: calc(50% - 180px);
    }
    20%,
    35% {
      /* Move to next position */
      
      top: calc(50% - 180px);
      right: calc(100% - 400px);
     
    }
    40%,
    55% {
      top: 50px;
      right: calc(50% - 180px);
    }
    60%,
    75% {
      right: 20px;
        top: calc(50% - 175px);
    }
    80%,
    95% {
      /* Back to initial position */
        top: calc(100% - 400px);
      right: calc(50% - 180px);
    }
    100% {
      /* Ensure it ends in the initial position */
      /* Back to initial position */
        top: calc(100% - 400px);
      right: calc(50% - 180px);
    }
  }
  `}
  ${mediaQueries.lessThan("md")`
  width: 250px;
  height: 230px;
    @keyframes rotateImageBottom {
    0%,
    15% {
      /* Initial position */  
      top: calc(100% - 300px);
     right: calc(50% - 140px);
    }
    20%,
    35% {
      /* Move to next position */
      top: calc(50% - 150px);
       right: calc(100% - 270px);
    }
    40%,
    55% {
      top: 0px;
       right: calc(50% - 140px);
    }
    60%,
    75% {
      right: -20px;
  top: calc(50% - 175px);
    }
    80%,
    95% {
      /* Back to initial position */
       top: calc(100% - 300px);
     right: calc(50% - 140px);
    }
    100% {
      /* Ensure it ends in the initial position */
      /* Back to initial position */
       top: calc(100% - 300px);
     right: calc(50% - 140px);
    }
  }
  `}
  ${mediaQueries.lessThan("sm")`
  width: 200px;
  height: 185px;
   @keyframes rotateImageBottom {
    0%,
    15% {
      /* Initial position */  
      top: calc(100% - 220px);
     right: calc(50% - 105px);
    }
    20%,
    35% {
      /* Move to next position */ 
      top: calc(50% - 115px);
       right: calc(100% - 190px);
    }
    40%,
    55% {
      top: 0px;
      right: calc(50% - 110px);
    }
    60%,
    75% {
      right: -20px;
     top: calc(50% - 125px);
    }
    80%,
    95% {
      /* Back to initial position */
      top: calc(100% - 220px);
     right: calc(50% - 105px);
    }
    100% {
      /* Ensure it ends in the initial position */
      /* Back to initial position */
      top: calc(100% - 220px);
     right: calc(50% - 105px);
    }
  }
  `}
  ${mediaQueries.lessThan("xs")`
  width: 128px;
  height: 144px;
   @keyframes rotateImageBottom {
    0%,
    15% {
      /* Initial position */  
      top: calc(100% - 150px);
     right: calc(50% - 60px);
    }
    20%,
    35% {
      /* Move to next position */ 
       top: calc(50% - 90px);
       right: calc(100% - 130px);
    }
    40%,
    55% {
      top: 0px;
      right: calc(50% - 70px);
    }
    60%,
    75% {
     right: -20px;
     top: calc(50% - 90px);
    }
    80%,
    95% {
      /* Back to initial position */
      top: calc(100% - 150px);
     right: calc(50% - 60px);
    }
    100% {
      /* Ensure it ends in the initial position */
      /* Back to initial position */
       top: calc(100% - 150px);
     right: calc(50% - 60px);
    }
  }
  `}
`;
