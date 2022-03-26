import { combineReducers } from 'redux';

import provinceReducer from './ongkir/provinceReducer';
import cityReducer from './ongkir/cityReducer';
import authReducer from './auth/authReducer';
import navbarReducer from './navbar/navbarReducer';

export default combineReducers({
  provinceReducer,
  cityReducer,
  authReducer,
  navbarReducer
});
