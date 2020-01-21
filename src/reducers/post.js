import { GET_POST, POST_ERROR } from '../actions/types';

const initialState = {
  loading: true,
  post: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POST:
      return {
        ...state,
        loading: false,
        post: payload
      };

    case POST_ERROR: {
      return {
        ...state,
        loading: false,
        post: null
      };
    }

    default:
      return state;
  }
}
