import {createReducer} from './ReducerGen';
import * as actions from '../actions/constants';

const INITIAL_STATE = {
 error: null,
 loading: false,
 verifyEmail: {
  error: null,
  loading: false,
 },
 recoverPassword: {
  error: null,
  loading: false,
 },
};
const cleanErrors = (state = INITIAL_STATE, payload) => {
 return {
  ...state,
  error: null,
  loading: false,
  verifyEmail: {...state.verifyEmail, loading: false, error: null},
  recoverPassword: {...state.recoverPassword, loading: false, error: null},
 };
};

const authStart = (state = INITIAL_STATE, payload) => {
 return {...state, loading: true};
};
const authEnd = (state = INITIAL_STATE, payload) => {
 return {...state, loading: false};
};
const authFail = (state = INITIAL_STATE, payload) => {
 return {...state, error: payload, loading: false};
};
const authSuccess = (state = INITIAL_STATE, payload) => {
 return {...state, error: false, loading: false};
};

const verifyStart = (state = INITIAL_STATE, payload) => {
 return {...state, verifyEmail: {...state.verifyEmail, loading: true}};
};
const verifySuccess = (state = INITIAL_STATE, payload) => {
 return {
  ...state,
  verifyEmail: {...state.verifyEmail, error: false, loading: false},
 };
};
const verifyFail = (state = INITIAL_STATE, payload) => {
 return {
  ...state,
  verifyEmail: {...state.verifyEmail, error: payload, loading: false},
 };
};
const recoverStart = (state = INITIAL_STATE, payload) => {
 return {...state, recoverPassword: {...state.recoverPassword, loading: true}};
};
const recoverSuccess = (state = INITIAL_STATE, payload) => {
 return {
  ...state,
  recoverPassword: {...state.recoverPassword, error: false, loading: false},
 };
};
const recoverFail = (state = INITIAL_STATE, payload) => {
 return {
  ...state,
  recoverPassword: {...state.recoverPassword, error: payload, loading: false},
 };
};
export default createReducer(INITIAL_STATE, {
 [actions.AUTH_START]: authStart,
 [actions.AUTH_END]: authEnd,
 [actions.AUTH_FAIL]: authFail,
 [actions.AUTH_SUCCESS]: authSuccess,
 [actions.CLEAN_UP]: cleanErrors,
 [actions.VERIFY_START]: verifyStart,
 [actions.VERIFY_SUCCESS]: verifySuccess,
 [actions.VERIFY_FAIL]: verifyFail,
 [actions.RECOVER_START]: recoverStart,
 [actions.RECOVER_SUCCESS]: recoverSuccess,
 [actions.RECOVER_FAIL]: recoverFail,
});
