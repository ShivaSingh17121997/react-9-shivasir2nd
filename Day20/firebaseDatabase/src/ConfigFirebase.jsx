// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCq_ueAPWb_LHgI7Qf77He7IW0ftQF9sBM",
    authDomain: "fir-todos-f57ff.firebaseapp.com",
    projectId: "fir-todos-f57ff",
    storageBucket: "fir-todos-f57ff.appspot.com",
    messagingSenderId: "589092226068",
    appId: "1:589092226068:web:4d5bb3ca0360367012d301"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) // step 1 setup firestore