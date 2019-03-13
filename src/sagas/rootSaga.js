import { all, takeEvery } from "redux-saga/effects";
import * as account from "./accounts";
import types from "../actions/constants";

function* rootSagas() {
  yield all([
    takeEvery(types.USER_SIGNIN, account.userSignin),
    takeEvery(types.USER_STATUS, account.userSigninStatus),
    takeEvery(types.USER_SIGNUP, account.userSignup)
  ]);
}

export default rootSagas;
