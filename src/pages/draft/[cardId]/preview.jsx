// get iframe from cardid not param?
// how to get cardid when click preview after filing out form..hv query db

// use document id to retrieve contents of 1 document including iframe
// dont show the other info... recipientemail, deliverydate, etc

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useRouter } from 'next/router'

import { useCard } from '@/contexts/card'

export default function PreviewCardPage() {
  const { query: { cardId } } = useRouter()
  const { card, isLoading, error } = useCard(cardId)
  const router = useRouter()

  // added
  const folder = card?.iframe?.replace(/\d+/g, '') // question mark after card or no work

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <Container>
      <Row xs={1} md={2} className="g-4">
        <h1>PREVIEW PAGE</h1>
        <div key={cardId}>cardId: {cardId} | {card.senderName} | {card.senderEmail} | {card.recipientEmail} | {card.recipientName} | {card.message} | userId: {card.iframe} | {card.userId} </div>
        <Col>
          <iframe
            src={`/templates/${folder}/${card.iframe}.html`}
            className="border"
          />
          <div> To: {card.recipientName}</div>
          <div>Message: {card.message}</div>
        </Col>
      </Row>
      <button onClick={() => router.push(`/draft/${cardId}/submitted`)} type="button">SEND</button>
      <button onClick={() => router.push(`/draft/${cardId}/edit?iframe=${card.iframe}`)} type="button">EDIT</button>

    </Container>
  )
}

/*
     <button onClick={() => router.push(`/draft/${cardId}/submitted?iframe=${card.iframe}/`)} type="button">SEND</button>
      <div>{(card.iframe).replace(/\d+/g, '')}</div>

  <div key={card.id}>{card.id} | {card.recipientEmail} | {card.recipientName} | {card.iframe}</div>

  */
