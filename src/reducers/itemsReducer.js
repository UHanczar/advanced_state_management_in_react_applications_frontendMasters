import { ADD_NEW_ITEM, REMOVE_ITEM, TOGGLE_ITEM, MARK_ALL_AS_UNPACKED, UPDATE_ALL_ACTIONS } from '../constants';

export default function(state = {}, action) {
  if (action.type === UPDATE_ALL_ACTIONS) {
    return action.items;
  }
  
  if (action.type === ADD_NEW_ITEM) {
    const { id, packed, value } = action.item;
    
    return [...state, { id, packed, value }];
  }

  if (action.type === REMOVE_ITEM) {
    return state.filter(item => item.id !== action.item.id);
  }
  
  if (action.type === TOGGLE_ITEM) {
    return state.map(item => item.id === action.item.id ? action.item : item);
  }
  
  if (action.type === MARK_ALL_AS_UNPACKED) {
    return state.map(item => ({ ...item, packed: false }));
  }
  
  return state;
}
