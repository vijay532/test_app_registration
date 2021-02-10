import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyB-MhZdPYNY6wUJQduIxUIwcjY6ZKJSS7w",
	authDomain: "testpage-e4c04.firebaseapp.com",
	projectId: "testpage-e4c04",
	storageBucket: "testpage-e4c04.appspot.com",
	messagingSenderId: "897464993015",
	appId: "1:897464993015:web:2b773f1eea828539dbfff2",
	measurementId: "G-TQDNP67Z5T"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); //initialise app 
const db = firebaseApp.firestore();  // database connect
const auth = firebase.auth();   // variables for authentication to handle sign in 

export { db, auth };  //export is necessary to use outside of file