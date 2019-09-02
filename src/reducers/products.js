import { combineReducers } from 'redux';
import { RECEIVE_SUCCESS, ADD_TO_CART } from '../constants';

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
  const { productId } = action;
  switch (action.type) {
  case RECEIVE_SUCCESS:
    return {
      ...state,
      ...action.products.reduce((obj, product) => {
        // eslint-disable-next-line no-param-reassign
        obj[product.id] = product;
        return obj;
      }, {}),
    };
  default:
    if (productId) {
      return {
        ...state,
        [productId]: products(state[productId], action),
      };
    }
    return state;
  }
};

export default combineReducers({
  byId,
});

export const getProduct = (state, id) => state.byId[id];
