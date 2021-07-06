import firebase from 'firebase/app';
require('firebase/auth');
require('firebase/database');

var firebaseConfig = {
    apiKey: "AIzaSyD6MdxjZGeFq6x0SNu2bT77F9U5mqEVAfo",
    authDomain: "first-firebase-74870.firebaseapp.com",
    databaseURL: "https://first-firebase-74870-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "first-firebase-74870",
    storageBucket: "first-firebase-74870.appspot.com",
    messagingSenderId: "302451025390",
    appId: "1:302451025390:web:56e409b9eb590196c85aff",
    measurementId: "G-DDGNF2C0JM"
};

// Initialize Firebase
const firebaseConnect = firebase.initializeApp(firebaseConfig);
export default firebaseConnect