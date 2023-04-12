// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'

import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Auth Providers
const googleProvider = new GoogleAuthProvider()

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyA9uJTjlJjHhOG4DIs3VC6O6qQF6rhuV4o',
  authDomain: 'greetings3-6c65c.firebaseapp.com',
  projectId: 'greetings3-6c65c',
  storageBucket: 'greetings3-6c65c.appspot.com',
  messagingSenderId: '447744683192',
  appId: '1:447744683192:web:0e6e4fe50abeffb7d4984d'
}

/*
const firebaseConfig = {
  apiKey: 'AIzaSyAYp3uockfWnp4hyynvBLb8QyJx0xblS_w',
  authDomain: 'greetings2-372ac.firebaseapp.com',
  projectId: 'greetings2-372ac',
  storageBucket: 'greetings2-372ac.appspot.com',
  messagingSenderId: '545273534213',
  appId: '1:545273534213:web:97d719bffe39744dc1496c',
  measurementId: 'G-5ZS4V7V08Q'
} */

/*
const firebaseConfig = {
  apiKey: 'AIzaSyBD1nYzxGfvFlo68GkgBb2jZJpZXMVCRVg',
  authDomain: 'greetings-811f4.firebaseapp.com',
  projectId: 'greetings-811f4',
  storageBucket: 'greetings-811f4.appspot.com',
  messagingSenderId: '958327244294',
  appId: '1:958327244294:web:9603b78e5eddc75b5ba587',
  measurementId: 'G-5HYNX3JGWE'
} */

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, googleProvider, db } // , analytics

export default app
