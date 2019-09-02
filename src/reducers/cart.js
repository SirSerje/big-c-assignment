import {
  ADD_TO_CART,
  REMOVE_1_FROM_CARD,
  REMOVE_FROM_CARD,
} from '../constants';


const initialState = {
  addedIds: [],
  quantityById: {},
};

const addedIds = (state = initialState.addedIds, action, quantity) => {
  const { type, payload } = action;
  const { productId } = payload || {};

  switch (type) {
  case ADD_TO_CART:
    if (state.indexOf(productId) !== -1) {
      return state;
    }
    return [...state, productId];

  case REMOVE_FROM_CARD:
    if (quantity[productId] - 1 === 0) {
      return [...state.filter((i) => i !== productId)];
    }
    return state;

  case REMOVE_1_FROM_CARD:
    return [...state.filter((i) => i !== productId)];

  default:
    return state;
  }
};

const quantityById = (state = initialState.quantityById, action) => {
  const { type, payload } = action;
  const { productId, quantity } = payload || {};

  switch (type) {
  case ADD_TO_CART:
    return {
      ...state,
      [productId]: (state[productId] || 0) + quantity,
    };

  case REMOVE_1_FROM_CARD:
    const { [productId]: itemToRemove, ...rest } = state;
    return { ...rest };

  case REMOVE_FROM_CARD:
    if (state[productId] && state[productId] > 0) {
      if (state[productId] - 1 === 0) {
        const { [productId]: itemToDecrease, ...rest } = state;
        return { ...rest };
      }
      return {
        ...state,
        [productId]: state[productId] - 1,
      };
    }
    return state;

  default:
    return state;
  }
};

export const getQuantity = (
  state, productId,
) => state.quantityById[productId] || 0;

export const getAddedIds = (state) => state.addedIds;

const cart = (state = initialState, action) => ({
  addedIds: addedIds(state.addedIds, action, state.quantityById),
  quantityById: quantityById(state.quantityById, action),
});

export default cart;
