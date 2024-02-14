import { COLUMN_ALIGN_START__JUSTIFY_START } from "@/app/styles/global-styles";
import { TEXT_32_400, TEXT_48_700 } from "@/app/styles/global-typography";
import styled from "@emotion/styled";
import BlueSquare from "@/app/assets/Blue-Square.png";
import OrangeSquare from "@/app/assets/Orange-square.png";
import IntroLeftBg from "@/app/assets/Intro-Left-Bg.png";
import IntroRightBg from "@/app/assets/Intro-Right-Bg.png";
import Image from "next/image";

export const Introduction = () => {
  return (
    <IntroductionContainer>
      <IntroductionContent>
        <TwoLineTitleWrapper>
          <SmallerText>Dive into the thrilling realm of</SmallerText>
          <Title> MineMasters Introduction</Title>
        </TwoLineTitleWrapper>
        <SmallerText>
          Our game empowers you, promoting financial inclusivity and showcasing
          limitless innovation in the digital world. It provides immersive
          gameplay coupled with real-world value generation.
        </SmallerText>
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
`;

const TwoLineTitleWrapper = styled("div")`
  z-index: 1;
`;

const SmallerText = styled("h2")`
  ${TEXT_32_400}
  z-index: 1;
`;

const Title = styled("h1")`
  ${TEXT_48_700}
  z-index: 1;
`;

const BlueSquareStyled = styled(Image)`
  position: absolute;
  top: 0;
  left: -290px;
  z-index: 1;
`;
const OrangeSquareStyled = styled(Image)`
  position: absolute;
  bottom: 0;
  right: -200px;
  z-index: 1;
`;

const IntroLeftBgStyled = styled(Image)`
  position: absolute;
  top: 0;
  left: -200px;
`;

const IntroRightBgStyled = styled(Image)`
  position: absolute;
  bottom: 104px;
  right: -447px;
`;
