import { useRouter } from 'next/router'
import { useCard } from '@/contexts/card'

export default function FinalCardShowPage() {
  const { query: { cardId } } = useRouter()
  const { card, isLoading, error } = useCard(cardId)

  const folder = card?.iframe.replace(/\d+/g, '')

  // console.log(`iframe on final card show page: ${card?.iframe}`) // eslint-disable-line

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <div className="container mt-5 mx-auto text-center border">
      <div className="row">
        <div className="col-1" />

        <div className="col-lg-10">

          <iframe
            src={`/templates/${folder}/${card.iframe}.html`}
            className="border embed-responsive-item vh-90"
            allowFullScreen
            width="80%"
            height="500px"
          />

          <div className="border">{card.message}</div>

        </div>
        <div className="col-1" />
      </div>

    </div>
  )
}
