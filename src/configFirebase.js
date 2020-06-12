import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/messaging';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBQoIem21sdLQPsNiSP54zeUQ77vrXHMrw",
  authDomain: "cropchien-75aaa.firebaseapp.com",
  databaseURL: "https://cropchien-75aaa.firebaseio.com",
  projectId: "cropchien-75aaa",
  storageBucket: "cropchien-75aaa.appspot.com",
  messagingSenderId: "888004066775",
  appId: "1:888004066775:web:af4f4469f42956ba409f92",
  measurementId: "G-KQ6YR9208H"
};

firebase.initializeApp(firebaseConfig)

// Initialize Cloud Firestore through Firebase
let db = firebase.firestore();

// Disable deprecated features
// db.settings({ timestampsInSnapshots: true });

// db.enablePersistence({experimentalTabSynchronization:true})
db.enablePersistence({synchronizeTabs:true})

const storage = firebase.storage()

const messaging = firebase.messaging()

export default {
  db,
  storage,
  messaging
}
