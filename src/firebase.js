import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCkZWvfMkcL1Dtcha-A1ehxLcrO1aySrGg",
    authDomain: "netflix-clone-8a3a4.firebaseapp.com",
    projectId: "netflix-clone-8a3a4",
    storageBucket: "netflix-clone-8a3a4.firebasestorage.app",
    messagingSenderId: "458624610946",
    appId: "1:458624610946:web:f3396c5b253cd2708b7a9b"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;