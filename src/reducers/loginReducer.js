import { handleActions } from 'redux-actions';
import { Map } from 'immutable';
import types from '../actions/constants';


const initialSate = Map({
  token: '',
  loading: false,
  success: false
});


export default handleActions({
  [types.USER_SIGNUP_SUCCESS]: (state, action) => {

  },
  initialSate
})