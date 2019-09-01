import React from 'react';
import PropTypes from 'prop-types';
import PopupItem from './PopupItem';
import './Popup.scss';

const PopupCart = ({ products, total, remove }) => {
  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map((product) => {
      const { id } = product;

      return (
        <PopupItem
          {...product}
          key={id}
          id={id}
          remove={remove}
        />
      );
    })
  ) : (
    <em>Cart is empty</em>
  );

  return (
    <>
      <div className="CartPopup--container--products">{nodes}</div>
      <div className="CartPopup--container--total-price">
        <div>Total:</div>
        <div>
          &#36;
          {total}
        </div>
      </div>

    </>
  );
};


PopupCart.propTypes = {
  products: PropTypes.any,
  total: PropTypes.any,
  remove: PropTypes.any,
};

PopupCart.defaultProps = {

};


export default PopupCart;
