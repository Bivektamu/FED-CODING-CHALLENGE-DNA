import {
  GET_HERO,
  GET_POST,
  GET_PRODUCTS,
  POST_ERROR,
  PRODUCTS_ERROR,
  HERO_ERROR,
  GET_TAB,
  TAB_ERROR
} from './types';

import data from '../data';

//fetch Hero content
export const getHeroProduct = () => dispatch => {
  try {
    const heroProduct = data.filter(({ _section }) => _section === 'hero');

    dispatch({
      type: GET_HERO,
      payload: heroProduct
    });
  } catch (err) {
    dispatch({
      type: HERO_ERROR
    });
  }
};

//fetch Hero content
export const getProducts = () => dispatch => {
  try {
    const products = data.filter(({ _section }) => _section === 'products');

    dispatch({
      type: GET_PRODUCTS,
      payload: products
    });
  } catch (err) {
    dispatch({
      type: PRODUCTS_ERROR
    });
  }
};
