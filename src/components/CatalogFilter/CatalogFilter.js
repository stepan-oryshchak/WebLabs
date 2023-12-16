import React, { useState } from "react";
import { Wrapper, Inner } from "../CommonComponenst";
import { Button, Input, Select, Space } from 'antd';

const { Option } = Select;

const CatalogFilter = ({ products, setFilteredProducts }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleApplyFilters = () => {
    let filteredItems = [...products];

    if (minPrice !== "") {
      filteredItems = filteredItems.filter(item => item.price >= parseFloat(minPrice));
    }
    if (maxPrice !== "") {
      filteredItems = filteredItems.filter(item => item.price <= parseFloat(maxPrice));
    }
    if (searchText !== "") {
      const text = searchText.toLowerCase();
      filteredItems = filteredItems.filter(item =>
        Object.values(item).some(val =>
          typeof val === "string" && val.toLowerCase().includes(text)
        )
      );
    }
    if (sortBy === "sortByPrice") {
      filteredItems.sort((a, b) => b.price - a.price);
    } else if (sortBy === "sortByTitle") {
      filteredItems.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredProducts(filteredItems);
  };

  const handleResetFilters = () => {
    setMinPrice("");
    setMaxPrice("");
    setSortBy("");
    setSearchText("");
    setFilteredProducts(products);
  };

  const handleMinPriceChange = (value) => {
    if (value === "" || parseFloat(value) >= 0 || isNaN(parseFloat(value))) {
      setMinPrice(value);
    }
  };

  const handleMaxPriceChange = (value) => {
    if (value === "" || parseFloat(value) >= 0 || isNaN(parseFloat(value))) {
      setMaxPrice(value);
    }
  };

  return (
    <Wrapper>
      <Inner
        style={{
          justifyContent: "space-between",
          marginBottom: "1.4vw",
          marginTop: "1.4vw",
        }}
      >
        <Select
          defaultValue="Choose option"
          style={{ width: 200 }}
          onChange={value => setSortBy(value)}
        >
          <Option size="large" value="sortByPrice">
            Sort by price
          </Option>
          <Option size="large" value="sortByTitle">
            Sort by title
          </Option>
        </Select>
        <Space>
          <Input
            size="large"
            type="number"
            placeholder="Minimum price"
            value={minPrice}
            onChange={e => handleMinPriceChange(e.target.value)}
          />
          <Input
            size="large"
            type="number"
            placeholder="Maximum price"
            value={maxPrice}
            onChange={e => handleMaxPriceChange(e.target.value)}
          />
          <Input
            size="large"
            placeholder="Search"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
          <Button type="primary" size="large" onClick={handleApplyFilters}>
            Apply
          </Button>
          <Button type="primary" size="large" onClick={handleResetFilters}>
            Reset
          </Button>
        </Space>
      </Inner>
    </Wrapper>
  );
};

export default CatalogFilter;
