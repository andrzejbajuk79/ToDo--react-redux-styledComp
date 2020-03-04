import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
 apiKey: process.env.REACT_APP_APIKEY,
 authDomain: 'todos-auth-7f52d.firebaseapp.com',
 databaseURL: 'https://todos-auth-7f52d.firebaseio.com',
 projectId: 'todos-auth-7f52d',
 storageBucket: 'todos-auth-7f52d.appspot.com',
 messagingSenderId: '66509932565',
 appId: '1:66509932565:web:42882e8f0da7100494e61c',
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
