import React from 'react';
import './Cart.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getCartProducts, getTotal } from '../../reducers';
import * as actions from '../../actions';
import CartItem from './CartItem';


const Cart = ({
  products, total, addToCart, removeFromCart, removeAllFromCart,
}) => {
  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map((product) => {
      const { id } = product;

      return (
        <CartItem
          {...product}
          key={id}
          id={id}
          add={(i) => addToCart(i.target.id)}
          remove={(i) => removeFromCart(i.target.id)}
          removeAll={(i) => removeAllFromCart(i.target.id)}
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
        <div>
          <Link to="/">continue shopping</Link>
        </div>
        <div>
          <button type="button">checkout</button>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  total: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  removeAllFromCart: PropTypes.func.isRequired,
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
