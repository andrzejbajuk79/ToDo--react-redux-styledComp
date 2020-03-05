import {createReducer} from './ReducerGen';
import * as actions from '../actions/constants';

const INITIAL_STATE = {
 error: null,
 loading: false,
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

const cleanErrors = (state = INITIAL_STATE, payload) => {
 return {...state, error: null, loading: false};
};

export default createReducer(INITIAL_STATE, {
 [actions.AUTH_START]: authStart,
 [actions.AUTH_END]: authEnd,
 [actions.AUTH_FAIL]: authFail,
 [actions.AUTH_SUCCESS]: authSuccess,
 [actions.CLEAN_UP]: cleanErrors,
});
