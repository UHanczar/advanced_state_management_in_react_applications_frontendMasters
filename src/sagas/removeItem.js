import { call, put, takeEvery } from 'redux-saga/effects';

import { REMOVE_ITEM_REQUEST } from './../constants';
import { removeItem } from './../actions/itemsActions';

import Api from '../lib/api';

export function* removeItemAfterApiResponse() {
  yield takeEvery(REMOVE_ITEM_REQUEST, makeApiRequest);
}

function* makeApiRequest({ item }) {
  yield call(Api.delete, item);
  yield put(removeItem(item));
}