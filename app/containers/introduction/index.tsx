import { COLUMN_ALIGN_START__JUSTIFY_START } from "@/app/styles/global-styles";
import { TEXT_32_400, TEXT_48_700 } from "@/app/styles/global-typography";
import styled from "@emotion/styled";
import BlueSquare from "@/app/assets/Blue-Square.png";
import OrangeSquare from "@/app/assets/Orange-square.png";
import IntroLeftBg from "@/app/assets/Intro-Left-Bg.png";
import IntroRightBg from "@/app/assets/Intro-Right-Bg.png";
import Image from "next/image";
import { mediaQueries } from "@/app/styles/mediaQueries";

export const Introduction = () => {
  return (
    <IntroductionContainer>
      <IntroductionContent>
        <TwoLineTitleWrapper>
          <SmallerText>Dive into the thrilling realm of</SmallerText>
          <Title> MineMasters Introduction</Title>
        </TwoLineTitleWrapper>
        <SmallerTextDesc>
          Our game empowers you, promoting financial inclusivity and showcasing
          limitless innovation in the digital world. It provides immersive
          gameplay coupled with real-world value generation.
        </SmallerTextDesc>
        <OrangeSquareStyled src={OrangeSquare} alt="Orange Square" />
        <BlueSquareStyled src={BlueSquare} alt="Blue Square" />
        <IntroLeftBgStyled src={IntroLeftBg} alt="Intro Left Bg" />
        <IntroRightBgStyled src={IntroRightBg} alt="Intro Right Bg" />
      </IntroductionContent>
    </IntroductionContainer>
  );
};

const IntroductionContainer = styled("section")`
  background-color: var(--Purple);
  ${mediaQueries.lessThan("xs")`
  // height:275px;
  `}
`;

const IntroductionContent = styled("div")`
  ${COLUMN_ALIGN_START__JUSTIFY_START};
  position: relative;
  gap: 24px;
  width: 90%;
  max-width: 850px;
  margin: auto;
  padding-top: 132px;
  padding-bottom: 111px;
  color: var(--Whitish);
  ${mediaQueries.lessThan("md")`
    padding-top: 96px;
    padding-bottom: 80px;
    max-width: 768px;
   gap: 20px;
  `}
  ${mediaQueries.lessThan("sm")`
    padding-top: 64px;
    padding-bottom: 56px;
    gap: 16px;
  `}
  ${mediaQueries.lessThan("xs")`
    padding-top: 37px;
    padding-bottom: 37px;
  `}
`;

const TwoLineTitleWrapper = styled("div")`
  ${mediaQueries.lessThan("xs")`
  line-height: 18.38px; 
   `}
`;

const SmallerText = styled("h2")`
  ${TEXT_32_400}
  z-index: 1;
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

const SmallerTextDesc = styled("h2")`
  ${TEXT_32_400}
  z-index: 1;
  ${mediaQueries.lessThan("md")`
  font-size: 22px;
  `}
  ${mediaQueries.lessThan("sm")`
  font-size: 18px;
  `}
  ${mediaQueries.lessThan("xs")`
  font-size: 14px;
  line-height:16.09px;
  `}
`;
const Title = styled("h1")`
  ${TEXT_48_700}
  z-index: 1;
  ${mediaQueries.lessThan("md")`
  font-size: 40px;
  `}
  ${mediaQueries.lessThan("sm")`
  font-size: 32px;
  line-height: 27.58px;
  `}
  ${mediaQueries.lessThan("xs")`
  font-size: 24px;
  `}
`;

const BlueSquareStyled = styled(Image)`
  position: absolute;
  top: 0;
  left: -290px;
  z-index: 1;
  ${mediaQueries.lessThan("lg")`
  width: 250px;
  height: 250px;
  left: -220px;
  `}
  ${mediaQueries.lessThan("md")`
  width: 200px;
  height: 200px;
  left: -30px;
  top:-80px
  `}
  ${mediaQueries.lessThan("sm")`
  width: 150px;
  height: 150px;
  left: -20px;
  top:-65px
  `}
  ${mediaQueries.lessThan("xs")`
  width: 57px;
  height: 57px;
  left: -10px;
  top:-15px
  `}
`;
const OrangeSquareStyled = styled(Image)`
  position: absolute;
  bottom: 0;
  right: -200px;
  z-index: 1;
  ${mediaQueries.lessThan("lg")`
  width: 200px;
  height: 200px;
  right: -150px;
  `}
  ${mediaQueries.lessThan("md")`
  width: 150px;
  height: 150px;
  right: -50px;
  top:70px
  `}
  ${mediaQueries.lessThan("sm")`
  width: 120px;
  height: 120px;
  right: 0px;
  top: 30px;
  `}
  ${mediaQueries.lessThan("xs")`
  width: 50px;
  height: 50px;
  right: 5px;
  top:20px;
  
  `}
`;

const IntroLeftBgStyled = styled(Image)`
  position: absolute;
  top: 0;
  left: -200px;
  ${mediaQueries.lessThan("md")`
    width: 380px;
    height: 215px;
    left: -60px;
    top: -50px;
  `}
  ${mediaQueries.lessThan("sm")`
    width: 430px;
    height: 165px;
    left:-100px;
  `}
  ${mediaQueries.lessThan(`xs`)`
    width: 145px;
    height: 75px;
    left: -35px;
    top: -22px;
  `}
`;

const IntroRightBgStyled = styled(Image)`
  position: absolute;
  bottom: 104px;
  right: -447px;
  ${mediaQueries.lessThan("md")`
  width: 350px;
  height: 170px;
  right: -127px;
  top: -50px;
  `}

  ${mediaQueries.lessThan("sm")`
  width: 180px;
  height: 100px;
  right: -20px;
    top: -40px;
  `}
  ${mediaQueries.lessThan("xs")`
  width: 150px;
    height: 56px;
    right: -45px;
    top: -25px;
    `}
`;
