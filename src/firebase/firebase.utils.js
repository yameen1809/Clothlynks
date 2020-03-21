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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
