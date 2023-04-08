import React, { useEffect, useState, createContext, useContext } from 'react'
import { getDoc, doc } from 'firebase/firestore'

import { db } from '@/services/firebase'

const MyCardContext = createContext()

export function MyCardProvider({ children }) {
  const [myCard, setMyCard] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const getMyCard = async (cardId) => {
    try {
      // const docRef = doc(db, 'greetingcards', cardId)
      const docRef = doc(db, 'greetings2', cardId)
      const docSnap = await getDoc(docRef)
      setMyCard(docSnap.data())
      setIsLoading(false)
    } catch (err) {
      console.log(err) // eslint-disable-line
      setError(err)
    }
  }

  const data = {
    myCard,
    isLoading,
    error,
    getMyCard
  }

  return <MyCardContext.Provider value={data}>{children}</MyCardContext.Provider>
}

export function useMyCard(cardId) {
  const { getMyCard, ...rest } = useContext(MyCardContext)

  console.log('hook', cardId, rest)

  useEffect(() => {
    if (cardId) getMyCard(cardId)
  }, [cardId])

  return rest
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
