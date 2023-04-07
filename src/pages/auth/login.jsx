import React from 'react'

import FormsAuthLogin from '@/components/forms/auth/Login'

function PagesAuthLogin() {
  // const { apiLogin } = useAuth()

  return (
    <div id="pages-auth-login d-flex align-items-center" className="container">
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

/*  <FormsAuthLogin
            onSubmit={apiLogin}
          /> */
