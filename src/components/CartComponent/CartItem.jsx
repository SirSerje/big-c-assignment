import React from 'react';
import "./CartItem.scss"

const CartItem = ({id, price, image, brand, quantity, title, add, remove, removeAll}) => {
  return (
    <div className="CartItem">

      <img src={`http://localhost:3000/media/${image}`} className="CartItem--image"/>
      <div className="CartItem--description">
        <div
          className="CartItem--description-title">{title}<span>{quantity ? ` x ${quantity}` : null}</span>
        </div>
        <div className="CartItem--description-brand">{brand}</div>

        <div className="CartItem--description-price">&#36;{price}</div>
      </div>
      <div className="CartItem--control">
        <button id={id} onClick={add}>+</button>
      </div>
      <div className="CartItem--control">
        <button id={id} onClick={removeAll}>-</button>
      </div>
      <div className="CartItem--control">
        <button id={id} onClick={remove}>X</button>
      </div>
    </div>
  );
};

export default CartItem;
