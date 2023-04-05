import React, { useState, createContext, useContext, useEffect } from 'react'
import { collection, getDocs, query, where, getDoc, documentId } from 'firebase/firestore'

import { useAuth } from '@/contexts/auth'
import { db } from '@/services/firebase'
import { useRouter } from 'next/router'

const MyCardContext = createContext()

export function MyCardProvider({ children }) {
  // const router = useRouter()
  const { asPath } = useRouter()
  console.log(`PUTTY${asPath}`)
  // console.log(pathname)
  // const url = router.query

  const putty = asPath.split('/').pop()
  console.log(`puttyfinal${putty}`)

  // const urlOG = pathname.split('/')
  // const url = urlOG.pop()
  // console.log(`URL${url}`)
  // const { user } = useAuth()

  const [myCard, setMyCard] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (putty) {
      const getCard = async () => {
        try {
          const newMyCard = []
          const q = query(collection(db, 'greetingcards'), where(documentId(), '==', putty))
          // const q = query(collection(db, 'greetingcards'), where('userId', '==', user.uid))
          const documentSnapshot = await getDoc(q)
          // const querySnapshot = await getDoc(doc(db, 'greetingcards', putty))
          // console.log(documentSnapshot)/// / THIS LINE HAS STH DO WITH my/cards/iframesrc showing up
          // newMyCard.push(querySnapshot)
          /* querySnapshot.forEach((doc) => newMyCard.push({
            id: doc.id,
            ...doc.data()
          }))
          setMyCard(newMyCard) */
          setIsLoading(false)
        } catch (err) {
          console.log(err) // eslint-disable-line
          setError(err)
        }
      }

      getCard()
    }
  }, [])

  const data = {
    myCard,
    isLoading,
    error
  }

  return <MyCardContext.Provider value={data}>{children}</MyCardContext.Provider>
}

export function useMyCard() {
  return useContext(MyCardContext)
}

/*
 useEffectOG(() => {
    if (putty) {
      const getCard = async () => {
        try {
          const newMyCard = []
          const q = query(collection(db, 'greetingcards'), where(documentId(), '==', putty))
          // const q = query(collection(db, 'greetingcards'), where('userId', '==', user.uid))
          const querySnapshot = await getDocs(q)
          // const querySnapshot = await getDoc(doc(db, 'greetingcards', putty))
          console.log(querySnapshot)/// / THIS LINE HAS STH DO WITH my/cards/iframesrc showing up
          // newMyCard.push(querySnapshot)
          querySnapshot.forEach((doc) => newMyCard.push({
            id: doc.id,
            ...doc.data()
          }))
          setMyCard(newMyCard)
          setIsLoading(false)
        } catch (err) {
          console.log(err) // eslint-disable-line
          setError(err)
        }
      }

      getCard()
    }
  }, []) */
