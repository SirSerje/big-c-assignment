import cart from './cart';
import {ADD_TO_CART} from '../constants';
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {combineReducers} from "redux";
import products from "./products";
import {addToCart} from "../actions";

describe('reducers', () => {
  const initialState = {
    addedIds: [],
    quantityById: {},
  };

  describe('cart', () => {
    const mockStore = configureStore([thunk]);
    let store;
    beforeEach(() => {
      store = mockStore(combineReducers({
        cart,
        products,
      }));
      store = mockStore(initialState);
    });

    it('should handle ADD_TO_CART action', () => {
      expect(cart(initialState, {type: ADD_TO_CART, payload: {productId: 1}})).toEqual({
        addedIds: [1],
        quantityById: {1: 1},
      });
    });

    it('should have default quantity', () => {
      store.dispatch(addToCart());
      expect(store.getActions()[0].payload.quantity).toEqual(1);
    });

    it('should add to cart properly', () => {
      let reducer = cart(initialState, store.dispatch(addToCart(5, 11)));
      store.dispatch(addToCart());
      expect(store.getActions().length).toEqual(2);
      expect(store.getActions()[1].type).toEqual(ADD_TO_CART);
      expect(store.getActions()[0]).toMatchObject({
        payload: {productId: 5, quantity: 11},
        type: ADD_TO_CART
      })
    })

    it('should provide the initial state', () => {
      expect(cart(undefined, {})).toEqual(initialState);
    });
  });



  describe('product in cart', () => {
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
