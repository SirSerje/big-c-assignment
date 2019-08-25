import { combineReducers } from 'redux';
import cart, * as fromCart from './cart';
import products, * as fromProducts from './products';

export default combineReducers({
  cart,
  products
});

const getAddedIds = state => fromCart.getAddedIds(state.cart);
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id);
const getProduct = (state, id) => fromProducts.getProduct(state.products, id);

export const getTotal = state =>
  getAddedIds(state)
    .reduce((total, id) =>
      total + getProduct(state, id).price * getQuantity(state, id),
    0
    )
    .toFixed(2);

export const getCartProducts = state =>
  getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id)
  }));



/*
import {combineReducers} from 'redux';
import {ADD_TO_MY_CART, APP_INIT} from '../constants';

//TODO : move products & cart into separate files
//TODO : keep params && guarantee immutability


let products = (state=[], action) => {
  const {payload, type} = action;
  switch (type) {
  //TODO: stub
  case APP_INIT:
    return [...state, ...payload];
    default:
    return state;
  }
};

let cart = (state=[], action) => {
  const {payload, type} = action;
  switch (type) {
  //TODO: stub
  case ADD_TO_MY_CART:
    console.log(state, payload, type);
    return [...state, ...payload];

  default:
    return state;
  }
};

const reducers = combineReducers({
  products,
  cart,
});

export default reducers;
*/
