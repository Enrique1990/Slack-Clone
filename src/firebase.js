import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCjayOcCRL0WWceVGNAtKufxUbND9v3564",
  authDomain: "slack-clone-80ba1.firebaseapp.com",
  projectId: "slack-clone-80ba1",
  storageBucket: "slack-clone-80ba1.appspot.com",
  messagingSenderId: "887422524543",
  appId: "1:887422524543:web:7351e4a5607359a8fc334a",
  measurementId: "G-WJ5XYWLXBT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
