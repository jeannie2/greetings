import React, { useState, createContext, useContext, useEffect } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'

// import { useAuth } from '@/contexts/auth'
import { db } from '@/services/firebase'

const CardsByDateContext = createContext()

export function CardsByDateProvider({ children }) {
  // const { user } = useAuth()

  const [cards, setCards] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // if (user?.uid) {
    const getCards = async () => {
      try {
        const newCards = []
        // const q = query(collection(db, 'greetingcards'), where('userId', '==', user.uid))
        const q = query(collection(db, 'greetings3'), where('message', '==', 'rainbow'))
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => newCards.push({
          id: doc.id,
          ...doc.data()
        }))
        setCards(newCards)
        setIsLoading(false)
      } catch (err) {
          console.log(err) // eslint-disable-line
        setError(err)
      }
    }

    getCards()
    // }
  }) // [user]

  const data = {
    cards,
    isLoading,
    error
  }

  return <CardsByDateContext.Provider value={data}>{children}</CardsByDateContext.Provider>
}

export function useCardsByDate() {
  return useContext(CardsByDateContext)
}
