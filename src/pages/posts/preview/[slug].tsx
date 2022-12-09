/* eslint-disable react-hooks/exhaustive-deps */
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next"
import { getSession, useSession } from "next-auth/react"
import { getPrismicClient } from "../../../services/prismic"
import { asText, asHTML } from '@prismicio/helpers'
import Head from "next/head"
import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/router"

interface PostPreviewProps {
  post: {
    slug: string
    title: string
    content: string
    updatedAt: string

  }
}

export default function PostPreview({ post }: PostPreviewProps) {
const {data: session}= useSession()
const router = useRouter()

useEffect(()=>{
      if(session?.activeSubscription){
        router.push(`/posts/${post.slug}`)

      }
},[session])
  return (
    <>
      <Head>
        <title>{post.title} | IgNews</title>
      </Head>
      <main className="mx-auto mt-20">
        <article className="text-white  max-w-3xl">
          <h1 className="text-[54px] font-extrabold">{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div className="bg-gradient-to-b from-gray-900 to-transparent    "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div>
            Wanna continue reading
            <Link href={''}>
            <a href="">Subscribe now!🤗</a>
            </Link>
          </div>
        </article>
      </main>
    </>
  )
}



export const getStaticPaths: GetStaticPaths = async () => {

  return {
    paths: [
      {params:{slug: ''}}
    ],
    fallback: 'blocking'
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;

  const prismic = getPrismicClient()

  const response: any = await prismic.getByUID('post', String(slug), {})

  const post = {
    slug,
    title: asText(response.data.title),
    content: asHTML(response.data.content.splice(0, 3)),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }
  return {
    props: {
      post
    },
    redirect: 60 * 60,
  }
}