import { call, put, takeEvery } from 'redux-saga/effects';

import { SET_NEW_ITEM } from './../constants';
import { addNewItem } from './../actions/itemsActions';
import Api from '../lib/api';

export function* fetchNewItemFromApi() {
  yield takeEvery(SET_NEW_ITEM, makeApiRequest);
}

function* makeApiRequest({ item }) {
  const updatedItem = yield call(Api.add, item);
  yield put(addNewItem(updatedItem));
}