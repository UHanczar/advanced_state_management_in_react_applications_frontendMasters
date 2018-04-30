import { call, put, takeEvery } from 'redux-saga/effects';

import { TOGGLE_ITEM_REQUEST } from './../constants';
import { toggleItem } from './../actions/itemsActions';

import Api from '../lib/api';

export function* toggleItemAfterApiResponse() {
  yield takeEvery(TOGGLE_ITEM_REQUEST, makeApiRequest);
}

function* makeApiRequest({ item }) {
  yield call(Api.update, item);
  yield put(toggleItem(item));
}