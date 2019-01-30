import { handleActions } from 'redux-actions';
import types from '../actions/constants';
import { Map, fromJS } from 'immutable';


const initialSate = fromJS({
  token: '',
  loading: false,
  authentication: false,
  success: false
});


export default handleActions({

})