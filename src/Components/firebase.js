// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
        apiKey: "AIzaSyC4Q2CTKm8G4F8x1Ve3qPQveH6Hca50bpU",
        authDomain: "auth-137ca.firebaseapp.com",
        projectId: "auth-137ca",
        storageBucket: "auth-137ca.appspot.com",
        messagingSenderId: "479399729247",
        appId: "1:479399729247:web:3e9b99c1875856e397a3ea",
        measurementId: "G-YJGCGRWQ6V"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
