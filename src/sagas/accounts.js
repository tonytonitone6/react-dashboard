import { call, put } from "redux-saga/effects";
import types from "../actions/constants";
import * as Api from "./api";

export function* userSignup(action) {
  const userInfo = action.payload;

  const userData = {
    name: userInfo.get("name"),
    email: userInfo.get("email"),
    password: userInfo.get("password")
  };

  const { data } = yield call(
    Api.post.bind(this, "/v1/userSignup", userData)
  );

  (data && data.isSuccess) 
    ? yield put({ type: types.USER_SIGNUP_SUCCESS, ...data})
    : yield put({ type: types.USER_SIGNUP_FAILURE, ...data})

}
