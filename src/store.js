import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import socketConnect from 'sagas/socket';
import reducer from "./reducers";
import rootSagas from "./sagas/rootSaga";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  {},
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

const socket = socketConnect(store.dispatch);

sagaMiddleware.run(rootSagas, { socket });

export default store;
