import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { useAuth } from '@/contexts/auth'

function FormsAuthSignup() {
  const { apiSignup } = useAuth()

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        passwordConfirmation: ''
      }}
      onSubmit={apiSignup}
      enableReinitialize
      validationSchema={
        Yup.object({
          email: Yup.string().required().label('Email'),
          password: Yup.string().min(6).required().label('Password'),
          passwordConfirmation: Yup.string().oneOf([Yup.ref('password')], 'Passwords need to match').required().label('Password Confirmation')
        })
      }
    >
      {
        ({ errors: e, touched: t, isSubmitting }) => (
          <Form className="text-center">
            <div className="mb-3">
              <label>Email</label>
              <Field
                className={`form-control ${e?.email && t?.email && 'is-invalid'}`}
                name="email"
                type="email"
                placeholder="yourname@gmail.com"
              />
              <ErrorMessage
                className="invalid-feedback"
                name="email"
                component="div"
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <Field
                className={`form-control ${e?.password && t?.password && 'is-invalid'}`}
                name="password"
                type="password"
              />
              <ErrorMessage
                className="invalid-feedback"
                name="password"
                component="div"
              />
            </div>

            <div className="mb-3">
              <label>Password confirmation</label>
              <Field
                className={`form-control ${e?.passwordConfirmation && t?.passwordConfirmation && 'is-invalid'}`}
                name="passwordConfirmation"
                type="password"
              />
              <ErrorMessage
                className="invalid-feedback"
                name="passwordConfirmation"
                component="div"
              />
            </div>

            <button className="btn btn-light mx-auto d-block" type="submit" disabled={isSubmitting}>Submit</button>
          </Form>
        )
      }
    </Formik>
  )
}

export default FormsAuthSignup
