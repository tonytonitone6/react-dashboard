// import { combineReducers } from 'redux-immutable';
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form/immutable";
import signinReducer from "./signinReducer";
import signupReducer from "./signupReducer";

const rootReducer = combineReducers({
  signup: signupReducer,
  signin: signinReducer,
  form: formReducer
});

export default rootReducer;
