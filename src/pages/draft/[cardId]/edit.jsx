import FormsCardsEdit from '@/components/forms/cards/Edit'

import { useRouter } from 'next/router'
import { useCard } from '@/contexts/card'
// import {UpdateCard} from '@/hooks/card'
// import updateRecord from '@/hooks/updateRecord'

export default function EditCardPage() {
  const { query: { cardId } } = useRouter()
  const { card, isLoading, error } = useCard(cardId)
  // const router = useRouter()

  console.log(`card${card}`) // eslint-disable-line
  // added
  const folder = card?.iframe?.replace(/\d+/g, '') // question mark after card or no work

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <div id="pages-auth-signup" className="container text-center mt-2 border">

      <div className="row">
        <div className="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3">

          <iframe src={`/templates/${folder}/${card.iframe}.html`} className="border embed-responsive-item" allowFullScreen />
          <FormsCardsEdit initialValues={card} />

        </div>
      </div>
    </div>
  )
}

/*
get iframe from cardid not param
or cld do another way to get the iframe QQQQ WWW

const docId = router.query.cardId
console.log(`router.query?.draft${router.query.cardId}`)
console.log(`docId: ${docId}`)
*/
