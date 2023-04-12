// import React from 'react'
// ok to pass value like this to render iframe? QQ instead of getting param
import { Formik, Field, Form, ErrorMessage, useField } from 'formik'
import * as Yup from 'yup'

import React from 'react'
import { useRouter } from 'next/router'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '@/services/firebase'
import { useAuth } from '@/contexts/auth'
// import { useCard, UpdateCard } from '@/contexts/card'

import moment from 'moment'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

/*
const DatepickerField = ({
  field,
  form,
  ...props
}) => (
  // OR const { setFieldValue } = form;
  // OR const { value, name } = field;
  <div>
    <DatePicker
      dateFormat="MM-dd-yyyy"
      {...field}
      selected={field.value}
      onChange={(val) => form.setFieldValue(field.name, val)}
    />
  </div>
)

const MyDatePicker2 = () => {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  )
}
 */

const MyDatePicker = ({ name = '' }) => {
  const [field, meta, helpers] = useField(name)

  const { value } = meta
  const { setValue } = helpers

  console.log(value)

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

/// www.draft/new?bday1
function FormsCardsEdit(props) { // props, iframe.  props //{ iframe } ({ iframe }) <- DOESNT WORK QQQQ Www
  const { user } = useAuth()
  const { query: { cardId }, push } = useRouter()
  // const { asPath, pathname } = useRouter()
  // const useEditCard = useEditCardHook()

  // const [isLoading, setIsLoading] = useState(true)
  // const [error, setError] = useState(null)
  // console.log(`aspath: ${asPath} pathname: ${pathname}`)
  // const param = router.query

  // console.log(`iframe: ${iframe?.iframe}`)
  // console.log(`router query${router.query}`)

  // useRecord if no work - hook

  const insertDeliveryDate = async (values) => {
    console.log(`insertDeliveryDate from edit file: ${moment(values.date).format('DD MMM YYYY hh:mm a')}`)
    const convertedDate = moment(values.date).format('DD MMM YYYY hh:mm a')
    try {
      await updateDoc(doc(db, 'greetings3', cardId), {
        deliveryDate: convertedDate
      })
    } catch (e) {
      console.log(e)
    }
  }

  const updateRecord = async (values) => {
    // cardId not docId or else cannot read properties of undefined - reading indexof error
    // const { query: { docId } } = useRouter()
    try {
      // const cardId = docId
      console.log(`cardId: ${cardId}`)
      // await updateDoc(doc(db, 'greetingcards', cardId), {
      await updateDoc(doc(db, 'greetings3', cardId), {
        ...values
      })
      insertDeliveryDate(values)
      push(`/draft/${cardId}/preview`)
    } catch (e) {
      console.log(e)
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
    deliveryDate: ''
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
          date: Yup.string(),
          deliveryDate: Yup.string()
          // date: Yup.date(),
          // deliveryDate: Yup.date() // correct?
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
              <label>Recipient Name</label>
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

            <button className="btn btn-primary mx-auto d-block" type="submit" disabled={isSubmitting}>Preview</button>
          </Form>
        )
      }
    </Formik>
  )
}

export default FormsCardsEdit

/*
  <Field name="date" component={DatepickerField} />
      <div className="mb-3">
              <label>Delivery date</label>
              <br />
              <MyDatePickerOG name="date" />
            </div>

function EditCard() {
  const router = useRouter()
  console.log('WT')
  const docRef = doc(db, 'greetingcards', cardId)
  router.push(`/draft/${docRef.id}/preview`)
}

 import useEditCardHook from '@/hooks/useEditCardHook'
 const { query: { cardId } } = useRouter()
 const router = useRouter()

/* const reviseRecord2 = (values, docId) => new Promise((resolve, reject) => {
  updateDoc(doc(db, 'greetingcards', docId), {
    ...values
  }).then((result) => {
    resolve(result)
    console.log('updated')
    // said to do sth else? QQ
    // router.push('/test')
  }).catch((error) => {
    reject(error)
  })
})

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
  */
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

  -----------
 */
