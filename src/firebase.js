import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const firestore = firebase.firestore();
export const postsRef = firestore.collection("/posts");
export const commentsRef = firestore.collection("/comments");

export const storageRef = firebase.storage().ref();
