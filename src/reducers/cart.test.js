import cart from './cart';
import { ADD_TO_CART } from '../constants';

const initialState = {
  addedIds: [],
  quantityById: {},
};

describe('reducers', () => {
  
  describe('cart', () => {
    it('should provide the initial state', () => {
      expect(cart(undefined, {})).toEqual(initialState);
    });
  });
  
  it('should handle ADD_TO_CART action', () => {
    expect(cart(initialState, {type: ADD_TO_CART, payload: {productId: 1}})).
      toEqual({
        addedIds: [1],
        quantityById: {1: 1},
      });
  });
  
  describe('when product is already in cart', () => {
    it('should handle ADD_TO_CART action', () => {
      const state = {
        addedIds: [1, 2],
        quantityById: {1: 1, 2: 1},
      };
      
      expect(cart(state,
        {type: ADD_TO_CART, payload: {productId: 2, quantity: 15}})).toEqual({
        addedIds: [1, 2],
        quantityById: {1: 1, 2: 16},
      });
  
      expect(cart(state,
        {type: ADD_TO_CART, payload: {productId: 2}})).toEqual({
        addedIds: [1, 2],
        quantityById: {1: 1, 2: 2},
      });
    });
  });
  
});