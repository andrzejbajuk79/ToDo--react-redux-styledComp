import {createReducer} from './ReducerGen';
import * as actions from '../actions/constants';
const INITIAL_STATE = {
  error: null,
  loading: false,
  deleteTodo: {
    error: null,
    loading: false,
  },
};
const addtodoStart = (state = INITIAL_STATE) => {
  return {...state, loading: true};
};

const addtodoSuccess = (state = INITIAL_STATE) => {
  return {...state, error: false, loading: false};
};
const addtodoFail = (state = INITIAL_STATE, payload) => {
  return {...state, error: payload, loading: false};
};

//delete todo
const deletetodoStart = (state = INITIAL_STATE) => {
  return {...state, deleteTodo: {...state.deleteTodo, loading: true}};
};

const deletetodoSuccess = (state = INITIAL_STATE) => {
  return {
    ...state,
    deleteTodo: {
      ...state.deleteTodo,
      loading: false,
      error: false,
    },
  };
};
const deletetodoFail = (state = INITIAL_STATE, payload) => {
  return {
    ...state,
    deleteTodo: {
      ...state.deleteTodo,
      loading: false,
      error: payload,
    },
  };
};

export default createReducer (INITIAL_STATE, {
  [actions.ADD_TODO_START]: addtodoStart,
  [actions.ADD_TODO_FAIL]: addtodoFail,
  [actions.ADD_TODO_SUCCESS]: addtodoSuccess,
  [actions.DELETE_TODO_START]: deletetodoStart,
  [actions.DELETE_TODO_FAIL]: deletetodoFail,
  [actions.DELETE_TODO_SUCCESS]: deletetodoSuccess,
  [actions.EDIT_TODO_START]: addtodoStart,
  [actions.EDIT_TODO_FAIL]: addtodoFail,
  [actions.EDIT_TODO_SUCCESS]: addtodoSuccess,
});
