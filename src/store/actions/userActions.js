import { auth, googleAuthProvider, storageRef } from "../../firebase";
import actionTypes from "../actionTypes/userTypes";
import { showToastError, showToastSuccess } from "../../Components/Toast";
import uniqid from "uniqid";

export const signInWithGoogle = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.START_LOADING });
    const provider = googleAuthProvider;
    auth.signInWithPopup(provider);
  };
};
export const signInWithEmail = (email, password) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.START_LOADING });
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      dispatch({ type: actionTypes.FAILED, payload: error.message });
    }
  };
};
export const createUser = (email, password) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.START_LOADING });
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      dispatch({ type: actionTypes.FAILED, payload: error.message });
    }
  };
};
export const signOut = () => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.START_LOADING });
    try {
      await auth.signOut();
    } catch (error) {
      dispatch({ type: actionTypes.FAILED, payload: error.message });
    }
  };
};

export const profileUpdate = async (field, value) => {
  try {
    await auth.currentUser.updateProfile({
      [field]: value,
    });
    showToastSuccess();
  } catch (error) {
    showToastError();
  }
};

export const saveToStorage = async (file) => {
  try {
    const fileRef = storageRef.child(file.name + uniqid());
    await fileRef.put(file);
    const url = await fileRef.getDownloadURL();
    return url;
  } catch (error) {
    showToastError();
  }
};

export const initial = () => {
  return (dispatch) => {
    userChangeSubscribe(dispatch);
  };
};
const userChangeSubscribe = (dispatch) => {
  auth.onAuthStateChanged((user) => {
    dispatch({ type: actionTypes.SET_USER, payload: user });
  });
};

export const clearErrors = () => ({ type: actionTypes.CLEAR });

