import type { AppProps } from 'next/app'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

import '../styles/global.css'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className=' min-h-screen w-full flex flex-col justify-between'>
    <Header />
    <Component {...pageProps} />
    <Footer />
    </div>
  )
}

export default MyApp 
