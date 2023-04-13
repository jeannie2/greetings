/* export default function Home() {
  return (
    <h1 className="text-center my-5">Home Page</h1>
  )
}
*/

import { useAuth } from '@/contexts/auth'
import { useEffect } from 'react'
import { createUserWithEmailAndPassword, signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { collection, query, where, addDoc, getDocs, updateDoc, doc } from 'firebase/firestore'
import { auth, googleProvider, db } from '@/services/firebase'

export default function Home() {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        console.log(user) // eslint-disable-line
      } else {
        // User is signed out
        console.log('User is signed out') // eslint-disable-line
      }
    })
  }, [])

  const signInEP = () => {
    createUserWithEmailAndPassword(auth, 'd.s.h.cheung@gmail.com', '12345678').then((result) => {
      const { user } = result

      console.log(user) // eslint-disable-line
    }).catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message

      console.log(errorCode, errorMessage) // eslint-disable-line
    })
  }

  const signInGP = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      const { user } = result

      console.log(user) // eslint-disable-line
    }).catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message

      console.log(errorCode, errorMessage) // eslint-disable-lines
    })
  }

  const addUser = async () => {
    try {
      const docRef = await addDoc(collection(db, 'users'), {
        first: 'sarah',
        last: 'lee',
        born: 2000,
        age: 23,
        height: 150
      })
      console.log('Document written with ID: ', docRef.id)// eslint-disable-line
    } catch (e) {
      console.error('Error adding document: ', e) // eslint-disable-line
    }
  }

  const getUsers = async () => {
    const querySnapshot = await getDocs(collection(db, 'users'))
    querySnapshot.forEach(() => { // querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => `, doc.data()) // eslint-disable-line
    })
  }

  const getUser = async () => {
    const q = query(collection(db, 'users'), where('first', '==', 'sarah'))

    const querySnapshot = await getDocs(q)
    querySnapshot.forEach(() => { // querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => `, doc.data()) // eslint-disable-line
    })
  }

  // const router = useRouter()

  const updateRecord = async () => {
    try {
      const docId = '70IUJ0slyirjNjr1XnG3'
      //   await updateDoc(doc(db, 'greetingcards', docId), {
      await updateDoc(doc(db, 'greetings3', docId), {
        message: 'skidmore'
      })
      // router.push('/test')
    } catch (e) {
      console.log(e) // eslint-disable-line
    }
  }

  /*
  const updateRecordOG = async () => {
      const docId = '70IUJ0slyirjNjr1XnG3'
      await updateDoc(doc(db, 'greetingcards', docId), {
        message: 'skidmore'
      })
  } */

  const { apiSignOut } = useAuth()

  const sendEmail = async () => {
    try {
      const res = await fetch('api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify('WHATEVER')
      })
      const { error } = await res.json()

      if (error) {
        return
      }
    } catch (error) {
      console.log(error) // eslint-disable-line
    }
  }

  /* const getDocsByDate = async () => {
    const [cards, setCards] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    console.log('LEOMNDATE') // eslint-disable-line
    try {
      const newCards = []
      const q = query(collection(db, 'greetings3'), where('message', '==', 'rainbow'))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => newCards.push({
        id: doc.id,
        ...doc.data()

      }))
      setCards(newCards)
      console.log(`NEWCARDS: ${newCards}`) // eslint-disable-line
      setIsLoading(false)
    } catch (err) {
          console.log(err) // eslint-disable-line
      setError(err)
    }
  } */

  /*  // setForm({
          state: 'error',
       // //  message: 'Something went wrong'
      //  })
      //  }
  } */
  // where equal to param. preview the card
  /* const getUser = async () => {
    const q = query(collection(db, 'users'), where('first', '==', 'sarah'))

    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => `, doc.data())
    })
  }
  */

  // where equal to my/cards. and my/card
  /* const getUser = async () => {
    const q = query(collection(db, 'users'), where('first', '==', 'sarah'))

    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => `, doc.data())
    })
  }

   setForm({ state: 'loading' })
      try {
        const res = await fetch('api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(inputs)
        })

        const { error } = await res.json()

        if (error) {
          setForm({
            state: 'error',
            message: error
          })
          return
        }

        setForm({
          state: 'success',
          message: 'Your message was sent successfully.'
        })
        setInputs({
          name: '',
          email: '',
          message: ''
        })
      } catch (error) {
        setForm({
          state: 'error',
          message: 'Something went wrong'
        })
      }

      */

  return (
    <div>
      <h1 className="text-center my-5">Home Page | Test</h1>
      <button onClick={signInEP} type="button">Email Sign in</button>
      <button onClick={signInGP} type="button">Google Sign in</button>

      <button onClick={addUser} type="button">Add User</button>
      <button onClick={getUsers} type="button">Get Users</button>
      <button onClick={getUser} type="button">Get 1 User</button>
      <button onClick={apiSignOut} type="button">Logout</button>
      <button onClick={updateRecord} type="button">Update record</button>

      <button onClick={sendEmail} type="button">send email </button>
      <button onClick={getDocsByDate} type="button">doc by date </button>
    </div>
  )
}
