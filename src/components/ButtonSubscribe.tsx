import { useSession, signIn } from "next-auth/react";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { api } from "../services/api";
import { getStripeJs } from "../services/stripe-js";



interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: ReactNode
  primary?: boolean
  priceId?: string
}

export function ButtonSubscribe(props: ButtonProps) {

  const { data: session } = useSession()



  async function handleSubscribe() {

    if (!session) {
      signIn('github')
      return
    }

    try {
      const response = await api.post('/subscribe')

      const { sessionId } = response.data
      console.log(sessionId);
      
      const stripe = await getStripeJs()
      await stripe?.redirectToCheckout( {sessionId} )

    } catch (error: any) {
      alert(error.message)
      console.log(error);
      console.log('deu ruim');


    }

  }


  return (
    <button className="flex items-center gap-4 bg-yellow-500 rounded-full px-12 py-3 mt-5 text-black font-bold transition-colors hover:brightness-75"

      {...props}
      onClick={() => handleSubscribe()}
    >

      {props.icon}
      {props.title}
    </button>
  )
}