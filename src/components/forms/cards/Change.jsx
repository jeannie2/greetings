import React from 'react'
import { useRouter } from 'next/router'

import { Formik, Field, Form, ErrorMessage, useField } from 'formik'
import * as Yup from 'yup'

import { collection, addDoc, updateDoc, doc } from 'firebase/firestore'
import { db } from '@/services/firebase'

import { useAuth } from '@/contexts/auth'

import moment from 'moment'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const MyDatePicker = ({ name = '' }) => {
  const [field, meta, helpers] = useField(name)

  const { value } = meta
  const { setValue } = helpers

  console.log(value) // eslint-disable-line

  return (
    <DatePicker
      {...field}
      selected={value}
      dateFormat="MM-dd-yyyy"
      onChange={(date) => {
        setValue(moment(date).valueOf()
        )
      }}
    />
  )
}

function FormsCardsChange(iframe) { // props, iframe. -> if use this, iframe doesnt get written to db. but how make work if use one form with props || initial values? props //{ iframe } ({ iframe }) <- DOESNT WORK QQQQ Www
  const router = useRouter()
  const { user } = useAuth()

  // const param = router.query
  // console.log(`iframe: ${iframe?.iframe}`)
  // console.log(`router query${router.query}`)

  const insertDeliveryDate = async (values, docRef) => {
    // console.log(`insertDeliveryDate: ${moment(values.date).format('DD MMM YYYY')}`) // eslint-disable-line
    // format('DD MMM YYYY hh:mm a')}`)
    const convertedDate = moment(values.date).format('DD MMM YYYY')
    try {
      await updateDoc(doc(db, 'greetings3', docRef.id), {
        deliveryDate: convertedDate // [convertedDate]
      })
    } catch (e) {
      console.log(e) // eslint-disable-line
    }
  }

  const createCard = async (values) => {
    // const newValues = {
    //   ...values,
    //   userId: user.uid,
    // }
    console.log(values) // eslint-disable-line
    try {
      // const docRef = await addDoc(collection(db, 'greetingcards'), values)
      const docRef = await addDoc(collection(db, 'greetings3'), values)
      // cardId
      console.log('Document written with ID: ', docRef.id) // eslint-disable-line
      insertDeliveryDate(values, docRef)
      router.push(`/draft/${docRef.id}/preview?recipient=${docRef.recipientName}`) // router.push('/test')
    } catch (e) {
      console.error('Error adding document: ', e) // eslint-disable-line
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
    date: moment().valueOf(),
    deliveryDate: '',
    scheduled: false,
    opened: false,
    notifiedSender: false
    // date: new Date(new Date().toDateString()),
    // deliveryDate: new Date(new Date().toDateString())
  }

  return (
    <Formik
      initialValues={initialValues} // props.initialValues ||initialValues
      onSubmit={createCard}
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
          date: Yup.string(),
          deliveryDate: Yup.string(),
          scheduled: Yup.bool(), //  Yup.date()
          opened: Yup.bool(),
          notifiedSender: Yup.bool()
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
                className={`form-control ${e?.senderName && t?.senderName && 'is-invalid'}`}
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
                className={`form-control ${e?.senderEmail && t?.senderEmail && 'is-invalid'}`}
                name="senderEmail"
                id="senderEmail"
                type="email"
                placeholder="yourname@gmail.com"
              />
              <ErrorMessage
                className="invalid-feedback"
                name="senderEmail"
                component="div"
              />
            </div>

            <div className="mb-3">
              <label>Recipient First Name</label>
              <Field
                className={`form-control ${e?.recipientName && t?.recipientName && 'is-invalid'}`}
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
                className={`form-control ${e?.recipientEmail && t?.recipientEmail && 'is-invalid'}`}
                name="recipientEmail"
                type="email"
                id="recipientEmail"
                placeholder="yourname@gmail.com"
              />
              <ErrorMessage
                className="invalid-feedback"
                name="recipientEmail"
                component="div"
              />
            </div>

            <div className="mb-3">
              <label>Message</label>
              <br />
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

            <div className="mb-3">
              <label>Delivery date</label>
              <br />
              <MyDatePicker name="date" />
            </div>

            <button className="btn btn-light mx-auto d-block" type="submit" disabled={isSubmitting}>Preview</button>
          </Form>
        )
      }
    </Formik>
  )
}

export default FormsCardsChange
