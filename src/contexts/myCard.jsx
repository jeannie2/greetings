import React, { useState, createContext, useContext, useEffect } from 'react'
import { collection, getDocs, query, where, getDoc, doc, documentId } from 'firebase/firestore'

import { useAuth } from '@/contexts/auth'
import { db } from '@/services/firebase'
import { useRouter } from 'next/router'

const MyCardContext = createContext()

export function MyCardProvider({ children }) {
  // const router = useRouter()
  const { asPath } = useRouter()
  console.log(`asPath: ${asPath}`)
  // console.log(pathname)
  // const url = router.query

  const docId = asPath.split('/').pop()
  console.log(`docID: ${docId}`)

  // const urlOG = pathname.split('/')
  // const url = urlOG.pop()
  // console.log(`URL${url}`)
  // const { user } = useAuth()

  const [myCard, setMyCard] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (docId) {
      const getCard = async () => {
        try {
          const docRef = query(collection(db, 'greetingcards'), where(documentId(), '==', docId))
          const docSnap = await getDoc(docRef)
          setMyCard(docSnap.data())
          console.log(`docsnapdata: ${docSnap.data()}`)
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
