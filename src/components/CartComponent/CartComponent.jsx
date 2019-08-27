import React from 'react';
import './Cart.scss';
import {Link} from 'react-router-dom';
import {getCartProducts, getTotal} from '../../reducers';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import PopupProduct from '../CartPopup/PopupProduct';


const CartComponent = ({products, total, addToCart, removeFromCart, removeAllFromCart}) => {
  const add = i => addToCart(i.target.id);
  const remove = (i) => removeFromCart(i.target.id);
  const removeAll = (i) => removeAllFromCart(i.target.id);

  const hasProducts = products.length > 0;
  console.log('_____', products, total);
  return (
    <div>
      <div>
        {Object.values(products).map(i =>
          <PopupProduct key={i.id}
            {...i}
            add={add}
            remove={remove}
            removeAll={removeAll}/>)}
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
