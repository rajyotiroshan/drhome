// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBOPBbl5cAvMktlztqX-3yTYHrZkLrlmNQ",
  authDomain: "drhome-620c2.firebaseapp.com",
  projectId: "drhome-620c2",
  storageBucket: "drhome-620c2.appspot.com",
  messagingSenderId: "672666465901",
  appId: "1:672666465901:web:a4604a80c3aeedf30cb164",
  measurementId: "G-V63S88CH1H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestoreDabase = getFirestore(app);
export default firestoreDabase;
