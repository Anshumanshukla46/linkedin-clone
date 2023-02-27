import firebase from "firebase/compat/app";

import "firebase/compat/auth"

import "firebase/compat/database"

const firebaseConfig = {
    apiKey: "AIzaSyC1g52LKphBhSUnETIL8ncS85LOmCsCGmc",
    authDomain: "linkedin-clone-yt-9c70e.firebaseapp.com",
    projectId: "linkedin-clone-yt-9c70e",
    storageBucket: "linkedin-clone-yt-9c70e.appspot.com",
    messagingSenderId: "944017897077",
    appId: "1:944017897077:web:cd75706a7b43a912f2aa3c",
    measurementId: "G-PVEVQ6J4VT"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); // havibg database

const auth = firebase.auth(); // done authrisation

export { db, auth };
 // now these can be accessible outside this fire also
