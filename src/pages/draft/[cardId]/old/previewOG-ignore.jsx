// get iframe from cardid not param?
// how to get cardid when click preview after filing out form..hv query db

// use document id to retrieve contents of 1 document including iframe
// dont show the other info... recipientemail, deliverydate, etc

// import { useCard } from '@/contexts/card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useRouter } from 'next/router'

import { useCard } from '@/contexts/card'

export default function PreviewPage() {
  const router = useRouter()
  const { card, isLoading, error } = useCard()

  // console.log(`MYCARDCONTEN${card}`) // null
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <Container>
      <Row xs={1} md={2} className="g-4">
        <h1>PREVIEW PAGE</h1>
        {card.map((item) => (
          <>
            <div key={item.id}>WHATEVER{item.recipientName} {item.message} EE</div>
            <Col>
              <iframe
                src={`${item.iframe}.html`}
              />
            </Col>
          </>
        ))}
      </Row>

    </Container>

  )
}

/*
<button onClick={() => router.push(`/draft/${card.id}/submitted?iframe=${item.iframe}`)} type="button">SEND</button>
      <button onClick={() => router.push(`/draft/${card.id}/edit?iframe=${item.iframe}`)} type="button">EDIT</button>
      */
