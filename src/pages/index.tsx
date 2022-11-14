import type { NextPage } from 'next'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { ButtonSubscribe } from '../components/ButtonSubscribe'
import { stripe } from '../services/stripe'


interface HomeProps {
  product: {
    priceId: string,
    priceAmount: number,
  }
}

export default function Home({ product }: HomeProps) {


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
              <span className='text-cyan-500 font-bold'>for {product.priceAmount} month.</span>
            </p>

            <ButtonSubscribe
              title='Subscribe now'
              priceId={product.priceId}
            />

          </section>
          <img src="/images/avatar.svg" alt="foto de uma mulher com um notebook" />

        </div>
      </main>

    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1LxgmCLM8GFvSaHhwfHCrkFK', {
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    priceAmount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',

    }).format(Number(price.unit_amount) / 100)

  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}
