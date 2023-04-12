import { getDocs, query, where, collection } from 'firebase/firestore'
// import React, { useState, createContext, useContext, useEffect } from 'react'
import { db } from '@/services/firebase'

export default function Cron() {
  // const [error, setError] = useState(null)

  const getCardsToSend = async () => {
    // if(user?.uid)
    try {
      const cardsGroup = []

      const q = query(collection(db, 'greetings3'), where('message', '==', 'rainbow'))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => cardsGroup.push({
        id: doc.id,
        ...doc.data()
      }))
      console.log(`cardsgroup: ${cardsGroup}`) // eslint-disable-line
    } catch (err) {
      console.log(err) // eslint-disable-line
      //  setError(err)
    }
  }

  getCardsToSend()
}
