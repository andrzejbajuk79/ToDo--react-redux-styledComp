// import * as actions from '../../actions/AuthActions';
//Czyszczenie bledów
export const INITIAL_STATE = {
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

export const cleanErrors = (state = INITIAL_STATE, payload) => {
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
export const authStart = (state = INITIAL_STATE) => {
 return {...state, loading: true};
};
export const authEnd = (state = INITIAL_STATE) => {
 return {...state, loading: false};
};
export const authFail = (state = INITIAL_STATE, payload) => {
 return {...state, error: payload, loading: false};
};
export const authSuccess = (state = INITIAL_STATE) => {
 return {...state, error: false, loading: false};
};
//Veryfying email
export const verifyStart = (state = INITIAL_STATE) => {
 return {...state, verifyEmail: {...state.verifyEmail, loading: true}};
};
export const verifySuccess = (state = INITIAL_STATE) => {
 return {
  ...state,
  verifyEmail: {...state.verifyEmail, error: false, loading: false},
 };
};
export const verifyFail = (state = INITIAL_STATE, payload) => {
 return {
  ...state,
  verifyEmail: {...state.verifyEmail, error: payload, loading: false},
 };
};
//Odzyskiwanie hasła
export const recoverStart = (state = INITIAL_STATE) => {
 return {...state, recoverPassword: {...state.recoverPassword, loading: true}};
};
export const recoverSuccess = (state = INITIAL_STATE) => {
 return {
  ...state,
  recoverPassword: {...state.recoverPassword, error: false, loading: false},
 };
};
export const recoverFail = (state = INITIAL_STATE, payload) => {
 return {
  ...state,
  recoverPassword: {...state.recoverPassword, error: payload, loading: false},
 };
};
//Edycja prfilu
export const profileEditStart = (state = INITIAL_STATE) => {
 return {...state, profileEdit: {...state.profileEdit, loading: true}};
};
export const profileEditSuccess = (state = INITIAL_STATE) => {
 return {
  ...state,
  profileEdit: {...state.profileEdit, error: false, loading: false},
 };
};
export const profileEditFail = (state = INITIAL_STATE, payload) => {
 return {
  ...state,
  profileEdit: {...state.profileEdit, error: payload, loading: false},
 };
};
//Kasowanie user
export const deleteStart = (state = INITIAL_STATE) => {
 return {...state, deleteUser: {...state.deleteUser, loading: true}};
};

export const deleteFail = (state = INITIAL_STATE, payload) => {
 return {
  ...state,
  deleteUser: {...state.deleteUser, error: payload, loading: false},
 };
};
