import axios from 'axios';
import * as types from '../constants';

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
