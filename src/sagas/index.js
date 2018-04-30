import { all } from 'redux-saga/effects';

import { fetchItemsFromApi } from './fetchItems';
import { fetchNewItemFromApi } from './addNewItem';
import { toggleItemAfterApiResponse } from './toggleItem';
import { removeItemAfterApiResponse } from './removeItem';
import { makeAllItemsUnpackedAfterApiResponse } from './markAllAsUnpacked';

export default function* rootSaga() {
  yield all([
    fetchItemsFromApi(),
    fetchNewItemFromApi(),
    toggleItemAfterApiResponse(),
    removeItemAfterApiResponse(),
    makeAllItemsUnpackedAfterApiResponse()
  ]);
}
