// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7VR2_umQZuDCrdbZrblEAhxw-HSDCNNc",
  authDomain: "attic-3cbb7.firebaseapp.com",
  projectId: "attic-3cbb7",
  storageBucket: "attic-3cbb7.appspot.com",
  messagingSenderId: "887072272554",
  appId: "1:887072272554:web:59518c06255758f46ce0d3",
  measurementId: "G-TJ4T03PVF7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app)

export { db, analytics, app, auth, storage };