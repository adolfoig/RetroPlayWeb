// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtWn_HZmbmh46CxaTrF--dQz2U6XwghpE",
  authDomain: "retroplay-a18f5.firebaseapp.com",
  projectId: "retroplay-a18f5",
  storageBucket: "retroplay-a18f5.firebasestorage.app",
  messagingSenderId: "583642395601",
  appId: "1:583642395601:web:ba9ef0cb24ae705d9626f0",
  measurementId: "G-16RP8JSMH5"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar los servicios que vayas a usar en tu aplicación
export const auth = getAuth(app);
export const db = getFirestore(app);