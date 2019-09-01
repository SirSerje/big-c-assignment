import axios from 'axios';
import * as types from '../constants';

// TODO : split actions into separate files
// TODO : remove payload if not necessary
/**
 * init app & get data from package.json file
 */
export const init = () => (dispatch) => {
  axios.get('/products.json')
    .then((response) => {
      dispatch({ type: types.APP_INIT, payload: response.data });
    });
};

export const add2Cart = (id) => (dispatch) => dispatch({ type: types.ADD_TO_MY_CART, payload: id });
//-------------------------------------------------------------------------------------------------

const receiveProducts = (products) => ({
  type: types.RECEIVE_PRODUCTS,
  products,
});

export const getAllProducts = () => (dispatch) => {
  axios.get('/products.json')
    .then((products) => {
      dispatch(receiveProducts(products.data));
    });
};

// FIXME: разобраться с количеством
const addToCartUnsafe = (productId, quantity = 1) => ({
  type: types.ADD_TO_CART,
  productId,
});

export const addToCart = (productId, quantity) => (dispatch) => dispatch(
  addToCartUnsafe(productId, quantity),
);

export const checkout = (products) => (dispatch, getState) => {
  const { cart } = getState();
  dispatch({
    type: types.CHECKOUT_REQUEST,
  });
};

export const removeFromCart = (productId) => (dispatch) => dispatch(
  { type: types.REMOVE_FROM_CARD, productId },
);
// TODO swap const
export const removeAll = (productId) => (dispatch) => dispatch(
  { type: types.REMOVE_1_FROM_CARD, productId },
);
