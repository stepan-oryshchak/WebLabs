import React from "react";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import { Button, InputNumber } from 'antd';
import {
  PriceSection,
  SectionWrapper,
  StyledButtons,
  StyledImage,
  StyledRightSection,
  StyledText,
} from "./ProductDetailPage.styles";
import { projectorData } from "../Catalog/Catalog";

const ProductDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const selectedProjector = projectorData.find((projector) => projector.id === parseInt(id));

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleAddToCart = () => {
  };

  if (!selectedProjector) {
    return <div>Projector not found</div>;
  }

  const { name, price, imageSrc, description } = selectedProjector;

  return (
    <SectionWrapper>
      <StyledImage>
        <img src={imageSrc} alt={name} />
      </StyledImage>
      <StyledRightSection>
        <h1>{name}</h1>
        <StyledText>{description}</StyledText>
        <PriceSection>{price}$</PriceSection>
        <StyledButtons>
          <NavLink exact to="/catalog" activeClassName="selected">
            <Button type="primary" size="large" style={{ marginTop: "20px", width: "200px" }}>Go back</Button>
          </NavLink>
          <NavLink exact to="/cart" activeClassName="selected">
            <Button type="primary" size="large" style={{ marginTop: "20px", width: "200px" }}>Add to cart</Button>
          </NavLink>
        </StyledButtons>
      </StyledRightSection>
    </SectionWrapper>
  );
};


export default ProductDetailPage;
