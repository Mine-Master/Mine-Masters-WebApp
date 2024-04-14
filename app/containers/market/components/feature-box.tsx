import { ROW_ALIGN_CENTER__SPACE_B } from "@/app/styles/global-styles";
import { TEXT_24_500 } from "@/app/styles/global-typography";
import { mediaQueries } from "@/app/styles/mediaQueries";
import styled from "@emotion/styled";
import Image from "next/image";

interface FeatureBoxProps {
  title: string;
  icon: string;
}
export const FeatureBox = ({ title, icon, ...props }: FeatureBoxProps) => {
  return (
    <FeatureBoxContainer {...props}>
      <StyledImage src={icon} alt={title} />
      <FeatureBoxTitle>{title}</FeatureBoxTitle>
    </FeatureBoxContainer>
  );
};

const FeatureBoxContainer = styled("div")`
  width: 267px;
  height: 60px;
  ${ROW_ALIGN_CENTER__SPACE_B}
  padding: 16px;
  border: 1px solid var(--Violet);
  border-radius: 16px;
  /* background: rgba(90, 24, 154, 0.1); */
  backdrop-filter: blur(50px);
  position: relative;
  margin-top: 32px;
  ${mediaQueries.lessThan("lg")`
  width: 240px;
  height: 60px;
  padding: 14px;
  `}
  ${mediaQueries.lessThan("sm")`
  margin-top: 24px;
  width: 200px;
  height: 50px;
  padding: 12px;
 
  `}
  ${mediaQueries.lessThan("xs")`
  margin-top: 16px;
  width: 148px;
  height: 40px;
  padding: 8px;
  `}
`;

const StyledImage = styled("img")`
  position: absolute;
  left: 0;
  top: -50px;
  ${mediaQueries.lessThan("sm")`
  top: -30px;
   width:80px;
    height:80px;
  `}
  ${mediaQueries.lessThan("xs")`
  top: -10px;
    width:50px;
      height:50px;
  `}
`;

const FeatureBoxTitle = styled("h3")`
  color: var(--Violet);
  ${TEXT_24_500};
  position: absolute;
  right: 16px;
  ${mediaQueries.lessThan("md")`
  font-size: 20px;
  right: 25px;
  `}
  ${mediaQueries.lessThan("sm")`
  font-size: 16px;
  right: 20px;
  `}
  ${mediaQueries.lessThan("xs")`
  font-size: 14px;
  right: 15px;
  `}
`;
