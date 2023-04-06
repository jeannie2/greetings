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
    <h1 className="text-align: center">Card sent, thank you!</h1>
  )
}

export default CardSubmittedPage
