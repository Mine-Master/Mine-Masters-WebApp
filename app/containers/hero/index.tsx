import styled from "@emotion/styled";
import HeroBGImage from "@/app/assets/Hero.png";
import {
  COLUMN_ALIGN_CENTER___JUSTIFY_START,
  LineBreak,
  ROW_ALIGN_START__JUSTIFY_START,
} from "@/app/styles/global-styles";
import HeroLogo from "@/app/assets/Hero-Logo.png";
import Image from "next/image";
import { TEXT_32_400, TEXT_64_900 } from "@/app/styles/global-typography";
import { bigShoulder } from "@/app/utils/font-loader";
export const Hero = () => {
  return (
    <HeroContainer>
      <ContentContainer>
        <HeroLogoWrapper>
          <HeroLogoStyled src={HeroLogo} alt="Logo" />
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

const HeroLogoStyled = styled(Image)`
  width: 445px;
  height: 272px;
`;

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
