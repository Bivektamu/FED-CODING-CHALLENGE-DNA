import { combineReducers } from 'redux';
import hero from './hero';
import products from './products';

export default combineReducers({
  hero,
  products
});
