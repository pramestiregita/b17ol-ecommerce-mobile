import {combineReducers} from 'redux';

import auth from './auth';
import user from './user';
import order from './order';
import address from './address';
import product from './product';
import cart from './cart';

export default combineReducers({
  auth,
  user,
  order,
  address,
  product,
  cart,
});
