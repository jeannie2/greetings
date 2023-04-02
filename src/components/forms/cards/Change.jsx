// import React from 'react'
import { Formik, Field, Form, ErrorMessage, resetForm } from 'formik'
import * as Yup from 'yup'

import React, { useState, createContext, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { auth, googleProvider, db } from '@/services/firebase'
// update to react bootstrap code

/* const initialValues = {
  senderName: '',
  senderEmail: '',
  recipientName: '',
  recipientEmail: '',
  message: '',
  dateToSend: '',
  cardId: ''
} */

/* const greetingcards = firebase.database().ref('greetingcards')

const createCard = () => {
  const newCardRef = greetingcards.push()
  newCardRef.set({
    senderName: Field.senderName,
    senderEmail: Field.senderEmail,
    recipientName: Field.recipientName,
    recipientEmail: Field.recipientEmail,
    message: Field.message
  })
}

 const apiSignup = (values) => new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, values.email, values.password).then((result) => {
      resolve(result)
      router.push('/test')
    }).catch((error) => {
      reject(error)
    })
  })

*/

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

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value
}

const createCard = async (values) => { // values
  console.log(values)
  try {
    // const { id } = doc(collection(db, 'bloodDonation'))
    // const newDonationRef = doc(db, 'bloodDonation', id)
  //  await setDoc(newDonationRef, values)
    const docRef = await addDoc(collection(db, 'greetingcards'), {
      senderName: getInputVal('senderName'),
      senderEmail: getInputVal('senderEmail'),
      recipientName: getInputVal('recipientName'),
      recipientEmail: getInputVal('recipientEmail'),
      message: getInputVal('message')
    })

    // redirect to preview page
    console.log('Document written with ID: ', docRef.id) // cardId
    // router.push('/test')
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

function FormsCardsChange() { // props
  return (
    <Formik
      initialValues={{
        senderName: '',
        senderEmail: '',
        recipientName: '',
        recipientEmail: '',
        message: ''
        // dateToSend: '',
      //  cardId: ''
      }}
      onSubmit={createCard}
      enableReinitialize
      validationSchema={
        Yup.object({
          senderName: Yup.string().required().label('SenderName'),
          senderEmail: Yup.string().required().label('SenderEmail'),
          recipientName: Yup.string().required().label('RecipientName'),
          recipientEmail: Yup.string().required().label('RecipientEmail'),
          message: Yup.string().required().label('Message')
          // dateToSend: Yup.string().required().label('DateToSend'),
          // cardId: ''
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
                class={`form-control ${e?.email && t?.email && 'is-invalid'}`}
                name="senderName"
              />
              <ErrorMessage
                class="invalid-feedback"
                name="senderName"
                component="div"
              />
            </div>

            <div>
              <label>Sender Email</label>
              <Field
                class={`form-control ${e?.email && t?.email && 'is-invalid'}`}
                name="senderEmail"
                id="senderEmail"
                type="email"
                placeholder="adam.chan@gmail.com"
              />
              <ErrorMessage
                class="invalid-feedback"
                name="senderEmail"
                component="div"
              />
            </div>

            <div className="mb-3">
              <label>Recipient Name</label>
              <Field
                class={`form-control ${e?.email && t?.email && 'is-invalid'}`}
                name="recipientName"
                id="recipientName"
              />
              <ErrorMessage
                class="invalid-feedback"
                name="recipientName"
                component="div"
              />
            </div>

            <div className="mb-3">
              <label>Recipient Email</label>
              <Field
                class={`form-control ${e?.email && t?.email && 'is-invalid'}`}
                name="recipientEmail"
                type="email"
                id="recipientEmail"
                placeholder="adam.chan@gmail.com"
              />
              <ErrorMessage
                class="invalid-feedback"
                name="recipientEmail"
                component="div"
              />
            </div>

            <div className="mb-3">
              <label>Message</label>
              <Field
                component="textarea"
               // class={`form-control ${e?.password && t?.password && 'is-invalid'}`}
                name="message"
                type="textarea"
                id="message"
                rows="5"
                cols="50"
              />
              <ErrorMessage
                class="invalid-feedback"
                name="message"
                component="div"
              />
            </div>

            <button className="btn btn-primary float-end" type="submit" disabled={isSubmitting}>Submit</button>
          </Form>
        )
      }
    </Formik>
  )
}

export default FormsCardsChange

// need is-invalid?
