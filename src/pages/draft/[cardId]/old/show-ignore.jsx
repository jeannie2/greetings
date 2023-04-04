import { useRouter } from 'next/router'

import { apiGetCard } from '@/lib/cards'
// import { apiGetTodosIds } from '@/lib/todos'

export default function SSGShow({ card }) {
  const router = useRouter()

  if (router.isFallback) return <div>Loading...</div>
  if (!card) return <div>No Such Card</div>
  return (
    <>
      <div>{card.title}</div>
      <ul>
        {
          card.CardItems.map((item) => (
            <li key={item.id}>
              {item.checked ? 'O' : 'X'} {item.name}
            </li>
          ))
        }
      </ul>
    </>
  )
}

export async function getStaticPaths() {
  // const paths = await apiGetTodosIds()

  return {
    paths: [],
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const card = await apiGetCard(params.id)

  return {
    props: {
      card
    }
  }
}
