import { css, styled } from "@mui/material";
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

interface CrystalsProps {
  componentIsHovered: boolean;
}

export const Crystals = ({ componentIsHovered }: CrystalsProps) => {
  const ChangeValueGenerator = () => {
    return Math.floor(Math.random() * 100) - 50;
  };
  return (
    <CrystalsContainer componentIsHovered={componentIsHovered}>
      <StyledImage
        changeValue={ChangeValueGenerator()}
        componentIsHovered={componentIsHovered}
        src={Image1}
        alt="crystal 1"
        style={{
          position: "absolute",
          right: "5%",
          bottom: "65%",
        }}
      />
      <StyledImage
        changeValue={ChangeValueGenerator()}
        componentIsHovered={componentIsHovered}
        src={Image2}
        alt="crystal 2"
        style={{
          position: "absolute",
          right: "5%",
          bottom: "55%",
        }}
      />
      <StyledImage
        changeValue={ChangeValueGenerator()}
        componentIsHovered={componentIsHovered}
        src={Image3}
        alt="crystal 3"
        style={{
          position: "absolute",
          right: "10%",
          bottom: "80%",
        }}
      />
      <StyledImage
        changeValue={ChangeValueGenerator()}
        componentIsHovered={componentIsHovered}
        src={Image4}
        alt="crystal 4"
        style={{
          position: "absolute",
          right: "11%",
          bottom: "70%",
        }}
      />
      <StyledImage
        changeValue={ChangeValueGenerator()}
        componentIsHovered={componentIsHovered}
        src={Image5}
        alt="crystal 5"
        style={{
          position: "absolute",
          right: "10%",
          bottom: "60%",
        }}
      />
      <StyledImage
        changeValue={ChangeValueGenerator()}
        componentIsHovered={componentIsHovered}
        src={Image6}
        alt="crystal 6"
        style={{
          position: "absolute",
          right: "15%",
          bottom: "85%",
        }}
      />
      <StyledImage
        changeValue={ChangeValueGenerator()}
        componentIsHovered={componentIsHovered}
        src={Image7}
        alt="crystal 7"
        style={{
          position: "absolute",
          right: "15%",
          bottom: "65%",
        }}
      />
      <StyledImage
        changeValue={ChangeValueGenerator()}
        componentIsHovered={componentIsHovered}
        src={Image8}
        alt="crystal 8"
        style={{
          position: "absolute",
          right: "18%",
          bottom: "79%",
        }}
      />
      <StyledImage
        changeValue={ChangeValueGenerator()}
        componentIsHovered={componentIsHovered}
        src={Image9}
        alt="crystal 9"
        style={{
          position: "absolute",
          right: "23%",
          bottom: "85%",
        }}
      />
      <StyledImage
        changeValue={ChangeValueGenerator()}
        componentIsHovered={componentIsHovered}
        src={Image10}
        alt="crystal 10"
        style={{
          position: "absolute",
          right: "25%",
          bottom: "80%",
        }}
      />
      <StyledImage
        changeValue={ChangeValueGenerator()}
        componentIsHovered={componentIsHovered}
        src={Image11}
        alt="crystal 11"
        style={{
          position: "absolute",
          right: "23%",
          bottom: "60%",
        }}
      />
      <StyledImage
        changeValue={ChangeValueGenerator()}
        componentIsHovered={componentIsHovered}
        src={Image12}
        alt="crystal 12"
        style={{
          position: "absolute",
          right: "25%",
          bottom: "50%",
        }}
      />
      <StyledImage
        changeValue={ChangeValueGenerator()}
        componentIsHovered={componentIsHovered}
        src={Image13}
        alt="crystal 13"
        style={{
          position: "absolute",
          right: "30%",
          bottom: "70%",
        }}
      />
      <StyledImage
        changeValue={ChangeValueGenerator()}
        componentIsHovered={componentIsHovered}
        src={Image14}
        alt="crystal 14"
        style={{
          position: "absolute",
          right: "28%",
          bottom: "50%",
        }}
      />
      <StyledImage
        changeValue={ChangeValueGenerator()}
        componentIsHovered={componentIsHovered}
        src={Image15}
        alt="crystal 15"
        style={{
          position: "absolute",
          right: "34%",
          bottom: "66%",
        }}
      />
      <StyledImage
        changeValue={ChangeValueGenerator()}
        componentIsHovered={componentIsHovered}
        src={Image16}
        alt="crystal 16"
        style={{
          position: "absolute",
          right: "37%",
          bottom: "61%",
        }}
      />
      <StyledImage
        changeValue={ChangeValueGenerator()}
        componentIsHovered={componentIsHovered}
        src={Image17}
        alt="crystal 17"
        style={{
          position: "absolute",
          right: "37%",
          bottom: "56%",
        }}
      />
      <StyledImage
        changeValue={ChangeValueGenerator()}
        componentIsHovered={componentIsHovered}
        src={Image18}
        alt="crystal 18"
        style={{
          position: "absolute",
          right: "37%",
          bottom: "46%",
        }}
      />
      <StyledImage
        changeValue={ChangeValueGenerator()}
        componentIsHovered={componentIsHovered}
        src={Image19}
        alt="crystal 19"
        style={{
          position: "absolute",
          right: "35%",
          bottom: "40%",
        }}
      />

      {/* <StyledImage
        changeValue={ChangeValueGenerator()}
        componentIsHovered={componentIsHovered}
        src={image1}
        alt="crystal"
        style={{
          position: "absolute",
          right: "5%",
          bottom: "70%",
        }}
      />
      <StyledImage
        changeValue={ChangeValueGenerator()}
        componentIsHovered={componentIsHovered}
        src={image2}
        alt="crystal"
        style={{
          position: "absolute",
          right: "17%",
          bottom: "60%",
        }}
      />
      <StyledImage
        changeValue={ChangeValueGenerator()}
        componentIsHovered={componentIsHovered}
        src={image3}
        alt="crystal"
        style={{
          position: "absolute",
          right: "25%",
          bottom: "55%",
        }}
      />
      <StyledImage
        changeValue={ChangeValueGenerator()}
        componentIsHovered={componentIsHovered}
        src={image4}
        alt="crystal"
        style={{
          position: "absolute",
          right: "19%",
          bottom: "40%",
        }}
      />
      <StyledImage
        changeValue={ChangeValueGenerator()}
        componentIsHovered={componentIsHovered}
        src={image5}
        alt="crystal"
        style={{
          position: "absolute",
          right: "15%",
          bottom: "70%",
        }}
      />
      <StyledImage
        changeValue={ChangeValueGenerator()}
        componentIsHovered={componentIsHovered}
        src={image6}
        alt="crystal"
        style={{
          position: "absolute",
          right: "10%",
          bottom: "50%",
        }}
      />
      <StyledImage
        changeValue={ChangeValueGenerator()}
        componentIsHovered={componentIsHovered}
        src={image10}
        alt="crystal"
        style={{
          position: "absolute",
          right: "5%",
          bottom: "70%",
        }}
      />
      <StyledImage
        changeValue={ChangeValueGenerator()}
        componentIsHovered={componentIsHovered}
        src={image11}
        alt="crystal"
        style={{
          position: "absolute",
          right: "17%",
          bottom: "60%",
        }}
      /> */}
    </CrystalsContainer>
  );
};

const StyledImage = styled(Image)<{
  componentIsHovered: boolean;
  changeValue: number;
}>`
  ${(props) =>
    props.componentIsHovered
      ? css`
          transition: all 0.6s ease;
          transform: translate(${props.changeValue}%, -50%);
        `
      : css`
          transition: all 0.6s ease;
          transform: translate(0, 0);
        `}
`;

const CrystalsContainer = styled("div")<{ componentIsHovered: boolean }>``;
/* * {
  transform: translate(0, 0);
}
${(props) =>
  props.componentIsHovered
    ? css`
        * {
          transition: all 0.6s ease;
          transform: translate(-50%, -50%);
        }
      `
    : css`
        * {
          transition: all 0.6s ease;
          transform: translate(0, 0);
        }
      `} */
