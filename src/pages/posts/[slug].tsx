import { GetServerSideProps } from "next"
import { getSession } from "next-auth/react"
import { getPrismicClient } from "../../services/prismic"
import { asText , asHTML} from '@prismicio/helpers'
import Head from "next/head"

interface PostProps {
  post:{
    slug: string
    title: string
    content: string
    updatedAt: string

  }
}

export default function Post({post}: PostProps) {

  return (
    <>
    <Head>
    <title>{post.title} | IgNews</title>
    </Head>
    <main className="mx-auto mt-20">
      <article className="text-white  max-w-3xl">
        <h1 className="text-[54px] font-extrabold">{post.title}</h1>
        <time className="mt-6 text-sm text-gray-400">{post.updatedAt}</time> 
        <div className="mt-8 text-md text-gray-100 leading-8"
         dangerouslySetInnerHTML={{__html:post.content}}/>
      </article>
    </main>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const session = await getSession({ req })
  const slug = params?.slug;
  
  
  if(!session?.activeSubscription){
    return{
      redirect:{
        destination:  '/',
        permanent: false 
      }
    }    
  }



  const prismic = getPrismicClient(req)
  const response:any = await prismic.getByUID('post', String(slug),{})

  const post = {
    slug,
    title: asText(response.data.title),
    content : asHTML(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }
  return {
    props: {
      post
    }
  }
}