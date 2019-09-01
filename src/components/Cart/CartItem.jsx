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
    <div className="CartItem--control">
      <button type="button" id={id} onClick={add}>+</button>
    </div>
    <div className="CartItem--control">
      <button type="button" id={id} onClick={removeAll}>-</button>
    </div>
    <div className="CartItem--control">
      <button type="button" id={id} onClick={remove}>X</button>
    </div>
  </div>
);


CartItem.propTypes = {
  id: PropTypes.any,
  price: PropTypes.any,
  image: PropTypes.any,
  brand: PropTypes.any,
  quantity: PropTypes.any,
  title: PropTypes.any,
  add: PropTypes.any,
  remove: PropTypes.any,
  removeAll: PropTypes.any,
};

CartItem.defaultProps = {

};

export default CartItem;
