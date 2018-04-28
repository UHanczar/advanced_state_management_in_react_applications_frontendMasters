import { UPDATE_NEW_ITEM_VALUE, CLEAR_NEW_ITEM_VALUE } from '../constants';

export default function(state = '', action) {
  if (action.type === UPDATE_NEW_ITEM_VALUE) {
    return action.value;
  }
  
  if (action.type === CLEAR_NEW_ITEM_VALUE) {
    return '';
  }

  return state;
}
