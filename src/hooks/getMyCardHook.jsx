import { collection, getDocs, query, where } from 'firebase/firestore'
import { useAuth } from '@/contexts/auth'
import { db } from '@/services/firebase'

const getMyCardHook = async () => {
  const { user } = useAuth()
  // console.log(user.uid)
  // const q = query(collection(db, 'users'), where('first', '==', 'sarah')) // userId == currently logged in user
  const q = query(collection(db, 'greetingcards'), where('userId', '==', user.uid))
  // console.log(q)
  const querySnapshot = await getDocs(q)
  // console.log(`q${q}`)
  // console.log(`querysnapshot.docs0${querySnapshot.docs[0]}`)

  /* querySnapshot.forEach((doc) => {
    console.log(`Doc.data${doc.id}`)
    // console.log(`sendername${doc.data().senderName}`) // logs result
    console.log(`${doc.id} => `, doc.data()) // // gives 2 results with 3HUS4jsdsngRidOIsRhKRwPPfd62
    //  console.log(`recipientname: ${doc.recipientName} => `, doc.data().recipientName)
  //  MyCardsIndex(doc)
  }) */
  // return querySnapshot

  console.log(`querysnapshot${querySnapshot}`)
  return querySnapshot
}

export default getMyCardHook
