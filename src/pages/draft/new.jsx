import React from 'react'

import FormsCardsChange from '@/components/forms/cards/Change'
import { useRouter } from 'next/router'
import { createCard } from '@/contexts/card'
/// draft/new?iframe=bday1

/// /iframe src= queryparam
// actual card on the side with iframe

// rename iframe argument QQ
function NewCardPage() {
  // const router = useRouter() // when need put in {}? if put in {}, router in router.push is undefined QQ
  const url = useRouter()
  const { iframe } = url.query
  const folder = iframe?.replace(/\d+/g, '')

  const { createCard } = '@/contexts/card'

  return (
    <div id="pages-auth-signup" className="container">
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <h1 className="text-center">New Card Page</h1>
          <iframe src={`/templates/${folder}/${iframe}.html`} className="border" />
          <FormsCardsChange iframe={iframe} />
        </div>
      </div>
    </div>
  )
}

export default NewCardPage
// onSubmit={createCard}
/*  <FormsAuthSignup
            onSubmit={apiSignup}
          /> */
