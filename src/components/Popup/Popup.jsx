import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getCartProducts, getTotal } from '../../reducers';
import './Popup.scss';
import * as actions from '../../actions';
import PopupCart from './PopupCart';

// TODO : maybe stateless

const Popup = (props) => {
  const {
    products, total, addToCart, removeFromCart, removeAllFromCart,
  } = props;
  const hasProducts = products.length > 0;

  const add = (i) => addToCart(i.target.id);
  const remove = (i) => removeFromCart(i.target.id);
  const removeAll = (i) => removeAllFromCart(i.target.id);

  return (
    <div className="CartPopup">
      <div className="CartPopup--container">
        <PopupCart
          products={products}
          total={total}
          add={add}
          remove={remove}
          removeAll={removeAll}
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