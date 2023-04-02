import Link from 'next/link'

import { apiGetCards } from '@/lib/cards'

export default function SSGIndex({ cards }) {
  return (
    <div className="container">
      <div className="row">
        {cards.map((card) => (
          <div className="col-12 col-sm-6 col-lg-3" key={card.id}>
            <Link href={`/ssg/${card.id}`}>
              <iframe src="" />
              <a>{card.title}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>

  )
}

export async function getStaticProps() {
  const cards = await apiGetCards()

  return {
    props: {
      cards
    }
  }
}

/* export default function SSGIndex({ cards }) {
  return cards.map((card) => (
    <div key={card.id}>
      <Link href={`/ssg/${card.id}`}>
        <a>{card.title}</a>
      </Link>
    </div>
  ))
}
*/
