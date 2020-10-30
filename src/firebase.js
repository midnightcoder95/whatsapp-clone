import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU7WTVOJbfshxKw5WUG-_L52xCCZkRzxA",
  authDomain: "whatsapp-607aa.firebaseapp.com",
  databaseURL: "https://whatsapp-607aa.firebaseio.com",
  projectId: "whatsapp-607aa",
  storageBucket: "whatsapp-607aa.appspot.com",
  messagingSenderId: "535901199165",
  appId: "1:535901199165:web:1dc2b9f3fa9352637ec354",
  measurementId: "G-VTXLDXV16F",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
