import { ConnectButton } from "@/app/components/button/connect";
import { PrimaryButton } from "@/app/components/button/primary";
import {
  COLUMN_ALIGN_CENTER___JUSTIFY_START,
  COLUMN_ALIGN_START__JUSTIFY_START,
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

export const StartMineMasters = () => {
  return (
    <StartMineMastersContainer>
      <StartMineMastersContent>
        <LeftSideWrapper>
          <LeftSideTitle className={bigShoulder.className}>Start</LeftSideTitle>
          <ConnectButton />
        </LeftSideWrapper>
        <VerticalDivider orientation="vertical" flexItem />
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

const StartMineMastersContainer = styled("section")``;

const StartMineMastersContent = styled("div")`
  width: 90%;
  ${ROW_ALIGN_CENTER__JUSTIFY_START}
  gap:32px;
  margin: auto;
  padding: 32px;
  background: rgba(254, 247, 255, 0.16);
  box-shadow: inset 0px -4px 8px rgba(36, 0, 70, 0.34);
  border-radius: 32px;
`;

const LeftSideWrapper = styled("div")`
  ${COLUMN_ALIGN_CENTER___JUSTIFY_START}
  gap: 24px;
  margin-right: 40px;
`;

const LeftSideTitle = styled("h1")`
  color: var(--Primary);
  text-shadow: 0px 4px 18px rgba(36, 0, 70, 0.28);
  ${TEXT_64_900}
`;

const VerticalDivider = styled(Divider)`
  width: 2px;
  /* height: 100px; */
  background: #5a189a1a;
`;

const RightSideWrapper = styled("div")`
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  gap:24px;
  max-width: 900px;
`;

const RightSideTitle = styled("h1")`
  ${TEXT_32_700}
  color: var(--Primary);
  /* text-shadow: 0px 4px 18px rgba(36, 0, 70, 0.28); */
`;

const RightSideDescription = styled("p")`
  ${TEXT_24_400}
  color: var(--Dark-Purple);
`;
