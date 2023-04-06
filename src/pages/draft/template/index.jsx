// iframe src= queryparam
// show 1 card
// button to send option which directs to create new card with iframe as param
// rename all to pages like project3? QQ
import { useRouter } from 'next/router'

export default function TemplateIndexPage() {
  const router = useRouter() // if put in {}, router in router.push is undefined QQ

  const url = useRouter()
  const { iframe } = url.query
  const folder = iframe?.replace(/\d+/g, '') // iframe keyword minus number eg bday3 -> bday

  // console.log(`url query : ${url.query}`)
  console.log(`url.query.iframe : ${url.query.iframe}`)
  console.log(`iframe: ${iframe}`)

  return (
    <>
      <h1>Themes: 1 card view</h1>
      <iframe className="border" src={`/templates/${folder}/${iframe}.html`} />
      <button onClick={() => router.push(`/draft/new?iframe=${iframe}`)} type="button">Send</button>
    </>
  )
}

// export default IndexTemplate
/* className="btn btn-primary float-end" type="submit" disabled={isSubmitting}> */
