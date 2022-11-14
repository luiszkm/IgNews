import { useSession, signIn } from "next-auth/react";
import { ButtonHTMLAttributes, ReactNode } from "react";



interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: ReactNode
  primary?: boolean
  priceId?: string
}

export function ButtonSubscribe(props: ButtonProps) {

  const { data: session } = useSession()



  function handleSubscribe() {


    if (!session) {
      signIn('github')
      return
    }

    return
  }




  return (
    <button className="flex items-center gap-4 bg-yellow-500 rounded-full px-12 py-3 mt-5 text-black font-bold transition-colors hover:brightness-75"

      {...props}
      onClick={handleSubscribe}>

      {props.icon}
      {props.title}
    </button>
  )
}