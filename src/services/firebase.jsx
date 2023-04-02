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
  apiKey: 'AIzaSyBD1nYzxGfvFlo68GkgBb2jZJpZXMVCRVg',
  authDomain: 'greetings-811f4.firebaseapp.com',
  projectId: 'greetings-811f4',
  storageBucket: 'greetings-811f4.appspot.com',
  messagingSenderId: '958327244294',
  appId: '1:958327244294:web:9603b78e5eddc75b5ba587',
  measurementId: 'G-5HYNX3JGWE'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, googleProvider, db } // , analytics

export default app
