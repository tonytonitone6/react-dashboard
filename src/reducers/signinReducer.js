import { handleActions } from "redux-actions";
import { fromJS } from "immutable";
import types from "../actions/constants";

const initialState = fromJS({
  isSuccess: false,
  error: null
});

export default handleActions(
  {
    [types.USER_SIGNIN_FAILURE]: (state, action) => {
      const result = { ...action.result };
      return state
        .set("isSuccess", result.isSuccess)
        .set("error", result.error);
    }
  },
  initialState
);
