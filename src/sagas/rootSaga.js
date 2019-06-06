import { all, takeEvery, takeLatest } from "redux-saga/effects";
import * as auth from "./auth";
import * as accounts from './accounts';
import * as sockets from './socket';
import types from "../actions/constants";

function* rootSagas(socket) {
  console.log(socket);

  yield all([
    takeEvery(types.USER_SIGNIN, auth.userSignin),
    takeEvery(types.USER_SIGNUP, auth.userSignup)
  ]);
  yield all([
    takeEvery(types.USER_STATUS, auth.userSigninStatus),
  ]);
  yield all([
    takeEvery(types.GET_ACCOUNT_LIST, accounts.getAccountList),
    takeLatest(types.FILTER_ACCOUNT, accounts.getFilterUser)
  ]);
  yield all([
    takeLatest(types.DELETE_ACCOUNT, accounts.deleteAccount)
  ]);
  yield all([
    takeLatest(types.SEND_MESSAGE, sockets.sendMessage)
  ]);
}

export default rootSagas;
