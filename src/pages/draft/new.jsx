import React from 'react'

import FormsCardsChange from '@/components/forms/cards/Change'
import { useRouter } from 'next/router'
/// draft/new?iframe=bday1

/// /iframe src= queryparam
// actual card on the side with iframe

// rename iframe argument QQ
function PagesCardsNew() {
  // const router = useRouter() // when need put in {}? if put in {}, router in router.push is undefined QQ
  const url = useRouter()
  const { iframe } = url.query
  // const folder = iframe?.replace(/\d+/g, '') //

  return (
    <div id="pages-auth-signup" className="container">
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <h1 className="text-center">New Card Page</h1>

          <FormsCardsChange iframe={iframe} />
        </div>
      </div>
    </div>
  )
}

export default PagesCardsNew

/*  <FormsAuthSignup
            onSubmit={apiSignup}
          /> */
