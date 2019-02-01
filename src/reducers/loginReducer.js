import { handleActions } from "redux-actions";
import { Map, fromJS } from "immutable";
import types from "../actions/constants";

const initialState = fromJS({
  token: "",
  loading: false,
  success: false
});

export default handleActions({
  
}, initialState);
