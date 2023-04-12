// get iframe from cardid not param?
// how to get cardid when click preview after filing out form..hv query db

// use document id to retrieve contents of 1 document including iframe
// dont show the other info... recipientemail, deliverydate, etc

import { useRouter } from 'next/router'

import { useCard } from '@/contexts/card'

export default function PreviewCardPage() {
  const { query: { cardId } } = useRouter()
  const { card, isLoading, error } = useCard(cardId)
  const router = useRouter()

  // const iframe = card?.iframe
  const folder = card?.iframe.replace(/\d+/g, '')

  /*
  const url = useRouter()
  const { iframe } = url.query
  const folder = iframe?.replace(/\d+/g, '')
 */

  // added
  // OLD: const folder = card?.iframe?.replace(/\d+/g, '') // question mark after card or no work

  console.log(`iframe on preview page: ${card?.iframe}`)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <div className="container mt-5 mx-auto text-center border">
      <div className="row">
        <div className="col-1" />

        <div className="col-lg-10">
          <button onClick={() => router.push(`/draft/${cardId}/submitted`)} type="button" className="btn btn-primary button mx-auto">SEND</button>
          <button onClick={() => router.push(`/draft/${cardId}/edit`)} type="button" className="btn btn-primary button mx-2 float-right">EDIT</button>
          <div key={cardId}>cardId: {cardId} | {card.senderName} | {card.senderEmail} | {card.recipientEmail} | {card.recipientName} | {card.message} | userId: {card.iframe} | {card.userId} </div>

          <iframe
            src={`/templates/${folder}/${card.iframe}.html`}
            className="border embed-responsive-item vh-90"
            allowFullScreen
            width="70%"
            height="400px"
          />

          <div className="border">To: {card.recipientName}</div>
          <div className="border">{card.message}</div>

        </div>
        <div className="col-1" />
      </div>

    </div>
  )
}

/*
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

<h1>PREVIEW PAGE</h1>
ORIGINAL VERSION: <button onClick={() => router.push(`/draft/${cardId}/edit?iframe=${card.iframe}`)}

<button onClick={() => router.push(`/draft/${cardId}/submitted?iframe=${card.iframe}/`)} type="button">SEND</button>
      <div>{(card.iframe).replace(/\d+/g, '')}</div>

  <div key={card.id}>{card.id} | {card.recipientEmail} | {card.recipientName} | {card.iframe}</div>

  */
