import '@/styles/globals.scss'
import { ToastContainer } from 'react-toastify'

import { AuthProvider } from '@/contexts/auth'
import { MyCardsProvider } from '@/contexts/myCards'
import { MyCardProvider } from '@/contexts/myCard'

import CompsLayoutsNavbar from '@/layouts/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <MyCardsProvider>
          <MyCardProvider>
            <CompsLayoutsNavbar />
            <Component {...pageProps} />
          </MyCardProvider>
        </MyCardsProvider>
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
