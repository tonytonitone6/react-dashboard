import { all, takeEvery, takeLatest } from "redux-saga/effects";
import types from "actions/constants";
import * as auth from "./auth";
import * as accounts from './accounts';
import * as chatRoom from './chatroom';

function* rootSagas({ socket }) {
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
    takeLatest(types.SEND_MESSAGE, chatRoom.sendMessage.bind(this, socket))
  ]);

  // yield all([
  //   takeEvery(types.ADD_MESSAGE_LIST, chatRoom.addMessageList)
  // ])
}

export default rootSagas;
