// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCofhaBpXLu5Z8-CST90PWhd_QI9YbaAPk",
  authDomain: "register-login-43b58.firebaseapp.com",
  databaseURL: "https://register-login-43b58-default-rtdb.firebaseio.com",
  projectId: "register-login-43b58",
  storageBucket: "register-login-43b58.appspot.com",
  messagingSenderId: "77179367792",
  appId: "1:77179367792:web:4451b71253d184d55b1fb5",
  measurementId: "G-T36FQS8XXT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
