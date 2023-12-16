import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import success from "./success.png";


const ConfirmationPageWrapper = styled.div`
  text-align: center;
  margin: 20px;
  max-width: 600px;
  margin: auto;

  img {
    width: 200px; /* Вкажіть розміри для вашого зображення */
    margin-bottom: 20px;
  }

  h2 {
    font-size: 24px;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #666;
    margin-bottom: 20px;
  }

  a {
    color: #007bff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

function OrderConfirmationPage() {
  return (
    <ConfirmationPageWrapper>
      <img
        src={success}
        alt="Order Confirmation"
      />
      <h2>Success!</h2>
      <p>Your order has been confirmed. Thank you for shopping with us!</p>
      <Link to="/Catalog">Go Back to Catalog</Link>
    </ConfirmationPageWrapper>
  );
}

export default OrderConfirmationPage;
