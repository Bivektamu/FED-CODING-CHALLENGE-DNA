import { GET_HERO, HERO_ERROR } from '../actions/types';

const initialState = {
  loading: true,
  hero: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_HERO:
      return {
        ...state,
        loading: false,
        hero: payload
      };

    case HERO_ERROR: {
      return {
        ...state,
        loading: false,
        hero: null
      };
    }

    default:
      return state;
  }
}
