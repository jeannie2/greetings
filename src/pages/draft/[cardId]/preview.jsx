// get iframe from cardid not param
import { useRouter } from 'next/router'
import { useCard } from '@/contexts/card'
// import { useRef } from 'react'

export default function PreviewCardPage() {
  const { query: { cardId } } = useRouter()
  const { card, isLoading, error } = useCard(cardId)
  const router = useRouter()
  // const myIframe = useRef(null)
  const folder = card?.iframe.replace(/\d+/g, '')

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  // const iframeElement = document.querySelector('iframe').document
  // iframeElement.postMessage({ recipientName: card.recipientName })
  // myIframe.document.postMessage({ recipientName: card.recipientName })

  return (
    <div className="container mt-5 mx-auto text-center">
      <div className="row">
        <div className="col-1" />

        <div className="col-lg-10">
          <button onClick={() => router.push(`/draft/${cardId}/submitted`)} type="button" className="btn btn-light button mx-auto">SEND</button>
          <button onClick={() => router.push(`/draft/${cardId}/edit`)} type="button" className="btn btn-light button mx-2 float-right">EDIT</button>
          <br />
          <br />
          <div />
          <iframe
           // ref={myIframe}
            src={`/templates/${folder}/${card.iframe}.html`}
            className="border embed-responsive-item vh-90"
            allowFullScreen
            width="80%"
            height="500px"
          />

          <div>To: {card.recipientName}</div>
          <div>{card.message}</div>

        </div>
        <div className="col-1" />
      </div>

    </div>
  )
}

/*
<div key={cardId}>cardId: {cardId} | {card.senderName} | {card.senderEmail} | {card.recipientEmail} | {card.recipientName} | {card.message} | userId: {card.iframe} | {card.userId} </div>

const iframe = card?.iframe

const url = useRouter()
const { iframe } = url.query
const folder = iframe?.replace(/\d+/g, '')

added
OLD: const folder = card?.iframe?.replace(/\d+/g, '') // question mark after card or no work

console.log(`iframe on preview page: ${card?.iframe}`) // eslint-disable-line

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

ORIGINAL VERSION: <button onClick={() => router.push(`/draft/${cardId}/edit?iframe=${card.iframe}`)}

<button onClick={() => router.push(`/draft/${cardId}/submitted?iframe=${card.iframe}/`)} type="button">SEND</button>
<div>{(card.iframe).replace(/\d+/g, '')}</div>

<div key={card.id}>{card.id} | {card.recipientEmail} | {card.recipientName} | {card.iframe}</div>
*/
