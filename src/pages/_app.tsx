import type { AppProps } from 'next/app'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { SessionProvider } from "next-auth/react"

import '../styles/global.css'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className=' min-h-screen w-full flex flex-col justify-between'>
      <SessionProvider session={pageProps.session} >
        <Header />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>

    </div>
  )
}

export default MyApp 
