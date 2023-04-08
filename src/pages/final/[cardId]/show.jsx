// final card view for recipient (+ sender TBC)
// iframe src wld be in db, get from cardid

// create context

import { useRouter } from 'next/router'

import { useCard } from '@/contexts/card'

export default function FinalCardShowPage() {
  const { query: { cardId } } = useRouter()
  const { card, isLoading, error } = useCard(cardId)
  // const router = useRouter() // unlike preview page

  const folder = card?.iframe.replace(/\d+/g, '')

  console.log(`iframe on final card show page: ${card?.iframe}`)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <div className="container mt-5 mx-auto text-center border">
      <div className="row">
        <div className="col-1" />

        <div className="col-lg-10">
          <div key={cardId}>cardId: {cardId} | {card.senderName} | {card.senderEmail} | {card.recipientEmail} | {card.recipientName} | {card.message} | userId: {card.iframe} | {card.userId} </div>

          <iframe
            src={`/templates/${folder}/${card.iframe}.html`}
            className="border embed-responsive-item vh-90"
            allowFullScreen
            width="70%"
            height="400px"
          />

          <div className="border">{card.message}</div>

        </div>
        <div className="col-1" />
      </div>

    </div>
  )
}

/*
<div className="border">To: {card.recipientName}</div>

import { getFirestore, doc, updateDoc } from "firebase/firestore";
...
const data = {
  province: "ON"
};

updateDoc(docRef, data)
.then(docRef => {
    console.log("Value of an Existing Document Field has been updated");
})
.catch(error => {
    console.log(error);
})

export default FinalCardPage() {

}
 */
