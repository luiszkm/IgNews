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
    <main>
      <article className="text-white">
        <h1>{post.title}</h1>
        <time>{post.updatedAt}</time> 
        <div dangerouslySetInnerHTML={{__html:post.content}}/>
      </article>
    </main>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const session = await getSession({ req })
  const slug = params?.slug;
  
  console.log(session);
  
  if(!session?.activeSubscription){
    return{
      redirect:{
        destination: '/',
        permanent: false 
      }
    }    
  }else{
    console.log('deu bom');
    
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