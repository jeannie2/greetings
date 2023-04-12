// iframe src= queryparam
// show 1 card
// button to send option which directs to create new card with iframe as param
// rename all to pages like project3? QQ
import { useRouter } from 'next/router'

/* const whatever = () => {
  const router = useRouter()
  router.push('/test')
  console.log('matter')
} */
/* const addUser = async () => {
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      first: 'sarah',
      last: 'lee',
      born: 2000,
      age: 23,
      height: 150
    })
    console.log('Document written with ID: ', docRef.id)
  } catch (e) {
    console.error('Error adding document: ', e)
  }
} */

export default function IndexTemplate() {
  const router = useRouter() // if put in {}, router in router.push is undefined QQ
  const url = useRouter()
  const { iframe } = url.query
  const folder = iframe?.replace(/\d+/g, '') // iframe keyword minus number eg bday3 -> bday

  console.log(`rquery : ${url.query}`)
  console.log(`rquery WILBUR: ${url.query.iframe}`)
  console.log(`iframe: ${iframe}`)

  return (
    <>
      <h1>INDEX TEMPLATE JUST</h1>
      <iframe className="border" src={`/templates/${folder}/${iframe}.html`} />
      <button onClick={() => router.push(`/draft/new?iframe=${iframe}`)} type="button">Send</button>
    </>
  )
}

// export default IndexTemplate
/* className="btn btn-primary float-end" type="submit" disabled={isSubmitting}> */

// console.log(`pathname${pathname}`)
// const putty = asPath.split('/').pop()
// const lastPutty = asPath.split('/').reverse()[0]
// console.log(`puttyfinalHERE${putty}`)
// console.log(`last putty${lastPutty}`)
// console.log(`routerquery:  ${router.query}`)

/*   const { asPath } = useRouter()
  console.log(`PUTTY${asPath}`)
  // console.log(pathname)
  // const url = router.query

  const putty = asPath.split('/').pop()
  console.log(`puttyfinal${putty}`)
*/
