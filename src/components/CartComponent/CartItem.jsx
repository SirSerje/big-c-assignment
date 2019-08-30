import React from 'react';
import "./CartItem.scss"

const CartItem = ({id, price, image, brand, quantity, title, add, remove, removeAll}) => {
  return (
    <div className="PopupProduct">
      <img src={`http://localhost:3000/media/${image}`} className="PopupProduct--image"/>
      <div className="PopupProduct--description">
        <div
          className="PopupProduct--description-title">{title}<span>{quantity ? ` x ${quantity}` : null}</span>
        </div>
        <div className="PopupProduct--description-brand">{brand}</div>

        <div className="PopupProduct--description-price">&#36;{price}</div>
      </div>
      <div className="PopupProduct--control">
        <button id={id} onClick={add}>+</button>
      </div>
      <div className="PopupProduct--control">
        <button id={id} onClick={removeAll}>-</button>
      </div>
      <div className="PopupProduct--control">
        <button id={id} onClick={remove}>X</button>
      </div>
    </div>
  );
};

export default CartItem;
