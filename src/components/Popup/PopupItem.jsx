import React from 'react';
import './PopupItem.scss';

const PopupItem = ({
  id, price, image, brand, quantity, title, remove,
}) => (
  <div className="PopupProduct">
    <img src={`${window.location.origin}/media/${image}`} className="PopupProduct--image" alt={title} />
    <div className="PopupProduct--description">
      <div
        className="PopupProduct--description-title"
      >
        {title}
        <span>{quantity ? ` x ${quantity}` : null}</span>
      </div>
      <div className="PopupProduct--description-brand">{brand}</div>
      <div className="PopupProduct--description-price">
        &#36;
        {price}
      </div>
    </div>
    <div className="PopupProduct--control">
      <button id={id} onClick={remove}>X</button>
    </div>
  </div>
);

export default PopupItem;
