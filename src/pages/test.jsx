import { useEffect, useState } from 'react'
import { db } from '@/services/firebase'
import { getDocs, collection } from 'firebase/firestore'

export default function Test() {
  // wishlists,
  const [setWishlists] = useState([])
  const [isWishlistLoading, setIsWishlistLoading] = useState(true)

  useEffect(() => {
    getDocs(collection(db, 'wishlists')).then((snapshot) => {
      // Array of object
      const newWishlists = []
      snapshot.forEach((doc) => {
        newWishlists.push({
          id: doc.id,
          ...doc.data()
        })
      })

      // Object with id as key
      // const newWishlists = {}
      // snapshot.forEach((doc) => {
      //   newWishlists[doc.id] = doc.data()
      // })

      setWishlists(newWishlists)
      setIsWishlistLoading(false)
    })
  }, [])

  if (isWishlistLoading) return <div>Loading...</div>

  return (<div>Test</div>)
}
