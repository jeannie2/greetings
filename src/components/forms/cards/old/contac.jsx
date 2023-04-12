/* /pages/contact.jsx */
import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return submitted ? (
    <p>Message Received! .</p>
  ) : (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: ''
      }}
      validationSchema={Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        message: Yup.string().required('Required')
      })}
      onSubmit={async (values) => {
        // We'll get to this part next!
        const response = await fetch('/api/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        })
        console.log(response) // eslint-disable-line
        setSubmitted(true)
      }}

    >
      {(formik) => (
        <Form>
          <Field type="text" name="name" />
          <ErrorMessage name="name" />
          <Field type="email" name="email" />
          <ErrorMessage name="email" />
          <Field as="textarea" name="message" />
          <ErrorMessage name="message" />
          {formik.submitCount > 0 && !formik.isValid && (
            <p>Some fields are missing/invalid.</p>
          )}
          <button type="submit" disabled={formik.isSubmitting}>
            Send
          </button>
        </Form>
      )}
    </Formik>
  )
}
