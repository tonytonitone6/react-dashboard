import { call, put } from 'redux-saga/effects';
import types from '../actions/constants';
import * as Api from './api';



export function* userSignup(action) {

  const userInfo = action.payload;

  const userData = {
    name: userInfo.get('name'),
    email: userInfo.get('email'),
    password: userInfo.get('password')
  };

  try {
    const { data } = yield call(Api.post.bind(this, '/v1/userSignup', userData));
    if (data && data.isSuccess) {
      yield put({ type: types.USER_SIGNUP_SUCCESS}, ...data);
    }
  } catch (error) {
    ()=>{}
  }
  
  


}