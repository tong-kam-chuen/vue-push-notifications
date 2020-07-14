/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}firebase-messaging-sw.js`, {
    ready () {
      console.log('App is being served from cache by a service worker. (register)')
    },
    registered () {
      console.log('Service worker has been registered. (register)')
    },
    cached () {
      console.log('Content has been cached for offline use. (register)')
    },
    updatefound () {
      console.log('New content is downloading. (register)')
    },
    updated () {
      console.log('New content is available; please refresh. (register)')
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode. (register)')
    },
    error (error) {
      console.error('Error during service worker registration (register) :', error)
    }
  })
}
