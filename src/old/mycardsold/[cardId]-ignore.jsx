// card would have a cardId at this point, use to display individual one
// iframe src wld be in db, get from cardId
// import React, { useState, useEffect } from 'react'

// import withAuth from '@/hoc/withAuth'
// get id of logged in user and display all cards with that userId
/* import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from 'next/link' */

// import { useMyCards } from '@/contexts/myCards'
import { useRouter } from 'next/router'
// import { doc, getDoc } from 'firebase/firestore'

export default function MyCardShow() {
  // const card = //url param
  // get that to query the db
  // const router = useRouter()
  const { asPath } = useRouter()
  // const { asPath, pathname } = useRouter()
  // console.log(asPath)
  // console.log(pathname)
  // const { myCards, isLoading, error } = useMyCards()
  const url = asPath.split('/').pop()
  // const url = urlOG.pop()
  console.log(`URL: ${url}`) // eslint-disable-line

  // const [myCard, setMyCard] = useState(null)
  // const [isLoading, setIsLoading] = useState(true)
  // const [error, setError] = useState(null)
  // if (isLoading) return <div>Loading...</div>
  // if (error) return <div>Error</div>

  /*
  useEffect(() => {
    if (url) {
      const getCard = async () => {
        try {
          const newMyCard = []
          // const q = getDoc(doc(db, 'greetingcards', '0kKNlo68YCsiZDjL6faQ'))
          // const q = query(collection(db, 'greetingcards'), where('recipientName', '==', url))
          const myCard = await getDoc(doc(db, 'greetingcards', '0kKNlo68YCsiZDjL6faQ'))
          /* querySnapshot.forEach((doc) => newMyCard.push({
          id: doc.id,
          ...doc.data()
        }))
          setMyCard(newMyCard)
          setIsLoading(false)
        } catch (err) {
          console.log(err) // eslint-disable-line
          setError(err)
        }
      }

      getCard()
    }
  }, []) */

  /* const data = {
    myCard,
    isLoading,
    error
  } */
  // const data = getCard()
}

// <div>{myCard} </div>
/*
  return (
    <Container>
      <Row xs={1} md={2} className="g-4">
        {myCards.map((card) => (
          <>
            <div key={card.id}>{card.id} | {card.recipientEmail} | {card.recipientName} | {card.iframe}</div>
            <Col>
              <iframe
                src={`${card.iframe}.html`}
              />
              <Link href={`/my/cards/${card.id}`}>VIEW 1 CARD</Link>
            </Col>
          </>
        ))}
      </Row>
    </Container>
  )
}
 */
/*
 return myCards.map((card) => (
    <div key={card.id}>{card.id} | {card.recipientEmail} | {card.recipientName} | {card.iframe}</div>
  ))
  */

/*
  export default function testTemplate() {
  // how to get params?
  // query database using id.
  return (
    <h1>1 of My Card with id </h1>
    // display 1 card iframe big screen
    // display recipientname, recipientemail, message, deliverydate

  )
} */

/*
  const singlecard = await getDoc(doc(db, "greetingcards", DOCID))

  if(singlecard)
  //db.collection('greetingcards').doc(WHATEVER).get()

  import { doc, getDoc } from "firebase/firestore";
const docRef = doc(db, "greetingcards", "SF");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
 */
