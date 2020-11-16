import firebase from "firebase/app";
import "firebase/auth";
import * as firebaseui from "firebaseui";

const firebaseConfig = {
  apiKey: "AIzaSyAPB5jXv5j3EDh6AWX-Dc9jcMkbr8_BlQc",
  authDomain: "clone-5053c.firebaseapp.com",
  databaseURL: "https://clone-5053c.firebaseio.com",
  projectId: "clone-5053c",
  storageBucket: "clone-5053c.appspot.com",
  messagingSenderId: "1056918785957",
  appId: "1:1056918785957:web:8dc32c3eb3acac0aa5e24c",
  measurementId: "G-R6KF3022HE",
};

firebase.initializeApp(firebaseConfig);
export const ui = new firebaseui.auth.AuthUI(firebase.auth());
export const auth = firebase.auth();

export default firebase;
