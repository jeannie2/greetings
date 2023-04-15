import { useRouter } from 'next/router'
import withAuth from '@/hoc/withAuth'
import { useMyCard } from '@/contexts/myCard'

function MyCardShow() { // export default function MyCardSnow()
  const { query: { cardId } } = useRouter()
  const { myCard, isLoading, error } = useMyCard(cardId)

  const folder = myCard?.iframe?.replace(/\d+/g, '') // added. keep question mark or error. question marks? QQ
  // console.log(`folder${folder}`)
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <div className="container mt-5 mx-auto text-center border">
      <div className="row">
        <div className="col-1" />

        <div className="col-lg-10">

          <iframe
            src={`/templates/${folder}/${myCard.iframe}.html`}
            className="border embed-responsive-item vh-90"
            allowFullScreen
            width="60%"
            height="250px"
          />

          <div>To: {myCard.recipientName}</div>
          <div>Recipient email: {myCard.recipientEmail}</div>
          <div>Delivery date: {myCard.deliveryDate}</div>
          <div className="border">{myCard.message}</div>

        </div>
        <div className="col-1" />

      </div>
    </div>
  )
}

export default withAuth(MyCardShow)

/* import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
*/
//   <div key={myCard.id}>{myCard.id} | {myCard.recipientEmail} | {myCard.recipientName} | {myCard.iframe}</div>
/*  <h1>  1 CARD SHOWING NOW</h1>
question marks in above render each field? QQ
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
