import {RECEIVE_START, RECEIVE_SUCCESS} from '../constants';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {getAllProducts} from '../actions';
import axios from 'axios';
import {combineReducers} from 'redux';
import cart from '../reducers/cart';
import products from '../reducers/products';


describe("actions tests", () => {
  const mockStore = configureStore([thunk]);
  const initialState = {
    addedIds: [],
    quantityById: {},
  };
  let store;
  beforeEach(() => {
    store = mockStore(combineReducers({
      cart,
      products,
    }));
    store = mockStore(initialState);
  });

  describe('getAllProducts', () => {
    it('should fire success after getting data', async () => {
      axios.get = jest.fn(() => Promise.resolve(products));
      await store.dispatch(getAllProducts());
      expect(axios.get).toHaveBeenCalled();
      expect(store.getActions()[0].type).toEqual(RECEIVE_START);
      expect(store.getActions()[1].type).toEqual(RECEIVE_SUCCESS);
    });
  });
});
