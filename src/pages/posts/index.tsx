import { GetStaticProps } from "next";
import Head from "next/head";
import { getPrismicClient } from "../../services/prismic";
import Prismic from '@prismicio/client'
import { asText } from '@prismicio/helpers'
import Link from "next/link";

type Post = {
  slug: string
  title: string
  excerpt: string
  updatedAt: string
}
interface PostsProps {
  posts: Post[]
}

export default function Posts({ posts }: PostsProps) {

  return (
    <>
      <Head>
        <title> Posts IgNews</title>
      </Head>

      <main className="flex max-w-6xl mx-auto my-0 ">
        <div >
          {posts.map(post => (
            <Link href={`/posts/${post.slug}`}>
              <a className="flex flex-col py-8 border-b-2 border-gray-400"
                key={post.slug}
              >
                <time className="text-gray-400">{post.updatedAt}</time>
                <strong className="text-white text-xl transition hover:text-yellow-500 ">{post.title}</strong>
                <p className="text-gray-400">{post.excerpt}</p>
              </a>
            </Link>
          ))}



        </div>
      </main>
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()
  const response = await prismic.query<any>([
    Prismic.predicates.at('document.type', 'post')],
    {
      fetch: ['publication.title', 'publication.content'],
      pageSize: 100,
    }
  )
  const posts  = response.results.map(post => {
    return {
      slug: post.uid,
      title: asText(post.data.title),
      excerpt: post.data.content.find((content: { type: string; }) => content.type === 'paragraph')?.text ?? '',
      updatedAt: new Date(post.last_publication_date || '').toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })
  return {
    props: {
      posts
    }
  }
}