// get card based on router query cardId
// can use for final?cardId: show page as well?
import React, { useState, createContext, useContext, useEffect } from 'react'
import { collection, getDocs, query, where, getDoc, documentId } from 'firebase/firestore'

import { useAuth } from '@/contexts/auth'
import { db } from '@/services/firebase'
import { useRouter } from 'next/router'

const CardContext = createContext()

export function CardProvider({ children }) {
  const router = useRouter()
  // const r = useRouter()
  // const { asPath, pathname } = useRouter()
  // console.log(`asPath: ${asPath}`)
  // console.log(`pathname: ${pathname}`)

  console.log(`router.query?.draft${router.query.cardId}`)

  // get docid from param
  const docId = router.query.cardId
  console.log(`docId: ${docId}`)
  // const url = router.query

  // const putty = asPath.split('/').pop()
  // console.log(`puttyfinal${putty}`)

  // const urlOG = pathname.split('/')
  // const url = urlOG.pop()
  // console.log(`URL${url}`)
  // const { user } = useAuth()

  const [card, setCard] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (docId) {
      const getCard = async () => {
        try {
          const newCard = []
          const q = query(collection(db, 'greetingcards'), where(documentId(), '==', docId))
          // const q = query(collection(db, 'greetingcards'), where('userId', '==', user.uid))
          const documentSnapshot = await getDoc(q)
          // const querySnapshot = await getDoc(doc(db, 'greetingcards', putty))
          console.log(documentSnapshot)/// / THIS LINE HAS STH DO WITH my/cards/iframesrc showing up
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
    card,
    isLoading,
    error
  }

  return <CardContext.Provider value={data}>{children}</CardContext.Provider>
}

export function useCard() {
  return useContext(CardContext)
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
