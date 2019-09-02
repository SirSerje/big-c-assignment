import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getCartProducts, getTotal } from '../../reducers';
import './Popup.scss';
import * as actions from '../../actions';
import PopupCart from './PopupCart';

const Popup = (props) => {
  const {
    products, total, addToCart, removeFromCart, removeAllFromCart,
  } = props;
  const hasProducts = products.length > 0;

  return (
    <div className="CartPopup">
      <div className="CartPopup--container">
        <PopupCart
          products={products}
          total={total}
          add={(i) => addToCart(i.target.id)}
          remove={(i) => removeFromCart(i.target.id)}
          removeAll={(i) => removeAllFromCart(i.target.id)}
        />
      </div>
      <div className="CartPopup--bottom">
        <Link to="/cart">view cart</Link>
        <button type="button" disabled={hasProducts ? '' : 'disabled'}>
          Checkout
        </button>
      </div>

    </div>
  );
};

Popup.propTypes = {
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Popup);
