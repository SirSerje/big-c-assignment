import * as types from '../constants';
import axios from 'axios';

//TODO : split actions into separate files
//TODO : remove payload if not necessary
/**
 * init app & get data from package.json file
 */
export const init = () => dispatch => {
  axios.get('/products.json')
    .then(function (response) {
      dispatch({ type: types.APP_INIT, payload: response.data });
    });
};

export const add2Cart = id => dispatch => dispatch({type : types.ADD_TO_MY_CART, payload:id});
//------------------------------------------------------------------------------------------------------------------

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products
});

export const getAllProducts = () => dispatch => {
  // shop.getProducts(products => {
  //   dispatch(receiveProducts(products))
  // })
  axios.get('/products.json')
    .then(function (products) {
      dispatch(receiveProducts(products.data));
      // dispatch({ type: types.APP_INIT, payload: response.data });
    });
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => dispatch => dispatch(addToCartUnsafe(productId))

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState();
  dispatch({
    type: types.CHECKOUT_REQUEST
  });

};

export const removeFromCart = productId => dispatch => dispatch({type: types.REMOVE_FROM_CARD, productId})
//TODO swap const
export const removeAll = productId => dispatch => dispatch({type: types.REMOVE_1_FROM_CARD, productId})
