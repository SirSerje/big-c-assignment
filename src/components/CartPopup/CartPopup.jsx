import React from 'react';
import {connect} from 'react-redux';
import {getCartProducts, getTotal} from '../../reducers';
import './CartPopup.scss';
import {Link} from "react-router-dom";

//TODO : maybe stateless

const Product = ({price, quantity, title}) => (
  <div>
    {title} - &#36;{price}{quantity ? ` x ${quantity}` : null}
  </div>
);

const Cart = ({products, total}) => {
  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <em>Please add some products to cart.</em>
  );

  return (
    <div>
      <h3>Your Cart</h3>
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>

    </div>
  );
};

const CartContainer = ({products, total}) => {
  const hasProducts = products.length > 0;

  return (
    <div className="CartPopup">some test
      <div className="CartPopup--container">
        <Cart
          products={products}
          total={total}/>
      </div>
      <div className="CartPopup--bottom">

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
)(CartContainer);
