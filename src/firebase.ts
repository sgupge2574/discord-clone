// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-RdAOvZUmhiNAtqEmxDC_o1srCzkGE9g",
  authDomain: "discord-clone-1e808.firebaseapp.com",
  projectId: "discord-clone-1e808",
  storageBucket: "discord-clone-1e808.firebasestorage.app",
  messagingSenderId: "155929452057",
  appId: "1:155929452057:web:a2568297d5072799fc5488"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };