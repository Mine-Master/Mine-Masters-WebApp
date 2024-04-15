import { css, keyframes, styled } from "@mui/material";
import Image from "next/image";
import Image1 from "../../../assets/miner-nft/Vector (1).png";
import Image2 from "../../../assets/miner-nft/Vector (2).png";
import Image3 from "../../../assets/miner-nft/Group 10.png";
import Image4 from "../../../assets/miner-nft/Vector (3).png";
import Image5 from "../../../assets/miner-nft/Group 9.png";
import Image6 from "../../../assets/miner-nft/Group 14.png";
import Image7 from "../../../assets/miner-nft/Group 11.png";
import Image8 from "../../../assets/miner-nft/Group 13.png";
import Image9 from "../../../assets/miner-nft/Group 15.png";
import Image10 from "../../../assets/miner-nft/Group 16.png";
import Image11 from "../../../assets/miner-nft/Group 12.png";
import Image12 from "../../../assets/miner-nft/Group 17.png";
import Image13 from "../../../assets/miner-nft/Vector (5).png";
import Image14 from "../../../assets/miner-nft/Group 19.png";
import Image15 from "../../../assets/miner-nft/Group 21.png";
import Image16 from "../../../assets/miner-nft/Vector (6).png";
import Image17 from "../../../assets/miner-nft/Group 18.png";
import Image18 from "../../../assets/miner-nft/Vector (7).png";
import Image19 from "../../../assets/miner-nft/Group 20.png";
import Image20 from "../../../assets/miner-nft/Vector (4).png";
import { mediaQueries } from "@/app/styles/mediaQueries";

interface CrystalsProps {}

export const Crystals = ({}: CrystalsProps) => {
  const ChangeValueGenerator = () => {
    return Math.floor(Math.random() * 100) - 50;
  };

  return (
    <CrystalsContainer>
      <StyledImageOne
        changeValue={ChangeValueGenerator()}
        src={Image1}
        alt="crystal 1"
      />
      <StyledImageTwo
        changeValue={ChangeValueGenerator()}
        src={Image2}
        alt="crystal 2"
      />
      <StyledImageThree
        changeValue={ChangeValueGenerator()}
        src={Image3}
        alt="crystal 3"
      />
      <StyledImageFour
        changeValue={ChangeValueGenerator()}
        src={Image4}
        alt="crystal 4"
      />
      <StyledImageFive
        changeValue={ChangeValueGenerator()}
        src={Image5}
        alt="crystal 5"
      />
      <StyledImageSix
        changeValue={ChangeValueGenerator()}
        src={Image6}
        alt="crystal 6"
      />
      <StyledImageSeven
        changeValue={ChangeValueGenerator()}
        src={Image7}
        alt="crystal 7"
      />
      <StyledImageEight
        changeValue={ChangeValueGenerator()}
        src={Image8}
        alt="crystal 8"
      />
      <StyledImageNine
        changeValue={ChangeValueGenerator()}
        src={Image9}
        alt="crystal 9"
      />
      <StyledImageTen
        changeValue={ChangeValueGenerator()}
        src={Image10}
        alt="crystal 10"
      />
      <StyledImageEleven
        changeValue={ChangeValueGenerator()}
        src={Image11}
        alt="crystal 11"
      />
      <StyledImageTwelve
        changeValue={ChangeValueGenerator()}
        src={Image12}
        alt="crystal 12"
      />
      <StyledImageThirteen
        changeValue={ChangeValueGenerator()}
        src={Image13}
        alt="crystal 13"
      />
      <StyledImageFourteen
        changeValue={ChangeValueGenerator()}
        src={Image14}
        alt="crystal 14"
      />
      <StyledImageFifteen
        changeValue={ChangeValueGenerator()}
        src={Image15}
        alt="crystal 15"
      />
      <StyledImageSixteen
        changeValue={ChangeValueGenerator()}
        src={Image16}
        alt="crystal 16"
      />
      <StyledImageSeventeen
        changeValue={ChangeValueGenerator()}
        src={Image17}
        alt="crystal 17"
      />
      <StyledImageEighteen
        changeValue={ChangeValueGenerator()}
        src={Image18}
        alt="crystal 18"
      />
      <StyledImageLast
        changeValue={ChangeValueGenerator()}
        src={Image19}
        alt="crystal 19"
      />
    </CrystalsContainer>
  );
};

// Define a dynamic keyframes function
const moveAnimation = (changeValue: number) => keyframes`
  0% { transform: translate(0, 0); }
  50% { transform: translate(${changeValue}%, -50%); }
  100% { transform: translate(0, 0); }
  `;

const StyledImage = styled(Image)<{
  changeValue: number;
}>`
  // Apply the dynamic animation
  animation: ${(props) => moveAnimation(props.changeValue)} 5s infinite ease;
`;

const CrystalsContainer = styled("div")``;

const StyledImageLast = styled(StyledImage)`
  position: absolute;
  right: 35%;
  bottom: 40%;
  ${mediaQueries.lessThan("lg")`
     right: 28%;
     bottom: 28%;
     width: 45px;
     height: 45px;
  `}
  ${mediaQueries.lessThan("md")`
      right: 27%;
      bottom: 27%;
      width: 40px;
      height: 37px;
  `}
   ${mediaQueries.lessThan("sm")`
      right: 27%;
      bottom: 25%;
      width: 35px;
      height: 30px;
  `}
    ${mediaQueries.lessThan("xs")`
      right: 25%;
      bottom: 22%;
      width: 20px;
      height: 15px;
  `}
`;

const StyledImageOne = styled(StyledImage)`
  position: absolute;
  right: 5%;
  bottom: 65%;
  ${mediaQueries.lessThan("lg")`
     right: 5%;
     bottom: 39%;
     width: 50px;
     height: 40px;
  `}
  ${mediaQueries.lessThan("md")`
     right: 5%;
    bottom: 32%;
    width: 40px;
    height: 30px;
  `}
   ${mediaQueries.lessThan("sm")`
     right: 5%;
    bottom: 31%;
    width: 30px;
    height: 20px;
  `}
    ${mediaQueries.lessThan("xs")`
      right: 5%;
    bottom: 21%;
    width: 18px;
    height: 15px;
  `}
`;

const StyledImageTwo = styled(StyledImage)`
  position: absolute;
  right: 5%;
  bottom: 55%;
  ${mediaQueries.lessThan("lg")`
     right: 5%;
     bottom: 44%;
     width: 38px;
     height: 28px;
  `}
  ${mediaQueries.lessThan("md")`
    right: 5%;
    bottom: 42%;
    width: 33px;
    height: 24px;
  `}
   ${mediaQueries.lessThan("sm")`
    right: 5%;
   bottom: 36%;
    width: 25px;
    height: 19px;
  `}
    ${mediaQueries.lessThan("xs")`
    bottom: 26%;
    width: 15px;
    height: 10px;
  `}
`;
const StyledImageThree = styled(StyledImage)`
  position: absolute;
  right: 10%;
  bottom: 80%;
  ${mediaQueries.lessThan("lg")`
     right: 10%;
     bottom: 53%;
     width: 50px;
     height: 30px;
  `}
  ${mediaQueries.lessThan("md")`
   
    bottom: 45%;
    width: 44px;
    height: 24px;
  `}
   ${mediaQueries.lessThan("sm")`
  
   bottom: 40%;
    width: 35px;
    height: 19px;
  `}
    ${mediaQueries.lessThan("xs")`
    bottom: 33%;
    width: 27px;
    height: 10px;
  `}
`;

const StyledImageFour = styled(StyledImage)`
  position: absolute;
  right: 11%;
  bottom: 70%;
  ${mediaQueries.lessThan("lg")`
     bottom: 63%;
     width: 34px;
     height: 15px;
  `}
  ${mediaQueries.lessThan("md")`
   
    bottom: 54%;
    width: 30px;
    height: 14px;
  `}
   ${mediaQueries.lessThan("sm")`
  
   bottom: 49%;
    width: 26px;
    height: 13px;
  `}
    ${mediaQueries.lessThan("xs")`
    bottom: 40%;
    width: 24px;
    height: 10px;
  `}
`;

const StyledImageFive = styled(StyledImage)`
  position: absolute;
  right: 10%;
  bottom: 60%;
  ${mediaQueries.lessThan("lg")`
     right: 10%;
     bottom: 53%;
     width: 50px;
     height: 30px;
  `}
  ${mediaQueries.lessThan("md")`
   
    bottom: 45%;
    width: 44px;
    height: 24px;
  `}
   ${mediaQueries.lessThan("sm")`
    right:8%;
    bottom: 44%;
    width: 35px;
    height: 19px;
  `}
    ${mediaQueries.lessThan("xs")`
    bottom: 23%;
    width: 27px;
    height: 10px;
  `}
`;

const StyledImageSix = styled(StyledImage)`
  position: absolute;
  right: 15%;
  bottom: 85%;
  ${mediaQueries.lessThan("lg")`
     bottom: 73%;
     width: 14px;
     height: 20px;
  `}
  ${mediaQueries.lessThan("md")`
   
    bottom: 62%;
    width: 12px;
    height: 18px;
  `}
   ${mediaQueries.lessThan("sm")`
  
   bottom: 54%;
    width: 11px;
    height: 15px;
  `}
    ${mediaQueries.lessThan("xs")`
    bottom: 44%;
    width: 10px;
    height: 12px;
  `}
`;
const StyledImageSeven = styled(StyledImage)`
  position: absolute;
  right: 15%;
  bottom: 65%;
  ${mediaQueries.lessThan("lg")`
     right: 15%;
     bottom: 47%;
     width: 60px;
     height: 100px;
  `}
  ${mediaQueries.lessThan("md")`
   
    bottom: 48%;
    width: 54px;
    height: 80px;
  `}
   ${mediaQueries.lessThan("sm")`
  
   bottom: 33%;
    width: 35px;
    height: 60px;
  `}
    ${mediaQueries.lessThan("xs")`
    bottom: 30%;
    width: 20px;
    height: 27px;
  `}
`;

const StyledImageEight = styled(StyledImage)`
  position: absolute;
  right: 18%;
  bottom: 79%;
  ${mediaQueries.lessThan("lg")`
     bottom: 65%;
     width: 21px;
     height: 27px;
  `}
  ${mediaQueries.lessThan("md")`
   
    bottom: 57%;
    width: 18px;
    height: 24px;
  `}
   ${mediaQueries.lessThan("sm")`
  
   bottom: 46%;
    width: 14px;
    height: 22px;
  `}
    ${mediaQueries.lessThan("xs")`
    bottom: 39%;
    width: 11px;
    height: 17px;
  `}
`;
const StyledImageNine = styled(StyledImage)`
  position: absolute;
  right: 23%;
  bottom: 85%;
  ${mediaQueries.lessThan("lg")`
     right: 20%;
     bottom: 68%;
     width: 25px;
     height: 40px;
  `}
  ${mediaQueries.lessThan("md")`
   
    bottom: 58%;
    width: 20px;
    height: 30px;
  `}
   ${mediaQueries.lessThan("sm")`
  
   bottom: 50%;
    width: 15px;
    height: 25px;
  `}
    ${mediaQueries.lessThan("xs")`
    bottom: 43%;
    width: 10px;
    height: 20px;
  `}
`;

const StyledImageTen = styled(StyledImage)`
  position: absolute;
  right: 25%;
  bottom: 80%;
  ${mediaQueries.lessThan("lg")`
     right: 25%;
     bottom: 60%;
     width: 20px;
     height: 22px;
  `}
  ${mediaQueries.lessThan("md")`
   
    bottom: 55%;
    width: 15px;
    height: 20px;
  `}
   ${mediaQueries.lessThan("sm")`
  
   bottom: 44%;
    width: 25px;
    height: 20px;
  `}
    ${mediaQueries.lessThan("xs")`
    right: 21%;
    bottom: 40%;
    width: 15px;
    height: 10px;
  `}
`;

const StyledImageEleven = styled(StyledImage)`
  position: absolute;
  right: 23%;
  bottom: 60%;
  ${mediaQueries.lessThan("lg")`
     right: 15%;
     bottom: 37%;
     width: 90px;
     height: 105px;
  `}
  ${mediaQueries.lessThan("md")`
   
    bottom: 36%;
    width: 60px;
    height: 70px;
  `}
   ${mediaQueries.lessThan("sm")`
  
   bottom: 40%;
    width: 40px;
    height: 55px;
  `}
    ${mediaQueries.lessThan("xs")`
    bottom: 35%;
    width: 20px;
    height: 26px;
  `}
`;

const StyledImageTwelve = styled(StyledImage)`
  position: absolute;
  right: 25%;
  bottom: 50%;
  ${mediaQueries.lessThan("lg")`
     right: 25%;
     bottom: 40%;
     width: 30px;
     height: 52px;
  `}
  ${mediaQueries.lessThan("md")`
   right:23%;
    bottom: 35%;
    width: 25px;
    height: 45px;
  `}
   ${mediaQueries.lessThan("sm")`
  
   bottom: 30%;
    width: 20px;
    height: 30px;
  `}
    ${mediaQueries.lessThan("xs")`
    bottom: 25%;
    width: 15px;
    height: 24px;
  `}
`;

const StyledImageThirteen = styled(StyledImage)`
  position: absolute;
  right: 30%;
  bottom: 70%;
  ${mediaQueries.lessThan("lg")`
     right: 27%;
    bottom: 56%;
     width: 15px;
     height: 16px;
  `}
  ${mediaQueries.lessThan("md")`
   
    bottom: 52%;
    width: 15px;
    height: 13px;
  `}
   ${mediaQueries.lessThan("sm")`
  
   bottom: 46%;
    width: 10px;
    height: 11px;
  `}
    ${mediaQueries.lessThan("xs")`
    right: 18%;
    bottom: 42%;
    width: 8px;
    height: 9px;
  `}
`;

const StyledImageFourteen = styled(StyledImage)`
  position: absolute;
  right: 28%;
  bottom: 50%;
  ${mediaQueries.lessThan("lg")`
     right: 28%;
     bottom: 43%;
     width: 75px;
     height: 63px;
  `}
  ${mediaQueries.lessThan("md")`
   
    bottom: 37%;
    width: 62px;
    height: 58px;
  `}
   ${mediaQueries.lessThan("sm")`
  right:22%;
   bottom: 32%;
    width: 43px;
    height: 36px;
  `}
    ${mediaQueries.lessThan("xs")`
    bottom: 30%;
    width: 21px;
    height: 23px;
  `}
`;

const StyledImageFifteen = styled(StyledImage)`
  position: absolute;
  right: 34%;
  bottom: 66%;
  ${mediaQueries.lessThan("lg")`
     right: 18%;
     bottom: 61%;
     width: 67px;
     height: 33px;
  `}
  ${mediaQueries.lessThan("md")`
   
    bottom: 54%;
    width: 60px;
    height: 28px;
  `}
   ${mediaQueries.lessThan("sm")`
  
   bottom: 49%;
    width: 30px;
    height: 23px;
  `}
    ${mediaQueries.lessThan("xs")`
    right:7%;
    bottom: 30%;
    width: 25px;
    height: 12px;
  `}
`;

const StyledImageSixteen = styled(StyledImage)`
  position: absolute;
  right: 37%;
  bottom: 61%;
  ${mediaQueries.lessThan("lg")`
     right: 22%;
     bottom: 55%;
     width: 18px;
     height: 23px;
  `}
  ${mediaQueries.lessThan("md")`
   
    bottom: 53%;
    width: 15px;
    height: 19px;
  `}
   ${mediaQueries.lessThan("sm")`
  
   bottom: 48%;
    width: 13px;
    height: 16px;
  `}
    ${mediaQueries.lessThan("xs")`
    bottom: 42%;
    width: 10px;
    height: 13px;
  `}
`;

const StyledImageSeventeen = styled(StyledImage)`
  position: absolute;
  right: 37%;
  bottom: 56%;
  ${mediaQueries.lessThan("lg")`
   right: 24%;
    bottom: 50%;
     width: 42px;
     height: 18px;
  `}
  ${mediaQueries.lessThan("md")`
   
    bottom: 48%;
    width: 34px;
    height: 15px;
  `}
   ${mediaQueries.lessThan("sm")`
  
   bottom: 42%;
    width: 30px;
    height: 12px;
  `}
    ${mediaQueries.lessThan("xs")`
    right: 21%;
    bottom: 37%;
    width: 25px;
    height: 10px;
  `}
`;

const StyledImageEighteen = styled(StyledImage)`
  position: absolute;
  right: 37%;
  bottom: 46%;
  ${mediaQueries.lessThan("lg")`
     right: 30%;
     bottom: 42%;
     width: 23px;
     height: 17px;
  `}
  ${mediaQueries.lessThan("md")`
   
    bottom: 37%;
    width: 19px;
    height: 14px;
  `}
   ${mediaQueries.lessThan("sm")`
  
   bottom: 33%;
    width: 14px;
    height: 10px;
  `}
    ${mediaQueries.lessThan("xs")`
    right:14%;
    bottom: 27%;
    width: 20px;
    height: 8px;
  `}
`;
