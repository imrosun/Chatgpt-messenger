import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "chatgpt-messenger-2dd89.firebaseapp.com",
  projectId: "chatgpt-messenger-2dd89",
  storageBucket: "chatgpt-messenger-2dd89.appspot.com",
  messagingSenderId: "738514970104",
  appId: "1:738514970104:web:22ba18daab2cbf5af0220d"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);  // This is for react

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);  // next, singleton 
const db = getFirestore(app);

export { db };
