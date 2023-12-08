import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../Cart/actions';
import {
  PriceSection,
  SectionWrapper,
  StyledButtons,
  StyledImage,
  StyledRightSection,
  StyledText,
} from "./ProductDetailPage.styles";
import { projectorData } from "../Catalog/Catalog";
import { updateQuantity } from '../../Pages/Cart/actions';

const ProductDetailPage = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  const { id } = useParams();
  const selectedProjector = projectorData.find((projector) => projector.id === parseInt(id));

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleAddToCart = () => {
    if (selectedProjector) {
      const existingItem = cartItems.find((item) => item.id === selectedProjector.id);

      if (existingItem) {
        dispatch(updateQuantity(existingItem.id, existingItem.quantity + 1));
      } else {
        const { price, ...selectedWithoutPrice } = selectedProjector;
        dispatch(addToCart({ ...selectedWithoutPrice, price, quantity: 1 }));
      }
    }
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
          <Button type="primary" size="large" style={{ width: "200px" }} onClick={handleGoBack}>
            Go back
          </Button>
          <Button type="primary" size="large" style={{ width: "200px" }} onClick={handleAddToCart}>
            Add to cart
          </Button>
        </StyledButtons>
      </StyledRightSection>
    </SectionWrapper>
  );
};

export default ProductDetailPage;
