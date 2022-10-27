import type { NextPage } from 'next'
import Head from 'next/head'
import { title } from 'process'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <h1 >
      <Head>
        <title>IgNews</title>
      </Head>
      
      <Header />
      </h1>
  )
}

export default Home
