import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDH0E6mkfkEUh76nv__2fOk-HJteZCj-hE",
  authDomain: "airforshare-ffcee.firebaseapp.com",
  projectId: "airforshare-ffcee",
  storageBucket: "airforshare-ffcee.firebasestorage.app",
  messagingSenderId: "1086862252600",
  appId: "1:1086862252600:web:d0aad96edea3ab6f27e4cd"
};

// Initialize Firebase only if it hasn't been initialized already
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
export const auth = getAuth(app);

