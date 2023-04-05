import withAuth from '@/hoc/withAuth'

export function Private() {
  // const { data } = useSWR('/api/private', fetcher)
  // console.log(data) // eslint-disable-line

  return (
    <div>this is a protected page!</div>
  )
}

export default withAuth(Private)
