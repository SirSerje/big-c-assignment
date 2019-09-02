import axios from 'axios';
import * as types from '../constants';

const receiveProducts = (products) => ({
  type: types.RECEIVE_SUCCESS,
  products,
});
const receiveError = (error) => ({
  type: types.RECEIVE_ERROR, error,
});

export const getAllProducts = () => (dispatch) => {
  dispatch({
    type: types.RECEIVE_START,
  });
  axios.get('/products.json')
    .then((products) => {
      dispatch(receiveProducts(products.data));
    }).catch((e) => dispatch(receiveError(e)));
};

export const addToCart = (productId, quantity = 1) => (dispatch) => dispatch(
  {
    type: types.ADD_TO_CART,
    payload: { productId, quantity },
  },
);

export const removeFromCart = (productId) => (dispatch) => dispatch(
  { type: types.REMOVE_ALL_FROM_CARD, payload: { productId } },
);

export const removeAll = (productId) => (dispatch) => dispatch(
  { type: types.REMOVE_FROM_CARD, payload: { productId } },
);
