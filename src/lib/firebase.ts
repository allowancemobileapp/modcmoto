import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSuh1EO9T0wfT5GoUd3WHQ2aXK0kU5aI0",
  authDomain: "modcmoto007.firebaseapp.com",
  projectId: "modcmoto007",
  storageBucket: "modcmoto007.firebasestorage.app",
  messagingSenderId: "646771670472",
  appId: "1:646771670472:web:b07931064b5f38642614fd",
  measurementId: "G-9BNCF97RTH"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
