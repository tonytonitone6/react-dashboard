import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import socketIOClient from 'socket.io-client';
import reducer from "./reducers";
import rootSagas from "./sagas/rootSaga";

const socketPort = 'http://localhost:7100';

const socket = socketIOClient(socketPort);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  {},
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSagas, socket);

export default store;
