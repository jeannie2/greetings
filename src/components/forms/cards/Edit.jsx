// import React from 'react'
// ok to pass value like this to render iframe? QQ instead of getting param
import { Formik, Field, Form, ErrorMessage, resetForm } from 'formik'
import * as Yup from 'yup'

import React, { useState, createContext, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { collection, addDoc, getDocs, doc, updateDoc } from 'firebase/firestore'
import { auth, googleProvider, db } from '@/services/firebase'
import { useAuth } from '@/contexts/auth'
// update to react bootstrap code
import { useCard, UpdateCard } from '@/contexts/card'

import useEditCardHook from '@/hooks/useEditCardHook'

function EditCard() {
  const router = useRouter()
  console.log('WT')
  const docRef = doc(db, 'greetingcards', cardId)
  router.push(`/draft/${docRef.id}/preview`)
}

/// www.draft/new?bday1
function FormsCardsEdit(props, iframe) { // props //{ iframe } ({ iframe }) <- DOESNT WORK QQQQ Www
  const router = useRouter()
  const { user } = useAuth()
  const useEditCard = useEditCardHook()

  // const [isLoading, setIsLoading] = useState(true)
  // const [error, setError] = useState(null)

  // const param = router.query

  console.log(`iframe: ${iframe?.iframe}`)
  // console.log(`router query${router.query}`)

  const editCardOG = async (cardId) => {
    // const { query: { cardId } } = useRouter()
    // const { card, isLoading, error } = useCard(cardId)

    try {
      // const db = getFirestore()
      const docRef = doc(db, 'greetingcards', cardId)
      const newData = {
        iframe: 'PASTA'
        // form data? QQ
      }
      updateDoc(docRef, newData)
      // updateDoc(docRef, newData)
      console.log('Value of an Existing Document Field has been updated')
      router.push(`/draft/${docRef.id}/preview`)
      // display the results of updated record
      // setCard(docSnap.data())
      // setIsLoading(false) need? QQ
    } catch (err) {
     console.log(err) // eslint-disable-line
      // setError(err) need? QQ
    }
  }

  const initialValues = {
    senderName: '',
    senderEmail: '',
    recipientName: '',
    recipientEmail: '',
    message: '',
    iframe: iframe?.iframe || '', // param?.new || '',
    userId: user?.uid || '',
    deliveryDate: ''
  }

  return (
    <Formik
      initialValues={props.initialValues || initialValues}
      onSubmit={EditCard}
      enableReinitialize
      validationSchema={
        Yup.object({
          senderName: Yup.string().required().label('SenderName'),
          senderEmail: Yup.string().required().label('SenderEmail'),
          recipientName: Yup.string().required().label('RecipientName'),
          recipientEmail: Yup.string().required().label('RecipientEmail'),
          message: Yup.string().required().label('Message'),
          iframe: Yup.string(),
          userId: Yup.string(),
          deliveryDate: Yup.string() // correct?
        })
      }
    >
      {
        ({ errors: e, touched: t, isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <label>Sender Name</label>
              <Field
                id="senderName"
                className={`form-control ${e?.email && t?.email && 'is-invalid'}`}
                name="senderName"
              />
              <ErrorMessage
                className="invalid-feedback"
                name="senderName"
                component="div"
              />
            </div>

            <div>
              <label>Sender Email</label>
              <Field
                className={`form-control ${e?.email && t?.email && 'is-invalid'}`}
                name="senderEmail"
                id="senderEmail"
                type="email"
                placeholder="adam.chan@gmail.com"
              />
              <ErrorMessage
                className="invalid-feedback"
                name="senderEmail"
                component="div"
              />
            </div>

            <div className="mb-3">
              <label>Recipient Name</label>
              <Field
                className={`form-control ${e?.email && t?.email && 'is-invalid'}`}
                name="recipientName"
                id="recipientName"
              />
              <ErrorMessage
                className="invalid-feedback"
                name="recipientName"
                component="div"
              />
            </div>

            <div className="mb-3">
              <label>Recipient Email</label>
              <Field
                className={`form-control ${e?.email && t?.email && 'is-invalid'}`}
                name="recipientEmail"
                type="email"
                id="recipientEmail"
                placeholder="adam.chan@gmail.com"
              />
              <ErrorMessage
                className="invalid-feedback"
                name="recipientEmail"
                component="div"
              />
            </div>

            <div className="mb-3">
              <label>Message</label>
              <Field
                component="textarea"
               // className={`form-control ${e?.password && t?.password && 'is-invalid'}`}
                name="message"
                type="textarea"
                id="message"
                rows="5"
                cols="50"
              />
              <ErrorMessage
                className="invalid-feedback"
                name="message"
                component="div"
              />
            </div>

            <button className="btn btn-primary float-end" type="submit" disabled={isSubmitting}>Preview</button>
          </Form>
        )
      }
    </Formik>
  )
}

export default FormsCardsEdit

// need is-invalid?
/*
const createCard2 = (values) => new Promise((resolve, reject) => {
  const router = useRouter()
  addCard(values.senderName, values.senderEmail, values.recipientName, values.recipientEmail, values.message).then((result) => {
    resolve(result)
    resetForm()
    router.push('/test')
  }).catch((error) => {
    reject(error)
  })
})

  const { id } = doc(collection(db, 'bloodDonation'))
 const newDonationRef = doc(db, 'bloodDonation', id)
  await setDoc(newDonationRef, values)
 */
