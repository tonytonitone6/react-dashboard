import { handleActions } from 'redux-actions';
import { fromJS, List } from 'immutable';

import types from 'actions/constants';

const initialState = fromJS({
  result: []
});

export default handleActions(
  {
    [types.ACCOUNT_DATALIST]: (state, { result }) => {
      const res = state.setIn(['result'], List(result));
      return res;
    },
    [types.ACCOUNT_USER]: (state, { result }) => {
      const res = state.setIn(['result'], List(result));
      return res;
    }
  },
  initialState
)