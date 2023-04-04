// get iframe from cardid not param?
import React, { useEffect } from 'react'
// import { useSearchParams, useNavigate } from 'react-router-dom'

function PagesTipsSubmitted() {
  const navigate = useNavigate()
  const [queries] = useSearchParams()
  const tipId = queries.get('tipId')

  useEffect(() => {
    if (tipId) {
      setTimeout(() => {
        navigate('/wanted/topten')
      }, 3000)
    }
  }, [tipId])

  return (
    <h1 className="text-xl text-white text-center italic mt-20">Tip successfully submitted, thank you</h1>
  )
}

export default PagesTipsSubmitted
