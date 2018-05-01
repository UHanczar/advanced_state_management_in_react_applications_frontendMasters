import {
  FETCH_ITEMS,
  UPDATE_ALL_ITEMS,
  SET_NEW_ITEM,
  ADD_NEW_ITEM,
  REMOVE_ITEM_REQUEST,
  REMOVE_ITEM,
  TOGGLE_ITEM_REQUEST,
  TOGGLE_ITEM,
  MARK_ALL_AS_UNPACKED_REQUEST,
  MARK_ALL_AS_UNPACKED,
} from '../constants';

export const fetchItems = () => ({
  type: FETCH_ITEMS
})

export const updateAllItems = items => ({
  type: UPDATE_ALL_ITEMS,
  items
});

export const setNewItem = item => ({
  type: SET_NEW_ITEM,
  item: {
    value: item,
    packed: false
  }
});

export const addNewItem = item => ({
  type: ADD_NEW_ITEM,
  item
});

export const toggleItemREquest = item => ({
  type: TOGGLE_ITEM_REQUEST,
  item: { ...item, packed: !item.packed }
});

export const toggleItem = item => ({
  type: TOGGLE_ITEM,
  item
});

export const removeItemRequest = item => ({
  type: REMOVE_ITEM_REQUEST,
  item
});

export const removeItem = item => ({
  type: REMOVE_ITEM,
  item,
});

export const markAllAsUnpackedRequest = () => ({
  type: MARK_ALL_AS_UNPACKED_REQUEST
});

export const markAllAsUnpacked = () => ({
  type: MARK_ALL_AS_UNPACKED
});