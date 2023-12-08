import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Flex } from 'antd';



const CartItem = ({ item, onUpdateQuantity, onRemoveFromCart }) => {
  const { id, name, price, imageSrc, quantity } = item;

  return (
    <div className="cart-item">
      <Link to={`/Catalog/${id}`}>
        <img src={imageSrc} alt={name} style={{ maxWidth: '400px' }} />
      </Link>
      <div className="item-details">
        <p style={{ fontSize: "18px" }} className="item-name">{name}</p>
        <p style={{ fontSize: "18px" }} className="item-price">{`Price: $${(price * quantity).toFixed(2)}`}</p>
        <Flex gap="small" wrap="wrap">
          <div className="quantity-controls">
                <Button onClick={() => onUpdateQuantity(id, quantity - 1)}>-</Button>
                <span style={{ margin: "10px", fontSize: "18px" }} className="item-quantity">{quantity}</span>
                <Button onClick={() => onUpdateQuantity(id, quantity + 1)}>+</Button>
          </div>
          <Button  onClick={() => onRemoveFromCart(id)}>Remove from Cart</Button>
        </Flex>
      </div>
    </div>
  );
};

export default CartItem;
