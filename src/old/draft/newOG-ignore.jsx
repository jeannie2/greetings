import React from 'react'
import { useRouter } from 'next/router'
import FormsCardsChange from '@/components/forms/cards/Change'

// rename iframe argument QQ
function NewCardPage() {
  // const router = useRouter() // when need put in {}? if put in {}, router in router.push is undefined QQ
  const url = useRouter()
  const { iframe } = url.query
  const folder = iframe?.replace(/\d+/g, '')

  // const { createCard } = '@/contexts/card'
  // console.log(`url: ${url.query}`) // eslint-disable-line
  // console.log(`iframe on new page: ${iframe}`) // eslint-disable-line

  return (
    <div id="pages-auth-signup" className="container text-center mt-2 border">
      <div className="row">
        <div className="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3">
          <iframe src={`/templates/${folder}/${iframe}.html`} className="border embed-responsive-item" allowFullScreen />
          <FormsCardsChange iframe={iframe} />
        </div>
      </div>
    </div>
  )
}

export default NewCardPage
