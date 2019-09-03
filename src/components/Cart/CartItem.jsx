import React from 'react';
import './CartItem.scss';
import PropTypes from 'prop-types';
import { ROOT_LOCATION } from '../../constants';

const CartItem = ({
  id, price, image, brand, quantity, title, add, remove, removeAll,
}) => (
  <div className="CartItem">

    <img src={`${ROOT_LOCATION}/media/${image}`} className="CartItem--image" alt={title} />
    <div className="CartItem--description">
      <div
        className="CartItem--description-title"
      >
        {title}
        <span>{quantity ? ` x ${quantity}` : null}</span>
      </div>
      <div className="CartItem--description-brand">{brand}</div>

      <div className="CartItem--description-price">
        &#36;
        {price}
      </div>
    </div>
    <div className="CartItem--control add">
      <button type="button" id={id} onClick={add}>+</button>
    </div>
    <div className="CartItem--control remove">
      <button type="button" id={id} onClick={remove}>-</button>
    </div>
    <div className="CartItem--control removeAll">
      <button type="button" id={id} onClick={removeAll}>X</button>
    </div>
  </div>
);


CartItem.propTypes = {
  id: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  brand: PropTypes.string,
  quantity: PropTypes.number,
  title: PropTypes.string,
  add: PropTypes.func,
  remove: PropTypes.func,
  removeAll: PropTypes.func,
};

export default CartItem;
