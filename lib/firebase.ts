import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getAuth, type Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxtPE4mUZV8dV39rRhVMC-F9CgphLTwUo",
  authDomain: "portfolio-project-14a25.firebaseapp.com",
  databaseURL: "https://portfolio-project-14a25-default-rtdb.firebaseio.com",
  projectId: "portfolio-project-14a25",
  storageBucket: "portfolio-project-14a25.firebasestorage.app",
  messagingSenderId: "826236365085",
  appId: "1:826236365085:web:eea249bf097a52244e59f4"
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
