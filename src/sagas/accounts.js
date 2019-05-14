import { call, put } from 'redux-saga/effects';

import types from '../actions/constants';
import * as api from './api';
import ErrorHandle from '../utils/ErrorHandle';

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
    console.log(error);
  }
}


export function* getFilterUser(action) {
  const params = {
    endPoint: '/v1/getUser',
    userName: action.payload.get('userName'),
    email: action.payload.get('email')
  };

  try {
    const { data: { isSuccess, error, result } } = yield call(api.get.bind(this, params));
    yield put({ type: types.ACCOUNT_USER, result });
    
  } catch (error) {
    console.log(error)
  }



}