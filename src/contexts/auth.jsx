import React, { useState, createContext, useContext, useEffect } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router'

import { auth } from '@/services/firebase'

// const auth = getAuth();
const AuthContext = createContext()

export function AuthProvider({ children }) {
  const router = useRouter()

  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, (newUser) => {
      setUser(newUser)
      setIsLoading(false)
    })
  }, [])

  const apiSignOut = () => signOut(auth)

  // const apiSignIn = () => {}
  const apiSignIn = (values) => new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, values.email, values.password).then((result) => {
      resolve(result)
      console.log('logged in')
      // said to do sth else? QQ
      router.push('/test')
    }).catch((error) => {
      reject(error)
    })
  })

  const apiSignup = (values) => new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, values.email, values.password).then((result) => {
      resolve(result)
      // router.push('/my/cards')
      router.push('/test')
    }).catch((error) => {
      reject(error)
    })
  })

  console.log(user)

  const data = {
    user,
    isLoading,
    apiSignOut,
    apiSignIn,
    apiSignup
  }

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}
