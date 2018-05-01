import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import reducers from '../reducers';
import initialState from './initialState';
import rootSaga from '../sagas/index';
import { fetchItems } from '../actions/itemsActions';

const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk, sagaMiddleware];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware), ...enhancers),
);

sagaMiddleware.run(rootSaga);
store.dispatch(fetchItems());

export default store;
