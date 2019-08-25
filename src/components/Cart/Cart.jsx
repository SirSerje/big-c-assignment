import React, { Component } from 'react';
import './Cart.scss';
import {Link} from 'react-router-dom';
import {getCartProducts, getTotal} from '../../reducers';
import {connect} from 'react-redux';


const Cart = ({products, total}) => {
  const hasProducts = products.length > 0;

  return (
    <div >some test
      <div >
        <Cart
          products={products}
          total={total}/>
      </div>
      <div>
        <Link to={'/cart'}>view cart</Link>
        <button disabled={hasProducts ? '' : 'disabled'}>
          Checkout
        </button>
      </div>

    </div>);
};

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
});

export default connect(
  mapStateToProps,
)(Cart);
