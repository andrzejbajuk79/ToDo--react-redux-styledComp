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
  console.log(res.user.uid);
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
