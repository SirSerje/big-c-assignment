import { combineReducers } from 'redux';
import cart, * as fromCart from './cart';
import products, * as fromProducts from './products';

export default combineReducers({
  cart,
  products,
});

const getAddedIds = (state) => fromCart.getAddedIds(state.cart);
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id);
export const getProduct = (state, id) => fromProducts.getProduct(state.products, id);

export const getTotalQuantity = (state) => getAddedIds(state)
  .reduce((total, id) => total + getQuantity(state, id), 0).toFixed(0);

export const getTotal = (state) => getAddedIds(state)
  .reduce((total, id) => total + getProduct(state, id).price * getQuantity(state, id),
    0)
  .toFixed(2);

export const getCartProducts = (state) => getAddedIds(state).map((id) => ({
  ...getProduct(state, id),
  quantity: getQuantity(state, id),
}));
