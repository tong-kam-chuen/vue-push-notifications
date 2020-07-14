importScripts('https://www.gstatic.com/firebasejs/5.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.6.0/firebase-messaging.js');

self.__precacheManifest = [].concat(self.__precacheManifest || []);
// workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(
    new RegExp('https://firebasestorage.googleapis.com/v0/b/cropchien-75aaa.appspot.com/.*'),
    new workbox.strategies.StaleWhileRevalidate()
);

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

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/firebase-logo.png'
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
  });
