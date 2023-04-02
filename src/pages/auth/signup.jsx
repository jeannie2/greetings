import React from 'react'

import FormsAuthSignup from '@/components/forms/auth/Signup'

function PagesAuthSignup() {
  return (
    <div id="pages-auth-signup" className="container">
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <h1 className="text-center">Sign up</h1>

          <FormsAuthSignup />
        </div>
      </div>
    </div>
  )
}

export default PagesAuthSignup

/*  <FormsAuthSignup
            onSubmit={apiSignup}
          /> */
