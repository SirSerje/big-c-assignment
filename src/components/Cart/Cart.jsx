import React from 'react';
import './Cart.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCartProducts, getTotal } from '../../reducers';
import * as actions from '../../actions';
import CartItem from './CartItem';


const Cart = ({
  products, total, addToCart, removeFromCart, removeAllFromCart,
}) => {
  const add = (i) => addToCart(i.target.id);
  const remove = (i) => removeFromCart(i.target.id);
  const removeAll = (i) => removeAllFromCart(i.target.id);

  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map((product) => {
      const { id } = product;

      return (
        <CartItem
          {...product}
          key={id}
          id={id}
          add={add}
          remove={remove}
          removeAll={removeAll}
        />
      );
    })
  ) : (
    <b>Cart is empty</b>
  );

  return (
    <div className="Cart">
      <div className="Cart--container--products">{nodes}</div>
      <div className="Cart--container--total-price">
        <div>Total:</div>
        <div>
          &#36;
          {total}
        </div>
        <div><button type="button">checkout</button></div>
      </div>

    </div>
  );
};

Cart.propTypes = {
  products: PropTypes.any,
  total: PropTypes.any,
  addToCart: PropTypes.any,
  removeFromCart: PropTypes.any,
  removeAllFromCart: PropTypes.any,
};

Cart.defaultProps = {

};

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state),
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (id) => dispatch(actions.addToCart(id)),
  removeFromCart: (id) => dispatch(actions.removeFromCart(id)),
  removeAllFromCart: (id) => dispatch(actions.removeAll(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
