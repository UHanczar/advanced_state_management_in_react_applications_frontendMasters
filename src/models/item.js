import uniqueId from 'lodash/uniqueId';
import { observable, action, computed } from 'mobx';

export default class Item {
  id;
  store;
  @observable value;
  @observable packed;
  
  constructor({value, id = uniqueId(), packed = false}, list) {
    this.value = value;
    this.id = id;
    this.packed = packed;
    this.list = list;
  }
  
  @computed get unpacked() {
    return !this.packed;
  }
  
  @action.bound toggle(value) {
   return this.packed = value;
 }
  
  @action.bound remove() {
   this.list.removeItem(this);
 }
}