import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


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

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const auth = firebaseApp.auth();

// export { auth };