import React, { useState, createContext, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { collection, addDoc, getDocs, doc, updateDoc } from 'firebase/firestore'
import { auth, googleProvider, db } from '@/services/firebase'
import { useAuth } from 'c@/contexts/auth'

const useEditCardHook = async () => {
  const { query: { cardId } } = useRouter()
  console.log('WHEREVEREEE YOU ARE')

  const docRef = doc(db, 'greetingcards', cardId)

  await updateDoc(docRef, {
  //  message: 'rasputin'
  })
  /*
    firebase.firestore().collection('users').where('uid', '==', payload.uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, ' => ', doc.data())
          doc.ref.update({ foo: 'bar' })// not doc.update({foo: "bar"})
        })
      }) */
}

export default useEditCardHook
