import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
let firebaseApp;

  firebaseApp = initializeApp({
    apiKey: "AIzaSyClxRX_YFkzv28bZp6ZjA5UIcP3iIh4lfw",
    authDomain: "login-for-home.firebaseapp.com",
    projectId: "login-for-home",
    storageBucket: "login-for-home.appspot.com",
    messagingSenderId: "421434983356",
    appId: "1:421434983356:web:e965e3937c53dec929e1b9",
    measurementId: "G-VMP5LRD7CY"
  });

 
const db = getFirestore();
export default db