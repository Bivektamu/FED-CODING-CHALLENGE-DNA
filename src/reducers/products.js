import { GET_PRODUCTS, PRODUCTS_ERROR } from '../actions/types';

const initialState = {
  loading: true,
  products: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: payload
      };

    case PRODUCTS_ERROR: {
      return {
        ...state,
        loading: false,
        products: null
      };
    }

    default:
      return state;
  }
}
