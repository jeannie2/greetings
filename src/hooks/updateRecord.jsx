// create context
import { updateDoc, doc, getFirestore } from 'firebase/firestore'
import useRouter from 'next/router'
// docRef = cardId

export default function updateRecord(cardId) {
  // const { query: { cardId } } = useRouter()

  // const cardId = 'pjVPyjBJRfv2nvcMmzgE'
  const db = getFirestore()
  const docRef = doc(db, 'greetingcards', cardId)

  const newData = {
    iframe: 'PASTA'
  }

  updateDoc(docRef, newData)
    .then(() => {
      console.log('Value of an Existing Document Field has been updated')
    })
    .catch((error) => {
      console.log(error)
    })
}
