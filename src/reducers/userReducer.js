import { handleActions } from 'redux-actions';
import { Map } from 'immutable';

import types from 'actions/constants';

const initialState = Map({
  user: {
    _Id: null
  }
});


export default handleActions({
  [types.USER_INFO]: (state, { result }) => {
    const res = state
      .setIn(['user', '_id'], result._Id);
    return res;
  }
}, initialState);