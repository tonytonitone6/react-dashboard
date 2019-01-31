import { call } from 'redux-saga/effects';
// import types from '../actions/constants';
import * as Api from './api';



export function* userSignup(action) {

  const userData = {
    ...action.payload.toJS()
  };

  try {
    const { data } = yield call(Api.post.bind(this, userData));
    localStorage.setItem('authToken', data.token);
  } catch (error) {
    ()=>{}
  }
  
  


}