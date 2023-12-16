import styled from 'styled-components';

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CartItems = styled.div`
  width: 700px;
  height: 250px;
  display: flex;

  align-items: center;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  margin: 30px;
`;

export const CartItemImage = styled.img`
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

export const CartItemDescription = styled.div`
  font-size: 1.4vw;
  font-weight: 400;
  line-height: 27px;
  text-align: right;
  width: 500px;
  height: auto;
  display: flex;
  color: #707070;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const CountHandlerInput = styled.input`
  width: 40px;
  text-align: center;
  font-weight: bolder;
`;

export const CheckoutButton = styled.button`
  width: 150px;
  height: 50px;
  background-color: rgb(19, 19, 19);
  color: white;
  border: none;
  border-radius: 8px;
  margin: 10px;
  cursor: pointer;
`;
