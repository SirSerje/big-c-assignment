import { ADD_TO_CART, REMOVE_1_FROM_CARD, REMOVE_FROM_CARD } from '../constants';

const initialState = {
  addedIds: [],
  quantityById: {},
};

const addedIds = (state = initialState.addedIds, action, quantity) => {
  const { type, productId } = action;
  switch (type) {
  case ADD_TO_CART:
    if (state.indexOf(productId) !== -1) {
      return state;
    }
    return [...state, productId];

  case REMOVE_1_FROM_CARD:
    if (quantity[productId] - 1 === 0) {
      const a = state.filter((i) => i !== productId);
      return [...a];
    }
    return state;

  case REMOVE_FROM_CARD:
    const b = state.filter((i) => i !== productId);
    return [...b];
  default:
    return state;
  }
};

const quantityById = (state = initialState.quantityById, action) => {
  const { type, productId } = action;

  switch (type) {
  case ADD_TO_CART:
    return {
      ...state,
      [productId]: (state[productId] || 0) + 1,
    };

  case REMOVE_FROM_CARD:
    // FIXME : как без лодаша убрать значение из объекта?
    const { [productId]: b, ...rest } = state;
    return { ...rest };

  case REMOVE_1_FROM_CARD:
    // FIXME : если нету кнопки то проверка не нужна, но тест то я написать могу, по сути ;)
    if (state[productId] && state[productId] > 0) {
      if (state[productId] - 1 === 0) {
        // FIXME : такой способ удаления шляпа или нет?
        //  (как минимум мне не нравиться что лишняя переменная создается
        const { [productId]: a, ...rest } = state;
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

export const getQuantity = (state, productId) => state.quantityById[productId] || 0;

export const getAddedIds = (state) => state.addedIds;

const cart = (state = initialState, action) => ({
  // FIXME: мне надо некрасиво передавать или весь стейт
  //  или отдельно двумя параметрами addedIds и quantityById, как лучше распетлять?
  addedIds: addedIds(state.addedIds, action, state.quantityById),
  quantityById: quantityById(state.quantityById, action),
});

export default cart;
