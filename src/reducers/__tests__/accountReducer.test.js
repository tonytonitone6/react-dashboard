import types from 'actions/constants';
import { fromJS } from 'immutable';
import accountReducer from '../accountReducer';

const initialState = fromJS({
  result: []
});

jest.mock('sagas/api');


test('returns default state', () => {
  // const newState = accountReducer(undefined, {});
  // expect(newState).toBe(initialState);
})


test('returns state of true received an axtion of type of `AccountList`', () => {
  const newState = accountReducer(initialState, { type: types.ACCOUNT_DATALIST, result: [{name: 'stan'}] }); 
  const [ result ] = newState.getIn(['result']).toArray();
  expect(JSON.stringify(result)).toBe(JSON.stringify({name: 'stan'}))
})
