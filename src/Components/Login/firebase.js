// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import * as firebase from  'firebase/app'
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyDd2gAQP_WNPYEi2chAm7y-p4onrOU3DiY",
    authDomain: "clone-7434c.firebaseapp.com",
    projectId: "clone-7434c",
    storageBucket: "clone-7434c.appspot.com",
    messagingSenderId: "423514950459",
    appId: "1:423514950459:web:b0a408b5c0067bc649c51e",
    measurementId: "G-4D4DBXXZGS"
};
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };