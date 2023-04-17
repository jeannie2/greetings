import { useRouter } from 'next/router'
import withAuth from '@/hoc/withAuth'
import { useMyCard } from '@/contexts/myCard'

function MyCardShow() { // export default function MyCardSnow()
  const { query: { cardId } } = useRouter()
  const { myCard, isLoading, error } = useMyCard(cardId)

  const folder = myCard?.iframe?.replace(/\d+/g, '') // added. keep question mark or error. question marks? QQ
  // console.log(`folder${folder}`)
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <div className="container mt-5 mx-auto text-center border">
      <div className="row">
        <div className="col-1" />

        <div className="col-lg-10">

          <iframe
            src={`/templates/${folder}/${myCard.iframe}.html`}
            className="border embed-responsive-item vh-90"
            allowFullScreen
            width="60%"
            height="250px"
          />

          <div>To: {myCard.recipientName}</div>
          <div>Recipient email: {myCard.recipientEmail}</div>
          <div>Delivery date: {myCard.deliveryDate}</div>
          <div className="border">{myCard.message}</div>

        </div>
        <div className="col-1" />

      </div>
    </div>
  )
}

export default withAuth(MyCardShow)
