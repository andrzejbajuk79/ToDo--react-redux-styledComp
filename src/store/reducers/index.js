import {combineReducers} from 'redux';
import authReducer from './Auth/authReducer';
import todosReducer from './Todo/todosReducer';
import {firebaseReducer} from 'react-redux-firebase';
import {firestoreReducer} from 'redux-firestore';

export default combineReducers ({
  todos: todosReducer,
  auth: authReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});
