import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyBiicoLmn9A2BfSt-hDc_qJYEbHTXqhW9A",
   authDomain: "amzn-clone-2de39.firebaseapp.com",
   projectId: "amzn-clone-2de39",
   storageBucket: "amzn-clone-2de39.appspot.com",
   messagingSenderId: "883434137282",
   appId: "1:883434137282:web:1c1788443504169324fd5b",
};

// const app = !firebase.apps.length
//    ? firebase.intializeApp(firebaseConfig)
//    : firebase.app();

// const db = app.firestore();

// export default db;

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
