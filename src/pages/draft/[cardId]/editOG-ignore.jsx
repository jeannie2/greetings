// get iframe from cardid not param?
// fb edit record with form

import FormsCardsChange from '@/components/forms/cards/Change'

import { useRouter } from 'next/router'

/*
// create context
import { getFirestore, doc, updateDoc } from "firebase/firestore";

const newData = {
  province: "ON"
};

updateDoc(docRef, newData)
.then(docRef => {
    console.log("Value of an Existing Document Field has been updated");
})
.catch(error => {
    console.log(error);
})

const updateRecord() {

} */

export default function EditPage() {
  const { query: { cardId } } = useRouter()
  const { card, isLoading, error } = useCard(cardId)
  const router = useRouter()

  // added
  const folder = card?.iframe?.replace(/\d+/g, '') // question mark after card or no work

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  // get docid from param
  const docId = router.query.cardId
  // console.log(`router.query?.draft${router.query.cardId}`)
  // show iframe QQQQ WWW
  console.log(`docId: ${docId}`)

  return (
    <>
      <h1>EDIT PAGE</h1>
      <iframe src=className="border" />
      <FormsCardsChange />

    </>
  )
}

/*
initialValues={data?.}
 onSubmit={updateRecord} */
