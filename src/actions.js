import uniqueId from 'uniqid';

import AppDispatcher from './dispatcher';

export const addItem = value => {
  AppDispatcher.dispatch({
    type: 'ADD_NEW_ITEM',
    item: {
      value, 
      id: uniqueId(), 
      packed: false
    }
  });
};

export const toggleItem = item => {
  AppDispatcher.dispatch({
    type: 'UPDATE_ITEM',
    item: {
      ...item,
      packed: !item.packed
    }
  });
};

export const removeItem = item => {
  AppDispatcher.dispatch({
    type: 'REMOVE_ITEM',
    item
  });
};
