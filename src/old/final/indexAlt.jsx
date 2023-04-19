import { useRouter } from 'next/router'
import { useCard } from '@/contexts/card'
import { useEffect } from 'react'

import { updateDoc, doc } from 'firebase/firestore'
// import { getDatabase, ref, onValue } from 'firebase/database'
import { db } from '@/services/firebase'
// import { getDatabase, onValue } from '@/services/firebase'

export default function FinalCardShowPage() {
  const { query: { cardId } } = useRouter()
  const { card, isLoading, error } = useCard(cardId)

  const folder = card?.iframe.replace(/\d+/g, '')

// const functions = require('firebase-functions')
/*
exports.myFunction = functions.firestore
  .document('firebase3/{cardId}')
  .onUpdate((change, context) => { console.log('POCAHONTAS') })

const firebaseListen = async () => {
  const database = getDatabase()
  const starRef = ref(database, `greetings3/${cardId}opened`)
  onValue(starRef, (snapshot) => {
    const data = snapshot.val()
    console.log(`VIEW FIELD UPDATED${data}`)
  })
} */

  useEffect(() => {
    if (cardId) { // or else fires too soon before routing
      const updateFirebase = async () => {
        try {
          await updateDoc(doc(db, 'greetings3', cardId), {
            opened: true
          })
          return ('updated doc')
          //  return ("update status", updateFirebaseDoc) // eslint-disable-line
        } catch (updateDocErr) {
          return ('error') // console.log("update error", updateDocErr) // eslint-disable-line
          // return { error: updateDocErr }
        }
      }

      updateFirebase()
    }
  }, [cardId])

  // in cron, also send an email to recipient
  /* <p>Hi, your e-card has been scheduled! We will notify you when the card has been opened. To view the card, click here [[preview link]] </p>
  <p>Hi, this is a notification that your card to {} has been opened! To continue browsing, visit [link to homepage] </p>
  */
  // console.log(`iframe on final card show page: ${card?.iframe}`) // eslint-disable-line

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <div className="container mt-5 mx-auto text-center">
      <div className="row">
        <div className="col-1" />

        <div className="col-lg-10">

          <iframe
            src={`/templates/${folder}/${card.iframe}.html`}
            className="border embed-responsive-item vh-90"
            allowFullScreen
            width="80%"
            height="500px"
          />
          <br />
          <br />

          <div>To: {card.recipientName}</div>
          <div>{card.message}</div>
          <br />
          <br />

        </div>
        <div className="col-1" />
      </div>

    </div>
  )
}
