import { GET_TABS, TABS_ERROR } from '../actions/types';

const initialState = {
  loading: true,
  tabs: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TABS:
      return {
        ...state,
        loading: false,
        tabs: payload
      };

    case TABS_ERROR: {
      return {
        ...state,
        loading: false,
        tabs: null
      };
    }

    default:
      return state;
  }
}
