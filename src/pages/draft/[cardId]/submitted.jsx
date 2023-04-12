// get iframe from cardid not param?
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

function CardSubmittedPage() {
  const router = useRouter()

  // const [queries] = useSearchParams()
  // const tipId = queries.get('tipId')
  // diff way instead of tipId bc already have id at edit/preview stage
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [])

  return (
    <div className="container text-center pt-5 mt-5" id="sent-message">
      <h1>Card sent, thank you!</h1>
    </div>
  )
}

export default CardSubmittedPage