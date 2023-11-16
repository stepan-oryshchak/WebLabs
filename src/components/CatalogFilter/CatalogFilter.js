import React from "react";
import { Inner, Wrapper } from "../CommonComponenst";
import { CatalogButton, CatalogLabel, CatalogSelectSort } from "./CatalogFilter.styled";
import { Button, Flex } from 'antd';

const options = [
  { value: "sortByPrice", label: "Sort by price" },
  { value: "sortByTitle", label: "Sort by title" },
  { value: "sortByWeight", label: "Sort by weight" },
];

const CatalogFilter = () => {
  return (
    <Wrapper style={{ borderRadius: "12px", maxWidth: "97%" }}>
      <Inner
        style={{
          justifyContent: "space-between",
          marginBottom: "1.4vw",
          marginTop: "1.4vw",
        }}
      >
        <CatalogSelectSort name="question">
          <option style={{ display: "none" }}>Choose option</option>
          {options.map((option) => (<option key={option.value} value={option.value}>{option.label}</option>))}
        </CatalogSelectSort>
        <div style={{ display: "flex" }}>
          <CatalogLabel>
            Minimum price <input type="number" name="minPrice" />
          </CatalogLabel>
          <CatalogLabel>
            Maximum price <input type="number" name="MaxPrice" />
          </CatalogLabel>
        </div>
        <Flex gap="small" wrap="wrap"><Button size="large">Apply</Button></Flex>
      </Inner>
    </Wrapper>
  );
};

export default CatalogFilter;
