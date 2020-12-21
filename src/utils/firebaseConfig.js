import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBqRqtvITsBSgSBYs8c4Hbgg6ezSCkX0dw",
    authDomain: "recuperacao-senai.firebaseapp.com",
    projectId: "recuperacao-senai",
    storageBucket: "recuperacao-senai.appspot.com",
    messagingSenderId: "809183383597",
    appId: "1:809183383597:web:8ccb31c5a04e42893de8a4"
  };

firebase.initializeApp(firebaseConfig);

export const db = app.firestore();

export default firebaseConfig;