import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDH0E6mkfkEUh76nv__2fOk-HJteZCj-hE",
  authDomain: "airforshare-ffcee.firebaseapp.com",
  projectId: "airforshare-ffcee",
  storageBucket: "airforshare-ffcee.firebasestorage.app",
  messagingSenderId: "1086862252600",
  appId: "1:1086862252600:web:d0aad96edea3ab6f27e4cd"
};

// Initialize Firebase only if it hasn't been initialized already
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };
