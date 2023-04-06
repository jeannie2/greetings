// get iframe from cardid not param?
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

function PagesCardSubmitted() {
  const router = useRouter()

  // const [queries] = useSearchParams()
  // const tipId = queries.get('tipId')
  // diff way instead of tipId bc already have id at edit/preview stage
  useEffect(() => {
    if (tipId) {
      setTimeout(() => {
        router.push('/test')
      }, 3000)
    }
  }, [tipId])

  return (
    <h1>Card sent, thank you</h1>
  )
}

export default PagesCardSubmitted
