import withAuth from '@/hoc/withAuth'

function Private() {
  return (
    <div>This is a protected page!</div>
  )
}

export default withAuth(Private)
