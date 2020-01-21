import { combineReducers } from 'redux';
import hero from './hero';
import products from './products';
import post from './post';
import tabs from './tabs';

export default combineReducers({
  hero,
  products,
  post,
  tabs
});
