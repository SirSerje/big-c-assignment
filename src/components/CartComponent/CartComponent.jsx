import React from 'react';
import './Cart.scss';
import {Link} from 'react-router-dom';
import {getCartProducts, getTotal} from '../../reducers';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import {PopupProduct} from '../CartPopup';
import PopupCart from "../CartPopup/PopupCart";
import CartItem from "./CartItem";


const CartComponent = ({products, total, addToCart, removeFromCart, removeAllFromCart}) => {
  const add = i => addToCart(i.target.id);
  const remove = (i) => removeFromCart(i.target.id);
  const removeAll = (i) => removeAllFromCart(i.target.id);

  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map(product => {
        const {id} = product;

        return (<CartItem
          {...product}
          key={id}
          id={id}
          add={add}
          remove={remove}
          removeAll={removeAll}
        />);
      }
    )
  ) : (
    <em>Cart is empty</em>
  );

  return (
    <div className="Cart">
      <div className="CartPopup--container--products">{nodes}</div>
      <div className="CartPopup--container--total-price">
        <div>Total:</div>
        <div>&#36;{total}</div>
      </div>

    </div>
  );
};

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
});

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => dispatch(actions.addToCart(id)),
    removeFromCart: id => dispatch(actions.removeFromCart(id)),
    removeAllFromCart: id => dispatch(actions.removeAll(id))
  };
};
export default connect(
  mapStateToProps, mapDispatchToProps
)(CartComponent);
