import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAL7e4agzvDPyjC9dGhEx9X-yVxvCLSh8k",
    authDomain: "keto-dash.firebaseapp.com",
    projectId: "keto-dash",
    storageBucket: "keto-dash.appspot.com",
    messagingSenderId: "543664309924",
    appId: "1:543664309924:web:749512a1be49fb91320831"
};


const fire = firebase.initializeApp(firebaseConfig);

export default fire;