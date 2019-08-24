import {combineReducers} from 'redux';
import {APP_INIT} from '../constants';

//TODO : move products & cart into separate files
//TODO : keep params && guarantee immutability

let products = (state = {}, action) => {
  const {payload, type} = action;
  switch (type) {
  //TODO: stub
  case APP_INIT:
    return [...payload];

  default:
    return state;
  }
};

let cart = (state = {}, action) => {
  const {payload, type} = action;
  switch (type) {
  //TODO: stub
  case APP_INIT:
    return [...payload];

  default:
    return state;
  }
};

const reducers = combineReducers({
  products,
  cart,
});

export default reducers;
