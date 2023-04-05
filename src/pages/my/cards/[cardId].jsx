import withAuth from '@/hoc/withAuth'
// get id of logged in user and display all cards with that userId
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from 'next/link'

import { useMyCard } from '@/contexts/myCard'

export default function MyCardIndex() {
  const { myCard, isLoading, error } = useMyCard()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  console.log(`MYCARDCONTEN${myCard}`)
  return (
  // show recipientname, recipientemail, deliverydate, message, iframe
    <Container>

      <Row xs={1} md={2} className="g-4">
        {myCard.map((card) => (
          <>
            <h1>  1 CARD SHOWING NOW</h1>
            <div key={card.id}>WHATEVER{card.id} EE</div>
            <div key={card.id}>{card.id} | {card.recipientEmail} | {card.recipientName} | {card.iframe}</div>
            <Col>
              <iframe
                src={`${card.iframe}.html`}
              />

            </Col>
          </>
        ))}
      </Row>
    </Container>
  )
}

/*
 <div key={card.id}>{card.id} | {card.recipientEmail} | {card.recipientName} | {card.iframe}</div>

 return myCards.map((card) => (
    <div key={card.id}>{card.id} | {card.recipientEmail} | {card.recipientName} | {card.iframe}</div>
  ))
  */

/*
  return (
    <Container>
      <Row xs={1} md={2} className="g-4">
        {myCard.map((card) => (
          <>
            <div key={card.id}>{card.id} | {card.recipientEmail} | {card.recipientName} | {card.iframe}</div>
            <Col>
              <iframe
                src={`${card.iframe}.html`}
              />
              <Link href={`/my/cards/${card.id}`}>1 CARD SHOWING NOW</Link>
            </Col>
          </>
        ))}
      </Row>
    </Container>
  ) */
