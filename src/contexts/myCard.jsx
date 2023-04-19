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
      const docRef = doc(db, 'greetings3', cardId)
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

  // console.log('hook', cardId, rest) // eslint-disable-line

  useEffect(() => {
    if (cardId) getMyCard(cardId)
  }, [cardId])

  return rest
}
