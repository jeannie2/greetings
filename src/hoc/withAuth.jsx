// import { useSession } from 'next-auth/react'
import { useAuth } from '@/contexts/auth'
// import { useRouter } from 'next/router'

export default function withAuth(Component) {
  // const router = useRouter()

  return (props) => {
    const { status } = useAuth({
      required: true,
      unauthorized: '/api/auth/login'
    })

    console.log(status)
    if (status === 'loading') return <div>Loading...</div>
    if (status === false) {
      return {
        redirect: { destination: 'api/auth/login' }
      }
    }
    /* if (status === false) {
      router.push('/test')
    } // redirect? */

    return (
      <Component {...props} />
    )
  }
}
