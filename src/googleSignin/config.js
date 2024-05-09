
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDMrgL5k6Vvs45m5fLUQz4NLPOGK8Bi8rA",
  authDomain: "loginmern-5d034.firebaseapp.com",
  projectId: "loginmern-5d034",
  storageBucket: "loginmern-5d034.appspot.com",
  messagingSenderId: "1024008603771",
  appId: "1:1024008603771:web:ec02f47c981cfbc0b03ade",
  measurementId: "G-T36LQ8WF0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};













// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth,GoogleAuthProvider} from 'firebase/auth'

// const firebaseConfig = {
//   apiKey: "AIzaSyCX08CuuJza73qfobQ_7QFCetl0jZIm2cM",
//   authDomain: "login-24d15.firebaseapp.com",
//   projectId: "login-24d15",
//   storageBucket: "login-24d15.appspot.com",
//   messagingSenderId: "48487107566",
//   appId: "1:48487107566:web:386a1c094a4d265afc5cff",
//   measurementId: "G-8STH4GTKZZ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app)
// const provider = new GoogleAuthProvider();
// export {auth,provider};