import { useEffect, useState } from 'react'
import { db } from '@/services/firebase'

export default function Test() {
  const [wishlists, setWishlists] = useState([])
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
