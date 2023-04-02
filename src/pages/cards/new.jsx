import React from 'react'

import FormsCardsChange from '@/components/forms/cards/Change'

// actual card on the side with iframe
function PagesCardsNew() {
  return (
    <div id="pages-auth-signup" className="container">
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <h1 className="text-center">New Card Page</h1>

          <FormsCardsChange />
        </div>
      </div>
    </div>
  )
}

export default PagesCardsNew

/*  <FormsAuthSignup
            onSubmit={apiSignup}
          /> */
