import {
  COLUMN_ALIGN_START__JUSTIFY_START,
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
  margin: auto;
  margin-bottom: 120px;
`;

const SectionTitle = styled("h1")`
  ${TEXT_48_700}
  color: var(--Primary);
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
`;

const ItemTextWrapper = styled("div")`
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  gap:42px;
  margin-top: 10px;
`;

const ItemTitle = styled("h2")<{ selected: boolean }>`
  ${TEXT_24_400}
  color: var(--Primary);
  ${({ selected }) =>
    selected &&
    css`
      color: var(--Blackish);
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
`;

const ItemLogo = styled(Image)<{ selected: boolean }>`
  transition: all 500ms ease-in-out;
  ${({ selected }) =>
    selected &&
    css`
      rotate: 180deg;
    `}
`;
