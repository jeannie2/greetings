import React from 'react'
import { useRouter } from 'next/router'

import { Formik, Field, Form, ErrorMessage, useField } from 'formik'
import * as Yup from 'yup'

import { doc, updateDoc } from 'firebase/firestore'
import { db } from '@/services/firebase'

import { useAuth } from '@/contexts/auth'

import moment from 'moment'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const MyDatePicker = ({ name = '' }) => {
  const [field, meta, helpers] = useField(name)

  const { value } = meta
  const { setValue } = helpers

  console.log(value)  // eslint-disable-line

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

// dont pass iframe here?
function FormsCardsEdit(props) { // props, iframe.  props //{ iframe } ({ iframe }) <- DOESNT WORK QQQQ Www
  const { user } = useAuth()
  const { query: { cardId }, push } = useRouter()

  const insertDeliveryDate = async (values) => {
    // console.log(`insertDeliveryDate from edit file: ${moment(values.date).format('DD MMM YYYY')}`)  // eslint-disable-line
    const convertedDate = moment(values.date).format('DD MMM YYYY')
    try {
      await updateDoc(doc(db, 'greetings3', cardId), {
        deliveryDate: convertedDate // [convertedDate]
      })
    } catch (e) {
      console.log(e)  // eslint-disable-line
    }
  }

  const updateRecord = async (values) => {
    // cardId not docId or else cannot read properties of undefined - reading indexof error
    // const { query: { docId } } = useRouter()
    try {
      // const cardId = docId
      console.log(`cardId: ${cardId}`)  // eslint-disable-line
      // await updateDoc(doc(db, 'greetingcards', cardId), {
      await updateDoc(doc(db, 'greetings3', cardId), {
        ...values
      })
      insertDeliveryDate(values)
      push(`/draft/${cardId}/preview?recipient=${values.recipientName}`) // how to insert recipientName here?
    } catch (e) {
      console.log(e)  // eslint-disable-line
    }
  }

  const initialValues = {
    senderName: '',
    senderEmail: '',
    recipientName: '',
    recipientEmail: '',
    message: '',
    iframe: '', // wld never be blank? iframe?.iframe || ''. param?.new || '',
    userId: user?.uid || '',
    date: moment().valueOf(),
    deliveryDate: '', // moment().valueOf(),
    scheduled: false,
    opened: false,
    notifiedSender: false
    // deliveryDate: new Date()
    // date: new Date(new Date().toDateString()),
    // deliveryDate: new Date(new Date().toDateString())
  }

  return (
    <Formik
      initialValues={props.initialValues || initialValues}
      onSubmit={updateRecord}
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
          date: Yup.string(), // moment().valueOf()
          deliveryDate: Yup.string(),
          scheduled: Yup.bool(),
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

export default FormsCardsEdit
