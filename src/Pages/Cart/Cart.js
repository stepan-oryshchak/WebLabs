import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Flex } from 'antd';
import CartItem from './CartItem';
import { removeFromCart, updateQuantity } from './actions';

import {
  CartContainer,
  CartItemDescription,
} from './Cart.styled';

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);

  const handleUpdateQuantity = (id, newQuantity) => {
    const validQuantity = Math.max(0, newQuantity);
    dispatch(updateQuantity(id, validQuantity));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContainer className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveFromCart={handleRemoveFromCart}
        />
      ))}
      <div>
          <CartItemDescription>Total Amount: ${getTotalAmount().toFixed(2)}</CartItemDescription>
        <Flex gap="small" wrap="wrap">
          <Button type="primary" size="large" style={{ width: "200px" }}>
            <Link to="/catalog" className="go-back-link">
              Back to Catalog
            </Link>
          </Button>
          <Button type="primary" size="large" style={{ width: "200px" }}>
            Continue
          </Button>
        </Flex>
      </div>
    </CartContainer>
  );
}

export default Cart;
