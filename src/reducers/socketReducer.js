import { handleActions } from "redux-actions";
import { fromJS } from "immutable";
import types from "actions/constants";

const initialState = fromJS({
  messageList: [],
});

export default handleActions(
  {
    [types.ADD_MESSAGE_LIST]: (state, action) => {
      const { payload } = action;
      const res = state.update('messageList', list => list.push(payload));
      return res;
    }
  },
  initialState
);
