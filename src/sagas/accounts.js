import { call, put } from 'redux-saga/effects';

import types from 'actions/constants';
import ErrorHandle from 'utils/ErrorHandle';
import * as api from './api';

export function* getAccountList() {
  const params = {
    endPoint: '/v1/getAccountList'
  };

  try {
    const { data: { isSuccess, error, result }} = yield call(api.get.bind(this, params));
    if (!isSuccess) {
      throw new ErrorHandle(error)
    } else {
      yield put({ type: types.ACCOUNT_DATALIST, result});
    }
  } catch (error) {
    console.error(error);
  }
}


export function* getFilterUser(action) {
  const params = {
    endPoint: '/v1/getUser',
    userName: action.payload.get('userName'),
    email: action.payload.get('email')
  };

  try {
    const { data: { result } } = yield call(api.get.bind(this, params));
    yield put({ type: types.ACCOUNT_USER, result });
  } catch (error) {
    console.error(error)
  }
}

export function* deleteAccount(action) {
  const params = {
    endPoint: '/v1/deleteAccount',
    _id: action.payload
  };

  try {
    const { data: { isSuccess, error, result } } = yield call(api.destroy.bind(this, params));
    console.log(isSuccess, error, result);
  } catch (error) {
    console.error(error);
  }
}
