"use client";
import { FAQ_ITEMS } from "./constant";
import FaqItemLogo from "@/assets/faq/Faq-Item-Logo.png";
import { useState } from "react";
import {
  FaqContainer,
  FaqItem,
  ItemDescription,
  ItemLogo,
  ItemTextWrapper,
  ItemTitle,
  SectionTitle,
} from "./styles";

const Faq = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const handleItemClick = (index: number) => {
    if (selectedItem == index) {
      setSelectedItem(null);
    } else {
      setSelectedItem(index);
    }
  };
  return (
    <FaqContainer id="FAQ">
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

export default Faq;
