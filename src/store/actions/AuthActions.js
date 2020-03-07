import * as actions from './constants';

//Sign Up action screator
export const signUp = data => async (
 dispatch, //thunk
 getState, //thunk
 {getFirebase, getFirestore} //applymidleware in store
) => {
 const firebase = getFirebase();
 const firestore = getFirestore();
 dispatch({type: actions.AUTH_START});

 try {
  const res = await firebase
   .auth()
   .createUserWithEmailAndPassword(data.email, data.password);

  //Send Verification email
  const user = firebase.auth().currentUser;
  await user.sendEmailVerification();

  await firestore
   .collection('users')
   .doc(res.user.uid)
   .set({
    firstName: data.firstName,
    lastName: data.lastName,
   });
  dispatch({type: actions.AUTH_SUCCESS});
 } catch (err) {
  dispatch({type: actions.AUTH_FAIL, payload: err.message});
  console.error(err.message);
 }
 dispatch({type: actions.AUTH_END});
};

//Log out action screator
export const signOut = () => async (dispatch, getState, {getFirebase}) => {
 const firebase = getFirebase();

 try {
  await firebase.auth().signOut();
 } catch (err) {
  console.error(err.message);
 }
};

//LogIn action creator
export const signIn = data => async (dispatch, getState, {getFirebase}) => {
 const firebase = getFirebase();
 dispatch({type: actions.AUTH_START});
 try {
  await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
  dispatch({type: actions.AUTH_SUCCESS});
 } catch (err) {
  console.error(err.message);
  dispatch({type: actions.AUTH_FAIL, payload: err.message});
 }
 dispatch({type: actions.AUTH_END});
};

//Clean Messeges action creator
export const cleanErrors = () => ({
 type: actions.CLEAN_UP,
});

// Verify email actionTypes
export const verifyEmail = () => async (dispatch, getState, {getFirebase}) => {
 const firebase = getFirebase();
 dispatch({type: actions.VERIFY_START});
 try {
  const user = firebase.auth().currentUser;
  await user.sendEmailVerification();
  dispatch({type: actions.VERIFY_SUCCESS});
 } catch (err) {
  console.error(err.message);
  dispatch({type: actions.VERIFY_FAIL, payload: err.message});
 }
};
// Send Recover Password
export const recoverPassword = data => async (
 dispatch,
 getState,
 {getFirebase}
) => {
 const firebase = getFirebase();
 dispatch({type: actions.RECOVER_START});
 try {
  await firebase.auth().sendPasswordResetEmail(data.email);
  dispatch({type: actions.RECOVER_SUCCESS});
 } catch (err) {
  console.error(err.message);
  dispatch({type: actions.RECOVER_FAIL, payload: err.message});
 }
};

// Edycja profilu
export const editProfile = data => async (
 dispatch,
 getState,
 {getFirebase, getFirestore}
) => {
 //musimy miec dostep do firebase i firestore, poniewaz imie,nazwisko sa w firestore
 // a haslo i email sa w firebase
 const firebase = getFirebase();
 const firestore = getFirestore();
 const user = firebase.auth().currentUser;
 const {uid: userId, email: userEmail} = getState().firebase.auth;

 dispatch({type: actions.PROFILE_EDIT_START});
 try {
  //email
  if (data.email !== userEmail) {
   await user.updateEmail(data.email);
  }
  //dane personalne
  await firestore
   .collection('users')
   .doc(userId)
   .set({
    firstName: data.firstName,
    lastName: data.lastName,
   });
  //haslo
  if (data.password.length > 0) {
   await user.updatePassword(data.password);
  }

  dispatch({type: actions.PROFILE_EDIT_SUCCESS});
 } catch (err) {
  console.error(err.message);
  dispatch({type: actions.PROFILE_EDIT_FAIL, payload: err.message});
 }
};

// Delete user
export const deleteUser = () => async (
 dispatch,
 getState,
 {getFirebase, getFirestore}
) => {
 const firebase = getFirebase();
 const firestore = getFirestore();
 const user = firebase.auth().currentUser;
 const userId = getState().firebase.auth.uid;
 dispatch({type: actions.PROFILE_DELETE_START});
 try {
  await firestore
   .collection('users')
   .doc(userId)
   .delete();

  await firestore
   .collection('todos')
   .doc(userId)
   .delete();
  await user.delete();
 } catch (err) {
  dispatch({type: actions.PROFILE_DELETE_FAIL, payload: err.message});
 }
};
