// import { combineReducers } from 'redux-immutable';
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';

const rootReducer = combineReducers({
  signup: signupReducer,
  login: loginReducer,
  form: formReducer
});

export default rootReducer;
