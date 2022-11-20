import Head from "next/head";



export default function Posts() {

  return (
    <>
      <Head>
        <title> Posts IgNews</title>
      </Head>

      <main className="flex max-w-6xl mx-auto my-0 ">
        <div >
          <a className="flex flex-col py-8 border-b-2 border-gray-400"
           href="">
            <time className="text-gray-400">12 de março de 2021</time>
            <strong className="text-white text-xl transition hover:text-yellow-500 ">Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p className="text-gray-400">In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
          </a>

          
        </div>
      </main>
    </>
  )
}