import { call, put, takeEvery } from 'redux-saga/effects';

import { MARK_ALL_AS_UNPACKED_REQUEST } from './../constants';
import { markAllAsUnpacked } from './../actions/itemsActions';

import Api from '../lib/api';

export function* makeAllItemsUnpackedAfterApiResponse() {
  yield takeEvery(MARK_ALL_AS_UNPACKED_REQUEST, makeApiRequest);
}

function* makeApiRequest({ item }) {
  yield call(Api.markAllAsUnpacked);
  yield put(markAllAsUnpacked());
}