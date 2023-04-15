import React, { useState, createContext, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'

import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/services/firebase'

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

  const apiSignIn = (values) => new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, values.email, values.password).then((result) => {
      resolve(result)
      console.log('logged in') // eslint-disable-line
      router.push('/')
    }).catch((error) => {
      reject(error)
    })
  })

  const apiSignup = (values) => new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, values.email, values.password).then((result) => {
      resolve(result)
      router.push('/')
    }).catch((error) => {
      reject(error)
    })
  })

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
