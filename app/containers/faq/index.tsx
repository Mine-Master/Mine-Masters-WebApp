import {
  COLUMN_ALIGN_START__JUSTIFY_START,
  MAX_WIDTH_RESPONSIVENESS,
  ROW_ALIGN_CENTER__JUSTIFY_START,
  ROW_ALIGN_START__JUSTIFY_START,
} from "@/app/styles/global-styles";
import { TEXT_24_400, TEXT_48_700 } from "@/app/styles/global-typography";
import styled from "@emotion/styled";
import Image from "next/image";
import { FAQ_ITEMS } from "./constant";
import FaqItemLogo from "@/app/assets/Faq-Item-Logo.png";
import { useState } from "react";
import { css } from "@emotion/react";
import { mediaQueries } from "@/app/styles/mediaQueries";

export const Faq = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const handleItemClick = (index: number) => {
    if (selectedItem == index) {
      setSelectedItem(null);
    } else {
      setSelectedItem(index);
    }
  };
  return (
    <FaqContainer>
      <SectionTitle>FAQ</SectionTitle>
      {FAQ_ITEMS.map(({ title, description }, index) => (
        <FaqItem
          key={index}
          onClick={() => handleItemClick(index)}
          selected={index === selectedItem}
        >
          <ItemLogo
            src={FaqItemLogo}
            alt="Miners"
            selected={index === selectedItem}
          />
          <ItemTextWrapper>
            <ItemTitle selected={index === selectedItem}>{title}</ItemTitle>
            <ItemDescription selected={index === selectedItem}>
              {description}
            </ItemDescription>
          </ItemTextWrapper>
        </FaqItem>
      ))}
    </FaqContainer>
  );
};

const FaqContainer = styled("section")`
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  gap:48px;
  width: 90%;
  ${MAX_WIDTH_RESPONSIVENESS}
  margin-bottom: 120px;
  ${mediaQueries.lessThan(`lg`)`
    gap: 36px;
    margin-bottom: 100px;
  `}
  ${mediaQueries.lessThan(`md`)`
    gap: 16px;
    margin-bottom: 80px;
  `}
  ${mediaQueries.lessThan(`sm`)`
    gap: 12px;
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

const FaqItem = styled("div")<{ selected: boolean }>`
  width: 100%;
  ${ROW_ALIGN_START__JUSTIFY_START}
  gap:24px;
  background: rgba(90, 24, 154, 0.1);
  border-radius: 24px;
  letter-spacing: 0.05em;
  padding: 24px;
  cursor: pointer;
  ${mediaQueries.lessThan(`md`)`
    gap: 16px;
    padding: 16px;
  `}
  ${mediaQueries.lessThan(`sm`)`
    gap: 12px;
    padding: 12px;
  `}
`;

const ItemTextWrapper = styled("div")`
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  gap:42px;
  margin-top: 10px;
  ${mediaQueries.lessThan(`md`)`
    gap: 32px;
  `}
  ${mediaQueries.lessThan(`sm`)`
    gap: 24px;
    margin-top: 5px;
  `}
  ${mediaQueries.lessThan(`xs`)`
    gap: 16px;
    margin-top: 0;
  `}
`;

const ItemTitle = styled("h2")<{ selected: boolean }>`
  ${TEXT_24_400}
  color: var(--Primary);
  ${({ selected }) =>
    selected &&
    css`
      color: var(--Blackish);
    `}
  ${mediaQueries.lessThan(`md`)`
    font-size: 20px;
  `}
  ${mediaQueries.lessThan(`sm`)`
    font-size: 16px;
  `}
  ${mediaQueries.lessThan(`xs`)`
    font-size: 14px;
  `}
`;

const ItemDescription = styled("p")<{ selected: boolean }>`
  display: none;
  // display the component if selected is true
  ${({ selected }) =>
    selected &&
    css`
      display: block;
    `}

  color: var(--Black);
  ${TEXT_24_400}
  ${mediaQueries.lessThan(`md`)`
    font-size: 20px;
  `}
  ${mediaQueries.lessThan(`sm`)`
    font-size: 16px;
  `}
  ${mediaQueries.lessThan(`xs`)`
    font-size: 14px;
  `}
`;

const ItemLogo = styled(Image)<{ selected: boolean }>`
  transition: all 500ms ease-in-out;
  ${({ selected }) =>
    selected &&
    css`
      rotate: 180deg;
    `}
  ${mediaQueries.lessThan(`md`)`
    width: 40px;
    height: 40px;
    `}
  ${mediaQueries.lessThan(`sm`)`
    width: 32px;
    height: 32px;
    `}
  ${mediaQueries.lessThan(`xs`)`
    width: 24px;
    height: 24px;
    `}
`;
