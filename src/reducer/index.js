import { combineReducers } from 'redux';

import menu from './menu';
import authentication from './authentication';
export default combineReducers({
  menu,
  authentication,
});
