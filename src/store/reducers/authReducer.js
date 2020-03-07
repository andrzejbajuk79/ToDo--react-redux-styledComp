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
 profileEdit: {
  error: null,
  loading: false,
 },
 deleteUser: {
  error: null,
  loading: false,
 },
};

//Czyszczenie bledów
const cleanErrors = (state = INITIAL_STATE, payload) => {
 return {
  ...state,
  error: null,
  loading: false,
  verifyEmail: {...state.verifyEmail, loading: false, error: null},
  recoverPassword: {...state.recoverPassword, loading: false, error: null},
  profileEdit: {...state.profileEdit, loading: false, error: null},
  deleteUser: {...state.deleteUser, loading: false, error: null},
 };
};
//Autoryzacja
const authStart = (state = INITIAL_STATE) => {
 return {...state, loading: true};
};
const authEnd = (state = INITIAL_STATE) => {
 return {...state, loading: false};
};
const authFail = (state = INITIAL_STATE, payload) => {
 return {...state, error: payload, loading: false};
};
const authSuccess = (state = INITIAL_STATE) => {
 return {...state, error: false, loading: false};
};
//Veryfying email
const verifyStart = (state = INITIAL_STATE) => {
 return {...state, verifyEmail: {...state.verifyEmail, loading: true}};
};
const verifySuccess = (state = INITIAL_STATE) => {
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
//Odzyskiwanie hasła
const recoverStart = (state = INITIAL_STATE) => {
 return {...state, recoverPassword: {...state.recoverPassword, loading: true}};
};
const recoverSuccess = (state = INITIAL_STATE) => {
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
//Edycja prfilu
const profileEditStart = (state = INITIAL_STATE) => {
 return {...state, profileEdit: {...state.profileEdit, loading: true}};
};
const profileEditSuccess = (state = INITIAL_STATE) => {
 return {
  ...state,
  profileEdit: {...state.profileEdit, error: false, loading: false},
 };
};
const profileEditFail = (state = INITIAL_STATE, payload) => {
 return {
  ...state,
  profileEdit: {...state.profileEdit, error: payload, loading: false},
 };
};
//Kasowanie user
const deleteStart = (state = INITIAL_STATE) => {
 return {...state, deleteUser: {...state.deleteUser, loading: true}};
};

const deleteFail = (state = INITIAL_STATE, payload) => {
 return {
  ...state,
  deleteUser: {...state.deleteUser, error: payload, loading: false},
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
 [actions.PROFILE_EDIT_START]: profileEditStart,
 [actions.PROFILE_EDIT_SUCCESS]: profileEditSuccess,
 [actions.PROFILE_EDIT_FAIL]: profileEditFail,
 [actions.PROFILE_DELETE_START]: deleteStart,
 [actions.PROFILE_DELETE_FAIL]: deleteFail,
});
