import Head from 'next/head'
import '@/styles/globals.scss'
import { ToastContainer } from 'react-toastify'

import { AuthProvider } from '@/contexts/auth'
import { MyCardsProvider } from '@/contexts/myCards'
import { MyCardProvider } from '@/contexts/myCard'
import { CardProvider } from '@/contexts/card'

import CompsLayoutsNavbar from '@/layouts/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />

      </Head>
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
