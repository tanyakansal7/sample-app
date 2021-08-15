import Firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCn2C6_fzbYNWdB96UWuz7KBufZbCujnrQ",
    authDomain: "my-app-a99ab.firebaseapp.com",
    projectId: "my-app-a99ab",
    storageBucket: "my-app-a99ab.appspot.com",
    messagingSenderId: "744644934132",
    appId: "1:744644934132:web:295d1741cb24464f64e1a1"
  };
  const firebase = Firebase.initializeApp(firebaseConfig);
  const db= firebase.firestore();
  export {firebase, db};