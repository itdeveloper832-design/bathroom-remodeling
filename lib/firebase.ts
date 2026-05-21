import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getAuth, type Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? "AIzaSyBkklRQlC5Pe-H3FOYMEOVrevciSpfpY3U",
  authDomain:
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ??
    "bathroom-remodeling-ddafa.firebaseapp.com",
  projectId:
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "bathroom-remodeling-ddafa",
  storageBucket:
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ??
    "bathroom-remodeling-ddafa.firebasestorage.app",
  messagingSenderId:
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? "1013887386970",
  appId:
    process.env.NEXT_PUBLIC_FIREBASE_APP_ID ??
    "1:1013887386970:web:2c8a339fee21514674df63",
};

function createFirebaseApp(): FirebaseApp {
  if (!firebaseConfig.projectId || !firebaseConfig.apiKey) {
    throw new Error(
      "Firebase is not configured. Set NEXT_PUBLIC_FIREBASE_* environment variables."
    );
  }
  return getApps().length ? getApp() : initializeApp(firebaseConfig);
}

export const app = createFirebaseApp();
export const db: Firestore = getFirestore(app);
export const auth: Auth = getAuth(app);
export const firebaseProjectId = firebaseConfig.projectId;
