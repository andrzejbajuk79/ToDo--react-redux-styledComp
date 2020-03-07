import {createReducer} from '../ReducerGen';
import * as actions from '../../actions/constants';
import * as reducerHelper from './authReducerHelper';

export default createReducer (reducerHelper.INITIAL_STATE, {
  [actions.AUTH_START]: reducerHelper.authStart,
  [actions.AUTH_END]: reducerHelper.authEnd,
  [actions.AUTH_FAIL]: reducerHelper.authFail,
  [actions.AUTH_SUCCESS]: reducerHelper.authSuccess,
  [actions.CLEAN_UP]: reducerHelper.cleanErrors,
  [actions.VERIFY_START]: reducerHelper.verifyStart,
  [actions.VERIFY_SUCCESS]: reducerHelper.verifySuccess,
  [actions.VERIFY_FAIL]: reducerHelper.verifyFail,
  [actions.RECOVER_START]: reducerHelper.recoverStart,
  [actions.RECOVER_SUCCESS]: reducerHelper.recoverSuccess,
  [actions.RECOVER_FAIL]: reducerHelper.recoverFail,
  [actions.PROFILE_EDIT_START]: reducerHelper.profileEditStart,
  [actions.PROFILE_EDIT_SUCCESS]: reducerHelper.profileEditSuccess,
  [actions.PROFILE_EDIT_FAIL]: reducerHelper.profileEditFail,
  [actions.PROFILE_DELETE_START]: reducerHelper.deleteStart,
  [actions.PROFILE_DELETE_FAIL]: reducerHelper.deleteFail,
});
