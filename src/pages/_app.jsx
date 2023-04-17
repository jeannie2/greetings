import '@/styles/globals.scss'
import { ToastContainer } from 'react-toastify'

import { AuthProvider } from '@/contexts/auth'
import { MyCardsProvider } from '@/contexts/myCards'
import { MyCardProvider } from '@/contexts/myCard'
import { CardProvider } from '@/contexts/card'

import CompsLayoutsNavbar from '@/layouts/Navbar'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Averia+Sans+Libre:ital@1&display=swap" rel="stylesheet" />
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
