import {
  COLUMN_ALIGN_START__JUSTIFY_START,
  ROW_ALIGN_CENTER__JUSTIFY_START,
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

export const News = () => {
  return (
    <NewsContainer>
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
    </NewsContainer>
  );
};

const NewsContainer = styled("section")`
  width: 90%;
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  gap:46px;
  margin: 0 auto 160px;
`;

const SectionTitle = styled("h1")`
  ${TEXT_48_700}
`;

const ItemsWrapper = styled("div")`
  ${ROW_ALIGN_START__JUSTIFY_START}
  gap:24px
`;

const NewsItem = styled("div")`
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  gap:16px;
  // set width to the half of the full width minus 16px
  width: calc(50% - 8px);
`;

const ItemPic = styled(Image)``;

const ItemTitle = styled("h2")`
  ${TEXT_32_500}
  color: var(--Primary);
`;

const ItemDescription = styled("p")`
  ${TEXT_24_400}
  color: rgba(90, 24, 154, 0.5);
`;
