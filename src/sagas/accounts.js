import { call, put } from "redux-saga/effects";
import _ from "lodash";
import types from "../actions/constants";
import * as Api from "./api";

export function* userSignup(action) {
  const userInfo = action.payload;
  const authField = ["name", "email", "password"];
  const userData = {
    name: userInfo.get("name"),
    email: userInfo.get("email"),
    password: userInfo.get("password")
  };

  const res = _.map(authField, item => userData[item]);

  if (res.includes("")) {
    yield put({ type: types.USER_SIGNUP_FAILURE, msg: "lost data" });
  } else {
    const { data } = yield call(
      Api.post.bind(this, "/v1/userSignup", userData)
    );
    data && data.isSuccess
      ? yield put({ type: types.USER_SIGNUP_SUCCESS, ...data })
      : yield put({ type: types.USER_SIGNUP_FAILURE, ...data });
  }
}

export function* userSignin(action) {
  const userLoginData = action.payload;
  const authData = {
    email: userLoginData.get("email"),
    password: userLoginData.get("password")
  };

  try {
    const { data: { error, isSuccess, result } } = yield call(Api.post.bind(this, "/v1/userSignin", authData));
    if (isSuccess && result.token !== '') {
      console.log('saga');
      localStorage.setItem('authToken', result.token);
      yield put({ type: types.USER_SIGNIN_SUCCESS, result: { isSuccess, error, token: result.token } });
    } else {
      throw data;
    }
  } catch (error) {
    yield put({ type: types.USER_SIGNUP_FAILURE, result: error });
  }
}

export function* userSigninStatus(action) {
  if (!action.payload && action.payload === null) {
    const auth = {
      isSuccess: false,
      error: "Token is null"
    };
    yield put({ type: types.USER_SIGNIN_FAILURE, result: auth });
  }
}
