import '@/styles/globals.scss'
import { ToastContainer } from 'react-toastify'

import { AuthProvider } from '@/contexts/auth'
// import { CardsByDateProvider } from '@/contexts/cardsByDate'
import { MyCardsProvider } from '@/contexts/myCards'
import { MyCardProvider } from '@/contexts/myCard'
import { CardProvider } from '@/contexts/card'

import CompsLayoutsNavbar from '@/layouts/Navbar'
//
function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <CardProvider>

          <MyCardsProvider>
            <MyCardProvider>

              <CompsLayoutsNavbar />
              <Component {...pageProps} />

            </MyCardProvider>
          </MyCardsProvider>

        </CardProvider>
      </AuthProvider>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default MyApp

/* <CardsByDateProvider>    </CardsByDateProvider> */
