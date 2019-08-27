import { combineReducers } from 'redux';
import { RECEIVE_PRODUCTS, ADD_TO_CART } from '../constants';

const products = (state, action) => {
  switch (action.type) {
  case ADD_TO_CART:
    return {
      ...state,
    };
  default:
    return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
  case RECEIVE_PRODUCTS:
    console.log(state, action)
    return {
      ...state,
      ...action.products.reduce((obj, product) => {
        obj[product.id] = product;
        return obj;
      }, {})
    };
  default:
    const { productId } = action;
    if (productId) {
      return {
        ...state,
        [productId]: products(state[productId], action)
      };
    }
    return state;
  }
};

const visibleIds = (state = [], action) => {
  switch (action.type) {
  case RECEIVE_PRODUCTS:
    return action.products.map(product => product.id);
  default:
    return state;
  }
};

export default combineReducers({
  byId,
  visibleIds
});

export const getProduct = (state, id) =>
  state.byId[id];

export const getVisibleProducts = state =>
  state.visibleIds.map(id => getProduct(state, id));
