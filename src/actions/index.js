import {
  GET_HERO,
  GET_POST,
  GET_PRODUCTS,
  POST_ERROR,
  PRODUCTS_ERROR,
  HERO_ERROR,
  GET_TABS,
  TABS_ERROR
} from './types';

import data from '../data';

//fetch Hero Product
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

//fetch all products
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

//fetch Post content
export const getPost = () => dispatch => {
  try {
    const post = data.filter(({ _section }) => _section === 'post');

    dispatch({
      type: GET_POST,
      payload: post
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR
    });
  }
};

//fetch all tabs
export const getTabs = () => dispatch => {
  try {
    const products = data.filter(({ _section }) => _section === 'tabs');

    dispatch({
      type: GET_TABS,
      payload: products
    });
  } catch (err) {
    dispatch({
      type: TABS_ERROR
    });
  }
};
