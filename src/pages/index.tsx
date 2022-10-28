import type { NextPage } from 'next'
import Head from 'next/head'
import { title } from 'process'
import { Button } from '../components/Button'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>IgNews</title>
      </Head>

      <main className='flex items-center justify-center'>

        <div className='flex flex-col items-center gap-14 mt-4 md:flex-row w-full justify-between max-w-screen-lg'>

        <section className='text-white px-5 py-5'>
          <span>Hey, Welcome</span>
          <h1 className='text-2xl font-black '>News about the <span className='text-cyan-500 '>React</span> world.</h1>

          <p className='text-md'>
            Get access to all the publications <br />
            <span className='text-cyan-500 font-bold'>for $9.99 month.</span>
          </p>

          <Button primary
          title='Subscribe now'/>

        </section>
        <img src="/images/avatar.svg" alt="foto de uma mulher com um notebook" />

        </div>
      </main>
  
      </>
  )
}

export default Home
