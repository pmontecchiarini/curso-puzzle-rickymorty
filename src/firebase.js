import firebase from 'firebase/app'
import 'firebase/auth'

let firebaseConfig = {
    apiKey: "AIzaSyABLd3oQIbbqnoyWs-WbqnO5MLL8tT80qM",
    authDomain: "tinder-rickymorty.firebaseapp.com",
    databaseURL: "https://tinder-rickymorty.firebaseio.com",
    projectId: "tinder-rickymorty",
    storageBucket: "tinder-rickymorty.appspot.com",
    messagingSenderId: "232138731826",
    appId: "1:232138731826:web:75b7396bfad2578735672b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export function loginWithGoogle (){
      let provider = new firebase.auth.GoogleAuthProvider()
      return firebase.auth().signInWithPopup(provider)
      .then(snap => snap.user)
  }

  export function signOutGoogle (){
      firebase.auth().signOut()
  }