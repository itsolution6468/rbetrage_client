import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDxW5e3o2RIf35A2L6LX5GASQqc-0GYSyw",
    authDomain: "ai-project-f904d.firebaseapp.com",
    projectId: "ai-project-f904d",
    storageBucket: "ai-project-f904d.appspot.com",
    messagingSenderId: "428753041793",
    appId: "1:428753041793:web:b3d3d18313e325362c9080",
    measurementId: "G-HP8WB8GWLG"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };