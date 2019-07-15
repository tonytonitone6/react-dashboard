// import { combineReducers } from 'redux-immutable';
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form/immutable";
import signinReducer from "./signinReducer";
import signupReducer from "./signupReducer";
import accountsReducer from './accountReducer';
import socketReducer from './socketReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  signup: signupReducer,
  signin: signinReducer,
  form: formReducer,
  accountList: accountsReducer,
  messageList: socketReducer,
  userInfo: userReducer
});

export default rootReducer;
