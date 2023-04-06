// get id of logged in user and display all cards with that userId
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useRouter } from 'next/router'

import withAuth from '@/hoc/withAuth'

import { useMyCard } from '@/contexts/myCard'

function MyCardShow() { // export default function MyCardSnow() {
  const { query: { cardId } } = useRouter()
  const { myCard, isLoading, error } = useMyCard(cardId)

  const folder = myCard?.iframe?.replace(/\d+/g, '') // added. keep question mark or error. question marks? QQ
  // console.log(`folder${folder}`)
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <Container>
      <Row xs={1} md={2} className="g-4">
        <h1>  1 CARD SHOWING NOW</h1>
        <div key={myCard.id}>{myCard.id} | {myCard.recipientEmail} | {myCard.recipientName} | {myCard.iframe}</div>
        <Col>
          <iframe
            src={`/templates/${folder}/${myCard.iframe}.html`}
            className="border"
          />
          <div>recipient: {myCard.recipientName}</div>
          <div>recipient email: {myCard.recipientEmail}</div>
          <div>message: {myCard.message}</div>
          <div>Delivery date: {myCard.deliveryDate}</div>
        </Col>
      </Row>
    </Container>
  )
}

export default withAuth(MyCardShow)

/* question marks in above render each field? QQ
 <h1>{myCard.iframe.replace(/\d+/g, '')} </h1>
        <h1>{myCard.iframe} </h1> */
// export default withAuth(MyCardShow)
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
