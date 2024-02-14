import { ROW_ALIGN_CENTER__SPACE_B } from "@/app/styles/global-styles";
import { TEXT_24_500 } from "@/app/styles/global-typography";
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
`;

const StyledImage = styled("img")`
  position: absolute;
  left: 0;
  top: -50px;
`;

const FeatureBoxTitle = styled("h3")`
  color: var(--Violet);
  ${TEXT_24_500};
  position: absolute;
  right: 16px;
`;
