import { call, put, takeEvery } from 'redux-saga/effects';

import { FETCH_ITEMS } from './../constants';
import { updateAllItems} from './../actions/itemsActions';
import Api from '../lib/api';

export function* fetchItemsFromApi() {
  yield takeEvery(FETCH_ITEMS, makeApiRequest);
}

function* makeApiRequest() {
  const items = yield call(Api.getAll);
  yield put(updateAllItems(items));
}