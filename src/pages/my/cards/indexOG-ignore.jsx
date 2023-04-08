import withAuth from '@/hoc/withAuth'
// get id of logged in user and display all cards with that userId
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from 'next/link'

// import getMyCardHook from '@/hooks/getMyCardHook'

// const getMyCards = async () => {
//   const { user } = useAuth()
//   // console.log(user.uid)
//   // const q = query(collection(db, 'users'), where('first', '==', 'sarah')) // userId == currently logged in user
//   const q = query(collection(db, 'greetingcards'), where('userId', '==', user.uid))
//   // console.log(q)
//   const querySnapshot = await getDocs(q)
//   // console.log(`q${q}`)
//   // console.log(`querysnapshot.docs0${querySnapshot.docs[0]}`)
//   // const result = []
//   querySnapshot.forEach((doc) => {
//     console.log(`Doc.data${doc.id}`)
//     // console.log(`sendername${doc.data().senderName}`) // logs result
//     console.log(`${doc.id} => `, doc.data()) // // gives 2 results with 3HUS4jsdsngRidOIsRhKRwPPfd62
//     //  console.log(`recipientname: ${doc.recipientName} => `, doc.data().recipientName)
//     //  MyCardsIndex(doc)
//     // result.push(doc)
//     console.log(`result${result}`)
//   })

//   return result
// }

// export default function MyCardsIndex() {
//   // const { user } = useAuth()
//   const { data } = getMyCards()
//   // const { data } = getMyCardHook()
//   console.log(`data ${data}`)
//   // const { data } = getMyCards()
//   // console.log(`GETMYCARDS${getMyCards()}`)

//   // const router = useRouter()
//   // if (router.isFallback) return <div>Loading...</div>
//   // if (!templateFiles) return <div>No Such Template</div>

//   // console.log(`user${user}`)
//   // console.log(`DataME ${data}`)
//   return (
//     <h1>EE</h1>)
//   // iframe src, recipientname, date

//   // map through each item and show just the iframe src, recipientname, date. click to expand and view all details minus sender nfo
// }

/* data.map((item) => (
      <h1>{item}</h1>
    ))
     data.docs.map((item) => (
  /  <h1>{item}</h1>

  {data?.map(item) => (
      <li>{item.message}</li>
      )} */

import { useMyCards } from '@/contexts/myCards'

function MyCardsIndex() { // export default function MyCardsIndex() {
  const { myCards, isLoading, error } = useMyCards()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  // const folder = myCard.iframe?.replace(/\d+/g, '') // added

  return (
    <Container>
      <Row xs={1} md={2} className="g-4">
        {myCards.map((card) => (
          <>
            <div key={card.id} />
            <Col>
              <iframe
                src={`/templates/${card?.iframe?.replace(/\d+/g, '')}/${card.iframe}.html`}
                className="border"
              />
              <Link href={`/my/cards/${card.id}`}>View Details</Link>
              <div>To: {card.recipientName} </div>

            </Col>
          </>
        ))}
      </Row>
    </Container>
  )
}

export default withAuth(MyCardsIndex)

// <div key={card.id}>{card.id} | {card.recipientEmail} | {card.recipientName} | {card.iframe}</div>
// export default withAuth(MyCardsIndex)
/*
 return myCards.map((card) => (
    <div key={card.id}>{card.id} | {card.recipientEmail} | {card.recipientName} | {card.iframe}</div>
  ))

  */
