import {
  COLUMN_ALIGN_START__JUSTIFY_START,
  COLUMN_ALIGN_START__SPACE_B,
  MAX_WIDTH_RESPONSIVENESS,
  ROW_ALIGN_START__JUSTIFY_START,
} from "@/app/styles/global-styles";
import {
  TEXT_24_400,
  TEXT_32_500,
  TEXT_48_700,
} from "@/app/styles/global-typography";
import styled from "@emotion/styled";
import MinersLogo from "@/app/assets/Miners.png";
import CryptoniteLogo from "@/app/assets/Cryptonite.png";
import Image from "next/image";
import { mediaQueries } from "@/app/styles/mediaQueries";
import { Divider } from "@mui/material";

export const News = () => {
  return (
    <NewsContainer id="Events">
      <SectionTitle>News & Events</SectionTitle>
      <ItemsWrapper>
        <NewsItem>
          <ItemPic src={MinersLogo} alt="Miners" />
          <ItemTitle>Miners NFTs</ItemTitle>
          <ItemDescription>
            The first 1000 miners NFTs are now available for sale. Get yours
            today!
          </ItemDescription>
        </NewsItem>
        <NewsItem>
          <ItemPic src={CryptoniteLogo} alt="Cryptonite" />
          <ItemTitle>Cryptonite NFTs</ItemTitle>
          <ItemDescription>
            The first 1000 Cryptonite NFTs are now available for sale. Get yours
            today!
          </ItemDescription>
        </NewsItem>
      </ItemsWrapper>
      <HorizontalDivider orientation="horizontal" flexItem />
    </NewsContainer>
  );
};

const NewsContainer = styled("section")`
  width: 90%;
  ${MAX_WIDTH_RESPONSIVENESS}
  ${COLUMN_ALIGN_START__SPACE_B}
  gap:46px;
  margin: 0 auto 160px;
  ${mediaQueries.lessThan(`xl`)`
    gap: 36px;
    margin-bottom: 120px;
  `}
  ${mediaQueries.lessThan(`lg`)`
    gap: 26px;
    margin-bottom: 100px;
  `}
  ${mediaQueries.lessThan(`md`)`
    gap: 16px;  
    margin-bottom: 80px;
  `}
  ${mediaQueries.lessThan(`sm`)`
    gap: 32px;
    margin-bottom: 60px;
  `}
`;

const SectionTitle = styled("h1")`
  ${TEXT_48_700}
  color: var(--Primary);
  ${mediaQueries.lessThan("xl")`
  font-size: 40px;
  `}
  ${mediaQueries.lessThan("lg")`
  font-size: 34px;
  `}
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

const ItemsWrapper = styled("div")`
  ${ROW_ALIGN_START__JUSTIFY_START}
  width: 100%;
  gap: 24px;
  ${mediaQueries.lessThan("sm")`
  width: 100%;
    flex-direction: column ;
    gap: 16px;
  `};
`;

const NewsItem = styled("div")`
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  /* gap:16px; */
  // set width to the half of the full width minus 16px
  width: calc(50% - 8px);
  ${mediaQueries.lessThan("md")`
    width: 100%;
  `}
`;

const ItemPic = styled(Image)`
  height: auto;
  width: 100%;
`;

const ItemTitle = styled("h2")`
  ${TEXT_32_500}
  color: var(--Primary);
  ${mediaQueries.lessThan("xl")`
  font-size: 28px;
  `}
  ${mediaQueries.lessThan("lg")`
  font-size: 24px;
  `}
  ${mediaQueries.lessThan("md")`
  font-size: 20px;
  `}
  ${mediaQueries.lessThan("sm")`
  font-size: 16px;
  margin-top:16px;
  margin-bottom:8px;
  `}
  ${mediaQueries.lessThan("xs")`
  font-size: 14px;
  `}
`;

const ItemDescription = styled("p")`
  ${TEXT_24_400}
  color: rgba(90, 24, 154, 0.5);
  line-height: 33.6px;
  ${mediaQueries.lessThan("xl")`
  font-size: 28px;
  `}
  ${mediaQueries.lessThan("lg")`
  font-size: 24px;
  `}
  ${mediaQueries.lessThan("md")`
  font-size: 20px;
  `}
  ${mediaQueries.lessThan("sm")`
  font-size: 16px;
  `}
  ${mediaQueries.lessThan("xs")`
  font-size: 14px;
  line-height:16.09px;
  `}
`;

const HorizontalDivider = styled(Divider)`
  display: none;
  width: 90%;
  margin: 30px 20px 30px 20px;
  height: 2px;
  /* height: 100px; */
  background: #5a189a1a;
  ${mediaQueries.lessThan("sm")`
    display:block;
    `}
`;
