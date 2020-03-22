import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD8KfC5viD_uC_q-tPq1V6DuoeyF9LhaIc",
  authDomain: "eclothing-db-abe06.firebaseapp.com",
  databaseURL: "https://eclothing-db-abe06.firebaseio.com",
  projectId: "eclothing-db-abe06",
  storageBucket: "eclothing-db-abe06.appspot.com",
  messagingSenderId: "531187683928",
  appId: "1:531187683928:web:5420ad5a972dd9fc50f02d",
  measurementId: "G-4CVMBGFK9E"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
