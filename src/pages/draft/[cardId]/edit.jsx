// get iframe from cardid not param?
// fb edit record with form
// or cld do another way to get the iframe QQQQ WWW

// To simultaneously write to specific children of a node without overwriting other child nodes, use the update() method.

// import FormsCardsChange from '@/components/forms/cards/Change'
import FormsCardsEdit from '@/components/forms/cards/Edit'

import { useRouter } from 'next/router'
import { useCard, UpdateCard, editCard } from '@/contexts/card'
// import {UpdateCard} from '@/hooks/card'
// import updateRecord from '@/hooks/updateRecord'

export default function EditCardPage() {
  const { query: { cardId } } = useRouter()
  const { card, isLoading, error } = useCard(cardId)
  const router = useRouter()

  console.log(`card${card}`)
  // added
  const folder = card?.iframe?.replace(/\d+/g, '') // question mark after card or no work

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  /*
  // get docid from param
  const docId = router.query.cardId
  // console.log(`router.query?.draft${router.query.cardId}`)
  console.log(`docId: ${docId}`)
 */

  return (
    <div id="pages-auth-signup" className="container">
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <h1 className="text-center">EDIT PAGE</h1>
          <iframe src={`/templates/${folder}/${card.iframe}.html`} className="border" />
          <FormsCardsEdit initialValues={card} />

        </div>
      </div>
    </div>
  )
}
/*
  <FormsCardsChange
    initialValues={card}
    onSubmit={editCard}
  /> */
// C45VQv5yF8AgGlTRq2yH
/*
initialValues={data?.}
 onSubmit={updateRecord}
 enableReinitialize */
