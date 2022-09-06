import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo1yN2DEteIXPEMqqlh7kf94JwqNKD9gs",
  authDomain: "react-emart-9cfc3.firebaseapp.com",
  projectId: "react-emart-9cfc3",
  storageBucket: "react-emart-9cfc3.appspot.com",
  messagingSenderId: "4933719681",
  appId: "1:4933719681:web:cd9382140d1456be235f80",
};

// Use this to initialize firebase App
const firebaseapp = firebase.initializeApp(firebaseConfig);

// Use for db
const db = firebaseapp.firestore();

export { db };
