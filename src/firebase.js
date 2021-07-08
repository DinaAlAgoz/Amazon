
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
 
    apiKey: "AIzaSyD1PiqAOHlWl5Jw8qonO93YcTfE6F-cUeY",
    authDomain: "clone-70146.firebaseapp.com",
    projectId: "clone-70146",
    storageBucket: "clone-70146.appspot.com",
    messagingSenderId: "1068278680851",
    appId: "1:1068278680851:web:4dafd58dcf052745051ee6"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};