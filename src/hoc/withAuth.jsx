import { useEffect } from 'react'
import { useAuth } from '@/contexts/auth'
import { useRouter } from 'next/router'
// QQ why toastify twice? toastify for handleErrors in a _utils.jsx file, with alert appearing on pages with catch (err)?
// actually toastify, private pages redundant - unless hv locked cards. WWW

import { toast } from 'react-toastify'

export default function withAuth(Component) {
  return (props) => {
    const router = useRouter()
    const { isLoading, user } = useAuth()

    useEffect(() => {
      if (!isLoading && !user) {
        toast.warning('You need to login first!')
        router.push('/auth/login')
      }
    }, [user, isLoading])

    if (isLoading) return <div>Loading...</div>
    if (!user) return null

    return <Component {...props} />
  }
}
