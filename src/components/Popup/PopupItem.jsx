import React from 'react';
import './PopupItem.scss';
import PropTypes from 'prop-types';
import { ROOT_LOCATION } from '../../constants';

const PopupItem = ({
  id, price, image, brand, quantity, title, remove,
}) => (
  <div className="PopupProduct">
    {/* eslint-disable-next-line no-undef */}
    <img src={`${ROOT_LOCATION}/media/${image}`} className="PopupProduct--image" alt={title} />
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
      <button type="button" id={id} onClick={remove}>X</button>
    </div>
  </div>
);

PopupItem.propTypes = {
  products: PropTypes.any,
  id: PropTypes.any,
  price: PropTypes.any,
  image: PropTypes.any,
  brand: PropTypes.any,
  quantity: PropTypes.any,
  title: PropTypes.any,
  remove: PropTypes.any,
};

PopupItem.defaultProps = {

};

export default PopupItem;
