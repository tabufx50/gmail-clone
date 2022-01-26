import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDBdSj5XbyccjzGaEpbfgxnNAUIUoty6o0",
  authDomain: "clone-e616b.firebaseapp.com",
  projectId: "clone-e616b",
  storageBucket: "clone-e616b.appspot.com",
  messagingSenderId: "134602171147", 
  appId: "1:134602171147:web:dd934970027bdfd2a5380e",
  measurementId: "G-XGQGBVN3H4"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export  { db, auth, provider };

