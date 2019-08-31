import { call, put, all } from 'redux-saga/effects';
import map from 'lodash/map';

import ErrorHandle from 'utils/ErrorHandle';
import types from 'actions/constants';
import storage from 'utils/LocalStorage';
import * as Api from './api';

export function* userSignup(action) {
  const userInfo = action.payload;
  const authField = ['name', 'email', 'password'];
  const userData = {
    name: userInfo.get('name'),
    email: userInfo.get('email'),
    password: userInfo.get('password')
  };
  const params = {
    endPoint: '/v1/userSignup',
    ...userData
  };

  const res = map(authField, item => userData[item]);

  if (res.includes('')) {
    yield put({ type: types.USER_SIGNUP_FAILURE, msg: 'lost data' });
  } else {
    const { data } = yield call(Api.post.bind(this, params, userData));
    data && data.isSuccess
      ? yield put({ type: types.USER_SIGNUP_SUCCESS, ...data })
      : yield put({ type: types.USER_SIGNUP_FAILURE, ...data });
  }
}

export function* userSignin(action) {
  const userLoginData = action.payload;
  const authData = {
    endPoint: '/v1/userSignin',
    email: userLoginData.get('email'),
    password: userLoginData.get('password')
  };

  try {
    const {
      data: {
        error,
        isSuccess,
        result: { token, _id }
      }
    } = yield call(Api.post.bind(this, authData));

    if (isSuccess && token !== '') {
      // storage.set('authToken', token);
      localStorage.setItem('authToken', token);
      yield all([
        put({ type: types.USER_INFO, result: { _id } }),
        put({ type: types.USER_SIGNIN_SUCCESS, result: { isSuccess, token } })
      ]);
      // yield put({ type: types.USER_SIGNIN_SUCCESS, result: { isSuccess, token: result } });
    } else {
      const errorMsg = {
        error,
        isSuccess,
        result
      };
      throw new ErrorHandle(errorMsg);
    }
  } catch (error) {
    yield put({ type: types.USER_SIGNIN_FAILURE, result: error.toMessage() });
  }
}

export function* userSigninStatus() {
  // const token = storage.get('authToken');
  const token = localStorage.getItem('authToken');

  const params = {
    endPoint: '/v1/userStatus'
  };

  try {
    if (!token && (token === null || token === '')) {
      const errorParams = {
        message: "token isn't exist"
      };
      throw new ErrorHandle(errorParams);
    } else {
      const {
        data: { isSuccess, error }
      } = yield call(Api.get.bind(this, params));
      if (!isSuccess && error.message !== '') {
        throw new ErrorHandle(error);
      } else {
        yield put({
          type: types.USER_SIGNIN_SUCCESS,
          result: { isSuccess, error: {} }
        });
      }
    }
  } catch (error) {
    yield put({ type: types.USER_SIGNIN_FAILURE, result: error.toMessage() });
  }
}
