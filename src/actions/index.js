import { createAction } from "redux-actions";
import types from "./constants";

export default {
  userSignin: createAction(types.USER_SIGNIN),
  userSignup: createAction(types.USER_SIGNUP),
  userStatus: createAction(types.USER_STATUS),
  accountList: createAction(types.GET_ACCOUNT_LIST),
  searchUser: createAction(types.FILTER_ACCOUNT),
  sendMessage: createAction(types.SEND_MESSAGE),
  editAccount: createAction(types.EDIT_ACCOUNT),
  deleteAccount: createAction(types.DELETE_ACCOUNT)
};
