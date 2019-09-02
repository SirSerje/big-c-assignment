import reducer, * as products from './products'
import { ADD_TO_CART, RECEIVE_SUCCESS } from '../constants';
import cart from './cart';

describe('reducers', () => {
  const initialState = {
    addedIds: [],
    quantityById: {},
  };
  
  it('should provide the initial state', () => {
    expect(cart(undefined, {})).toEqual(initialState);
  });
  
  describe('products', () => {
    let state
    
    describe('when products are received', () => {
      
      beforeEach(() => {
        state = reducer({}, {
          type: RECEIVE_SUCCESS,
          products: [
            {
              id: 1,
              title: 'Product 1',
              inventory: 2
            },
            {
              id: 2,
              title: 'Product 2',
              inventory: 1
            }
          ]
        })
      })
      
      it('contains the products from the action', () => {
        expect(products.getProduct(state, 1)).toEqual({
          id: 1,
          title: 'Product 1',
          inventory: 2
        })
        expect(products.getProduct(state, 2)).toEqual({
          id: 2,
          title: 'Product 2',
          inventory: 1
        })
      })
      
      it ('contains no other products', () => {
        expect(products.getProduct(state, 3)).toEqual(undefined)
      })
      
      describe('when an item is added to the cart', () => {
        
        beforeEach(() => {
          state = reducer(state, { type: ADD_TO_CART, payload:{ productId: 1, quantity:1} })
        })

        
      })
      
    })
  })
})