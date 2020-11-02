import {combineReducers} from 'redux';

import auth from './auth';
import user from './user';
import order from './order';

export default combineReducers({
  auth,
  user,
  order,
});
