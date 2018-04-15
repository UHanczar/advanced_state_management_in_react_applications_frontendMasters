import { EventEmitter } from 'events';
import uniqueId from 'uniqid';

import AppDispatcher from './dispatcher';

let items = [
  { value: 'Pants', id: uniqueId(), packed: false },
  { value: 'Jacket', id: uniqueId(), packed: false },
  { value: 'iPhone Charger', id: uniqueId(), packed: false },
  { value: 'MacBook', id: uniqueId(), packed: false },
  { value: 'Sleeping Pills', id: uniqueId(), packed: true },
  { value: 'Underwear', id: uniqueId(), packed: false },
  { value: 'Hat', id: uniqueId(), packed: false },
  { value: 'T-Shirts', id: uniqueId(), packed: false },
  { value: 'Belt', id: uniqueId(), packed: false },
  { value: 'Passport', id: uniqueId(), packed: true },
  { value: 'Sandwich', id: uniqueId(), packed: true },
];

class ItemStore extends EventEmitter {
  constructor() {
    super();
    
    this.registerActions();
  }
  
  registerActions() {
    return AppDispatcher.register(action => {
      console.log('STORE', action);
      switch (action.type) {
        case 'ADD_NEW_ITEM':
          return this.addItem(action.item);
        case 'UPDATE_ITEM':
          return this.toggleItem(action.item);
        case 'REMOVE_ITEM':
          return this.removeItem(action.item);
        default:
          return this.getItems();
      }
   });
  }
  
  getItems() {
    return items;
  }
  
  addItem(item) {
    items = [...items, item];
    this.emit('change');
  }
  
  toggleItem(itemToToggle) {
    items = items.map(item => {
      if (item.id !== itemToToggle.id) return item;
      return itemToToggle;
    });
    this.emit('change');
  }
  
  removeItem(itemToRemove) {
    items = items.filter(item => item.id !== itemToRemove.id);
    this.emit('change');
  }
}

export default new ItemStore();
