import { combineReducers } from 'redux';

import filter from './filterReducer';
import items from './itemsReducer';
import newItemValue from './newItemReducer';

export default combineReducers({
  filter,
  items,
  newItemValue,
});
