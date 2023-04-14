import React from 'react'
import FormsAuthLogin from '@/components/forms/auth/Login'

function PagesAuthLogin() {
  return (
    <div id="pages-auth-login" className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <h1 className="text-center">Login</h1>

          <FormsAuthLogin />
        </div>
      </div>
    </div>
  )
}

export default PagesAuthLogin
