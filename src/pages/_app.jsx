import '@/styles/globals.scss'
import { ToastContainer } from 'react-toastify'

import { AuthProvider } from '@/contexts/auth'
import { MyCardsProvider } from '@/contexts/myCards'

import CompsLayoutsNavbar from '@/layouts/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <MyCardsProvider>
          <CompsLayoutsNavbar />
          <Component {...pageProps} />
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
