import { useEffect } from 'react'
import { useAuth } from '@/contexts/auth'
import { useRouter } from 'next/router'

export default function withAuth(Component) {
  return (props) => {
    const router = useRouter()
    const { isLoading, user } = useAuth()

    useEffect(() => {
      if (!isLoading && !user) {
        router.push('/auth/login')
      }
    }, [user, isLoading])

    if (isLoading) return <div>Loading...</div>
    if (!user) return null

    return <Component {...props} />
  }
}
