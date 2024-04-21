import { WhiteListButton } from "@/app/components/button/connect";
import { PrimaryButton } from "@/app/components/button/primary";
import {
  COLUMN_ALIGN_CENTER___JUSTIFY_START,
  COLUMN_ALIGN_START__JUSTIFY_START,
  MAX_WIDTH_RESPONSIVENESS,
  ROW_ALIGN_CENTER__JUSTIFY_START,
} from "@/app/styles/global-styles";
import {
  TEXT_24_400,
  TEXT_32_700,
  TEXT_64_400,
  TEXT_64_900,
} from "@/app/styles/global-typography";
import styled from "@emotion/styled";
import { Divider } from "@mui/material";
import { bigShoulder } from "@/app/utils/font-loader";
import { mediaQueries } from "@/app/styles/mediaQueries";

export const StartMineMasters = () => {
  return (
    <StartMineMastersContainer>
      <StartMineMastersContent>
        <LeftSideWrapper>
          <LeftSideTitle className={bigShoulder.className}>Start</LeftSideTitle>
          <ConnectButtonStyle>
            <WhiteListButton />
          </ConnectButtonStyle>
          <ConnectButtonWrapper>
            <WhiteListButton customStyles={true} />
          </ConnectButtonWrapper>
        </LeftSideWrapper>
        <VerticalDivider orientation="vertical" flexItem />
        <HorizontalDivider orientation="horizontal" flexItem />
        <RightSideWrapper>
          <RightSideTitle>
            The Saga of MineMasters : The Shattered Realms
          </RightSideTitle>
          <RightSideDescription>
            In the distant future, humanity masters interstellar travel,
            unveiling the secrets of the cosmos. Among the stars, they find
            Cryptonite-rich planets, igniting a new era of exploration and
            conquest by MineMasters seeking fortune.
          </RightSideDescription>
        </RightSideWrapper>
      </StartMineMastersContent>
    </StartMineMastersContainer>
  );
};

const StartMineMastersContainer = styled("section")`
  ${mediaQueries.lessThan(`sm`)`
   padding-top:37px;
`};

  ${MAX_WIDTH_RESPONSIVENESS}
`;
const StartMineMastersContent = styled("div")`
  ${ROW_ALIGN_CENTER__JUSTIFY_START}
  gap:32px;
  margin: auto;
  padding: 32px;
  background: rgba(254, 247, 255, 0.16);
  box-shadow: inset 0px -4px 8px rgba(36, 0, 70, 0.34);
  border-radius: 32px;
  ${mediaQueries.lessThan("md")`
    padding: 24px;
    gap: 24px;
    border-radius: 24px;
    `}
  ${mediaQueries.lessThan("sm")`
    padding: 16px;
    gap: 16px;
    border-radius: 16px;
    flex-direction:column-reverse;
    `}
    ${mediaQueries.lessThan("xs")`
    padding: 8px;
    gap: 8px;
    `}
    ${mediaQueries.lessThan("fhd")`
    width: 90%;
    `}
`;

const LeftSideWrapper = styled("div")`
  ${COLUMN_ALIGN_CENTER___JUSTIFY_START}
  gap: 24px;
  margin-right: 40px;
  ${mediaQueries.lessThan("md")`
    margin-right: 0;
    padding: 0 16px;
    `}
  ${mediaQueries.lessThan("sm")`
    width: 100%;
    flex-direction:row;
    gap:16px;
    justify-content:space-between;
    `}
    ${mediaQueries.lessThan("xs")`
    gap: 8px;
    `}
`;

const LeftSideTitle = styled("h1")`
  color: var(--Primary);
  text-shadow: 0px 4px 18px rgba(36, 0, 70, 0.28);
  ${TEXT_64_900}
  ${mediaQueries.lessThan("md")`
  font-size: 48px;
  `}
  ${mediaQueries.lessThan("sm")`
  font-size: 32px;
  `}
`;

const VerticalDivider = styled(Divider)`
  width: 2px;
  /* height: 100px; */
  background: #5a189a1a;
  ${mediaQueries.lessThan("sm")`
    display:none;
    `}
`;

const HorizontalDivider = styled(Divider)`
  display: none;
  height: 2px;
  /* height: 100px; */
  background: #5a189a1a;
  ${mediaQueries.lessThan("sm")`
    display:block;
    `}
`;

const RightSideWrapper = styled("div")`
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  gap:24px;
  max-width: 900px;
  padding: 20px;
  ${mediaQueries.lessThan("sm")`
    gap:16px;
    `}
`;

const RightSideTitle = styled("h1")`
  ${TEXT_32_700}
  color: var(--Primary);
  /* text-shadow: 0px 4px 18px rgba(36, 0, 70, 0.28); */
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

const RightSideDescription = styled("p")`
  ${TEXT_24_400}
  color: var(--Dark-Purple);
  line-height: 33.6px;
  ${mediaQueries.lessThan("md")`
  font-size: 20px;
  `}
  ${mediaQueries.lessThan("sm")`
  font-size: 16px;
  `}
  ${mediaQueries.lessThan("xs")`
  line-height:16.09px;
  font-size: 14px;
  `}
`;

const ConnectButtonStyle = styled("div")`
  ${mediaQueries.lessThan("sm")`
      display:none;
      `}
`;
const ConnectButtonWrapper = styled("div")`
  display: none;
  ${mediaQueries.lessThan("sm")`
        display:block;
           .MuiButton-startIcon img {
        filter: brightness(0) invert(1);
      }
      span {
        color: white; /* Change text color to white */
      }
      `}
`;
