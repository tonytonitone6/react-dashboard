// import { combineReducers } from 'redux-immutable';
import { combineReducers } from 'redux';
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  login: () => ({}),
  form: formReducer
});

export default rootReducer;
