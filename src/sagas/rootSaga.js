import { all, takeEvery } from "redux-saga/effects";
import types from "../actions/constants";

function* rootSagas() {
  yield all([takeEvery(types.USER_SIGNIN, () => {})]);
}

export default rootSagas;
