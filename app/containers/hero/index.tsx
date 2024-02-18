import styled from "@emotion/styled";
import HeroBGImage from "@/app/assets/Hero.png";
import {
  COLUMN_ALIGN_CENTER___JUSTIFY_START,
  LineBreak,
  ROW_ALIGN_START__JUSTIFY_START,
} from "@/app/styles/global-styles";
import HeroLogo from "@/app/assets/Hero-Logo.svg";
import Image from "next/image";
import { TEXT_32_400, TEXT_64_900 } from "@/app/styles/global-typography";
import { bigShoulder } from "@/app/utils/font-loader";
import BLueAxeIcon from "../../assets/Axe-Blue.svg";
import OrangeAxeIcon from "../../assets/Axe-Orange.svg";
import BlueSquare from "@/app/assets/Blue-Rect.png";
import OrangeSquare from "@/app/assets/Orange-Rect.png";
import { keyframes } from "@mui/material";

const ChangeValueGenerator = () => {
  return Math.floor(Math.random() * 100) - 50;
};

const OrangeIconItems = [
  {
    bottom: 25,
    right: 10,
    rotation: 10,
    size: 15,
  },
  {
    bottom: 23,
    right: 25,
    rotation: 10,
    size: 20,
  },
  {
    bottom: 33,
    right: 22,
    rotation: 30,
    size: 15,
  },
  {
    bottom: 45,
    right: 29,
    rotation: 30,
    size: 15,
  },
  {
    bottom: 43,
    right: 33,
    rotation: 90,
    size: 21,
  },
  {
    bottom: 71,
    right: 37,
    rotation: 90,
    size: 15,
  },
  {
    bottom: 71,
    right: 43,
    rotation: 70,
    size: 15,
  },
  {
    bottom: 61,
    right: 43,
    rotation: 90,
    size: 20,
  },
];

export const Hero = () => {
  return (
    <HeroContainer>
      <ContentContainer>
        <HeroLogoWrapper>
          <HeroLogoContainer>
            {OrangeIconItems.map(({ bottom, right, size, rotation }, index) => (
              <OrangeBulletStyled
                key={index}
                src={OrangeSquare}
                rotation={rotation}
                alt={"Image"}
                bottom={bottom}
                right={right}
                size={size}
              />
            ))}
            {OrangeIconItems.map(({ bottom, right, size, rotation }, index) => (
              <BlueBulletStyled
                key={index}
                src={BlueSquare}
                rotation={rotation}
                alt={"Image"}
                bottom={bottom}
                left={right}
                size={size}
              />
            ))}
            <HeroLogoStyled src={HeroLogo} alt="Logo" />
          </HeroLogoContainer>
          {/* <OrangeAxeStyled src={OrangeAxeIcon} alt="Orange Axe" /> */}
          {/* <BlueAxeStyled src={BLueAxeIcon} alt="Blue Axe" /> */}
          <CompanyNameWrapper>
            <CompanyName className={bigShoulder.className}>M</CompanyName>
            <BlueCharacter className={bigShoulder.className}>I</BlueCharacter>
            <CompanyName className={bigShoulder.className}>N</CompanyName>
            <OrangeCharacter className={bigShoulder.className}>
              E
            </OrangeCharacter>
            &nbsp; &nbsp; &nbsp;
            <CompanyName className={bigShoulder.className}>MASTERS</CompanyName>
          </CompanyNameWrapper>
        </HeroLogoWrapper>
        <HeroDescription>
          Secure your land, deploy miner NFTs. <LineBreak />
          <BlueDescription> Opt for peaceful development </BlueDescription>
          or
          <OrangeDescription> Engage in exhilarating wars</OrangeDescription>
        </HeroDescription>
      </ContentContainer>
    </HeroContainer>
  );
};

const moveAnimationBlue = () => keyframes`
  0% { transform: translate(0, 0); }
  50% { transform: translate(-200%, -200%); }
  100% { transform: translate(0, 0); }
  `;

const moveAnimationOrange = () => keyframes`
   0% { transform: translate(0, 0); }
  50% { transform: translate(200%, -200%); }
  100% { transform: translate(0, 0); }
  `;

const HeroContainer = styled("section")`
  background-image: url(${HeroBGImage.src});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 1100px;
  position: relative;
`;

const ContentContainer = styled("div")`
  position: absolute;
  bottom: 10%;
  left: 5%;
  width: 90%;
  margin: auto;
  background: rgba(90, 24, 154, 0.1);
  box-shadow: 0px 8px 100px 30px rgba(16, 0, 43, 0.5);
  backdrop-filter: blur(10px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 32px;
  ${COLUMN_ALIGN_CENTER___JUSTIFY_START}
  gap: 32px;
  padding-bottom: 58px;
  color: var(--Whitish);
`;

const HeroLogoWrapper = styled("div")`
  ${COLUMN_ALIGN_CENTER___JUSTIFY_START}
  margin-top: -100px;
`;

const HeroLogoContainer = styled("div")`
  position: relative;
`;

const OrangeBulletStyled = styled(Image)<{
  bottom: number;
  right: number;
  rotation: number;
  size: number;
}>`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  right: ${(props) => props.right}%;
  bottom: ${(props) => props.bottom}%;
  transform: rotate(${(props) => props.rotation}deg);
  // Apply the dynamic animation
  animation: ${moveAnimationOrange()} 5s infinite ease;
`;
const BlueBulletStyled = styled(Image)<{
  bottom: number;
  left: number;
  rotation: number;
  size: number;
}>`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  left: ${(props) => props.left}%;
  bottom: ${(props) => props.bottom}%;
  transform: rotate(${(props) => props.rotation}deg);
  // Apply the dynamic animation
  animation: ${moveAnimationBlue()} 5s infinite ease;
`;
const HeroLogoStyled = styled(Image)`
  width: 445px;
  height: 272px;
  position: relative;
  z-index: 1;
`;

const BlueAxeStyled = styled(Image)``;

const OrangeAxeStyled = styled(Image)``;

const CompanyName = styled("h1")`
  ${TEXT_64_900}
`;

const HeroDescription = styled("span")`
  ${TEXT_32_400}
  text-align: center;
  line-height: 37px;
`;

const BlueDescription = styled(HeroDescription)`
  color: var(--Pastal-Blue);
`;

const OrangeDescription = styled(HeroDescription)`
  color: var(--Orange);
`;

const BlueCharacter = styled("h1")`
  color: var(--Pastal-Blue);
  ${TEXT_64_900}
`;

const OrangeCharacter = styled("h1")`
  color: var(--Orange);
  ${TEXT_64_900}
`;

const CompanyNameWrapper = styled("div")`
  ${ROW_ALIGN_START__JUSTIFY_START}
`;
