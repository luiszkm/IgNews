import { ButtonHTMLAttributes, ReactNode } from "react";
import { signIn, signOut, useSession } from 'next-auth/react'
import { AiOutlineGithub, AiOutlineClose } from "react-icons/ai"



interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  icon?: ReactNode
  primary?: boolean
  priceId?: string
}

export function ButtonSignIn(props: ButtonProps) {
  const { data: session } = useSession()

  console.log(session);


  return session ? (
    <button className={"flex items-center gap-4 bg-gray-400 rounded-xl px-5 py-1 transition-colors hover:brightness-75"}
      {...props}
    >
      <AiOutlineGithub
        className="fill-green-600 hover:fill-cyan-500" size={24} />
      {session.user?.name}

      <button
        onClick={() => signOut()}>
        <AiOutlineClose className="hover:fill-yellow-500" />
      </button>

    </button>
  ) : (
    <button className={"flex items-center gap-4 bg-gray-400 rounded-xl px-5 py-1 transition-colors hover:brightness-75"}
      {...props}
      onClick={() => signIn('github')}
    >
      <AiOutlineGithub
        className="fill-yellow-500 hover:fill-cyan-500" size={24} />
      SignIn with GitHub
    </button>
  )
}