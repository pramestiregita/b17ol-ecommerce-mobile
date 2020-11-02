import {combineReducers} from 'redux';

import auth from './auth';
import user from './user';
import order from './order';
import address from './address';

export default combineReducers({
  auth,
  user,
  order,
  address,
});
