import styled from "styled-components";

export const SectionWrapper = styled.div`
  display: flex;
  margin: 0 100px;
  justify-content: center;
  margin-top: 50px;
`;

export const StyledImage = styled.div`
  display: flex;
  flex-direction: column;
  img {
    max-width: 500px;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StyledRightSection = styled.div`
  margin: 0 60px;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    text-align: left;
    color: #333;
    margin-bottom: 20px;
  }
`;

export const StyledText = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  text-align: left;
  width: 500px;
  height: auto;
  display: flex;
  color: #707070;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const PriceSection = styled.div`
  display: flex;
  margin-top: 20px;
  font-size: 24px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  color: #333;
`;

export const StyledButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 20px;
`;

export const ProductDetailWrapper = SectionWrapper;

export const ProductImage = styled.img`
  max-width: 500px;
  height: auto;
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const ProductInfo = styled.div`
  font-size: 16px;
  text-align: left;
  margin-bottom: 20px;
`;

export const PriceInfo = PriceSection;

export const ProductPrice = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const QuantitySelector = styled.input`
  width: 50px;
  text-align: center;
  margin-right: 10px;
`;

export const ButtonsWrapper = StyledButtons;

export const StyledButton = styled.button`
  /* Загальні стилі для всіх кнопок */
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-right: 10px;
`;

export const BackButton = styled(StyledButton)`
  /* Додаткові стилі для кнопки "Go back" */
`;

export const AddToCartButton = styled(StyledButton)`
  /* Додаткові стилі для кнопки "Add to cart" */
`;
