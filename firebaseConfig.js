// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1ssgr1WlGuzBBQqeaaZ1PqTnhIlutRYs",
    authDomain: "iotp-19b33.firebaseapp.com",
    databaseURL: "https://iotp-19b33-default-rtdb.firebaseio.com",
    projectId: "iotp-19b33",
    storageBucket: "iotp-19b33.appspot.com",
    messagingSenderId: "178328149628",
    appId: "1:178328149628:web:6abe4169131291df9bf3f9",
    measurementId: "G-J96F1QHX8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, firebaseConfig }; 