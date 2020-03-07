import {combineReducers} from 'redux';
import authReducer from './authReducer';
import todosReducer from './todosReducer';
import {firebaseReducer} from 'react-redux-firebase';
import {firestoreReducer} from 'redux-firestore';

export default combineReducers({
 todos: todosReducer,
 auth: authReducer,
 firebase: firebaseReducer,
 firestore: firestoreReducer,
});
