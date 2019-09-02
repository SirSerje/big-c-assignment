import { ADD_TO_CART, RECEIVE_START, RECEIVE_SUCCESS } from '../constants';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { getAllProducts } from '../actions';
import axios from 'axios';
import  reducers  from '../reducers';
import { combineReducers } from 'redux';
import cart from '../reducers/cart';
import products from '../reducers/products';
import { addToCart } from './index';




describe("actions tests", ()=>{
  const mockStore = configureStore([thunk]);
  const initialState = {
    addedIds: [],
    quantityById: {},
  };
  let store;
  beforeEach(()=> {
    store = mockStore(combineReducers({
      cart,
      products,
    }));
    // store = mockStore(initialState);
  })
  describe('addToCart', () => {
    it('should have default quantity', ()=> {
      store.dispatch(addToCart())
      expect(store.getActions()[0].payload.quantity).toEqual(1);
  
    })
    //FIXME:
    it('should add to cart properly', ()=> {
      let reducer = cart(initialState, store.dispatch(addToCart(5,11)))
      store.dispatch(addToCart())
      console.log(reducer);
      expect(store.getActions().length).toEqual(2);
      expect(store.getActions()[1].type).toEqual(ADD_TO_CART);
      expect(store.getActions()[0]).toMatchObject({payload: {productId: 5, quantity: 11},type: ADD_TO_CART})
    })
  })
  describe('removeFromCart', () => {
  
  })
  describe('removeAll', () => {
  
  })
  
  describe('getAllProducts', () => {
    it('should fire success after getting data', async () => {
      axios.get = jest.fn(() => Promise.resolve(products));
      await store.dispatch(getAllProducts());
      expect(axios.get).toHaveBeenCalled();
      expect(store.getActions()[0].type).toEqual(RECEIVE_START);
      expect(store.getActions()[1]).toMatchObject(RECEIVE_SUCCESS);
    });
  });
  
})


/*
 
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

 */