import React from 'react';
import {connect} from 'react-redux';
import {getCartProducts, getTotal} from '../../reducers';
import './CartPopup.scss';
import {Link} from 'react-router-dom';
import * as actions from '../../actions';

//TODO : maybe stateless

const Product = ({id, price, quantity, title, add ,remove, removeAll}) =>{
  return (
    <div>
      {id} - > {title} - &#36;{price}{quantity ? ` x ${quantity}` : null}
      <button id={id} onClick={add}>+</button>
      <button id={id} onClick={removeAll}>-</button>
      <button id={id} onClick={remove}>X</button>
    </div>
  );};

const Cart = ({products, total, add,remove, removeAll}) => {
  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
        id={product.id}
        add={add}
        remove={remove}
        removeAll={removeAll}
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

const CartContainer = (props) => {
  const {products, total, addToCart, removeFromCart, removeAllFromCart} = props;
  const hasProducts = products.length > 0;

  const add = (i) => addToCart(i.target.id);
  const remove = (i) => removeFromCart(i.target.id);
  const removeAll = (i) => removeAllFromCart(i.target.id);

  return (
    <div className="CartPopup">Cart Popup
      <div className="CartPopup--container">
        <Cart
          products={products}
          total={total}
          add={add}
          remove={remove}
          removeAll={removeAll}
        />
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

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => dispatch(actions.addToCart(id)),
    removeFromCart: id => dispatch(actions.removeFromCart(id)),
    removeAllFromCart: id => dispatch(actions.removeAll(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartContainer);
export {Product, Cart};
