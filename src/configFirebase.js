import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/messaging';
import 'firebase/storage';

const firebaseConfig = require('./firebaseKey');

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
