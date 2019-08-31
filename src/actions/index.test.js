import fns from './index';
import types from './constants';


describe('test dispatch functions', () => {
  test('return an action with type `GET_ACCOUNT_LIST`', () => {
    const action = fns.accountList();
    expect(action).toEqual({ type: types.GET_ACCOUNT_LIST});
  });
});
