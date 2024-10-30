// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdSw4IPc4TRm8jmWJIMJHZTNFqSBX4lpo",
  authDomain: "drive-4a2a0.firebaseapp.com",
  projectId: "drive-4a2a0",
  storageBucket: "drive-4a2a0.appspot.com",
  messagingSenderId: "124069593765",
  appId: "1:124069593765:web:abe3f4f3dbe9984f42834c"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db= firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export{db,storage,auth,provider}